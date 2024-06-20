import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useEffect, useRef } from "react"
import { useEvent, useSocket } from "../hooks"
import {
  AudioSpectrum,
  Overlay,
  Grid,
  BrandMark,
  Carousel,
  Ticket,
} from "../components"
import { fadeAudioOut } from "../lib/audio"
import React from "react"
import { delay, request } from "../lib/utils"
import { CustomNextApiResponse } from "../lib"
import { getStreamInfo, GetStreamResponse } from "../lib/stream"
import { TerminalBanner } from "../components/elements/terminal"
import { TomorrowBanner } from "../components/elements/tomorrow"
import { ProawsBanner } from "../components/elements/proaws"

export interface OutroSsrProps {
  stream: GetStreamResponse
  debug: boolean
}

export const getServerSideProps: GetServerSideProps<OutroSsrProps> = async (
  context
) => {
  const rawStream = await getStreamInfo(context.res as CustomNextApiResponse)
  const stream = JSON.parse(JSON.stringify(rawStream))

  return {
    props: {
      stream,
      debug: context.query.debug === "true",
    },
  }
}

function Outro({
  stream,
  debug,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const { socket } = useSocket()
  useEvent(socket, "fade-audio-out", async () => {
    if (!audioRef.current) return

    await fadeAudioOut({ audio: audioRef.current })
  })

  useEffect(() => {
    const timeoutHandle = setTimeout(() => {
      audioRef.current?.play()
      if (!debug && stream.current?.active)
        request("/api/twitch/raid", { method: "POST" })
    }, 2000)

    return () => clearTimeout(timeoutHandle)
  }, [debug, stream])

  const handleAudioOnEnd = async () => {
    await delay(2000)
    await request("/api/obs/stop-stream", { method: "POST" })
  }

  return (
    <Overlay>
      <audio
        ref={audioRef}
        id="audio-element"
        src="/media/theme.wav"
        onEnded={handleAudioOnEnd}
      />
      <Grid
        topLeft={<BrandMark />}
        topCenter={
          <div className="flex h-full items-center text-mauve-12">
            Streaming again soon, check the schedule for full details
          </div>
        }
        centerLeft={
          <div className="mt-[26px] text-right text-5xl font-light text-mauve-11">
            Soon
          </div>
        }
        center={
          <div className="mt-[26px]">
            <div className="text-5xl font-light text-mauve-12">
              {stream?.next?.title}
            </div>
            {stream?.next && (
              <div className="mt-6 text-4xl font-light text-mauve-11">
                {stream.next.scheduledStart}
                {stream.next.scheduledStart && <span> CT</span>}
              </div>
            )}
          </div>
        }
        bottomCenter={
          <Carousel interval={1 / 4}>
            <AudioSpectrum audioRef={audioRef} />
            <TerminalBanner />
            <TomorrowBanner />
            <ProawsBanner />
          </Carousel>
        }
      />
    </Overlay>
  )
}

export default Outro
