import { Navigate, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

import "@/assets/scss/app.scss"
import { Layout } from "@/layouts/layout"

import { Loading } from "@/components/ui"

const Error404 = lazy(() => import("@/pages/erros/404"))

const routes = {
  "blank-page": lazy(() => import("@/pages/utility/blank")),
  "access-denied": lazy(() => import("@/pages/utility/access-denied")),
  "coming-soon": lazy(() => import("@/pages/utility/coming-soon")),
  pricing: lazy(() => import("@/pages/utility/pricing")),
  "*": () => <Navigate to="/404" />,
}

export function App() {
  return (
    <main className="relative bg-slate-50/20">
      <Routes>
        <Route path="/*" element={<Layout />}>
          {Object.entries(routes).map(([route, Page]) => (
            <Route path={route} element={<Page />} />
          ))}
        </Route>

        <Route path="/404" element={withSuspense(Error404)} />
      </Routes>
    </main>
  )
}

function withSuspense(
  Component: (() => React.ReactElement) | React.LazyExoticComponent<() => React.ReactElement>
) {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  )
}
