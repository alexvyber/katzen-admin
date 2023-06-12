import { Link } from "react-router-dom"
import { LoginForm } from "./common/login-form"
import { ToastContainer } from "react-toastify"
import Illustration from "@/assets/images/auth/code-login.svg"
import { Logo } from "@/components/partials/logo"

function Login() {
  return (
    <>
      <ToastContainer />
      <div className="flex overflow-hidden items-center w-full min-h-screen basis-full">
        <div className="flex overflow-y-auto flex-wrap w-full min-h-screen">
          <div className="relative flex-1">
            <div className="flex flex-col h-full bg-white dark:bg-slate-800">
              <div className="flex flex-col gap-5 justify-center h-full">
                <div className="block text-center lg:hidden">
                  <Logo className="justify-center w-full" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium">Sign in</h4>
                  <div className="text-base text-slate-500">
                    Sign in to your account to start using Dashcode
                  </div>
                </div>
                <LoginForm />
                <div className="relative pt-6 border-b border-opacity-20 border-b-slate-500">
                  <div className="inline-block absolute top-1/2 left-1/2 px-4 min-w-max text-sm font-normal bg-white transform -translate-x-1/2 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    Or continue with
                  </div>
                </div>
                <div className="mx-auto font-normal text-slate-500 wtext-sm dark:text-slate-400">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="font-medium dark:text-white hover:underline text-primary-500"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
              <div className="text-sm text-center text-slate-500">
                Copyright 2023, Katzen Admin All Rights Reserved.
              </div>
            </div>
          </div>
          <div className="hidden overflow-hidden relative flex-1 w-full lg:block bg-slate-100 dark:bg-slate-900">
            <div className="pt-12 lg:px-8 xl:px-12 2xl:px-16">
              <Logo />

              <h4>
                The way your business{" "}
                <span className="font-bold text-slate-800 dark:text-slate-400">runs</span>
              </h4>
            </div>
            <div className="absolute h-full keft-0">
              <img src={Illustration} alt="" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
