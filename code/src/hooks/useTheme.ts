import { Theme } from "@/utils/theme/context/ThemeContext";
import { useEffect, useMemo, useState } from "react"


export const UseTheme = () => {
  const detectedTheme = DetectDefaultTheme();
  const [currentTheme, setTheme] = useState<Theme>(detectedTheme ? "dark" : "light");
  return [currentTheme, setTheme];
}

// detects the default browser theme. I could put some silly malicious code in here :3c 
const DetectDefaultTheme = () => {
  if (typeof window == "undefined") {
    return;
  }
  const getTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getTheme());
  const eventListenerLambda = (event: MediaQueryListEvent) => {
    setIsDarkTheme(event.matches);
  }
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", eventListenerLambda);
    return () => mediaQuery.removeEventListener("change", eventListenerLambda);
  }, [])

  return isDarkTheme;
}
