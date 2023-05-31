import { forwardRef } from "react"
import { VariantProps, cn, cvax } from "cvax"

import { Loader2 } from "lucide-react"

const variants = cvax({
  base: [
    "inline-flex items-center justify-center text-sm font-medium transition-colors",
    "dark:hover:bg-slate-800 dark:hover:text-slate-100",
    "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
    "dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-95",
  ],
  variants: {
    variant: {
      default: "bg-accent text-black hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
      // destructive: "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
      outline: "bg-transparent text-left ring-1 ring-dark hover:ring-2 ",
      // subtle:
      // "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
      ghost: [
        "bg-transparent hover:bg-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        // "dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 ",
      ],
      // link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
    },
    size: {
      default: "py-4 px-5",
      sm: "h-9 px-2 rounded-md",
      lg: "h-11 px-8 rounded-md",
    },
    rounded: {
      default: "rounded-md",
      none: "rounded-none",
      sm: "rounded-sm",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-xl md:rounded-2xl",
    },
    mode: {
      dark: "",
      light: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    rounded: "2xl",
  },
  compoundVariants: [
    {
      variant: "outline",
      mode: "dark",
      className: ["ring-white text-white"],
    },
  ],
})

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & { loading?: boolean }

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, size, rounded, children, mode, loading, ...props }, ref) => {
    return (
      <button
        className={cn(variants({ variant, size, rounded, className, mode }))}
        ref={ref}
        {...props}
      >
        {loading && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, variants as buttonVariants, type Props as ButtonProps }
