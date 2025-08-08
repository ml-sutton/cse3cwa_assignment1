"use client"
import { TabsContextProvider } from "@/utils/tabs/context/tabContext";
import { TabsNav } from "./tabs-nav/tabsNav";
import { MarkdownProvider } from "@/utils/markdown-parser/context/MarkdownContext";
import { TabsForm } from "./tabs-form/tabsForm";
import { TabsOutput } from "./tabs-output/tabsOutput";

export const TabsPage = () => {
  return (
    <MarkdownProvider>
      <TabsContextProvider>
        <div className="flex">
          <TabsNav />
          <TabsForm />
          <TabsOutput />
        </div>
      </TabsContextProvider>
    </MarkdownProvider>
  )
}
