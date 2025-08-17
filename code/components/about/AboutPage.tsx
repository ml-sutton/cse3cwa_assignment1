"use client"
import { useContext } from "react";
import { MainCard } from "./cards/mainCard"
import { ThemeContext } from "../../utils/theme/context/themeContext";

export const AboutPage = () => {
  const themeContext = useContext(ThemeContext);
  const themedStyles = themeContext?.theme == "light" ? "bg-[#fefefe] text-[#111]" : "bg-[#333333] text-[#fefefe]"
  return (
    <div className={`w-screen flex justify-center py-8 ${themedStyles}`} >
      <MainCard />



    </div>
  )
}
