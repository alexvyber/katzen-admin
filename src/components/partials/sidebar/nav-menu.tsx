import { cn, cvax, cx } from "cvax"

import { NavLink } from "react-router-dom"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Separator,
} from "@/components/ui"
import { MenuItemVertical } from "@/configs/menu-items"
import { isItemBasic, isItemHeader, isItemWithChildren } from "@/configs/menu-utils"
import { Icons } from "@/components/icons"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { MenuItem } from "@/configs/menu-types"

const triggerVariants = cvax({
  base: "flex gap-3 justify-center w-full items-center text-sm font-semibold capitalize rounded-lg text-slate-600 dark:text-slate-300 px-2 py-2",
  variants: {},
})

export function Navmenu({
  menuItems,
  collapsed = false,
}: { menuItems: MenuItemVertical[]; collapsed?: boolean }) {
  return (
    <>
      {!collapsed ? (
        <Accordion type="single" collapsible className="flex flex-col">
          {menuItems.map((item, index) => {
            if (isItemHeader(item)) {
              return (
                <div
                  key={`${item.title}-${index}`}
                  className="flex items-center h-9 text-xs font-semibold uppercase text-slate-800 dark:text-slate-300"
                >
                  {item.title}
                </div>
              )
            }

            if (isItemBasic(item)) {
              return <ItemBasic key={`${item.link}-${index}`} item={item} />
            }

            if (isItemWithChildren(item)) {
              if (!collapsed)
                return (
                  <AccordionItem
                    key={`${item.title}-${index}`}
                    value={index.toString()}
                    className="border-none"
                  >
                    <AccordionTrigger
                      className={cx(
                        "flex cursor-pointer rounded-lg  text-sm font-semibold capitalize text-slate-600 dark:text-slate-300",
                        "data-[state='open']:bg-secondary-500 data-[state='open']:bg-opacity-20",
                        triggerVariants()
                      )}
                    >
                      <ItemTrigger item={item} />
                    </AccordionTrigger>
                    <AccordionContent className="pb-3">
                      {item.children?.map((subMenuItem, index) => (
                        <NavLink
                          to={subMenuItem.link}
                          key={`${subMenuItem.link}-${index}`}
                          className="block pr-1 pl-3 mb-1 first:mt-3"
                        >
                          {({ isActive }) => (
                            <div
                              className={cx(
                                "flex items-center gap-3 text-sm",
                                isActive
                                  ? " text-black font-medium dark:text-white"
                                  : "text-slate-600 dark:text-slate-300"
                              )}
                            >
                              <span
                                className={cn(
                                  "inline-block h-2.5 w-2.5 flex-none rounded-full border-2  dark:border-white",
                                  isActive
                                    ? "dark:bg-slate-300 border-slate-600 bg-slate-600"
                                    : "border-slate-300"
                                )}
                              />
                              <span className="flex-1">{subMenuItem.title}</span>
                            </div>
                          )}
                        </NavLink>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                )

              if (collapsed) return null
            }

            // TODO: Remove dev time
            throw new Error("Should be unreacheable")
          })}
        </Accordion>
      ) : (
        <Menubar className="flex flex-col gap-3 items-start border-none">
          {menuItems.map((item, index) => {
            if (isItemHeader(item)) {
              return <Separator className="my-2" />
            }

            if (isItemBasic(item)) {
              return (
                <NavLink
                  key={`${item.title}-${index}`}
                  className={triggerVariants()}
                  to={item.link}
                >
                  <ItemIcon icon={item.icon} />
                </NavLink>
              )
            }

            if (isItemWithChildren(item)) {
              return (
                <MenubarMenu key={`${item.title}-${index}`}>
                  <MenubarTrigger className={cx(triggerVariants(), "p-0")}>
                    <ItemIcon icon={item.icon} />
                  </MenubarTrigger>
                  <MenubarContent
                    className="absolute left-14"
                    style={{ top: `-${item.children.length * 20}px` }}
                  >
                    {item.children?.map((subMenuItem, index) => (
                      <MenubarItem
                        asChild
                        key={`${subMenuItem.link}-${index}`}
                        className="block cursor-pointer"
                      >
                        <NavLink to={subMenuItem.link}>
                          {({ isActive }) => (
                            <div
                              className={cx(
                                "flex items-center gap-3 text-sm",
                                isActive
                                  ? " text-black font-medium dark:text-white"
                                  : "text-slate-600 dark:text-slate-300"
                              )}
                            >
                              <span
                                className={cn(
                                  "inline-block h-2.5 w-2.5 flex-none rounded-full border-2  dark:border-white",
                                  isActive
                                    ? "dark:bg-slate-300 border-slate-600 bg-slate-600"
                                    : "border-slate-300"
                                )}
                              />
                              <span className="flex-1">{subMenuItem.title}</span>
                            </div>
                          )}
                        </NavLink>
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              )
            }

            // TODO: Remove dev time
            throw new Error("Should be unreacheable")
          })}
        </Menubar>
      )}
    </>
  )
}

function ItemBasic({
  item,
}: {
  item: Required<
    {
      link: string
    } & MenuItem
  >
}) {
  return (
    <NavLink className={triggerVariants()} to={item.link}>
      <ItemTrigger item={item} />
    </NavLink>
  )
}

function ItemIcon({ icon }: { icon: string }) {
  return (
    <span className="inline-flex flex-grow-0 items-center text-lg text-slate-600 dark:text-slate-300">
      <Icons icon={icon} className="w-6 h-6" />
    </span>
  )
}

function ItemTrigger({ item }: { item: any }) {
  return (
    <div className="flex flex-1 gap-2 items-center">
      <ItemIcon icon={item.icon} />
      <div className="flex-grow text-start">{item.title}</div>
      {item.badge && (
        <span className="inline-flex py-1 px-2 text-xs font-semibold align-baseline whitespace-nowrap rounded-md bg-slate-900 text-slate-50 dark:bg-slate-700 dark:text-slate-300">
          {item.badge}
        </span>
      )}
    </div>
  )
}
