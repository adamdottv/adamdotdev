import { database } from "./database";
import { domain, zone } from "./dns";
import { bus } from "./events";
import { secret } from "./secret";

export const vpc = new sst.aws.Vpc("Vpc");
export const cluster = new sst.aws.Cluster("Cluster", { vpc });

const obsDomain = `obs.${domain}`;
export const obsARecord = new aws.route53.Record("ObsARecord", {
  zoneId: zone.then((zone) => zone.zoneId),
  name: obsDomain,
  type: aws.route53.RecordType.A,
  ttl: 300,
  records: $resolve([secret.StaticIpAddress.value]).apply((records) => records),
});
const obsWebsocket = new sst.Resource("ObsWebsocket", {
  url: `ws://${obsDomain}:4455`,
});

// TODO: hack until dax fixes sst
const user = new aws.iam.User("User");
export const accessKey = new aws.iam.AccessKey("AccessKey", {
  user: user.name,
});
const policy = aws.iam.getPolicyDocument({
  statements: [
    {
      effect: "Allow",
      actions: ["events:*"],
      resources: ["*"],
    },
    {
      effect: "Allow",
      actions: ["secretsmanager:*"],
      resources: ["*"],
    },
  ],
});
new aws.iam.UserPolicy("UserPolicy", {
  user: user.name,
  policy: policy.then((policy) => policy.json),
});

export const service = cluster.addService("Service", {
  public: { ports: [{ listen: "80/http" }] },
  image: { dockerfile: "packages/service/Dockerfile" },
  link: [
    database,
    secret.ApiKey,
    ...Object.values(secret.Twitch),
    ...Object.values(secret.Spotify),
    secret.ObsPassword,
    bus,
    obsWebsocket,
  ],
  permissions: [{ actions: ["events:*"], resources: ["*"] }],
  // environment: {
  //   AWS_ACCESS_KEY_ID: accessKey.id,
  //   AWS_SECRET_ACCESS_KEY: accessKey.secret,
  // },
});
