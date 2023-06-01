import { screens } from "@/configs/layout"
import { useMemo, useState } from "react"

export function useWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  // breakpoints
  const breakpoints = screens

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
