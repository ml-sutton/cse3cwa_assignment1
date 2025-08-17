"use client"

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../utils/theme/context/themeContext";
import { TabsNav } from "../tabs-nav/tabsNav";
import { TabsForm } from "../tabs-form/tabsForm";
import { TabsOutput } from "../tabs-output/tabsOutput";
import { TabsContext } from "../../../utils/tabs/context/tabContext";
import { Tab } from "../../../utils/tabs/models/tab";
import WriteTabsToLocalStorage from "../../../utils/tabs/data-access/WriteTabsToLocalStorage";
import WriteSelectedTabToCookie from "../../../utils/tabs/data-access/WriteSelectedTabToCookie";


export const TabsLayout: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const themedStyles = themeContext?.theme == "light" ? "bg-[#fefefe] text-[#111]" : "bg-[#333333] text-[#fefefe]"
  const tabContext = useContext(TabsContext);
  const tabsValue = tabContext?.tabs ? [...tabContext.tabs] : []
  const selectedTabvalue = tabContext?.loadedTab ? tabContext.loadedTab : 0
  const [tabs, setTabs] = useState<Tab[]>(tabsValue)
  const [selectedTab, setSelectedTab] = useState<number>(selectedTabvalue);
  useEffect(() => {
    setTabs([...tabContext?.tabs as Tab[]])
    setSelectedTab(tabContext?.loadedTab as number)
  }, [tabContext?.tabs, tabContext?.loadedTab])
  useEffect(() => {
    if (tabContext?.loadedData === false || !tabContext?.loadedData) return
    if (tabs.length === 0) return
    WriteTabsToLocalStorage(tabs).then(result => {
      result ? console.log("tabs saved") : console.warn("error in tab saving, No tabs or window is undefined");
    }).catch(error => console.error(error));
  }, [tabs]);

  return (
    <section>
      <div className={`flex px-8 ${themedStyles}`}>
        <TabsNav tabs={tabs} setTabs={setTabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <TabsForm tabs={tabs} setTabs={setTabs} selectedTab={selectedTab} />
        <TabsOutput tabs={tabs} />
      </div>
    </section>
  )
}
