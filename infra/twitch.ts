import { bus } from "./events";
import { secret } from "./secret";

const vpc = new sst.aws.Vpc("Vpc");

// TODO: hack until dax fixes sst
const user = new aws.iam.User("User", { name: "twitch-listener" });
const accessKey = new aws.iam.AccessKey("AccessKey", { user: user.name });
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
  name: "test",
  user: user.name,
  policy: policy.then((policy) => policy.json),
});

export const cluster = new sst.aws.Cluster("Cluster", { vpc });
cluster.addService("TwitchListener", {
  image: { dockerfile: "packages/twitch/Dockerfile" },
  link: [
    secret.Twitch.ClientId,
    secret.Twitch.ClientSecret,
    secret.Twitch.UserId,
    secret.Twitch.Tokens,
    secret.Twitter.BearerToken,
    bus,
  ],
  environment: {
    AWS_ACCESS_KEY_ID: accessKey.id,
    AWS_SECRET_ACCESS_KEY: accessKey.secret,
    SST_RESOURCE_App: JSON.stringify({ name: $app.name, stage: $app.stage }),
    AWS_REGION: "us-east-1",
  },
});
