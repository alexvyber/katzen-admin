import { useAppDispatch } from "@/hooks/use-app-dispatcher"
import { openChat } from "./store"
import { cx } from "cvax"
import { Contact } from "@/mock/chat-data"

export const Contacts = ({ contact }: { contact: Contact }) => {
  const { fullName, avatar, status, lastMessage, unredMessages, id } = contact
  const dispatch = useAppDispatch()

  return (
    <div
      className="block py-5 w-full transition-all duration-150 cursor-pointer outline-none hover:bg-gray-100 focus:ring-0 group dark:hover:bg-gray-600 dark:hover:bg-opacity-70"
      onClick={() => {
        dispatch(
          openChat({
            contact: {
              id,
            },
          })
        )
      }}
    >
      <div className="flex px-6 space-x-3">
        <div className="flex-none">
          <div className="relative w-10 h-10 rounded-full">
            <span
              className={cx(
                "status absolute -right-0 top-0 inline-block h-2.5 w-2.5 rounded-full ring-1 ring-white",
                status === "online" ? "bg-success-500" : "bg-gray-500"
              )}
            />
            <img
              src={avatar}
              alt="avatar"
              className="block object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-1 text-start">
          <div className="flex-1">
            <span className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-[2px]">
              {fullName}
            </span>
            <span className="block text-xs font-normal text-gray-600 dark:text-gray-300">
              {`${lastMessage.slice(0, 20)}...`}
            </span>
          </div>
          <div className="flex-none ltr:text-right">
            <span className="block text-xs font-normal text-gray-400 dark:text-gray-400">
              {contact.lastMessageTime}
            </span>
            {unredMessages > 0 && (
              <div className="flex justify-end items-end w-full">
                <span className="flex flex-col items-center w-4 h-4 font-bold text-white rounded-full pt-[1px] bg-primary-500 text-[11px]">
                  {unredMessages}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
