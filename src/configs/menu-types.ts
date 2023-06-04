export type MenuItemChild = {
  title: string
  link: string
  show: boolean
}

export type MenuItemHeader = {
  title: string
  show: boolean
}

export type MenuItemBasic = {
  title: string
  icon: string
  badge?: string
  link: string
  show: boolean
}

export type MenuItemWithChildren = {
  title: string
  icon: string
  badge?: string
  path: string
  show: boolean
  children: MenuItemChild[]
}

export type MenuItems = (MenuItemBasic | MenuItemHeader | MenuItemWithChildren)[]
