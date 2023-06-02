import { Loading } from "@/components/ui"
import { Outlet } from "react-router-dom"
import {
  Suspense,
  // useState
} from "react"
// import { MenuIcon } from "lucide-react"
// import { cx } from "cvax"
import { Sidebar, Header } from "@/components/partials"

export function Layout() {
  // const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* <div className={cx(sidebarOpen ? "block" : "hidden", "relative")}>
        <div className="relative z-40 lg:hidden">
          <div className="flex fixed inset-0 z-40 w-60">
            <div className="flex relative flex-col flex-1 w-60">
              <Sidebar className="z-50" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="hidden lg:flex lg:fixed lg:inset-y-0 lg:flex-col">
        <div></div>
        <div className="flex overflow-y-auto flex-col flex-grow border-r border-slate-200">
          <Sidebar className="z-50" />
        </div>
      </div>

      <div className="lg:pl-60">
        <Header />
        {/* <div className="flex sticky top-0 z-10 flex-shrink-0 h-16">
          <button
            type="button"
            className="px-4 md:hidden focus:ring-2 focus:ring-inset focus:outline-none text-slate-400 focus:ring-primary-500"
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div> */}
        <div className="flex flex-col mx-auto max-w-7xl xl:px-8">
          <main className="flex-1">
            <div className="py-6">
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
