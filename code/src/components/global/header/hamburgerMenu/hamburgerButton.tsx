"use client"

import { useState } from "react"

interface HamburgerButtonPropTypes {
  isOpen: boolean,
  changeState: React.Dispatch<React.SetStateAction<boolean>>
}

export const HamburgerButton: React.FC<HamburgerButtonPropTypes> = ({ isOpen, changeState }) => {

  return (
    <div className="flex justify-center items-center w-full h-full" onClick={(_) => { changeState((prev) => prev = !isOpen) }}>
      <div className="">
        hamburber
      </div>
    </div>
  )
}
