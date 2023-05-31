import { Sidebar } from "@/components/partials/sidebar"
import { Loading } from "@/components/ui"
import { Suspense } from "react"

import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <div className="flex">
      <Sidebar className="z-50" />
      <div className="bg-slate-100">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
