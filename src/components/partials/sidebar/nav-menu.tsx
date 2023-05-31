import { cn, cx } from "cvax"

import { NavLink } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui"
import { MenuItemVertical } from "@/configs/menu-items"
import { isItemBasic, isItemHeader, isItemWithChildren } from "@/configs/menu-utils"
import { Icons } from "@/components/icons"

export function Navmenu({ menuItems }: { menuItems: MenuItemVertical[] }) {
  return (
    <Accordion type="single" collapsible className="flex flex-col">
      {menuItems.map((item, index) => {
        if (isItemHeader(item)) {
          return (
            <div
              key={`${item.title}-${index}`}
              className="my-4 text-xs font-semibold uppercase text-slate-800 dark:text-slate-300"
            >
              {item.title}
            </div>
          )
        }

        if (isItemBasic(item)) {
          return (
            <NavLink
              className="flex items-center py-2 px-2.5 text-sm font-semibold capitalize rounded-lg text-slate-600 dark:text-slate-300"
              to={item.link}
            >
              <span className="inline-flex flex-grow-0 items-center mr-3 text-lg text-slate-600 dark:text-slate-300">
                <Icons icon={item.icon} />
              </span>
              <div className="flex-grow">{item.title}</div>
              {item.badge && (
                <span className="inline-flex py-1 px-2 text-xs font-semibold align-baseline whitespace-nowrap rounded-md bg-slate-900 text-slate-50 dark:bg-slate-700 dark:text-slate-300">
                  {item.badge}
                </span>
              )}
            </NavLink>
          )
        }

        if (isItemWithChildren(item)) {
          return (
            <AccordionItem value={index.toString()} className="border-none">
              <AccordionTrigger
                className={cx(
                  "flex cursor-pointer rounded-lg px-2.5 py-2 text-sm font-semibold capitalize text-slate-600 dark:text-slate-300",
                  "data-[state='open']:bg-secondary-500 data-[state='open']:bg-opacity-20"
                )}
              >
                <div className="flex flex-1 items-start">
                  <span className="inline-flex items-center mr-3 text-lg icon-box text-slate-600 dark:text-slate-300">
                    <Icons icon={item.icon} />
                  </span>
                  <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {item.children?.map((subMenuItem, index) => (
                  <NavLink
                    to={subMenuItem.link}
                    key={`${subMenuItem.link}-${index}`}
                    className="block pr-1 pl-3 mb-3 first:mt-3"
                  >
                    {({ isActive }) => (
                      <span
                        className={cx(
                          "flex items-center gap-3 text-sm",
                          isActive
                            ? " text-black font-medium dark:text-white"
                            : "text-slate-600 dark:text-slate-300"
                        )}
                      >
                        <span
                          className={cn(
                            isActive
                              ? "dark:bg-slate-300 border-slate-600 bg-slate-600"
                              : "border-slate-300",
                            "inline-block h-2.5 w-2.5 flex-none rounded-full border-2  dark:border-white"
                          )}
                        ></span>
                        <span className="flex-1">{subMenuItem.title}</span>
                      </span>
                    )}
                  </NavLink>
                ))}
              </AccordionContent>
            </AccordionItem>
          )
        }

        // TODO: Remove dev time
        throw new Error("Should be unreacheable")
      })}
    </Accordion>
  )
}
