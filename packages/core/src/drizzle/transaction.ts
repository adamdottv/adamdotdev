import { PgTransactionConfig, PgTransaction } from "drizzle-orm/pg-core";
import type {
  AwsDataApiPgQueryResult,
  AwsDataApiPgQueryResultHKT,
} from "drizzle-orm/aws-data-api/pg";
import { ExtractTablesWithRelations } from "drizzle-orm";
import { Context } from "../context";
import { db } from ".";

export type Transaction = PgTransaction<
  AwsDataApiPgQueryResultHKT,
  Record<string, never>,
  ExtractTablesWithRelations<Record<string, never>>
>;
export type TxOrDb = Transaction | typeof db;

export const getRowCount = (result: AwsDataApiPgQueryResult<any>) => {
  return "rowCount" in result ? result.rowCount : result.numberOfRecordsUpdated;
};

const TransactionContext = Context.create<{
  tx: TxOrDb;
  effects: (() => void | Promise<void>)[];
}>("TransactionContext");

export async function useTransaction<T>(callback: (trx: TxOrDb) => Promise<T>) {
  try {
    const { tx } = TransactionContext.use();
    return callback(tx);
  } catch {
    return callback(db);
  }
}

export async function afterTx(effect: () => any | Promise<any>) {
  try {
    const { effects } = TransactionContext.use();
    effects.push(effect);
  } catch {
    await effect();
  }
}

export async function createTransaction<T>(
  callback: (tx: TxOrDb) => Promise<T>,
  isolationLevel?: PgTransactionConfig["isolationLevel"],
) {
  try {
    const { tx } = TransactionContext.use();
    return callback(tx);
  } catch {
    const effects: (() => void | Promise<void>)[] = [];
    const result = await db.transaction(
      async (tx) => {
        return TransactionContext.with({ tx, effects }, () => callback(tx));
      },
      {
        isolationLevel: isolationLevel || "serializable",
      },
    );
    await Promise.all(effects.map((x) => x()));
    return result;
  }
}
