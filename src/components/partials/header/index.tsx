import { cx } from "cvax"

import { Language } from "./components/language"
import { Messages } from "./components/messages"
import { SwitchDark } from "./components/switch-dark"

import { useState } from "react"
import { useWidth } from "@/hooks/use-width"
import { Icons } from "@/components/icons"
import { Logo } from "../logo"

import { UserNav } from "./components/user-nav"
import { TeamSwitcher } from "./components/team-switcher"
import { CommandMenu } from "./components/command-menu"
import { Notifications } from "./components/notifications"

export function Header({ className }: React.ComponentProps<"header">) {
  const { width, breakpoints } = useWidth()
  const [collapsed, setMenuCollapsed] = useState(false)

  const handleOpenMobileMenu = () => {
    console.log("Open Mobile menu")
  }

  const xl = parseInt(breakpoints.xl)
  const md = parseInt(breakpoints.md)

  return (
    <header className={className}>
      <div
        className={cx(
          "bg-white px-4 dark:bg-slate-800 md:px-6 py-2",
          "dark:border-b dark:border-slate-700 dark:border-opacity-60"
        )}
      >
        <div className="flex justify-between items-center h-full">
          <div className="flex gap-2 items-center md:gap-4">
            {collapsed && width >= xl && (
              <button
                className="text-xl dark:text-white text-slate-900"
                onClick={() => setMenuCollapsed(!collapsed)}
              >
                <Icons icon="akar-icons:arrow-right" />
              </button>
            )}

            {width < xl && <Logo />}

            <TeamSwitcher />
            <CommandMenu />

            {width < xl && width >= md && (
              <button
                className="text-2xl cursor-pointer dark:text-white text-slate-900"
                onClick={handleOpenMobileMenu}
              >
                <Icons icon="heroicons-outline:menu-alt-3" />
              </button>
            )}

            <div className="flex-1 w-full md:flex-none md:w-auto">{/* <CommandMenu /> */}</div>
          </div>

          <div className="flex items-center space-x-3 lg:space-x-6 nav-tools">
            <Language />
            <SwitchDark />

            <Notifications />
            {width >= md && <Messages />}
            <UserNav />

            {width <= md && (
              <div
                className="text-2xl cursor-pointer dark:text-white text-slate-900"
                onClick={handleOpenMobileMenu}
              >
                <Icons icon="heroicons-outline:menu-alt-3" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
