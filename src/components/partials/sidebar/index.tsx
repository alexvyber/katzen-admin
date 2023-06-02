import { ScrollArea } from "@/components/ui"
import { MenuItemsVertical } from "@/configs/menu-items"
import { Navmenu } from "./nav-menu"
import { cx } from "cvax"
import { Logo } from "../logo"
import { useState } from "react"

export function Sidebar({ className }: React.ComponentProps<"div">) {
  const [collapsed] = useState(false)

  return (
    <div className={cx("", className)}>
      <ScrollArea className={cx("h-screen bg-white", collapsed ? "w-16 px-2" : "w-60 px-4")}>
        <div className={cx("flex pb-1.5  pt-4", collapsed && "justify-center")}>
          <Logo collapsed={collapsed} />
        </div>
        <Navmenu menuItems={MenuItemsVertical} collapsed={collapsed} />
      </ScrollArea>
    </div>
  )
}
