import type { MenuItemVertical } from "./menu-items"
import {
  MenuItemBasic,
  MenuItemHeader,
  MenuItemWithChildren,
  MenuItemWithMegamenu,
} from "./menu-types"

export function isItemWithChildren(
  item: MenuItemVertical | MenuItemHeader
): item is MenuItemWithChildren {
  return "children" in item
}

export function isItemWithMegaMenu(
  item: MenuItemVertical | MenuItemHeader
): item is MenuItemWithMegamenu {
  return "megamenu" in item
}

export function isItemBasic(item: MenuItemVertical): item is Required<MenuItemBasic> {
  return !("children" in item || "megamenu" in item)
}

export function isItemHeader(item: MenuItemVertical): item is MenuItemHeader {
  return Boolean(item.isHeader)
}
