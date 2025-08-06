"use client"
import { HamburgerButton } from "./hamburgerMenu/hamburgerButton";
import { useState } from "react";


export const Navbar: React.FC = () => {
  const [hamburgerState, setHamburgerState] = useState(false);
  
  return (
    <div className="">
      <HamburgerButton isOpen={hamburgerState} changeState={setHamburgerState} />
    </div>
  )
}
