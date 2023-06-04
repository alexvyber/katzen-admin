// REFACTOR: make this hook simpler if possible

import { screens } from "@/configs/layout"
import { useMemo, useState } from "react"

type GetNumberFromPixels<S extends string> = S extends `${infer Num extends number}px` ? Num : never
type Breakpoints<T extends Record<string, string>> = Prettify<{
  [K in keyof T]: GetNumberFromPixels<T[K]>
}>

export function useWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  // breakpoints
  const breakpoints = {} as Breakpoints<typeof screens>
  ;(Object.keys(screens) as Array<keyof typeof screens>).forEach((key) =>
    Object.assign(breakpoints, {
      [key]: parseInt(screens[key].replace("px", "")),
    })
  )

  // resize widnow size and set width by useMemo
  useMemo(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { width, breakpoints }
}
