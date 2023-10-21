import type { Config } from "tailwindcss/types/config"

import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.sky,
          DEFAULT: colors.sky[300],
        },
        secondary: colors.teal,
        danger: colors.red,
        black: colors.slate,
        warning: colors.amber,
        info: colors.blue,
        success: colors.teal,
        gray: colors.slate,
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      spacing: {
        ...defaultTheme.spacing,
        ...getSpacingRange({
          start: 0,
          numberOfNewSteps: 1000,
          step: 0.25,
        }),
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

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [],
} satisfies Config

function getSpacingRange({
  start,
  numberOfNewSteps,
  step = 1,
}: {
  start: number
  numberOfNewSteps: number
  step?: number
}): Record<string, string> {
  const spacing: Record<string, string> = {}

  const cof = step * 4
  const limit = start + numberOfNewSteps * cof

  for (let i = start + cof; i < limit; i = i + cof) {
    Object.assign(spacing, { [`${i}`]: `${i / 4}rem` })
  }

  return spacing as any
}
