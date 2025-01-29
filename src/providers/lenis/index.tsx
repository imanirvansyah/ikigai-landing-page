"use client"

import { ReactLenis } from "lenis/react"

const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default LenisProvider;