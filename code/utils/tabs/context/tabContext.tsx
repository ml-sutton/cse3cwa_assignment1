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
}
export const TabsContext = React.createContext<TabsContextExportType | null>(null);
export const TabsContextProvider: React.FC<TabsContextProviderPropTypes> = ({ children }) => {
  const [tabs, setTabs] = useState<Tab[]>([])
  const [loadedTab, setLoadedTab] = useState<number | null>(null);
  // promise to get tabs from local storage
  // after resolving 
  useEffect(() => {
    const tabs = ReadTabsFromLocalStorage().then((tabsValue) => {
      if (tabsValue === null) return;
      setTabs(tabsValue);
      ReadSelectedTabFromCookies(tabsValue).then((cookiesValue)=>{
        if(cookiesValue===null) return;
        setLoadedTab(cookiesValue);
      }).catch((error)=> {
        console.error(error);
      })
    }).catch((error) => {
      console.error(error);
    })
    return () => {
      
    }
  }, [])





  return (
    <TabsContext.Provider value={{ tabs, loadedTab }}>
      {children}
    </TabsContext.Provider>
  )
} 
