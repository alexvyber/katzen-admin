import { chatReducer } from "@/pages/chat/store"
import { themeReducer } from "./theme"

export const reducer = {
  theme: themeReducer,
  chat: chatReducer,
}
