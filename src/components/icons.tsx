"use client"

import { Icon } from "@iconify/react"

export const Icons = ({
  icon,
  className,
  width,
  rotate,
  hFlip,
  vFlip,
}: React.ComponentProps<typeof Icon>) => (
  <Icon
    width={width}
    rotate={rotate}
    hFlip={hFlip}
    icon={icon}
    className={className}
    vFlip={vFlip}
  />
)
