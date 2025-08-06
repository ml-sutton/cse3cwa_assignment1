"use client"

import { UseTheme } from "@/hooks/useTheme"
import { Navbar } from "./navbar"
import { TitleCard } from "./titlecard"
import { useContext } from "react"
import { ThemeContext } from "@/utils/theme/context/ThemeContext"

export const Header: React.FC = () => {
  const theme = useContext(ThemeContext);
  const themeColours = theme == "dark" ? "bg-latrobe-dark fg-latrobe-dark" : "bg-latrobe-light fg-latrobe-light"
  return (
    <div className={`${themeColours} w-screen flex justify-end px-8 py-4`}>
      <TitleCard />
      <Navbar />
    </div>

  )
} 
