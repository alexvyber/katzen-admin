import { Link } from "react-router-dom"
import { Cog } from "lucide-react"
import { Icons } from "@/components/icons"

const UnderConstruction = () => {
  return (
    <div className="">
      <div className="container">
        <div className="flex flex-col flex-wrap justify-center items-center text-center">
          <Cog className="w-12 h-12 text-slate-600" />
          <h4 className="mb-2 text-3xl font-medium dark:text-white text-slate-900">
            We are under maintenance.
          </h4>
          <p className="text-base font-normal text-slate-500 dark:text-slate-300">
            We’re making the system more awesome. <br />
            We’ll be back shortly.
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="container">
          <div className="flex-wrap justify-between items-center py-6 space-y-4 md:flex">
            <div className="flex gap-3 justify-center md:justify-start">
              <Link to="#" className="social-link">
                <Icons icon="icomoon-free:facebook" />
              </Link>

              <Link to="#" className="social-link">
                <Icons icon="icomoon-free:twitter" />
              </Link>

              <Link to="#" className="social-link">
                <Icons icon="icomoon-free:linkedin2" />
              </Link>

              <Link to="#" className="social-link">
                <Icons icon="icomoon-free:google" />
              </Link>
            </div>
            <div className="flex gap-3 justify-center md:justify-start">
              <Link
                to="#"
                className="text-sm transition duration-150 text-slate-500 dark:text-slate-400 hover:text-slate-900"
              >
                Privacy policy
              </Link>

              <Link
                to="#"
                className="text-sm transition duration-150 text-slate-500 dark:text-slate-400 hover:text-slate-900"
              >
                Faq
              </Link>

              <Link
                to="#"
                className="text-sm transition duration-150 text-slate-500 dark:text-slate-400 hover:text-slate-900"
              >
                Email us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnderConstruction
