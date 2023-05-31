import { MenuItem, MenuItemBasic, MenuItemChild, MenuItemHeader } from "./menu-types"

export type MenuItemVertical =
  | MenuItemBasic
  | (MenuItem & {
      children: Omit<MenuItemChild, "icon">[]
    })

export const MenuItemsVertical: (MenuItemVertical | MenuItemHeader)[] = [
  {
    isHeader: true,
    title: "Menu",
  },
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    isOpen: true,
    isHidden: true,
    children: [
      {
        title: "Some Dashboard",
        link: "dashboard",
      },
    ],
  },
  {
    title: "changelog",
    icon: "heroicons:arrow-trending-up",
    link: "changelog",
    isHidden: false,
    badge: "0.0.0",
  },
  {
    isHeader: true,
    title: "Some",
  },
  {
    title: "Chat",
    isHidden: true,
    icon: "heroicons-outline:chat",
    link: "chat",
  },

  {
    title: "Todo",
    isHidden: true,
    icon: "heroicons-outline:clipboard-check",
    link: "todo",
  },

  {
    isHeader: true,
    title: "Pages",
  },

  {
    title: "Utility Pages",
    icon: "heroicons-outline:view-boards",
    link: "#",
    isHidden: false,
    children: [
      {
        title: "Pricing",
        link: "pricing",
      },

      {
        title: "FAQ",
        link: "faq",
      },

      {
        title: "Blank page",
        link: "blank-page",
      },

      {
        title: "404 page",
        link: "/404",
      },

      {
        title: "Coming Soon",
        link: "/coming-soon",
      },
      {
        title: "Under Maintanance page",
        link: "/under-construction",
      },
    ],
  },
]
