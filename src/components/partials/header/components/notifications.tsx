import { Link } from "react-router-dom"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import { cx } from "cvax"
import { notifications } from "@/mock/data"

export function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="flex relative flex-col justify-center items-center text-lg text-gray-900 rounded-full cursor-pointer lg:w-8 lg:h-8 lg:bg-gray-100 dark:text-white lg:dark:bg-gray-900">
          <Icons icon="heroicons-outline:bell" className="animate-tada" />
          <span className="flex absolute -top-2 -right-2 flex-col justify-center items-center w-4 h-4 font-semibold text-white bg-red-500 rounded-full lg:top-0 lg:right-0 text-[8px]">
            2
          </span>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 w-80 rounded-xl">
        <DropdownMenuLabel>
          <div className="flex justify-between">
            <div className="text-sm font-medium leading-6 text-gray-800 dark:text-gray-200">
              Notifications
            </div>
            <div className="text-xs text-gray-800 md:text-right dark:text-gray-200">
              <Link to="/chat" className="underline">
                View all
              </Link>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="flex flex-col gap-1">
          {notifications.slice(0, notifications.length * Math.random() + 1)?.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className={cx(
                true
                  ? "bg-gray-50 text-gray-800 dark:bg-gray-600 dark:bg-opacity-70"
                  : "text-gray-600 dark:text-gray-300",
                " block w-full cursor-pointer px-4 py-2 text-sm rounded-lg"
              )}
            >
              <NotificationItem item={item} key={`${item}-${index}`} />
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function NotificationItem({ item }: any) {
  return (
    <div
      className={cx(
        "block w-full cursor-pointer px-4 py-2  text-sm",
        "text-gray-600 dark:text-gray-300"
      )}
    >
      <div className="flex ltr:text-left">
        <div className="flex-none ltr:mr-3 rtl:ml-3">
          <div className="w-8 h-8 bg-white rounded-full">
            <img
              src={item.image}
              alt=""
              className={cx(
                "border-transparent",
                "block h-full w-full rounded-full border object-cover"
              )}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className={cx("text-sm", "text-gray-600 dark:text-gray-300")}>{item.title}</div>
          <div className={cx("text-xs leading-4", "text-gray-600 dark:text-gray-300")}>
            {item.desc}
          </div>
          <div className="mt-1 text-xs text-gray-400 dark:text-gray-400">3 min ago</div>
        </div>
        {item.unread && (
          <div className="flex-0">
            <span className="inline-block rounded-full border border-white dark:border-gray-400 h-[10px] w-[10px] bg-danger-500"></span>
          </div>
        )}
      </div>
    </div>
  )
}
