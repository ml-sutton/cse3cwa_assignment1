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
  const deleteTab = () => {

  }
  return (

    <div className="flex w-full justify-between px-8 border-t-2 border-b-2">
      <p>{tabCount}/15</p>
      <button onClick={() => createTab()}>+</button>
    </div>
  )
}
