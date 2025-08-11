import React, { useEffect, useState } from "react";
import { Tab } from "../models/tab";

interface TabsWriteContextType {
  tabs: Tab[];
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>;
  loadedTab: number | null;
  setLoadedTab: React.Dispatch<React.SetStateAction<number | null>>
}
interface TabsWriteContextProviderPropType {
  children: React.ReactNode;
}

export const TabsWriteContext = React.createContext<TabsWriteContextType | null>(null);
export const TabsWriteContextProvider: React.FC<TabsWriteContextProviderPropType> = ({ children }) => {

  const [tabs, setTabs] = useState<Tab[]>([])
  const [loadedTab, setLoadedTab] = useState<number | null>(null);
  // writing tabs to local storage and writing cookie logic
  // whenever tabs are updated it saves them to localstorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    tabs.forEach((tab) => {
      const tabID = `tab:${tab.tabId.toString()}`
      if (window.localStorage.getItem(tabID)) {
        window.localStorage.removeItem(tabID)
      }
      window.localStorage.setItem(tabID, JSON.stringify(tab))
    })


  }, [tabs])
  return (
    <TabsWriteContext.Provider value={{ tabs, setTabs, loadedTab, setLoadedTab }}>
      {children}
    </TabsWriteContext.Provider>
  )

}
