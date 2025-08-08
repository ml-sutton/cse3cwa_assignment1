"use client"

import { UseTheme } from "@/hooks/useTheme"
import { Navbar } from "./navbar"
import { TitleCard } from "./titlecard"
import { useContext } from "react"
import { ThemeContext } from "@/utils/theme/context/ThemeContext"

export const Header: React.FC = () => {
  const theme = useContext(ThemeContext);
  const themedStyles = theme == "dark" ? "bg-latrobe-dark-header fg-latrobe-dark border-[#e2231b] border-b-2" : theme == "light" ? "bg-latrobe-light-header fg-latrobe-light border-b-2 border-[#242424]" : "bg-latrobe-dark-header fg-latrobe-dark border-[#e2231b] border-b-2";
  return (
    <div className={`w-screen flex justify-end px-8 py-4 ${themedStyles}`}>
      <TitleCard />
      <Navbar />

    </div>

  )
} 
