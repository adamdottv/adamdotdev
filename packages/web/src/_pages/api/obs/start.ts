import type { NextApiRequest } from "next"
import { CustomNextApiResponse } from "../../../lib"
import open from "open"

export default async function handler(
  _req: NextApiRequest,
  res: CustomNextApiResponse
) {
  try {
    const connected = res.server.obs.connected
    if (!connected)
      await open("./scripts/start.sh", {
        app: { name: "Ghostty" },
      })
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }

  res.status(200).end()
}
