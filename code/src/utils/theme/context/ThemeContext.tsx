"use client"
import { UseTheme } from "@/hooks/useTheme";
import React, { useEffect } from "react";
export type Theme = "dark" | "light" | null
export const ThemeContext = React.createContext<Theme>(null);
interface ThemeProviderPropTypes {
  children: React.ReactNode
}
export const ThemeProvider: React.FC<ThemeProviderPropTypes> = ({ children }) => {
  // if theme not in local storage then disable ssr and detect them :3c 
  const [currentTheme, setTheme] = UseTheme();
  
  // logic to detect theme

  // componennt
  return (
    <ThemeContext.Provider value={currentTheme as Theme}>
      {children}
    </ThemeContext.Provider>
  )
}
