import { iot, mqtt } from "aws-iot-device-sdk-v2";
import React from "react";

const connections: Map<string, mqtt.MqttClientConnection> = new Map();
async function createConnection(endpoint: string, authorizer: string) {
  const key = `${endpoint}.${authorizer}`;
  if (connections.has(key)) return connections.get(key)!;

  return new Promise<mqtt.MqttClientConnection>((resolve, reject) => {
    const client = new mqtt.MqttClient();
    const id = window.crypto.randomUUID();
    const connection = client.new_connection(
      iot.AwsIotMqttConnectionConfigBuilder.new_with_websockets()
        .with_clean_session(true)
        .with_client_id(`client_${id}`)
        .with_endpoint(endpoint)
        .with_keep_alive_seconds(30)
        .with_custom_authorizer("", authorizer, "", "PLACEHOLDER_TOKEN")
        .build(),
    );
    connection.on("error", (error) => {
      console.error(error);
      reject(error);
    });
    connection.on("connect", (_sessionPresent) => {
      connections.set(key, connection);
      resolve(connection);
    });
    connection.connect();
  });
}

const subscribers: Map<string, unknown> = new Map();
export const useTopic = <T>(
  topic: string,
  key: string,
  onMessage: (message: T) => void,
) => {
  const endpoint = process.env.NEXT_PUBLIC_REALTIME_ENDPOINT as string;
  const authorizer = process.env.NEXT_PUBLIC_REALTIME_AUTHORIZER as string;

  React.useEffect(() => {
    createConnection(endpoint, authorizer).then((conn) => {
      if (subscribers.has(key)) return;
      subscribers.set(key, null);

      conn.subscribe(topic, mqtt.QoS.AtLeastOnce, (_topic, payload) => {
        const raw = new TextDecoder("utf8").decode(new Uint8Array(payload));
        const message = JSON.parse(raw) as T;
        onMessage(message);
      });
    });
    return () => {
      // connection.unsubscribe(options.topic);
    };
  }, [key, topic, endpoint, authorizer]);
};
