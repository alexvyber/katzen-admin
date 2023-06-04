import { Navigate, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

import "@/assets/scss/app.scss"
import { Layout } from "@/layouts/layout"

import { Loading } from "@/components/ui"
import { Toaster } from "@/components/ui"
import { menuItems } from "./configs/menu-items"

const Error404 = lazy(() => import("@/pages/utility-pages/404"))

// TODO: Rewrite it pre-release
// NOTE: dynamicly form routes object
const routes = {} as Record<
  string,
  React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element)
>

// TODO: remove pre-release
menuItems
  .filter((item) => "link" in item || "path" in item)
  .forEach((item) => {
    if ("path" in item) {
      item.children?.map((child) =>
        Object.assign(routes, {
          [`${item.path}/${child.link}`]: child.show
            ? lazy(() => import(`./pages/${item.path}/${child.link}`))
            : () => <Navigate to="/utility-pages/blank-page" />,
        })
      )
    }

    if ("link" in item) {
      Object.assign(routes, {
        [`${item.link}`]: item.show
          ? lazy(() => import(`./pages/${item.link}`))
          : () => <Navigate to="/utility-pages/blank-page" />,
      })
    }
  })

export function App() {
  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-gray-800">
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
