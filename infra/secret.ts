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
  StaticIpAddress: new sst.Secret("StaticIpAddress"),
  ApiKey: new sst.Secret("ApiKey"),
  ObsPassword: new sst.Secret("ObsPassword"),
  TerminalStripeSecret: new sst.Secret(
    "TerminalStripeSecret",
    process.env.STRIPE_API_KEY,
  ),
  Twitch: {
    ClientId: new sst.Secret("TwitchClientId", process.env.TWITCH_CLIENT_ID),
    ClientSecret: new sst.Secret(
      "TwitchClientSecret",
      process.env.TWITCH_CLIENT_SECRET,
    ),
    UserId: new sst.Secret("TwitchUserId", process.env.TWITCH_USER_ID),
    Tokens: new aws.secretsmanager.Secret("TwitchTokens"),
  },
  Spotify: {
    ClientId: new sst.Secret("SpotifyClientId", process.env.SPOTIFY_CLIENT_ID),
    ClientSecret: new sst.Secret(
      "SpotifyClientSecret",
      process.env.SPOTIFY_CLIENT_SECRET,
    ),
    RefreshToken: new sst.Secret(
      "SpotifyRefreshToken",
      process.env.SPOTIFY_REFRESH_TOKEN,
    ),
    AccessToken: new aws.secretsmanager.Secret("SpotifyAccessToken"),
  },
};
