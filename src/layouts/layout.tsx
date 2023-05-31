import { Sidebar } from "@/components/partials/sidebar"
import { Input, Loading } from "@/components/ui"
import { Outlet } from "react-router-dom"
import { Suspense, useState } from "react"
import { MenuIcon, Search } from "lucide-react"
import { cx } from "cvax"

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className={cx(sidebarOpen ? "block" : "hidden", "relative")}>
        <div
          className="absolute top-0 left-0 z-20 w-screen h-screen bg-slate-400/40 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="relative z-40 md:hidden">
          <div className="flex fixed inset-0 z-40 w-60">
            <div className="flex relative flex-col flex-1 w-60">
              <Sidebar className="z-50" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:fixed md:inset-y-0 md:flex-col">
        <div className="flex overflow-y-auto flex-col flex-grow border-r border-slate-200">
          <Sidebar className="z-50" />
        </div>
      </div>

      <div className="md:pl-64">
        <div className="flex flex-col mx-auto max-w-4xl md:px-8 xl:px-0">
          <div className="flex sticky top-0 z-10 flex-shrink-0 h-16 border-b border-slate-200">
            <button
              type="button"
              className="px-4 md:hidden focus:ring-2 focus:ring-inset focus:outline-none text-slate-400 focus:ring-primary-500"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4 md:px-0">
              <div className="flex flex-1">
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
            </div>
          </div>

          <main className="flex-1">
            <div className="py-6">
              {/* <div className="px-4 sm:px-6 md:px-0">
                  <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
                </div> */}
              <div className="">
                <div className="py-4">
                  <Suspense fallback={<Loading />}>
                    <Outlet />
                  </Suspense>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
