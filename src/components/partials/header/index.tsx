import { cx } from "cvax"
import { Messages } from "./components/messages"
import { SwitchDark } from "./components/switch-dark"
import { useWidth } from "@/hooks/use-width"
import { Icons } from "@/components/icons"
import { Logo } from "../logo"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui"
import { UserNav } from "./components/user-nav"
import { Notifications } from "./components/notifications"
import { useState } from "react"
import { menuItems } from "@/configs/menu-items"
import { ExpandedMenu } from "../sidebar/nav-menu"

// import { Language } from "./components/language"
// import { TeamSwitcher } from "./components/team-switcher"
// import { CommandMenu } from "./components/command-menu"

export function Header() {
  const { width, breakpoints } = useWidth()

  return (
    <div
      className={cx(
        "bg-white border-b dark:border-gray-600 dark:border-opacity-60  dark:bg-gray-900 ",
        "flex w-full items-center px-4",
        "h-16"
      )}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2 items-center md:gap-4">
          {/* {width > breakpoints.lg && <TeamSwitcher />} */}
          {/* {width > breakpoints.lg && <CommandMenu />} */}
          {width < breakpoints.lg && <MobileNav />}
          {width < breakpoints.lg && <Logo collapsed={width < breakpoints["2xs"]} />}
        </div>

        <div className="flex gap-3 items-center">
          {/* {width >= breakpoints["sm"] && <Language />} */}
          <SwitchDark />
          <Notifications />
          <Messages />
          <UserNav />
        </div>
      </div>
    </div>
  )
}

// REFACTOR: exctract
const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button type="button" className="text-2xl text-gray-900 cursor-pointer dark:text-white">
          <Icons icon="heroicons-outline:menu-alt-2" />
        </button>
      </SheetTrigger>
      <SheetContent position="left" className="w-60 dark:border-gray-600 border-r-gray-200">
        <div className={"flex pb-1.5  pt-4"}>
          <Logo />
        </div>
        <ExpandedMenu menuItems={menuItems} onItemClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  )
}
