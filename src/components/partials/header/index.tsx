import { cx } from "cvax"

import { Language } from "./components/language"
import { Messages } from "./components/messages"
import { SwitchDark } from "./components/switch-dark"

import { useState } from "react"
import { useWidth } from "@/hooks/use-width"
import { Icons } from "@/components/icons"
import { Logo } from "../logo"
import { Input } from "@/components/ui"
import { Search } from "lucide-react"

export function Header({ className = "custom-class" }) {
  const { width, breakpoints } = useWidth()
  const [collapsed, setMenuCollapsed] = useState(false)
  const [menuType] = useState("vertical")

  const handleOpenMobileMenu = () => {
    console.log("Open Mobile menu")
  }

  const xl = parseInt(breakpoints.xl)
  const md = parseInt(breakpoints.md)

  return (
    <header className={className}>
      <div
        className={cx(
          "app-header bg-white px-4 dark:bg-slate-800 md:px-6",
          "dark:border-b dark:border-slate-700 dark:border-opacity-60",
          menuType === "horizontal" && width > xl ? "py-1" : "py-3 md:py-6"
        )}
      >
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-2 md:space-x-4">
            {collapsed && width >= xl && (
              <button
                className="text-xl dark:text-white text-slate-900"
                onClick={() => setMenuCollapsed(!collapsed)}
              >
                <Icons icon="akar-icons:arrow-right" />
              </button>
            )}

            {width < xl && <Logo />}

            {width < xl && width >= md && (
              <button
                className="text-2xl cursor-pointer dark:text-white text-slate-900"
                onClick={handleOpenMobileMenu}
              >
                <Icons icon="heroicons-outline:menu-alt-3" />
              </button>
            )}

            <form className="flex w-full md:ml-0" action="#" method="GET">
              <div className="relative w-full text-slate-400 focus-within:text-slate-600">
                <div className="flex absolute inset-y-0 left-0 items-center pointer-events-none">
                  <Search className="w-5 h-5" aria-hidden="true" />
                </div>
                <Input
                  id="search-field"
                  className="block py-2 pr-3 pl-8 w-full h-full border-transparent sm:text-sm focus:border-transparent focus:ring-0 focus:outline-none placeholder-slate-500 text-slate-900 focus:placeholder-slate-400"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-3 lg:space-x-6 nav-tools">
            <Language />
            <SwitchDark />

            {width >= md && <Messages />}

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
