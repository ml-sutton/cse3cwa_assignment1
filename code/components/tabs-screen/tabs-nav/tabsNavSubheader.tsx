import { Tab } from "../../../utils/tabs/models/tab";
interface TabsNavSubHeaderPropTypes {
  tabs: Tab[]
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
  selectedTab: number
}
export const TabsNavSubHeader: React.FC<TabsNavSubHeaderPropTypes> = ({ tabs, setTabs, selectedTab }) => {
  const tabCount = tabs.length ?? 0;
  const createTab = () => {
    const tabId = tabCount + 1;
    if (tabId == 16) {
      alert("YOU HAVE REACHED THE MAXIUM AMOUNT OF TABS")
      return;
    }
    const tab: Tab = {
      tabId: tabId,
      tabName: `new tab #${tabId}`,
      tabBody: "# Edit me!",
      syntaxHighlight: false
    }
    const allTabs = tabs ?? [];
    setTabs([...allTabs, tab]);

  }
  const removeTab = () => {
    if (tabCount == 0) alert("cannot remove tabs : No tabs exist")
    const tabToRemove: Tab = tabs[selectedTab - 1]
    const allTabs = tabs
    const newTabs = allTabs.filter((tabs) => tabs.tabId != tabToRemove.tabId)
    setTabs(newTabs);
    if (typeof window === "undefined") return
    window.localStorage.removeItem(`TAB#${selectedTab - 1}`)
  }
  const deleteTab = () => {

  }
  return (

    <div className="flex w-full justify-end gap-4 pl-4 px-2 border-t-2 border-b-2">
      <p className="mr-auto">{tabCount}/15</p>
      <button onClick={() => createTab()}>+</button>
      <button onClick={() => removeTab()}>-</button>
    </div>
  )
}
