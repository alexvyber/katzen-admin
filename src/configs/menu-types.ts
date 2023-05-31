export type MenuItem = {
  title: string
  icon: string
  badge?: string
  isOpen?: boolean
  isHidden?: boolean
  isHeader?: undefined | null | false
}

export type MenuItemChild = {
  title: string
  link: string
  icon: string
}

export type MenuItemHeader = {
  title: string
  isHeader: true
}

export type MenuItemBasic =
  | ({
      link: string
    } & MenuItem)
  | MenuItemHeader

export type MenuItemWithChildren = MenuItem & {
  children: MenuItemChild[]
}

export type MenuItemWithMegamenu = MenuItemBasic & {
  megamenu: {
    megamenutitle: string
    megamenuicon: string
    singleMegamenu: {
      title: string
      link: string
    }[]
  }[]
}
