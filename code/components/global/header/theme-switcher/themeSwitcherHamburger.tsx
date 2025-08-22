"use client"
import { useContext, useState } from "react";

import { ThemeContext } from "../../../../utils/theme/context/themeContext";
export const ThemeSwitcherHamburger = () => {

  const theme = useContext(ThemeContext);
  const themedStyles = theme?.theme == "dark" ? "bg-latrobe-dark-navlinks fg-latrobe-dark border-[#e2231b] " : "bg-latrobe-light-navlinks fg-latrobe-light border-b-2 border-[#242424]"
  const [isDark, setIsDark] = useState<boolean>(theme?.theme == "dark" ? true : false)
  const SwapTheme = () => {
    if (theme?.theme == "dark") {
      theme?.setTheme("light")
      setIsDark(false)
    }
    else {
      theme?.setTheme("dark")
      setIsDark(true)
    }

  }
  return (
    <div className={`py-4 px-4 transition-all w-screen lg:hidden flex justify-end border-l-2 border-b-2 border-r-2 lg:border-r-0 ${themedStyles}`}>
      <div className={`flex justify-center text-center`}>

        <input
          type="checkbox"
          className="hidden nav--checkbox"
          checked={!isDark}
          onChange={SwapTheme}
          id="nav--theme-swap"
          name="nav--theme-swap"
        />
        <label className="nav--checkbox-label" htmlFor="nav--theme-swap" aria-label="Toggle dark/light themes">
          <span >toggle dark mode</span>
        </label>
      </div>
      <h1 className="ml-auto text-3xl capitalize">current theme : {theme?.theme} </h1>
    </div>
  )
}
