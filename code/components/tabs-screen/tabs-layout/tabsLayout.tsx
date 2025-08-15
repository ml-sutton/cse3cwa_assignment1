"use client"

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../utils/theme/context/themeContext";
import { TabsNav } from "../tabs-nav/tabsNav";
import { TabsForm } from "../tabs-form/tabsForm";
import { TabsOutput } from "../tabs-output/tabsOutput";
import { TabsContext } from "../../../utils/tabs/context/tabContext";
import { Tab } from "../../../utils/tabs/models/tab";


export const TabsLayout: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const themedStyles = themeContext?.theme == "light" ? "bg-[#fefefe] text-[#111]" : "bg-[#333333] text-[#fefefe]"
  const tabContext = useContext(TabsContext);
  const tabsValue = tabContext?.tabs ? [...tabContext?.tabs] : []
  const selectedTabvalue = tabContext?.loadedTab ? tabContext.loadedTab : 0
  const [tabs, setTabs] = useState<Tab[]>(tabsValue)
  const [selectedTab, setSelectedTab] = useState<number>(0);
  useEffect(() => {
    setTabs([...tabContext?.tabs as Tab[]])
    setSelectedTab(tabContext?.loadedTab as number)
  }, [tabContext?.tabs, tabContext?.loadedTab])
  return (
    <section>
      <div className={`flex px-8 ${themedStyles}`}>
        <TabsNav />
        <TabsForm />
        <TabsOutput />
      </div>
    </section>
  )
}
