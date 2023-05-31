import type { Config } from "tailwindcss/types/config"

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  
  theme: {
    extend: {},
  },

  plugins: [],
} satisfies Config

