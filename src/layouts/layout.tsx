import { Loading } from "@/components/ui"
import { Suspense } from "react"

import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  )
}
