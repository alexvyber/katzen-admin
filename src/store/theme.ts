import { ThemeConfig, themeConfig } from "@/configs/theme-config"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: ThemeConfig = themeConfig

initialState.darkMode = initialDarkMode()
initialState.menuCollapsed = initialMenuCollapsed()

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    handleDarkMode: (state, action: PayloadAction<ThemeConfig["darkMode"]>) => {
      state.darkMode = action.payload
      window.localStorage.setItem("darkMode", `${action.payload}`)
    },

    handleMenuCollapsed: (state, action: PayloadAction<ThemeConfig["menuCollapsed"]>) => {
      state.menuCollapsed = action.payload
      window.localStorage.setItem("menuCollapsed", `${action.payload}`)
    },
  },
})

function initialDarkMode() {
  const item = window.localStorage.getItem("darkMode") as `${boolean}` | null
  if (!item) return themeConfig.darkMode
  return item === "true"
}

function initialMenuCollapsed() {
  const item = window.localStorage.getItem("menuCollapsed") as `${boolean}` | null
  if (!item) return themeConfig.menuCollapsed
  return item === "true"
}

export const { handleDarkMode, handleMenuCollapsed } = layoutSlice.actions
export const themeReducer = layoutSlice.reducer
