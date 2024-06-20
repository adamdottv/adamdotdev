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
};
