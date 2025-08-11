"use client"
import { TabsReadContextProvider } from "@/utils/tabs/context/tabReadContext";
import { TabsNav } from "./tabs-nav/tabsNav";
import { MarkdownProvider } from "@/utils/markdown-parser/context/MarkdownContext";
import { TabsForm } from "./tabs-form/tabsForm";
import { TabsOutput } from "./tabs-output/tabsOutput";

export const TabsPage = () => {
  return (
    <MarkdownProvider>
      <TabsReadContextProvider>
        <div className="flex">
          <TabsNav />
          <TabsForm />
          <TabsOutput />
        </div>
      </TabsReadContextProvider>
    </MarkdownProvider>
  )
}
