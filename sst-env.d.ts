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
    Realtime: {
      authorizer: string
      endpoint: string
      type: "sst.aws.Realtime"
    }
    TwitchClientId: {
      type: "sst.sst.Secret"
      value: string
    }
    TwitchClientSecret: {
      type: "sst.sst.Secret"
      value: string
    }
    TwitchListener: {
      type: "sst.aws.Service"
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
    TwitterApiKey: {
      type: "sst.sst.Secret"
      value: string
    }
    TwitterApiKeySecret: {
      type: "sst.sst.Secret"
      value: string
    }
    TwitterBearerToken: {
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