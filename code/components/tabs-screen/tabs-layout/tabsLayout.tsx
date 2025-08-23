"use client"

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../utils/theme/context/themeContext";
import { TabsNav } from "../tabs-nav/tabsNav";
import { TabsForm } from "../tabs-form/tabsForm";
import { TabsOutput } from "../tabs-output/tabsOutput";
import { TabsContext } from "../../../utils/tabs/context/tabContext";
import { Tab } from "../../../utils/tabs/models/tab";
import WriteTabsToLocalStorage from "../../../utils/tabs/data-access/WriteTabsToLocalStorage";


export const TabsLayout: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const themedStyles = themeContext?.theme == "light" ? "bg-gradient-to-r from-slate-300 to-slate-500 text-[#111]" : "bg-gradient-to-r from-slate-900 to-slate-700 text-[#fefefe]"
  const tabContext = useContext(TabsContext);
  const tabsValue = tabContext?.tabs ? [...tabContext.tabs] : []
  const selectedTabvalue = tabContext?.loadedTab ? tabContext.loadedTab : 0
  const tabCountValue = tabContext?.tabCount ? tabContext.tabCount : 0;
  const [tabs, setTabs] = useState<Tab[]>(tabsValue)
  const [selectedTab, setSelectedTab] = useState<number>(selectedTabvalue);
  const [tabCount, setTabCount] = useState(tabCountValue);
  const [loadedData, setLoadedData] = useState<boolean>(false);
  useEffect(() => {
    setTabs([...tabContext?.tabs as Tab[]])
    setSelectedTab(tabContext?.loadedTab as number)
    setTabCount(tabContext?.tabCount as number);
  }, [tabContext?.tabs, tabContext?.loadedTab, tabContext?.tabCount])
  useEffect(() => {
    if (tabContext?.loadedData === false || !tabContext?.loadedData) {
      return
    }
    if (tabs.length === 0) {
      setTabCount(tabs.length);
      return;
    }
    WriteTabsToLocalStorage(tabs).then(result => {
      if (result)
        console.log("tabs saved")
      else
        console.warn("error in tab saving, No tabs or window is undefined");
      console.log(` OLD TAB COUNT = ${tabCount}, NEW TAB COUNT = ${tabs.length} ${tabs}`)
      setTabCount(tabs.length);
      setLoadedData(true)
    }).catch(error => console.error(error));
  }, [tabs, tabContext?.loadedData]);

  return (
    <section>
      <div className={`flex flex-col lg:flex-row px-8 py-8 min-h-[85vh] overflow-x-clip max-h-[90vh] ${themedStyles}`}>
        <TabsNav tabs={tabs} setTabs={setTabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabCount={tabCount} />
        <TabsForm tabs={tabs} setTabs={setTabs} selectedTab={selectedTab} tabCount={tabCount} loadedData={loadedData} />
        <TabsOutput tabs={tabs} />
      </div>
    </section>
  )
}
