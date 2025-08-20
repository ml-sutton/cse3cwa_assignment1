"use client";

import { SetStateAction, useContext, useEffect, useState } from "react";
import { TabsNavTitleBar } from "./tabsNavTitleBar";
import { ThemeContext } from "../../../utils/theme/context/themeContext";
import { TabsNavSubHeader } from "./tabsNavSubheader";
import { TabNavLink } from "./tabNavLinks";
import { Tab } from "../../../utils/tabs/models/tab";
import GetTabByID from "../../../utils/tabs/data-access/GetTabByID";
interface TabsNavPropTypes {
  tabs: Tab[]
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
  selectedTab: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
  tabCount: number
}
export const TabsNav: React.FC<TabsNavPropTypes> = ({ tabs, setTabs, selectedTab, setSelectedTab, tabCount }) => {
  const themeContext = useContext(ThemeContext);
  const [selectedTabName, setSelectedTabName] = useState<string>("No Tab Selected");
  const themedStyles: string = themeContext?.theme === "light" ? "bg-[#fefefe] text-[#111]" : "bg-[#333333] text-[#fefefe]"
  useEffect(() => {
    GetTabByID(tabs, selectedTab).then(tabValue => {
      const newTabName = tabValue.tabName;
      setSelectedTabName(newTabName)
      console.log(selectedTab, newTabName)
    }).catch(error => {
      console.warn(error)
      setSelectedTabName("No Tab Selected");
    })
  }, [selectedTab])

  return (
    <div className={`min-w-1/4 ${themedStyles} border-x-2`}>
      <TabsNavTitleBar tabName={selectedTabName} />
      <TabsNavSubHeader tabs={tabs} setTabs={setTabs} selectedTab={selectedTab} tabCount={tabCount} setSelectedTab={setSelectedTab} />
      <nav>
        {(!tabs || tabs.length == 0) ? (
          <div className="">
            You have not created any tabs yet!
          </div>
        ) : <ul>
          {tabs.map((tab, key) => {
            return <li key={key}><TabNavLink tabID={tab.tabId} tabName={tab.tabName ?? "untitled tab"} selectedTab={selectedTab} setSelectedTab={setSelectedTab} /></li>
          })}
        </ul>}
      </nav>
    </div>
  )
}
