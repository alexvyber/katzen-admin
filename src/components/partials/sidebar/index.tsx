import { ScrollArea, Viewport } from "@/components/ui"
import { menuItems } from "@/configs/menu-items"
import { ItemTrigger, Navmenu, triggerVariants } from "./nav-menu"
import { cx } from "cvax"
import { Logo } from "../logo"
import useMenuCollapsed from "@/hooks/use-menu-collapsed"
import { Icons } from "@/components/icons"
import { memo } from "react"

const Sidebar = memo(function Sidebar() {
  const [collapsed, setCollapsed] = useMenuCollapsed()

  return (
    <ScrollArea className={cx("h-screen ", collapsed ? "w-20 px-2" : "w-60 px-4", "z-50")}>
      <Viewport className="flex flex-col gap-6">
        <div className={cx("flex pb-1.5  pt-4", collapsed && "justify-center")}>
          <Logo collapsed={collapsed} />
        </div>

        <Navmenu menuItems={menuItems} collapsed={collapsed} />

        <CollapseButton collapsed={collapsed} setCollapsed={setCollapsed} />
      </Viewport>
    </ScrollArea>
  )
})

// REFACTOR
function CollapseButton({
  collapsed,
  setCollapsed,
}: { collapsed: boolean; setCollapsed: ReturnType<typeof useMenuCollapsed>[1] }) {
  return collapsed ? (
    <button
      className={cx(triggerVariants(), "p-0 group  cursor-pointer relative")}
      onClick={() => setCollapsed(!collapsed)}
    >
      <Icons icon="lucide:maximize" className="w-6 h-6" />
    </button>
  ) : (
    <button
      className={cx(
        "flex cursor-pointer rounded-lg  text-sm font-semibold capitalize text-gray-600 dark:text-gray-300",
        "data-[state='open']:bg-secondary-500 data-[state='open']:bg-opacity-20",
        triggerVariants()
      )}
      onClick={() => setCollapsed(!collapsed)}
    >
      <ItemTrigger
        item={{
          title: "Collapse",
          icon: "lucide:minimize",
        }}
      />
    </button>
  )
}

export { Sidebar, Sidebar as default }
