import {
  IoTDataPlaneClient,
  PublishCommand,
} from "@aws-sdk/client-iot-data-plane";
import { Resource } from "sst";

const realtimeClient = new IoTDataPlaneClient();

export module Notifications {
  export const Topic = `${Resource.App.name}/${Resource.App.stage}/notifs`;

  export async function send(event: unknown) {
    await realtimeClient.send(
      new PublishCommand({
        payload: Buffer.from(JSON.stringify(event)),
        topic: Notifications.Topic,
      }),
    );
  }
}
