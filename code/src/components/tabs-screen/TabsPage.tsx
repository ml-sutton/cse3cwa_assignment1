"use client"
import { ThemeContext } from "@/utils/theme/context/ThemeContext"
import { useContext } from "react"
import { TabsNav } from "./tabs-nav/tabsNav";
import { MarkdownProvider } from "@/utils/markdown-parser/context/MarkdownContext";

export const TabsPage = () => {
  const theme = useContext(ThemeContext);
  return (
    <MarkdownProvider>
      <div className="">
        <TabsNav />
      </div>
    </MarkdownProvider>
  )
}
