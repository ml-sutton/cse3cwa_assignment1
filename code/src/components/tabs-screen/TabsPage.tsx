"use client"
import { TabsNav } from "./tabs-nav/tabsNav";
import { MarkdownProvider } from "@/utils/markdown-parser/context/MarkdownContext";

export const TabsPage = () => {
  return (
    <MarkdownProvider>
      <div className="">
        <TabsNav />
      </div>
    </MarkdownProvider>
  )
}
