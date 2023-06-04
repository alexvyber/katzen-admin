import { NavLink } from "react-router-dom"

import { Box } from "lucide-react"

export function Logo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <NavLink to="/dashboard">
      <div className="flex gap-4 items-center text-gray-700 dark:text-gray-200">
        <Box className="w-7 h-7" />
        {!collapsed && <h2 className="text-xl font-bold text-gray-900 dark:text-white">Katzen</h2>}
      </div>
    </NavLink>
  )
}
