import { MenuItemBasic, MenuItemWithChildren } from "./menu-types"

type Some = MenuItemWithChildren | MenuItemBasic

export function isItemWithChildren(item: Some): item is MenuItemWithChildren {
  return "children" in item
}

export function isItemBasic(item: Some): item is MenuItemBasic {
  return !("children" in item) && "link" in item
}
