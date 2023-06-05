import { forwardRef, useEffect, useRef, useState } from "react"
import { sendMessage, toggleisMobileChatSidebar } from "./store"
import { useWidth } from "@/hooks/use-window-size"
import { useAppSelector } from "@/hooks/use-app-selector"
import { useAppDispatch } from "@/hooks/use-app-dispatcher"
import { Icons } from "@/components/icons"
import { Avatar, AvatarFallback, AvatarImage, ScrollArea, Viewport } from "@/components/ui"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cx } from "cvax"
import { type Message } from "@/mock/chat-data"

const chatAction = [
  {
    title: "Remove",
    link: "#",
  },
  {
    title: "Forward",
    link: "#",
  },
]

export function Chat() {
  const { messages, user, profileInfo } = useAppSelector((state) => state.chat)
  const { width, height, breakpoints } = useWidth()
  const dispatch = useAppDispatch()
  const lastMessageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timerId: null | ReturnType<typeof setTimeout> = null

    timerId = setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({
          behavior: "instant",
          block: "end",
        })
      }
    }, 100)

    return () => {
      timerId && clearTimeout(timerId)
    }
  }, [messages, user])

  return (
    <>
      <header className="border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center px-3 h-16 md:px-6">
          <div className="flex-1">
            <div className="flex gap-3">
              {width <= breakpoints.lg && (
                <span
                  onClick={() => dispatch(toggleisMobileChatSidebar(true))}
                  className="self-center mr-3 text-xl text-gray-900 cursor-pointer dark:text-white"
                >
                  <Icons icon="heroicons-outline:menu-alt-1" />
                </span>
              )}
              <div className="flex-none">
                <div className="relative w-10 h-10 rounded-full">
                  <span
                    className={cx(
                      "status absolute -right-0 top-0 inline-block h-[10px] w-[10px] rounded-full ring-1 ring-white",
                      user.status === "online" ? "bg-success-500" : "bg-secondary-500"
                    )}
                  />
                  <img
                    src={user.avatar}
                    alt=""
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
              <div className="flex-1 text-start">
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-[2px] truncate">
                  {user.fullName}
                </span>
                <span className="block text-xs font-normal text-gray-500 dark:text-gray-300">
                  Active now
                </span>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-none items-center md:gap-2.5 gap1">
            <div className="msg-action-btn">
              <Icons icon="heroicons-outline:phone" />
            </div>
            <div className="msg-action-btn">
              <Icons icon="heroicons-outline:video-camera" />
            </div>

            <div onClick={() => dispatch(infoToggle(!isOpenInfo))} className="msg-action-btn">
              <Icons icon="heroicons-outline:dots-horizontal" />
            </div>
          </div> */}
        </div>
      </header>
      <div
        style={{
          height: `${height - 260}px`,
        }}
      >
        <ScrollArea className="h-full">
          <Viewport className="flex flex-col gap-1 py-2 px-3">
            {messages.map((item) => (
              <Message
                ref={lastMessageRef}
                item={item}
                key={item.id}
                fromMe={item.from === profileInfo.id}
              />
            ))}
          </Viewport>
        </ScrollArea>
      </div>
      <footer className="flex px-4 pt-4 border-t border-gray-100 sm:flex sm:gap-2 md:gap-4 md:px-6 md:pt-6 dark:border-gray-700">
        {/* <div className="hidden flex-none space-x-1 sm:flex md:space-x-3">
          <div className="flex flex-col justify-center items-center w-8 h-8 text-xl bg-gray-100 rounded-full cursor-pointer dark:text-gray-400 dark:bg-gray-900">
            <Icons icon="heroicons-outline:link" />
          </div>
          <div className="flex flex-col justify-center items-center w-8 h-8 text-xl bg-gray-100 rounded-full cursor-pointer dark:text-gray-400 dark:bg-gray-900">
            <Icons icon="heroicons-outline:emoji-happy" />
          </div>
        </div> */}
        <MessageInput />
      </footer>
    </>
  )
}

function MessageAction() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" className="w-56">
        {chatAction.map((item) => (
          <DropdownMenuItem>{item.title}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const Message = forwardRef<
  HTMLDivElement,
  {
    item: Message
    fromMe: boolean
  }
>(({ item, fromMe }, ref) => {
  if (fromMe) {
    return (
      <div ref={ref} className="flex gap-2 justify-end items-start w-full group">
        <div className="flex flex-1 gap-3 justify-end">
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100">
            <MessageAction />
          </div>
          <div className="max-w-sm whitespace-pre-wrap break-all">
            <div className="flex flex-col flex-1 p-3 mb-1 text-sm font-normal text-gray-800 bg-gray-100 rounded-md dark:text-gray-300 dark:bg-gray-900 text-contrent">
              <span>{item.content}</span>
              <span className="inline-flex justify-start text-xs font-normal text-gray-600 dark:text-gray-400">
                {item.time}
              </span>
            </div>
          </div>
        </div>

        <MessageImage src={item?.img} />
      </div>
    )
  } else {
    return (
      <div ref={ref} className="flex gap-2 justify-start items-start w-full group">
        <MessageImage src={item?.img} />

        <div className="flex flex-1 gap-3 justify-start">
          <div className="max-w-sm whitespace-pre-wrap break-all">
            <div className="flex flex-col flex-1 gap-0.5 p-2.5 mb-1 text-sm font-normal text-gray-600 whitespace-pre-wrap break-all rounded-md dark:text-gray-300 dark:bg-gray-600 text-contrent bg-primary-100">
              <span>{item.content}</span>
              <span className="inline-flex justify-end text-xs font-normal text-gray-500 dark:text-gray-400">
                {item.time}
              </span>
            </div>
          </div>
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100">
            <MessageAction />
          </div>
        </div>
      </div>
    )
  }
})

function MessageImage({ src, fallback }: { src?: string; fallback?: string }) {
  return (
    <Avatar className="flex-none w-8 h-8">
      <AvatarImage src={src} alt="avatar" />
      <AvatarFallback>{fallback} || "U"</AvatarFallback>
    </Avatar>
  )
}

function MessageInput() {
  const dispatch = useAppDispatch()
  const { id } = useAppSelector((state) => state.chat.user)
  const [content, setContent] = useState("")

  const send = () => {
    if (content === "") return
    dispatch(
      sendMessage({
        content,
        to: id,
      })
    )

    setContent("")
  }

  const handleSendButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    send()
  }

  const handleSendTextarea = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      send()
    }
  }

  return (
    <div className="flex relative flex-1 space-x-3">
      <div className="flex-1">
        <textarea
          placeholder="Type your message..."
          value={content}
          className="block w-full bg-transparent resize-none dark:text-white focus:ring-0 focus:outline-0"
          onChange={(event) => setContent(event.target.value)}
          onKeyDown={handleSendTextarea}
        />
      </div>
      <div className="flex-none pr-3 md:pr-0">
        <button
          onClick={handleSendButton}
          type="button"
          className="flex flex-col justify-center items-center w-8 h-8 text-lg text-white bg-gray-900 rounded-xl hover:bg-gray-700"
        >
          <Icons icon="lucide:corner-down-left" />
        </button>
      </div>
    </div>
  )
}
