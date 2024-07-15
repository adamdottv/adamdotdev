import { Entity } from "electrodb";
import { table } from "../dynamo";
const { client, service, name } = table;

export const spotifyEntity = new Entity(
  {
    model: {
      entity: "spotify",
      version: "1",
      service,
    },
    attributes: {
      user: {
        type: "string",
      },
      playing: {
        type: "boolean",
        default: () => false,
      },
      shuffle: {
        type: "boolean",
      },
      repeat: {
        type: "string",
      },
      title: {
        type: "string",
      },
      artist: {
        type: "string",
      },
      artwork: {
        type: "string",
      },
      progress: {
        type: "number",
      },
      volume: {
        type: "number",
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
      spotify: {
        pk: {
          field: "pk",
          composite: ["user"],
        },
        sk: {
          field: "sk",
          composite: ["user"],
        },
      },
    },
  },
  { table: name, client },
);
