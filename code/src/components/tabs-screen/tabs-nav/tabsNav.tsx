"use client";

import { useContext } from "react";
import { TabsNavTitleBar } from "./tabsNavTitleBar";
import { ThemeContext } from "@/utils/theme/context/themeContext";
import { TabsReadContext } from "@/utils/tabs/context/tabReadContext";
import { TabsNavSubHeader } from "./tabsNavSubheader";
import { TabNavLink } from "./tabNavLinks";
import { Tab } from "@/utils/tabs/models/tab";

export const TabsNav: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const tabContext = useContext(TabsReadContext);
  const selectedTabObject = tabContext?.tabs.find(tab => tab.tabId === tabContext?.loadedTab);
  const selectedTab = selectedTabObject?.tabName ?? "tab not found"

  const themedStyles = themeContext?.theme == "light" ? "bg-[#fefefe] text-[#111]" : "bg-[#333333] text-[#fefefe]"
  return (
    <div className={`max-w-1/4 ${themedStyles} border-r-2`}>
      <TabsNavTitleBar tabName={selectedTab ?? ""} />
      <TabsNavSubHeader />
      <nav>
        {TabsReadContext?.length == 0 ? (
          <div className="">
            You have not created any tabs yet!
          </div>
        ) : <ul>
          {tabContext?.tabs?.map((tab, key) => (<li key={key}><TabNavLink tabID={tab.tabId} tabName={tab.tabName ?? "untitled tab"} /></li>))}
        </ul>}
      </nav>
    </div>
  )
}
