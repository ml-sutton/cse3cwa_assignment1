"use client"
import { TabsContextProvider } from "../../utils/tabs/context/tabContext";
import { TabsLayout } from "./tabs-layout/tabsLayout";

export const TabsPage = () => {
  return (
    <TabsContextProvider>
      <TabsLayout />
    </TabsContextProvider>
  )
}
