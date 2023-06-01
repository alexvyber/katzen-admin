import { Navigate, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

import "@/assets/scss/app.scss"
import { Layout } from "@/layouts/layout"

import { Loading } from "@/components/ui"
import { Toaster } from "@/components/ui"

const Error404 = lazy(() => import("@/pages/erros/404"))

const routes = {
  "blank-page": lazy(() => import("@/pages/utility/blank")),
  "access-denied": lazy(() => import("@/pages/utility/access-denied")),
  "coming-soon": lazy(() => import("@/pages/utility/coming-soon")),
  "under-construction": lazy(() => import("@/pages/utility/under-construction")),
  pricing: lazy(() => import("@/pages/utility/pricing")),
  changelog: lazy(() => import("@/pages/utility/changelog")),
  faq: lazy(() => import("@/pages/utility/faq")),
  home: lazy(() => import("@/pages/utility/blank")),
  "*": () => <Navigate to="/404" />,
}

export function App() {
  return (
    <main className="relative h-screen bg-slate-50">
      <Routes>
        <Route path="/*" element={<Layout />}>
          {Object.entries(routes).map(([route, Page]) => (
            <Route path={route} element={<Page />} />
          ))}
        </Route>

        <Route path="/404" element={withSuspense(Error404)} />
      </Routes>
      <Toaster />
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
