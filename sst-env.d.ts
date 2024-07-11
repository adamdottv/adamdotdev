/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    Api: {
      name: string
      type: "sst.aws.Function"
      url: string
    }
    ApiKey: {
      type: "sst.sst.Secret"
      value: string
    }
    ApiRouter: {
      type: "sst.aws.Router"
      url: string
    }
    Bus: {
      arn: string
      name: string
      type: "sst.aws.Bus"
    }
    Database: {
      clusterArn: string
      database: string
      secretArn: string
      type: "sst.aws.Postgres"
    }
    ObsPassword: {
      type: "sst.sst.Secret"
      value: string
    }
    ObsWebsocket: {
      type: "sst.sst.Resource"
      url: string
    }
    Realtime: {
      authorizer: string
      endpoint: string
      type: "sst.aws.Realtime"
    }
    Service: {
      type: "sst.aws.Service"
      url: string
    }
    SpotifyAccessToken: {
      arn: string
      id: string
      type: "aws.secretsmanager/secret.Secret"
    }
    SpotifyClientId: {
      type: "sst.sst.Secret"
      value: string
    }
    SpotifyClientSecret: {
      type: "sst.sst.Secret"
      value: string
    }
    SpotifyRefreshToken: {
      type: "sst.sst.Secret"
      value: string
    }
    StaticIpAddress: {
      type: "sst.sst.Secret"
      value: string
    }
    TerminalStripeSecret: {
      type: "sst.sst.Secret"
      value: string
    }
    TerminalStripeWebhook: {
      id: string
      secret: string
      type: "stripe.index/webhookEndpoint.WebhookEndpoint"
    }
    TwitchClientId: {
      type: "sst.sst.Secret"
      value: string
    }
    TwitchClientSecret: {
      type: "sst.sst.Secret"
      value: string
    }
    TwitchTokens: {
      arn: string
      id: string
      type: "aws.secretsmanager/secret.Secret"
    }
    TwitchUserId: {
      type: "sst.sst.Secret"
      value: string
    }
    WebApp: {
      type: "sst.aws.Nextjs"
      url: string
    }
  }
}
export {}