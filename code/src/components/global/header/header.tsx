"use client"

import { Navbar } from "./navbar"
import { TitleCard } from "./titlecard"
import { useContext } from "react"
import { ThemeContext } from "@/utils/theme/context/ThemeContext"

export const Header: React.FC = () => {
  const theme = useContext(ThemeContext);
  const themedStyles = theme?.theme == "dark" ? "bg-latrobe-dark-header fg-latrobe-dark border-[#e2231b] border-b-2" : "bg-latrobe-light-header fg-latrobe-light border-b-2 border-[#242424]";
  return (
    <div className={`w-screen flex justify-end px-8 py-4 ${themedStyles}`}>
      <TitleCard />
      {/* theme switcher */}
      <Navbar />

    </div>

  )
} 
