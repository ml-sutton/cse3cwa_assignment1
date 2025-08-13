import { TabsContext } from "../../../utils/tabs/context/tabContext"
import { Tab } from "../../../utils/tabs/models/tab";
import { useContext } from "react"

export const TabsNavSubHeader: React.FC = () => {
  const tabsContext = useContext(TabsContext);
  const tabCount = tabsContext?.tabs.length ?? 0;
  const createTab = () => {
    const tabId = tabCount + 1
    if (tabId == 16) {
      alert("YOU HAVE REACHED THE MAXIUM AMOUNT OF TABS")
      return;
    }
    const tab: Tab = {
      tabId: tabId,
      tabName: `new tab #${tabId}`,
      tabBody: "# Edit me!"
    }
    const allTabs = tabsContext?.tabs ?? [];
    tabsContext?.setTabs([...allTabs, tab]);
  }
  return (

    <div className="flex w-full justify-between px-8 border-t-2 border-b-2">
      <p>{tabCount}/15</p>
      <button onClick={() => createTab()}>+</button>
    </div>
  )
}
