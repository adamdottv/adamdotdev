import type { NextApiRequest } from "next"
import { CustomNextApiResponse } from "../../../lib"

export default async function handler(
  _req: NextApiRequest,
  res: CustomNextApiResponse
) {
  try {
    const connected = res.server.obs.connected
    const streaming = res.server.obs.streaming
    const recording = res.server.obs.recording
    res.status(200).json({ connected, streaming, recording })
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }
}
