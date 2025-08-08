"use client"
import { ThemeContext } from "@/utils/theme/context/ThemeContext";
import { useContext, useState } from "react";

export const ThemeSwitcher: React.FC = () => {
  const theme = useContext(ThemeContext);
  const [isDark, setIsDark] = useState<boolean>(theme?.theme == "dark" ? true : false)
  const SwapTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (theme?.theme == "dark") {
      theme?.setTheme("light")
      setIsDark((prev) => prev = false)
    }
    else {
      theme?.setTheme("dark")
      setIsDark((prev) => prev = true)
    }
  }
  const themedStyles = theme?.theme == "dark" ? "bg-latrobe-dark-header fg-latrobe-dark border-[#e2231b]" : "bg-latrobe-light-header fg-latrobe-light border-b-2 border-[#242424]"
  return (<div className={`flex justify-center py-4 px-4 w-full text-center border-l-2 border-b-2 ${themedStyles}`}>

    <input
      type="checkbox"
      className="hidden checkbox"
      checked={!isDark}
      onChange={SwapTheme}
      id="theme-swap"
      name="theme-swap"
    />
    <label className="checkbox-label" htmlFor="theme-swap" aria-label="Toggle dark/light themes">
      <span >toggle dark mode</span>
    </label>
  </div>)
}
