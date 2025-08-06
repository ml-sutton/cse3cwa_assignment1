"use client"
import { HamburgerButton } from "./hamburgerMenu/hamburgerButton";
import { useState } from "react";
import { HamburgerMenu } from "./hamburgerMenu/hamburgerMenu";


export const Navbar: React.FC = () => {
  const [hamburgerState, setHamburgerState] = useState(false);

  return (
    <div className="">
      <HamburgerButton isOpen={hamburgerState} changeState={setHamburgerState} />
      <div className="absolute right-0">
        <HamburgerMenu isOpen={hamburgerState} />

      </div>
    </div>
  )
}
