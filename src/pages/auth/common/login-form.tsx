import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { handleLogin } from "@/store/auth"
import {
  Button,
  // Checkbox,
  Input,
} from "@/components/ui"
import { useAppDispatch } from "@/hooks/use-app-dispatcher"
import { useAppSelector } from "@/hooks/use-app-selector"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  email: z.string().email({
    message: "Invalid Email",
  }),
  password: z.string({
    required_error: "Password Required",
  }),
})

type FormValues = z.infer<typeof schema>

export function LoginForm() {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector((state) => state.auth)

  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "all",
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const user = users.find((user) => user.email === data.email && user.password === data.password)

    if (user) {
      dispatch(handleLogin(true))

      setTimeout(() => {
        navigate("/dashboard")
      }, 1500)
    } else {
      toast.error("Invalid Credentials", {
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
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mx-auto max-w-sm">
      <Input value={users[0].email} type="email" {...register("email")} />

      <Input value={users[0].password} type="password" {...register("password")} />
      <div className="flex justify-between">
        <Link
          to="/forgot-password"
          className="text-sm font-medium leading-6 hover:underline text-sky-500 dark:text-slate-400"
        >
          Forgot Password?{" "}
        </Link>
      </div>

      <Button size="lg" type="submit" className="block w-full text-center btn btn-dark">
        Sign in
      </Button>
    </form>
  )
}
