import { chatReducer } from "@/pages/chat/store"
import { themeReducer } from "./theme"
import { sessionReducer } from "./session"
import { authReducer } from "./auth"

export const reducer = {
  theme: themeReducer,
  chat: chatReducer,
  session: sessionReducer,
  auth: authReducer,
}
