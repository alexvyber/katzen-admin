import { useEffect } from "react"
import { handleDarkMode } from "@/store/theme"
import { useAppDispatch } from "./use-app-dispatcher"
import { useAppSelector } from "./use-app-selector"

export const useDarkmode = () => {
  const dispatch = useAppDispatch()
  const isDark = useAppSelector((state) => state.theme.darkMode)

  const setDarkMode = (mode: boolean) => {
    dispatch(handleDarkMode(mode))
  }

  useEffect(() => {
    const { classList: bodyClasses } = window.document.body

    if (isDark) {
      bodyClasses.add("dark")
      bodyClasses.remove("light")
    } else {
      bodyClasses.add("light")
      bodyClasses.remove("dark")
    }
  }, [isDark])

  return [isDark, setDarkMode] as const
}
