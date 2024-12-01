import React from "react";
import mqtt from "mqtt";

const endpoint = process.env.NEXT_PUBLIC_REALTIME_ENDPOINT as string;
const authorizer = process.env.NEXT_PUBLIC_REALTIME_AUTHORIZER as string;
const topic = process.env.NEXT_PUBLIC_REALTIME_TOPIC as string;

function createConnection(endpoint: string, authorizer: string) {
  return mqtt.connect(
    `wss://${endpoint}/mqtt?x-amz-customauthorizer-name=${authorizer}`,
    {
      protocolVersion: 5,
      manualConnect: true,
      username: "", // Must be empty for the authorizer
      password: "PLACEHOLDER_TOKEN", // Passed as the token to the authorizer
      clientId: `client_${window.crypto.randomUUID()}`,
    },
  );
}

const subscribers: Map<string, { connection: mqtt.MqttClient }> = new Map();
export const useTopic = <T>(key: string, onMessage: (message: T) => void) => {
  React.useEffect(() => {
    if (subscribers.has(key)) return;

    const connection = createConnection(endpoint, authorizer);

    connection.on("connect", async () => {
      if (subscribers.has(key)) return;
      subscribers.set(key, { connection });

      try {
        await connection.subscribeAsync(topic, { qos: 1 });
      } catch (e) {}
    });

    connection.on("message", (_fullTopic, payload) => {
      const raw = new TextDecoder("utf8").decode(new Uint8Array(payload));
      const message = JSON.parse(raw) as T;
      onMessage(message);
    });
    connection.on("error", console.error);
    connection.connect();

    return () => {
      if (subscribers.has(key)) {
        const { connection } = subscribers.get(key)!;
        connection.unsubscribe(topic);
        connection.end();
        subscribers.delete(key);
      }
    };
  }, [key]);
};
