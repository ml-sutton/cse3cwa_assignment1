"use client"
import { TabsContextProvider } from "@/utils/tabs/context/tabContext";
import { TabsNav } from "./tabs-nav/tabsNav";
import { MarkdownProvider } from "@/utils/markdown-parser/context/MarkdownContext";
import { TabsForm } from "./tabs-form/tabsForm";
import { TabsOutput } from "./tabs-output/tabsOutput";
import { useContext } from "react";
import { ThemeContext } from "@/utils/theme/context/themeContext";
export const TabsPage = () => {
  const themeContext = useContext(ThemeContext);
  const themedStyles = themeContext?.theme == "light" ? "bg-[#fefefe] text-[#111]" : "bg-[#333333] text-[#fefefe]"
  return (
    <MarkdownProvider>
      <TabsContextProvider>
        <div className={`flex px-8 ${themedStyles}`}>
          <TabsNav />
          <TabsForm />
          <TabsOutput />
        </div>
      </TabsContextProvider>
    </MarkdownProvider>
  )
}
