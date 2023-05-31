import { Navigate, Route, Routes } from "react-router-dom"

import "@/assets/scss/app.scss"
import { Layout } from "@/layouts/layout"
import { Suspense } from "react"
import { Loading } from "@/components/ui"
import { Error404 } from "@/pages/erros/404"
import { Blank } from "@/pages/utility/blank"

export function App() {
  return (
    <main className="relative bg-slate-50/20">
      <Routes>
        <Route path="/" element={withSuspense(Blank)} />

        <Route path="/*" element={<Layout />}>
          <Route path="blank-page" element={<Blank />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>

        <Route path="/404" element={withSuspense(Error404)} />
      </Routes>
    </main>
  )
}

function withSuspense(Component: () => React.ReactElement) {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  )
}
