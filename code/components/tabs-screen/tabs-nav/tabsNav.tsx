"use client";

import { SetStateAction, useContext } from "react";
import { TabsNavTitleBar } from "./tabsNavTitleBar";
import { ThemeContext } from "../../../utils/theme/context/themeContext";
import { TabsNavSubHeader } from "./tabsNavSubheader";
import { TabNavLink } from "./tabNavLinks";
import { Tab } from "../../../utils/tabs/models/tab";
interface TabsNavPropTypes {
  tabs: Tab[]
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
  selectedTab: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
}
export const TabsNav: React.FC<TabsNavPropTypes> = ({ tabs, setTabs, selectedTab, setSelectedTab }) => {
  const themeContext = useContext(ThemeContext);
  const selectedTabName: string = (tabs[selectedTab] || (tabs.length !== 0)) ? tabs[selectedTab]?.tabName : "No Tab Selected";

  const themedStyles: string = themeContext?.theme === "light" ? "bg-[#fefefe] text-[#111]" : "bg-[#333333] text-[#fefefe]"
  return (
    <div className={`min-w-1/4 ${themedStyles} border-x-2`}>
      <TabsNavTitleBar tabName={selectedTabName} />
      <TabsNavSubHeader tabs={tabs} setTabs={setTabs} selectedTab={selectedTab} />
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
