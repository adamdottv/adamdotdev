import type { NextApiRequest } from "next"
import { CustomNextApiResponse } from "../../../lib"

export default async function handler(
  _req: NextApiRequest,
  res: CustomNextApiResponse
) {
  try {
    const stream = await res.server.twitch.getStreamMetadata()
    res.status(200).json({ stream })
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }
}
