sst.linkable(
  aws.secretsmanager.Secret,
  function (resource: aws.secretsmanager.Secret) {
    return {
      properties: {
        id: resource.id,
        arn: resource.arn,
      },
    };
  },
);

sst.aws.linkable(aws.secretsmanager.Secret, function (secret) {
  return [{ actions: ["secretsmanager:*"], resources: [secret.arn] }];
});

export const secret = {
  ApiKey: new sst.Secret("ApiKey"),
  Twitch: {
    ClientId: new sst.Secret("TwitchClientId", process.env.TWITCH_CLIENT_ID),
    ClientSecret: new sst.Secret(
      "TwitchClientSecret",
      process.env.TWITCH_CLIENT_SECRET,
    ),
    UserId: new sst.Secret("TwitchUserId", process.env.TWITCH_USER_ID),
    Tokens: new aws.secretsmanager.Secret("TwitchTokens", {
      name: "twitch-tokens-secret",
    }),
  },
  Twitter: {
    ApiKey: new sst.Secret("TwitterApiKey", process.env.TWITTER_API_KEY),
    ApiKeySecret: new sst.Secret(
      "TwitterApiKeySecret",
      process.env.TWITTER_API_KEY_SECRET,
    ),
    BearerToken: new sst.Secret(
      "TwitterBearerToken",
      process.env.TWITTER_BEARER_TOKEN,
    ),
  },
};
