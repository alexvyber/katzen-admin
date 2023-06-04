export type ThemeConfig = {
  appName: string
  darkMode: boolean
  contentWidth: "full" | "boxed"
  menuCollapsed: boolean
}

export const themeConfig: ThemeConfig = {
  appName: "Katzen Admin",
  darkMode: false,
  contentWidth: "full",
  menuCollapsed: true,
}
