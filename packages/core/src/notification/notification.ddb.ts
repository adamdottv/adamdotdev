import { Entity } from "electrodb";
import { table } from "../dynamo";
const { client, service, name } = table;

export const notificationEntity = new Entity(
  {
    model: {
      entity: "notification",
      version: "1",
      service,
    },
    attributes: {
      id: {
        type: "string",
        required: true,
      },
      title: {
        type: "string",
        required: true,
      },
      body: {
        type: "string",
        required: true,
      },
      note: {
        type: "string",
      },
      color: {
        type: "string",
      },
      sound: {
        type: ["nope", "tada1", "tada2", "tada3", "tada4", "tada5"] as const,
      },
      count: {
        type: "number",
      },
      countLabel: {
        type: "string",
      },
      externalID: {
        type: "string",
      },
      created: {
        type: "number",
        readOnly: true,
        required: true,
        default: () => Date.now(),
        set: () => Date.now(),
      },
      updated: {
        type: "number",
        watch: "*",
        required: true,
        default: () => Date.now(),
        set: () => Date.now(),
      },
    },
    indexes: {
      notification: {
        pk: {
          field: "pk",
          composite: ["id"],
        },
        sk: {
          field: "sk",
          composite: ["id"],
        },
      },
    },
  },
  { table: name, client },
);
