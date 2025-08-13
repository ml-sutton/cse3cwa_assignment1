"use client"
import { ThemeContext } from "../../../../utils/theme/context/themeContext";
import { useContext, useState } from "react";

export const ThemeSwitcher: React.FC = () => {
  const theme = useContext(ThemeContext);
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
  return (<div className={`flex justify-center text-center`}>

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
