import { forwardRef } from "react"
import { Link, type LinkProps } from "react-router-dom"
import { cn } from "cvax"

import { Loader2 } from "lucide-react"

import { ButtonProps, buttonVariants } from "./button"

type Props = LinkProps & ButtonProps

const ButtonLink = forwardRef<HTMLAnchorElement, Props>(
  ({ className, variant, size, loading, children, ...props }, ref) => {
    return (
      <Link className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {loading && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
        {children}
      </Link>
    )
  }
)
ButtonLink.displayName = "ButtonLink"

export { ButtonLink, type Props as ButtonLinkProps }
