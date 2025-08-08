"use client"

import { ThemeContext } from "@/utils/theme/context/themeContext"
import { useContext } from "react"

export const Footer: React.FC = () => {
  const theme = useContext(ThemeContext)
  const redirectFunction = (_: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    _.preventDefault();
    if (typeof window !== "undefined") {
      window.location.href = "https://github.com/ml-sutton";
    }
  }
  const themedStyles = theme?.theme == "dark" ? "bg-latrobe-dark-footer fg-latrobe-dark border-t-2 border-[#e2231b]" : "bg-latrobe-light-footer fg-latrobe-light border-t-2 border-[#242424]"
  return (
    <div className={`flex justify-center py-8 text-center text-2xl font-bold italic ${themedStyles}`}>
      <p>copyright &copy;, <span onClick={redirectFunction} className="cursor-pointer">Madison Lilith Sutton</span>, 21985164<br />August, 2025<br /><sub className="text-transparent">Currently using {theme?.theme}</sub></p>
    </div>
  )
}
