import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui"
import { useAppSelector } from "@/hooks/use-app-selector"

// @ts-expect-error
const allStatus = [
  {
    value: "online",
    label: "Active",
    activeClass: "ring-success-500 border-success-500",
  },
  {
    value: "busy",
    label: "Do Not Disturb",
    activeClass: "ring-danger-500 border-danger-500",
  },
  {
    value: "away",
    label: "Away",
    activeClass: "ring-warning-500 border-warning-500",
  },
  {
    value: "offline",
    label: "Offline",
    activeClass: "ring-warning-500 border-warning-500",
  },
]

export const MyProfile = () => {
  const { profileInfo } = useAppSelector((state) => state.chat)

  return (
    <div>
      <div className="flex items-center px-6 h-16">
        <div className="flex-1">
          <div className="flex gap-3">
            <div className="flex-none">
              <div className="w-10 h-10 rounded-full">
                <img
                  src={profileInfo.avatar}
                  alt=""
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="flex-1 text-start">
              <span className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-[2px]">
                {profileInfo.fullName}
                <span className="inline-block ml-3 rounded-full status h-[10px] w-[10px] bg-success-500"></span>
              </span>
              <span className="block text-xs font-normal text-gray-500 dark:text-gray-300">
                Available
              </span>
            </div>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Icons icon="lucide:more-horizontal" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Icons icon="lucide:user" className="mr-2 w-4 h-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icons icon="lucide:settings" className="mr-2 w-4 h-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icons icon="lucide:keyboard" className="mr-2 w-4 h-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
