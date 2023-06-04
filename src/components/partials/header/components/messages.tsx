import { Link } from "react-router-dom"
import { messages } from "@/mock/data"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cx } from "cvax"

export function Messages() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <span className="flex relative flex-col justify-center items-center text-lg text-gray-900 rounded-full cursor-pointer lg:w-8 lg:h-8 lg:bg-gray-100 dark:text-white lg:dark:bg-gray-900">
            <Icons icon="heroicons-outline:mail" />
            <span className="flex absolute -top-2 -right-2 flex-col justify-center items-center w-4 h-4 font-semibold text-white bg-red-500 rounded-full lg:top-0 lg:right-0 text-[8px]">
              10
            </span>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 w-80 rounded-xl">
        <DropdownMenuLabel>
          <div className="flex justify-between">
            <div className="text-sm font-medium leading-6 text-gray-800 dark:text-gray-200">
              Messages
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
          {messages.slice(0, messages.length * Math.random() + 1)?.map((item, i) => (
            <DropdownMenuItem
              key={i}
              className={cx(
                true
                  ? "bg-gray-50 text-gray-800 dark:bg-gray-600 dark:bg-opacity-70"
                  : "text-gray-600 dark:text-gray-300",
                " block w-full cursor-pointer px-4 py-2 text-sm rounded-lg"
              )}
            >
              <div className="flex gap-3">
                <div className="flex-none">
                  <div className="relative w-8 h-8 bg-white rounded-full dark:bg-gray-700">
                    <span
                      className={cx(
                        item.active ? "bg-secondary-500" : "bg-green-500",
                        "absolute right-0 top-0 inline-block h-2.5 w-2.5 rounded-full border border-white dark:border-gray-700"
                      )}
                    />
                    <img
                      src={item.image}
                      alt=""
                      className="block object-cover w-full h-full rounded-full border border-transparent hover:border-white"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-1` text-sm font-medium text-gray-800 dark:text-gray-300">
                    {item.title}
                  </div>
                  <div className="mb-1 text-xs text-gray-600 dark:text-gray-300">{item.desc}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-400">3 min ago</div>
                </div>
                {item.hasnotifaction && (
                  <div className="flex-0">
                    <span className="flex justify-center items-center w-4 h-4 text-white rounded-full border border-white bg-danger-500 text-[10px]">
                      {item.notification_count}
                    </span>
                  </div>
                )}
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
