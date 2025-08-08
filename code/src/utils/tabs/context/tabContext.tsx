import React, { useEffect, useState } from "react";
import { Tab } from "../models/tab";
interface TabsContextProviderPropTypes {
  children: React.ReactNode
}
interface TabsContextExportType {
  tabs: Tab[];
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>;
  loadedTab: number | null;
  setLoadedTab: React.Dispatch<React.SetStateAction<number | null>>
}
export const TabsContext = React.createContext<TabsContextExportType | null>(null);
export const TabsContextProvider: React.FC<TabsContextProviderPropTypes> = ({ children }) => {
  const [tabs, setTabs] = useState<Tab[]>([])
  const [loadedTab, setLoadedTab] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    tabs.forEach((tab) => {
      const tabID = `tab:${tab.tabId.toString()}`
      if (window.localStorage.getItem(tabID)) {
        window.localStorage.removeItem(tabID)
      }
      window.localStorage.setItem(tabID, JSON.stringify(tab))
    })
    // load selected via cookie


  }, [tabs])
  useEffect(() => {
    if (tabs.length === 0) return;
    if (loadedTab === null) return;
    console.log("running")
    const cookie = document.cookie.split(";").map((cookie) => cookie.trim())
    const selectedTab = cookie.find((cookie) => cookie.startsWith("selected="))
    if (selectedTab) {
      const cookieValue = selectedTab.split("=")[1];
      if (cookieValue) {
        const parsedSelectedTabID = parseInt(cookieValue, 10);
        setLoadedTab(parsedSelectedTabID ?? null);
      }
    }
  }, [tabs, loadedTab])
  useEffect(() => {
    const tabID = loadedTab?.toString() ?? 0;
    document.cookie = `selected=${tabID}; max-age=31536000; path=/; SameSite=strict; Secure`;
  }, [loadedTab])
  useEffect(() => {
    // load local storage
    if (typeof window === "undefined") return
    const tabObjects: Tab[] = []
    for (let i = 0; i < window.localStorage.length; ++i) {
      const key = localStorage.key(i);
      if (key === null) continue;
      if (!(key.startsWith("tab:"))) continue;
      const value = localStorage.getItem(key);
      if (value === null) continue;
      try {
        const currentTab: Tab = JSON.parse(value)
        const newTabObject: Tab =
        {
          tabId: currentTab.tabId,
          tabName: currentTab.tabName,
          tabBody: currentTab.tabBody
        };
        tabObjects.push(newTabObject);

      } catch (error) {
        console.warn(error)
      }
    }
    setTabs([...tabObjects.sort((tab, nextTab) => tab.tabId - nextTab.tabId)])



  }, [])
  return (
    <TabsContext.Provider value={{ tabs, setTabs, loadedTab, setLoadedTab }}>
      {children}
    </TabsContext.Provider>
  )
} 
