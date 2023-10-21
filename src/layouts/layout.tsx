import { Loading } from "@/components/ui"
import { Outlet } from "react-router-dom"
import { Suspense, lazy } from "react"
import { Header } from "@/components/partials"
import { cx } from "cvax"

import useMenuCollapsed from "@/hooks/use-menu-collapsed"
import { useWidth } from "@/hooks/use-window-size"

const Sidebar = lazy(() => import("@/components/partials/sidebar"))

export function Layout() {
  const [collapsed] = useMenuCollapsed()
  const { width, breakpoints } = useWidth()

  return (
    <>
      {width > breakpoints.lg && (
        <div className="hidden lg:flex lg:fixed lg:inset-y-0 lg:flex-col">
          <div className="flex overflow-y-auto flex-col flex-grow bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <Sidebar />
          </div>
        </div>
      )}

      <header className={cx(width > breakpoints.lg && (collapsed ? "pl-20" : "pl-60"))}>
        <Header />
      </header>

      <div className={cx(width > breakpoints.lg && (collapsed ? "pl-20" : "pl-60"), "h-full")}>
        <main className="flex-1 p-1.5 w-full h-full 2xs:p-2">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  )
}
