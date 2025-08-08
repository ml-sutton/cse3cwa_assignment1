"use client";

import { useContext, useEffect, useState } from "react";
import { TabsNavTitleBar } from "./tabsNavTitleBar";
import { ThemeContext } from "@/utils/theme/context/themeContext";
import { TabsContext } from "@/utils/tabs/context/tabContext";
import { TabsNavSubHeader } from "./tabsNavSubheader";
import { TabNavLink } from "./tabNavLinks";
import { Tab } from "@/utils/tabs/models/tab";

export const TabsNav: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const tabContext = useContext(TabsContext);
  const [localTabsList, setLocalTabsList] = useState<Tab[]>(tabContext?.tabs ?? []);
  useEffect(() => {
    setLocalTabsList(tabContext?.tabs ?? []);
  }, [tabContext?.tabs])
  const themedStyles = themeContext?.theme == "light" ? "bg-[#fefefe] text-[#111] border-r-2 border-[#242424]" : ""
  return (
    <div className={`max-w-1/4 ${themedStyles}`}>
      <TabsNavTitleBar tabName="undefined" />
      <TabsNavSubHeader />
      <nav>
        {localTabsList?.length == 0 ? (
          <div className="">
            You have not created any tabs yet!
          </div>
        ) : <ul>
          {localTabsList?.map((tab, key) => (<li key={key}><TabNavLink tabID={tab.tabId} tabName={tab.tabName} /></li>))}
        </ul>}
      </nav>
    </div>
  )
}
