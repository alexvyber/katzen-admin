import { NavLink } from "react-router-dom"

import { Box } from "lucide-react"

export function Logo() {
  return (
    <NavLink to="/dashboard">
      <div className="flex gap-4 items-center py-6 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
        <Box className="w-7 h-7" />
        <div>
          <h2 className="text-xl font-bold">Katzen Admin</h2>
        </div>
      </div>
    </NavLink>
  )
}
