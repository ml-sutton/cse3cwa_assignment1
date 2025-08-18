import useDebounce from "../../../hooks/useDebounce"
import { TabsContext } from "../../../utils/tabs/context/tabContext"
import React, { useContext, useEffect, useState } from "react"
import { Tab } from "../../../utils/tabs/models/tab"
import GetTabByID from "../../../utils/tabs/data-access/GetTabByID"

interface TabsFormPropTypes {
  tabs: Tab[]
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
  selectedTab: number
}

export const TabsForm: React.FC<TabsFormPropTypes> = ({ tabs, setTabs, selectedTab }) => {
  const dbTabName = tabs[selectedTab] !== undefined ? tabs[selectedTab].tabName : "Tab not found";
  const dbTabBody = tabs[selectedTab] !== undefined ? tabs[selectedTab].tabBody : "body not found"
  const dbTabCount = tabs.length !== 0 ? tabs.length : 0;
  const [tabName, setTabName] = useState<string>(dbTabName);
  const [tabData, setTabData] = useState<string>(dbTabBody);
  const [tabCount, setTabCount] = useState<number>(dbTabCount)
  useEffect(() => {
    if (tabs.length === 0) return
    GetTabByID(tabs, selectedTab).then(tabValue => {
      setTabName(tabValue.tabName)
      setTabData(tabValue.tabBody)
    }).catch(error => {
      console.error("Tab Not Found")
    })
  }, [selectedTab])
  const handleTabName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (tabName === "No Tab Selected") return;
    setTabName(event.target.value);
    const tabsCopy = [...tabs];
    GetTabByID(tabsCopy, selectedTab).then(tabValue => {
      const tabToEdit = tabValue.tabId;
      tabsCopy.forEach((tabItem) => {
        if (tabItem.tabId === tabToEdit) {
          tabItem.tabName = tabName;
          setTabs(tabsCopy);

        }
      });
    }).catch(error => {
      console.error("Error in finding tab name : tab not found")
    })

  }
  const handleTabData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (tabName === "No Tab Selected") return;
    setTabData(event.target.value)
    const tabsCopy = [...tabs];
    GetTabByID(tabsCopy, selectedTab).then(tabValue => {
      const tabToEdit = tabValue.tabId;
      tabsCopy.forEach((tabItem) => {
        if (tabItem.tabId === tabToEdit) {
          tabItem.tabBody = tabData;
          setTabs(tabsCopy)
        }
      })
    }).catch(error => {
      console.error("Error in finding tab data : tab not found")
    })
  }
  const preventEnter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  useEffect(() => {
    if (tabs.length === 0) {
      setTabName("No Tab Selected");
      setTabData("No Tab Selected or no tabs exists");
    }
    console.log("tab deleted")
    setTabCount(dbTabCount)
  }, [tabs, dbTabCount])
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
