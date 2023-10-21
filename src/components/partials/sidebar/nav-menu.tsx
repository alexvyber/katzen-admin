// REFACTOR:

import { cvax, cx } from "cvax"

import { NavLink } from "react-router-dom"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Separator,
} from "@/components/ui"

import { Icons } from "@/components/ui/icons"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { isItemBasic, isItemWithChildren } from "@/configs/menu-utils"
import { MenuItemBasic, MenuItems } from "@/configs/menu-types"
import { cn } from "@/lib/utils"

export const triggerVariants = cvax({
  base: "flex gap-3 justify-center w-full items-center text-sm font-semibold capitalize rounded-lg text-gray-600 dark:text-gray-300 px-2 py-2",
  variants: {},
})

export function Navmenu({
  menuItems,
  collapsed = false,
}: {
  menuItems: MenuItems
  collapsed?: boolean
}) {
  return !collapsed ? (
    <ExpandedMenu menuItems={menuItems} />
  ) : (
    <CollapsedMenu menuItems={menuItems} />
  )
}

export function ExpandedMenu({
  menuItems,
  onItemClick,
}: {
  menuItems: MenuItems
  onItemClick?: () => void
}) {
  return (
    <Accordion type="single" collapsible className="flex flex-col">
      {menuItems.map((item, index) => {
        if (!("link" in item || "path" in item)) {
          return (
            <div
              key={`${item.title}-${index}`}
              className="flex items-center h-9 text-xs font-semibold text-gray-800 uppercase dark:text-gray-300"
            >
              {item.title}
            </div>
          )
        }

        if (isItemBasic(item)) {
          return (
            <button type="button" onClick={onItemClick}>
              <ItemBasic key={`${item.link}-${index}`} item={item} />
            </button>
          )
        }

        if (isItemWithChildren(item)) {
          return (
            <AccordionItem
              key={`${item.title}-${index}`}
              value={index.toString()}
              className="border-none"
            >
              <AccordionTrigger
                className={cx(
                  "flex cursor-pointer rounded-lg  text-sm font-semibold capitalize text-gray-600 dark:text-gray-300",
                  "data-[state='open']:bg-primary-500 data-[state='open']:bg-opacity-20",
                  triggerVariants()
                )}
              >
                <ItemTrigger item={item} />
              </AccordionTrigger>
              <AccordionContent className="pb-3">
                {item.children?.map((subMenuItem, index) => (
                  <NavLink
                    to={`${item.path}/${subMenuItem.link}`}
                    key={`${subMenuItem.link}-${index}`}
                    className="block pr-1 pl-3 mb-1 first:mt-3"
                    onClick={onItemClick}
                  >
                    {({ isActive }) => (
                      <div
                        className={cx(
                          "flex items-center gap-3 text-sm",
                          isActive
                            ? " text-black font-medium dark:text-white"
                            : "text-gray-600 dark:text-gray-300"
                        )}
                      >
                        <span
                          className={cn(
                            "inline-block h-2.5 w-2.5 flex-none rounded-full border-2  dark:border-white",
                            isActive
                              ? "dark:bg-gray-300 border-gray-600 bg-gray-600"
                              : "border-gray-300"
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
        }

        never(item)
      })}
    </Accordion>
  )
}

function CollapsedMenu({ menuItems }: { menuItems: MenuItems }) {
  return (
    <Menubar className="flex flex-col gap-3 items-start bg-transparent border-none">
      {menuItems.map((item, index) => {
        if (!("link" in item || "path" in item)) {
          return <Separator className="my-2" />
        }

        if (isItemBasic(item)) {
          return (
            <NavLink key={`${item.title}-${index}`} className={triggerVariants()} to={item.link}>
              <ItemIcon icon={item.icon} />
            </NavLink>
          )
        }

        if (isItemWithChildren(item)) {
          return (
            <MenubarMenu key={`${item.title}-${index}`}>
              <MenubarTrigger
                className={cx(triggerVariants(), "p-0 group  cursor-pointer relative")}
              >
                <ItemIcon icon={item.icon} />
                <Icons
                  icon="lucide:chevron-right"
                  className="absolute right-0 flex-none w-3.5 h-3.5 text-gray-500 group-hover:scale-125"
                />
              </MenubarTrigger>
              <MenubarContent
                className="absolute left-18"
                style={{ top: `-${item.children.length * 20}px` }}
              >
                {item.children?.map((subMenuItem, index) => (
                  <MenubarItem
                    asChild
                    key={`${subMenuItem.link}-${index}`}
                    className="block cursor-pointer"
                  >
                    <NavLink to={`${item.path}/${subMenuItem.link}`}>
                      {({ isActive }) => (
                        <div
                          className={cx(
                            "flex items-center gap-3 text-sm",
                            isActive
                              ? " text-black font-medium dark:text-white"
                              : "text-gray-600 dark:text-gray-300"
                          )}
                        >
                          <span
                            className={cn(
                              "inline-block h-2.5 w-2.5 flex-none rounded-full border-2  dark:border-white",
                              isActive
                                ? "dark:bg-gray-300 border-gray-600 bg-gray-600"
                                : "border-gray-300"
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
        never(item)
      })}
    </Menubar>
  )
}

// REFACTOR: extract
function ItemBasic({ item }: { item: MenuItemBasic }) {
  return (
    <NavLink className={triggerVariants()} to={item.link}>
      <ItemTrigger item={item} />
    </NavLink>
  )
}

// REFACTOR: extract
function ItemIcon({ icon }: { icon: string }) {
  return (
    <span className="inline-flex flex-grow-0 items-center text-lg text-gray-600 dark:text-gray-300">
      <Icons icon={icon} className="w-6 h-6" />
    </span>
  )
}

// REFACTOR: extract
export function ItemTrigger({
  item,
}: {
  item: { title: string; icon: string; badge?: string }
}) {
  return (
    <div className="flex flex-1 gap-2 items-center">
      <ItemIcon icon={item.icon} />
      <div className="flex-grow text-start">{item.title}</div>
      {item.badge && (
        <span className="inline-flex py-1 px-2 text-xs font-semibold text-gray-50 align-baseline whitespace-nowrap bg-gray-900 rounded-md dark:text-gray-300 dark:bg-gray-700">
          {item.badge}
        </span>
      )}
    </div>
  )
}

function never(arg: never): asserts arg is never {
  throw new Error(`arg must be type of never, got: ${typeof arg}`)
}
