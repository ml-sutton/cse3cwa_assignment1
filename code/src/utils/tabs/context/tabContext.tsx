import React, { useState } from "react";
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


  return (
    <TabsContext.Provider value={{ tabs, setTabs, loadedTab, setLoadedTab }}>
      {children}
    </TabsContext.Provider>
  )
} 
