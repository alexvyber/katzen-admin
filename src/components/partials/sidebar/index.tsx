import { ScrollArea } from "@/components/ui"
import { Navmenu } from "./nav-menu"
import { MenuItemsVertical } from "@/configs/menu-items"
import { cx } from "cvax"
import { Logo } from "../logo"

export function Sidebar({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cx("", className)}>
      <ScrollArea className="px-4 w-60 h-screen bg-white">
        <Logo />
        <Navmenu menuItems={MenuItemsVertical} />
      </ScrollArea>
    </div>
  )
}
