import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const sessionSlice = createSlice({
  name: "auth/session",
  initialState: {
    token: "",
    signedIn: false,
  },
  reducers: {
    onSignInSuccess: (state, action: PayloadAction<string>) => {
      state.signedIn = true
      state.token = action.payload
    },
    onSignOutSuccess: (state) => {
      state.signedIn = false
      state.token = ""
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
  },
})

export const { onSignInSuccess, onSignOutSuccess, setToken } = sessionSlice.actions
export const sessionReducer = sessionSlice.reducer
