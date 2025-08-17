"use client"
import React, { useEffect, useState } from "react";
export type Theme = "dark" | "light" | null

export interface ThemeContextType {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}
export const ThemeContext = React.createContext<ThemeContextType | null>(null);
interface ThemeProviderPropTypes {
  children: React.ReactNode
}
export const ThemeProvider: React.FC<ThemeProviderPropTypes> = ({ children }) => {
  const loadLocalTheme = (): Theme | null => {
    if (typeof window === 'undefined') return null;

    const currentTheme = window.localStorage.getItem("currentTheme");
    if (currentTheme == "dark" || currentTheme == "light") return currentTheme
    return null;
  }
  const loadSystemTheme = (): Theme => {
    if (typeof window === 'undefined') return null
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  const eventListenerLambda = (event: MediaQueryListEvent) => {
    if (typeof window === "undefined") return
    if (!loadLocalTheme) {
      window.localStorage.setItem("currentTheme", event.matches ? "dark" : "light");
    }
  }
  const [theme, setTheme] = useState<Theme>(() => {
    const localTheme = loadLocalTheme();
    const systemTheme = loadSystemTheme();
    const defaultTheme = "dark";
    if (loadLocalTheme != null) return localTheme
    if (loadSystemTheme != null) return systemTheme
    return defaultTheme;
  });
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", eventListenerLambda);
    return () => mediaQuery.removeEventListener("change", eventListenerLambda);
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    // Save theme to localStorage when it changes
    if (typeof window === "undefined") return;
    if (theme === "dark" || theme === "light") {
      window.localStorage.setItem("currentTheme", theme);
    }
  }, [theme]);



  // componennt
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
