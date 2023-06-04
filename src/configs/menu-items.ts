import { MenuItems } from "./menu-types"

export const menuItems = [
  {
    show: true,
    title: "Apps",
  },
  {
    show: true,
    title: "Project",
    icon: "lucide:folder-check",
    path: "project",
    children: [
      {
        show: true,
        title: "Dashboard",
        link: "dashboard",
      },
      {
        show: false,
        title: "Project List",
        link: "project-list",
      },
      {
        show: false,
        title: "Scrum Board",
        link: "scrum-board",
      },
      {
        show: false,
        title: "Issue",
        link: "issue",
      },
    ],
  },

  {
    show: false,
    title: "CRM",
    icon: "lucide:bar-chart-3",
    path: "crm",

    children: [
      {
        show: false,
        title: "Dashboard",
        link: "dashboard",
      },
      {
        show: false,
        title: "Calendar",
        link: "calendar",
      },
      {
        show: false,
        title: "Customers",
        link: "customers",
      },
      {
        show: false,
        title: "Customer",
        link: "customer",
      },
    ],
  },

  {
    show: false,
    title: "Ecommerce",
    icon: "lucide:banknote",
    path: "ecommerce",
    children: [
      {
        show: false,
        title: "Dashboard",
        link: "dashboard",
      },
      {
        show: false,
        title: "Products",
        link: "products",
      },
      {
        show: false,
        title: "Product",
        link: "product",
      },
      {
        show: false,
        title: "Edit Product ",
        link: "edit-product",
      },
      {
        show: false,
        title: "New Product",
        link: "new-product",
      },
      {
        show: false,
        title: "Orders",
        link: "orders",
      },
      {
        show: false,
        title: "Order",
        link: "order",
      },
    ],
  },

  {
    show: false,
    title: "Knowledge Base",
    icon: "lucide:help-circle",
    path: "knowledge-base",
    children: [
      {
        show: false,
        title: "Help Center",
        link: "help-center",
      },
      {
        show: false,
        title: "Article",
        link: "article",
      },
      {
        show: false,
        title: "Manage Content",
        link: "manage-content",
      },
      {
        show: false,
        title: "Edit Article",
        link: "edit-article",
      },
    ],
  },
  {
    show: false,
    title: "Account",
    icon: "lucide:user-circle-2",
    path: "account",
    children: [
      {
        show: false,
        title: "Settings",
        link: "settings",
      },
      {
        show: false,
        title: "Activity Log",
        link: "activity-log",
      },
    ],
  },

  {
    show: true,
    title: "Mini Apps",
  },
  {
    show: true,
    title: "Chat",
    icon: "lucide:messages-square",
    link: "chat",
  },
  {
    show: true,
    title: "Todo",
    icon: "lucide:list-checks",
    link: "todo",
  },

  {
    show: false,
    title: "Kanban",
    icon: "lucide:layout-dashboard",
    link: "kanban",
  },
  {
    show: false,
    title: "Calender",
    icon: "lucide:calendar",
    link: "calender",
  },

  // {
  //
  //   title: "UI COMPONENTS",
  // },

  {
    show: false,
    title: "Pages",
  },

  {
    show: true,
    title: "Utility Pages",
    icon: "lucide:app-window",
    path: "utility-pages",
    children: [
      {
        show: true,
        title: "Access Denied",
        link: "access-denied",
      },
      {
        show: true,
        title: "Pricing",
        link: "pricing",
      },
      {
        show: true,

        title: "FAQ",
        link: "faq",
      },
      {
        show: true,

        title: "Blank page",
        link: "blank-page",
      },
      {
        show: true,

        title: "404 page",
        link: "404",
      },
      {
        show: true,

        title: "Coming Soon",
        link: "coming-soon",
      },
      {
        show: true,

        title: "Under Maintanance page",
        link: "under-construction",
      },
    ],
  },
  {
    show: false,
    title: "Authentication",
  },
  {
    show: false,
    title: "Sign In",
    icon: "lucide:log-in",
    path: "sign-in",
    children: [
      {
        show: false,
        title: "Simple",
        link: "sign-in-simple",
      },

      {
        show: false,
        title: "Side",
        link: "sign-in-side",
      },

      {
        show: false,
        title: "Cover",
        link: "sign-in-cover",
      },
    ],
  },

  {
    show: false,
    title: "Register",
    icon: "lucide:user-plus",
    path: "register",
    children: [
      {
        show: false,
        title: "Simple",
        link: "register-simple",
      },

      {
        show: false,
        title: "Side",
        link: "register-side",
      },

      {
        show: false,
        title: "Cover",
        link: "register-cover",
      },
    ],
  },

  {
    show: false,
    title: "Forgot Password",

    icon: "lucide:shield-alert",
    path: "forgot-password",
    children: [
      {
        show: false,
        title: "Simple",
        link: "forgot-password-simple",
      },

      {
        show: false,
        title: "Side",
        link: "forgot-password-side",
      },

      {
        show: false,
        title: "Cover",
        link: "forgot-password-cover",
      },
    ],
  },

  {
    show: false,
    title: "Reset Password",

    icon: "lucide:rotate-ccw",
    path: "reset-password",
    children: [
      {
        show: false,
        title: "Simple",
        link: "reset-password-simple",
      },

      {
        show: false,
        title: "Side",
        link: "reset-password-side",
      },

      {
        show: false,
        title: "Cover",
        link: "reset-password-cover",
      },
    ],
  },

  {
    show: false,
    title: "Lock Screen",

    icon: "lucide:unlock",

    path: "lock-screen",
    children: [
      {
        show: false,
        title: "Simple",
        link: "lock-screen-simple",
      },

      {
        show: false,
        title: "Side",
        link: "lock-screen-side",
      },

      {
        show: false,
        title: "Cover",
        link: "lock-screen-cover",
      },
    ],
  },

  {
    show: true,
    title: "Welcome",
    icon: "lucide:smile",
    link: "welcome",
  },
  {
    show: true,
    title: "Changelog",
    icon: "lucide:file-clock",
    link: "changelog",
    badge: "0.0.0",
  },
]
  // TODO: rework pre-release
  .filter((item) => item.show)
  .map((item) => {
    return {
      ...item,
      ...("children" in item ? { children: item?.children?.filter((item) => item.show) } : {}),
    }
  }) satisfies MenuItems
