"use client";

import { useContext } from "react";
import { TabsNavTitleBar } from "./tabsNavTitleBar";
import { ThemeContext } from "@/utils/theme/context/themeContext";
import { TabsContext } from "@/utils/tabs/context/tabContext";
import { TabsNavSubHeader } from "./tabsNavSubheader";

export const TabsNav: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const tabContext = useContext(TabsContext);
  const localTabsList = tabContext?.tabs
  const themedStyles = themeContext?.theme == "light" ? "bg-[#fefefe] text-[#111]" : ""
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
          {localTabsList?.map((tab, key) => (<li key={key}>{tab.tabName}</li>))}
        </ul>}
      </nav>
    </div>
  )
}
