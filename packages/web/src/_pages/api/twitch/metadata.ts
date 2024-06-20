import type { NextApiRequest } from "next"
import { CustomNextApiResponse } from "../../../lib"

export default async function handler(
  req: NextApiRequest,
  res: CustomNextApiResponse
) {
  try {
    await res.server.twitch.updateStreamMetadata(req.body)
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }

  res.status(200).end()
}
