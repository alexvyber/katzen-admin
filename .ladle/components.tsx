import type { GlobalProvider } from "@ladle/react"
import React from "react"

import "../dist/styles.css"

export const Provider: GlobalProvider = ({
  children,
  // globalState
}) => <div className="bg-white min-h-screen">{children}</div>
