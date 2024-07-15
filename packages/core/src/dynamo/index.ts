import { AttributeValue, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Resource } from "sst";
import type { DynamoDBStreamHandler, DynamoDBRecord } from "aws-lambda";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { Entity, EntityRecord } from "electrodb";

export module table {
  export const name = Resource.Table.name;
  export const client = new DynamoDBClient();
  export const service = "adamdotdev";

  export function subscriber<T extends Entity<any, any, any, any>>(
    entity: T,
    cb: (input: EntityRecord<T>, raw: DynamoDBRecord) => Promise<void>,
  ): DynamoDBStreamHandler {
    return async function (event) {
      const parsed = event.Records.filter((r) => !!r.dynamodb?.NewImage)
        .map((raw) => {
          const image = raw.dynamodb!.NewImage! as {
            [key: string]: AttributeValue;
          };
          return { parsed: unmarshall(image), raw };
        })
        .map(({ parsed, raw }) => ({
          parsed: entity.parse({ Item: parsed }),
          raw,
        }))
        .filter((item) => !!item.parsed.data);
      await Promise.all(
        parsed.map(({ parsed, raw }) =>
          cb(parsed.data as EntityRecord<T>, raw),
        ),
      );
    };
  }
}
