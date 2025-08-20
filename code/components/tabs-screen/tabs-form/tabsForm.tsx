import { TabsContext } from "../../../utils/tabs/context/tabContext"
import React, { useContext, useEffect, useState } from "react"
import { Tab } from "../../../utils/tabs/models/tab"
import GetTabByID from "../../../utils/tabs/data-access/GetTabByID"
import CreateNewTab from "../../../utils/tabs/data-access/CreateNewTab"
interface TabsFormPropTypes {
  tabs: Tab[]
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
  selectedTab: number
  tabCount: number
  loadedData: boolean
}

export const TabsForm: React.FC<TabsFormPropTypes> = ({ tabs, setTabs, selectedTab, tabCount, loadedData }) => {
  const dbTabName = tabs[selectedTab] !== undefined ? tabs[selectedTab].tabName : "No Tab Selected";
  const dbTabBody = tabs[selectedTab] !== undefined ? tabs[selectedTab].tabBody : "No Tab Selected or no tabs exists"
  const [tabName, setTabName] = useState<string>(dbTabName);
  const [tabData, setTabData] = useState<string>(dbTabBody);
  useEffect(() => {
    if (tabs.length === 0) return
    GetTabByID(tabs, selectedTab).then(tabValue => {
      setTabName(tabValue.tabName)
      setTabData(tabValue.tabBody)
    }).catch(error => {
      console.warn(error)
      setTabName("No Tab Selected");
      setTabData("No Tab Selected or no tabs exists");
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
      console.warn(error)
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
      console.error(error)
    })
  }
  const preventEnter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  useEffect(() => {
    if (tabCount === 0) {
      setTabName("No Tab Selected");
      setTabData("No Tab Selected or no tabs exists");
      return
    } else {
      setTabName(tabs[0].tabName)
      setTabData(tabs[0].tabBody)
    }

  }, [loadedData])
  return tabs.length == 0 ? (
    <div className="min-w-1/2 h-full flex justify-center items-center flex-col">
      <h1>You haven't created any tabs yet!</h1>
      <p>Press the + button on the lefthand side of the screen to create some tabs!</p>
    </div>
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
