import { iot, mqtt } from "aws-iot-device-sdk-v2";
import React from "react";

export interface useTopicProps {
  topic: string;
  endpoint: string;
  authorizer: string;
}

function createConnection(endpoint: string, authorizer: string) {
  const client = new mqtt.MqttClient();
  const id = window.crypto.randomUUID();

  return client.new_connection(
    iot.AwsIotMqttConnectionConfigBuilder.new_with_websockets()
      .with_clean_session(true)
      .with_client_id(`client_${id}`)
      .with_endpoint(endpoint)
      .with_custom_authorizer("", authorizer, "", "PLACEHOLDER_TOKEN")
      .build(),
  );
}

export const useTopic = <T>(
  options: useTopicProps,
  onMessage: (message: T) => void,
) =>
  React.useEffect(() => {
    const connection = createConnection(options.endpoint, options.authorizer);
    connection.on("connect", async () => {
      try {
        await connection.subscribe(options.topic, mqtt.QoS.AtLeastOnce);
      } catch (e) {
        console.error(e);
      }
    });
    connection.on("message", (_fullTopic, payload) => {
      const raw = new TextDecoder("utf8").decode(new Uint8Array(payload));
      const message = JSON.parse(raw) as T;
      onMessage(message);
    });
    connection.on("error", console.error);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [options.topic, options.endpoint, options.authorizer]);
