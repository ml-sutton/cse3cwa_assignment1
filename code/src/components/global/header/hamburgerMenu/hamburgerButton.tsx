"use client"

import { useState } from "react"

interface HamburgerButtonPropTypes {
  isOpen: boolean,
  changeState: React.Dispatch<React.SetStateAction<boolean>>
}

export const HamburgerButton: React.FC<HamburgerButtonPropTypes> = ({ isOpen, changeState }) => {
  return (
    <div className="flex justify-center items-center">
      {!isOpen ? (<>
        hamburger open</>) : (<>
          hamburger</>)}
    </div>
  )
}
