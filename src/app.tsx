import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

import "@/assets/scss/app.scss"
import { Layout } from "@/layouts/layout"

import { Loading } from "@/components/ui"
import { Toaster } from "@/components/ui"

const Error404 = lazy(() => import("@/pages/utility-pages/404"))

const ProjectDashboard = lazy(() => import("@/pages/project/dashboard"))
const Chat = lazy(() => import("@/pages/chat"))
const Welcome = lazy(() => import("@/pages/welcome"))
const Changelog = lazy(() => import("@/pages/changelog"))
const Maps = lazy(() => import("@/pages/maps"))

// utility-pages
const AccessDenied = lazy(() => import("@/pages/utility-pages/access-denied"))
const BlankPage = lazy(() => import("@/pages/utility-pages/blank-page"))
const ComingSoon = lazy(() => import("@/pages/utility-pages/coming-soon"))
const Faq = lazy(() => import("@/pages/utility-pages/faq"))
const Pricing = lazy(() => import("@/pages/utility-pages/pricing"))
const UnderConstruction = lazy(() => import("@/pages/utility-pages/under-construction"))

export function App() {
  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-gray-800">
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="chat" element={<Chat />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="maps" element={<Maps />} />
          <Route path="" element={<Chat />} />

          <Route path="project/*">
            <Route path="dashboard" element={<ProjectDashboard />} />
          </Route>

          <Route path="utility-pages/*">
            <Route path="access-denied" element={<AccessDenied />} />
            <Route path="blank-page" element={<BlankPage />} />
            <Route path="coming-soon" element={<ComingSoon />} />
            <Route path="faq" element={<Faq />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="under-construction" element={<UnderConstruction />} />
            <Route path="404" element={<Error404 />} />
            <Route path="access" element={<AccessDenied />} />
            <Route path="access" element={<AccessDenied />} />
            <Route path="access" element={<AccessDenied />} />
            <Route path="access" element={<AccessDenied />} />
          </Route>

          <Route path="*" element={withSuspense(Error404)} />
        </Route>
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

type Component = React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element)
type Routes = Record<string, Component | Record<string, Component>>
