"use client"

import { Navbar } from "./navbar"
import { TitleCard } from "./titlecard/titlecard"
import { useContext } from "react"
import { ThemeContext } from "../../../utils/theme/context/themeContext"
import { ThemeSwitcher } from "./theme-switcher/themeSwitcher"

export const Header: React.FC = () => {
  const theme = useContext(ThemeContext);
  const themedStyles = theme?.theme == "dark" ? "bg-latrobe-dark-header fg-latrobe-dark border-[#e2231b] border-b-2" : "bg-latrobe-light-header fg-latrobe-light border-b-2 border-[#242424]";
  return (
    <header className="">
      <div className={`w-screen flex justify-center lg:justify-end px-8 py-4 ${themedStyles}`}>
        <TitleCard />
        <div className="flex items-center ml-auto gap-4">
          <div className="hidden lg:block">
            <ThemeSwitcher />
          </div>
          <Navbar />
        </div>
      </div>
    </header>

  )
} 
