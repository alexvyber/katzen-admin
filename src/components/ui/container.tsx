import { VariantProps, cvax } from "cvax"

const config = {
  base: "",
  variants: {
    variant: {
      one: "container mx-auto px-4 sm:px-6 lg:px-8", // constrained to breakpoint with padded content
      two: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", // constrained with padded content
      three: "container mx-auto sm:px-6 lg:px-8", // full width on mobile constrained to breakpoint with padded content above mobile
      four: "mx-auto max-w-7xl sm:px-6 lg:px-8", // full width on mobile constrained with padded content above
      five: "mx-auto base:max-w-base px-2 2xs:px-3 xs:px-4 base:px-0", // constrained to breakpoint with no padded content after
    },
    defaultVariants: {
      variant: "six",
    },
  },
} as const

const variants = cvax(config)

type Props = VariantProps<typeof variants> & React.ComponentProps<"div">

export const Container = ({ variant = "one", className, ...props }: Props) => {
  return <section className={variants({ variant, className })} {...props} />
}
