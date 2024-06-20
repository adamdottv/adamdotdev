import { Resource } from "sst";
import { type AuthProvider, RefreshingAuthProvider } from "@twurple/auth";
import {
  SecretsManagerClient,
  GetSecretValueCommand,
  PutSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

export default class TwitchAuthProvider {
  private static instance: AuthProvider;
  private static lock: Promise<void> | null = null;
  private constructor() {}

  public static async getInstance(): Promise<AuthProvider> {
    if (TwitchAuthProvider.lock) {
      // wait for the lock to be released if it exists
      await TwitchAuthProvider.lock;
    }

    if (!TwitchAuthProvider.instance) {
      TwitchAuthProvider.lock = new Promise<void>(async (resolve) => {
        TwitchAuthProvider.instance = await create();
        TwitchAuthProvider.lock = null;
        resolve();
      });

      await TwitchAuthProvider.lock;
    }

    return TwitchAuthProvider.instance;
  }
}

const create = async () => {
  const client = new SecretsManagerClient();

  const secretId = Resource.TwitchTokens.arn;
  const clientId = Resource.TwitchClientId.value;
  const clientSecret = Resource.TwitchClientSecret.value;
  const userId = Resource.TwitchUserId.value;

  const response = await client.send(
    new GetSecretValueCommand({ SecretId: secretId }),
  );
  if (!response.SecretString) throw new Error("No secret found: " + secretId);
  const tokenData = JSON.parse(response.SecretString);
  const provider = new RefreshingAuthProvider({ clientId, clientSecret });

  provider.onRefresh((_userId, newTokenData) =>
    client
      .send(
        new PutSecretValueCommand({
          SecretId: secretId,
          SecretString: JSON.stringify(newTokenData),
        }),
      )
      .then((r) =>
        console.log(`Updated token stored in secrets manager: ${r.Name}`),
      ),
  );

  provider.addUser(userId, tokenData, ["chat"]);
  return provider;
};
