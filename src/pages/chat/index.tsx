import { Blank } from "./blank"
import { Chat } from "./chat"
import { Contacts } from "./contacts"
import { UserInfo } from "./user-info"
import { MyProfile } from "./my-profile"
import { useWidth } from "@/hooks/use-window-size"
import { Card, ScrollArea, Viewport } from "@/components/ui"
import { Icons } from "@/components/icons"
import { cx } from "cvax"
import { useAppDispatch } from "@/hooks/use-app-dispatcher"
import { useAppSelector } from "@/hooks/use-app-selector"
import { setContactSearch, toggleisMobileChatSidebar } from "./store"

export default function ChatPage() {
  const { width, breakpoints } = useWidth()
  const dispatch = useAppDispatch()
  const { isActiveChat, isOpenInfo, isMobileChatSidebar, contacts, searchContactTerm } =
    useAppSelector((state) => state.chat)

  const filteredContacts = contacts?.filter((item) =>
    item.fullName.toLowerCase().includes(searchContactTerm.toLowerCase())
  )

  return (
    <div className="flex overflow-hidden relative gap-3 chat-height h-[calc(100vh-5rem)]">
      <div
        className={cx(
          "min-w-[260px] flex-none transition-all duration-150 h-full z-30 ",
          width < breakpoints.lg
            ? "absolute top-0  h-full w-[210px] md:w-[260px]"
            : "min-w-[260px] flex-none",
          width < breakpoints.lg && isMobileChatSidebar ? "left-0" : "-left-full "
        )}
      >
        <Card className="h-full">
          <div className="border-b border-gray-100 dark:border-gray-700">
            <MyProfile />
          </div>
          <div className="py-1 border-b border-gray-100 dark:border-gray-700">
            <div className="flex gap-3 items-center px-3 mx-6 rounded">
              <div className="flex-none text-base text-gray-900 dark:text-gray-400">
                <Icons icon="bytesize:search" />
              </div>
              <input
                onChange={(e) => dispatch(setContactSearch(e.target.value))}
                placeholder="Search..."
                className="block flex-1 py-2 w-full bg-transparent dark:text-gray-200 focus:ring-0 focus:outline-none placeholder:font-normal placeholder:text-gray-400 dark:placeholder:text-gray-400"
              />
            </div>
          </div>

          <ScrollArea className="pb-10 h-full">
            <Viewport className="flex flex-col gap-1">
              {filteredContacts?.map((contact) => (
                <Contacts key={contact.id} contact={contact} />
              ))}
            </Viewport>
          </ScrollArea>
        </Card>
      </div>
      <div
        className={cx(
          "absolute transition duration-200 inset-0 z-10 flex-1 w-full bg-opacity-60 rounded-xl dark:bg-opacity-60 overlay bg-slate-900 backdrop-filter backdrop-blur-sm dark:bg-slate-900",
          width < breakpoints.lg && isMobileChatSidebar ? "block" : "hidden"
        )}
        onClick={() => dispatch(toggleisMobileChatSidebar(!isMobileChatSidebar))}
      />

      {/* main chat box*/}
      <div className="flex-1">
        <div className="flex gap-3 h-full parent">
          {/* main message body*/}
          <div className="flex-1">
            <Card className="p-0 h-full">
              {isActiveChat ? (
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  <Chat />
                </div>
              ) : (
                <Blank />
              )}
            </Card>
          </div>

          {/* User Info */}
          {width > breakpoints.lg && isOpenInfo && isActiveChat && (
            <div className="flex-none w-[285px]">
              <Card className="p-0 h-full">
                <UserInfo />
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
