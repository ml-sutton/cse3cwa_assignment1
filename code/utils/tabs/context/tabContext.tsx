import React, { useEffect, useReducer, useState } from "react";
import { Tab } from "../models/tab";
import ReadTabsFromLocalStorage from "../data-access/ReadTabsFromLocalStorage";
import ReadSelectedTabFromCookies from "../data-access/ReadSelectedTabFromCookies";
interface TabsContextProviderPropTypes {
  children: React.ReactNode
}
interface TabsContextExportType {
  tabs: Tab[];
  loadedTab: number | null;
  loadedData: boolean
  tabCount: number
}
export const TabsContext = React.createContext<TabsContextExportType | null>(null);
export const TabsContextProvider: React.FC<TabsContextProviderPropTypes> = ({ children }) => {
  const [tabs, setTabs] = useState<Tab[]>([])
  const [loadedTab, setLoadedTab] = useState<number | null>(null);
  const [loadedData, setLoadedData] = useState<boolean>(false);
  const [tabCount, setTabCount] = useState<number>(0);
  // promise to get tabs from local storage
  // after resolving 
  useEffect(() => {
    ReadTabsFromLocalStorage().then((tabsValue) => {
      if (tabsValue === null) {
        setLoadedData(false);
        return;
      }
      setTabs(tabsValue);
      setTabCount(tabsValue.length);
      setLoadedData(true);
      ReadSelectedTabFromCookies(tabsValue).then((cookiesValue) => {
        if (cookiesValue === null) return;
        setLoadedTab(cookiesValue + 1);
      }).catch((error) => {
        console.error(error);
      })
    }).catch((error) => {
      console.error(error);
    })

    return () => {

    }
  }, [])





  return (
    <TabsContext.Provider value={{ tabs, loadedTab, loadedData, tabCount }}>
      {children}
    </TabsContext.Provider>
  )
} 
