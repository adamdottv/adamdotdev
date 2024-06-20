import type { NextApiRequest } from "next"
import { CustomNextApiResponse } from "../../lib"
// import { goToPose } from "../../lib/edelkrone"
import { Scene } from "../../lib/obs"
import { delay } from "../../lib/utils"

interface Request {
  to?: Scene
}

export default async function handler(
  req: NextApiRequest,
  res: CustomNextApiResponse
) {
  const { to } = (req.body ?? {}) as Request
  console.log(`Transitioning to ${to}`)

  try {
    // await goToPose(1)
    // await delay(15000)
    res.server.ws.emit("fade-audio-out", {})
    await delay(3000)
    await res.server.obs.transition(to ?? "Camera")
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }

  res.status(200).end()
}
