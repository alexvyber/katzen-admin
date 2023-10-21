import { NavLink } from "react-router-dom"

import { Box } from "lucide-react"
import { cx } from "cvax"

export function Logo({
  collapsed = false,
  className,
}: {
  collapsed?: boolean
  className?: string
}) {
  return (
    <NavLink
      to="/"
      className={cx("flex gap-1.5 items-center text-gray-700 dark:text-gray-200", className)}
    >
      <Box className="w-6 h-6" />
      {!collapsed && <h2 className="text-xl font-medium text-gray-900 dark:text-white">Katzen</h2>}
    </NavLink>
  )
}
