// sst.Linkable.wrap(aws.secretsmanager.Secret, (secret) => ({
//   properties: {
//     id: secret.id,
//     arn: secret.arn,
//   },
//   with: [
//     sst.aws.permission({
//       actions: ["secretsmanager:*"],
//       resources: [secret.arn],
//     }),
//   ],
// }));

export const secret = {
  StaticIpAddress: new sst.Secret("StaticIpAddress"),
  ApiKey: new sst.Secret("ApiKey"),
  ObsPassword: new sst.Secret("ObsPassword"),
  TerminalStripeSecret: new sst.Secret(
    "TerminalStripeSecret",
    process.env.STRIPE_API_KEY,
  ),
  Twitch: {
    ClientId: new sst.Secret("TwitchClientId"),
    ClientSecret: new sst.Secret("TwitchClientSecret"),
    UserId: new sst.Secret("TwitchUserId"),
    Tokens: new aws.secretsmanager.Secret("TwitchTokens"),
  },
  Spotify: {
    ClientId: new sst.Secret("SpotifyClientId"),
    ClientSecret: new sst.Secret("SpotifyClientSecret"),
    RefreshToken: new sst.Secret("SpotifyRefreshToken"),
    AccessToken: new aws.secretsmanager.Secret("SpotifyAccessToken"),
  },
};
