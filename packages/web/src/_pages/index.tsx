/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import Head from "next/head"
import React, { useEffect, useState } from "react"
import { useEvent, useSocket } from "../hooks"
import type { TwitchChatEvent } from "../lib/twitch"
import { useRouter } from "next/router"
import {
  Carousel,
  DefaultFooter,
  HighlightedMessageFooter,
  TicketFooter,
} from "../components"
import { Scene } from "../lib/obs"
import { request } from "../lib/utils"
import { TerminalFooter } from "../components/elements/terminal"
import { TomorrowFooter } from "../components/elements/tomorrow"
import { ProawsFooter } from "../components/elements/proaws"

const Home: NextPage = () => {
  const [scene, setScene] = useState<Scene>()
  const [winner, setWinner] = React.useState<string | undefined>()
  const router = useRouter()
  const [topic, setTopic] = useState<string>()
  const [highlightedMessage, setHighlightedMessage] = useState<string>("")

  const handleTwitchChatEvent = React.useCallback(
    (event: TwitchChatEvent) => {
      console.log(event)
      const isAdmin = event.moderator || event.broadcaster
      if (isAdmin && event.message.startsWith("!topic")) {
        setTopic(event.message.split("!topic")[1].trim())
      }

      if (event.highlight) {
        setHighlightedMessage(`${event.user}: ${event.message}`)
        setTimeout(() => setHighlightedMessage(""), 10 * 1000)
      }
    },
    [setHighlightedMessage, setTopic]
  )

  const { socket } = useSocket()
  useEvent<TwitchChatEvent>(socket, "twitch-chat-event", handleTwitchChatEvent)

  useEffect(() => {
    const timer = setInterval(() => {
      request(`/api/ping?id=${router.query.id}`, {
        method: "post",
      })
    }, 1000 * 10)
    return () => clearInterval(timer)
  }, [router.query.id])

  useEvent<{ winner: string }>(
    socket,
    "giveaway-winner-selected",
    ({ winner }) => {
      console.log(winner)
      setWinner(winner)
    }
  )

  useEvent<Scene>(socket, "scene-change", setScene)

  useEffect(() => {
    if (winner) {
      const timeoutHandle = setTimeout(() => {
        setWinner(undefined)
      }, 1 * 60 * 1000)
      return () => clearTimeout(timeoutHandle)
    }
  }, [winner])

  return (
    <div className="origin-top-left scale-[200%] transform">
      <div className="relative flex h-[1080px] w-[1920px] flex-col space-y-10">
        <Head>
          <title>Adam&apos;s Twitch Overlay</title>
          <meta name="description" content="Where the magic happens, ykwim?" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* {scene !== "Camera (w/ Guest)" ? ( */}
        {/*   <iframe */}
        {/*     src="https://nightdev.com/hosted/obschat?theme=dark&channel=adamdotdev&fade=false&bot_activity=false&prevent_clipping=false" */}
        {/*     className={`absolute inset-y-0 -top-3 -right-2 origin-top-right scale-150 transform ${ */}
        {/*       scene === "Screen" && "invisible" */}
        {/*     }`} */}
        {/*     width={400} */}
        {/*     height={685} */}
        {/*   /> */}
        {/* ) : null} */}
        {/**/}
        {/* {scene !== "Camera (w/ Guest)" ? ( */}
        {/*   <iframe */}
        {/*     src="https://nightdev.com/hosted/obschat?theme=dark&channel=adamdotdev&fade=false&bot_activity=false&prevent_clipping=false" */}
        {/*     className={`absolute bottom-[73px] -left-2 origin-bottom-left scale-150 transform ${ */}
        {/*       scene !== "Screen" && "invisible" */}
        {/*     }`} */}
        {/*     width={390} */}
        {/*     height={250} */}
        {/*   /> */}
        {/* ) : null} */}

        <div className="absolute inset-x-0 bottom-0 h-20 bg-mauve-1">
          {highlightedMessage ? (
            <HighlightedMessageFooter message={highlightedMessage} />
          ) : (
            <Carousel interval={2} prioritizeFirst>
              <DefaultFooter socket={socket} topic={topic} />
              <TomorrowFooter />
              <TerminalFooter />
              <ProawsFooter />
              <TicketFooter />
            </Carousel>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
