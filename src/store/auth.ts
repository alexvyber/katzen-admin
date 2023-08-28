import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

type User = {
  id: string
  name: string
  email: string
  password: string
}

function initialUsers(): User[] {
  const item = window.localStorage.getItem("users")
  if (!item)
    return [
      {
        id: nanoid(),
        name: "Katzen",
        email: "katzen@mail.com",
        password: "password",
      },
    ]
  return JSON.parse(item)
}

function initialIsAuth() {
  const item = window.localStorage.getItem("isAuth")
  if (!item) return false
  return JSON.parse(item) as boolean
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: initialUsers(),
    isAuth: initialIsAuth(),
  },
  reducers: {
    handleRegister: (state, action: PayloadAction<Omit<User, "id">>) => {
      const { name, email, password } = action.payload

      const user = state.users.find((user) => user.email === email)

      if (user) {
        toast.error("User already exists", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } else {
        state.users.push({
          id: nanoid(),
          name,
          email,
          password,
        })

        window.localStorage.setItem("users", JSON.stringify(state.users))
        toast.success("User registered successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    },

    handleLogin: (state, action) => {
      state.isAuth = action.payload

      // save isAuth in local storage
      window.localStorage.setItem("isAuth", JSON.stringify(state.isAuth))

      toast.success("User logged in successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    },

    handleLogout: (state, action) => {
      state.isAuth = action.payload

      // remove isAuth from local storage
      window.localStorage.removeItem("isAuth")
      
      toast.success("User logged out successfully", {
        position: "top-right",
      })
    },
  },
})

export const { handleRegister, handleLogin, handleLogout } = authSlice.actions
export const authReducer = authSlice.reducer
