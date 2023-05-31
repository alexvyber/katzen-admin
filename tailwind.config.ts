import type { Config } from "tailwindcss/types/config"

import colors from "tailwindcss/colors"

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        secondary: colors.indigo,
        danger: colors.red,
        black: colors.slate,
        warning: colors.amber,
        info: colors.blue,
        success: colors.teal,
        gray: colors.slate
      },

      screens: {
        "3xs": "320px",
        "2xs": "384px",
        xs: "512px",
        sm: "640px",
        md: "768px",
        "2md": "896px",
        lg: "1024px",
        "2lg": "1152px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  plugins: [],
} satisfies Config

