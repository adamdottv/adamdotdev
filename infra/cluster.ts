// import { database } from "./database";
import { domain, zone } from "./dns";
import { bus } from "./bus";
import { secret } from "./secret";
import { table } from "./table";

export const vpc = new sst.aws.Vpc("VpcV2");
export const cluster = new sst.aws.Cluster("Cluster", {
  vpc,
  forceUpgrade: "v2",
});

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

// export const service = cluster.addService("Service", {
//   public: { ports: [{ listen: "80/http" }] },
//   image: { dockerfile: "packages/service/Dockerfile" },
//   link: [
//     // database,
//     table,
//     secret.ApiKey,
//     secret.ObsPassword,
//     ...Object.values(secret.Twitch),
//     ...Object.values(secret.Spotify),
//     bus,
//     obsWebsocket,
//   ],
//   permissions: [
//     { actions: ["events:*"], resources: ["*"] },
//     { actions: ["secretsmanager:*"], resources: ["*"] },
//   ],
// });
