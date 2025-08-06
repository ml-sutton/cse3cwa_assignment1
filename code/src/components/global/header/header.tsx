"use client"

import { UseTheme } from "@/hooks/useTheme"
import { Navbar } from "./navbar"
import { TitleCard } from "./titlecard"
import { useContext } from "react"
import { ThemeContext } from "@/utils/theme/context/ThemeContext"

export const Header: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`w-screen flex justify-end px-8 py-4 ${theme == "dark" ? "bg-latrobe-dark fg-latrobe-dark" : theme == "light" ? "bg-latrobe-light fg-latrobe-light" : "bg-latrobe-dark fg-latrobe-dark"} `}>
      <TitleCard />
      <Navbar />

    </div>

  )
} 
