import useDebounce from "../../../hooks/useDebounce"
import { TabsContext } from "../../../utils/tabs/context/tabContext"
import React, { useContext, useEffect, useState } from "react"
import { Tab } from "../../../utils/tabs/models/tab"

interface TabsFormPropTypes {
  tabs: Tab[]
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
  selectedTab: number
}

export const TabsForm: React.FC<TabsFormPropTypes> = ({ tabs, setTabs, selectedTab }) => {
  const dbTabName = tabs[selectedTab] !== undefined ? tabs[selectedTab].tabName : "Tab not found";
  const dbTabBody = tabs[selectedTab] !== undefined ? tabs[selectedTab].tabBody : "body not found"
  const [tabName, setTabName] = useState<string>(dbTabName);
  const [tabData, setTabData] = useState<string>(dbTabBody);
  useEffect(() => {
    if (tabs.length === 0) return
    const tabIdx = selectedTab == 0 ? 0 : selectedTab - 1
    setTabName(tabs[tabIdx].tabName)
    setTabData(tabs[tabIdx].tabBody)
  }, [selectedTab])
  const handleTabName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTabName(event.target.value);
    const tabsCopy = [...tabs];
    tabsCopy[selectedTab - 1].tabName = tabName;
    setTabs(tabsCopy);
  }
  const handleTabData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTabData(event.target.value)
    const tabsCopy = [...tabs];
    tabsCopy[selectedTab - 1].tabBody = tabData;
    setTabs(tabsCopy)
  }
  const preventEnter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return tabs.length == 0 ? (
    <>
      {/* no tabs create new tab component */}
      {/* */}
    </>
  ) :
    (<div className="min-w-1/2 h-full">
      <form onSubmit={preventEnter}>
        <label htmlFor="tab-input">Tab Name : </label>
        <input type="text" id="tab-input" value={tabName} onChange={handleTabName} />
        <hr />
        <textarea name="" className="py-4 px-4 min-w-full h-full" value={tabData} onChange={handleTabData}></textarea>
      </form>
    </div>)

}
