import { Tab } from "../../../utils/tabs/models/tab";

export const TabsNavSubHeader: React.FC = () => {
  // const tabCount = tabsContext?.tabs.length ?? 0;
  const createTab = () => {
    const tabId = 1;
    if (tabId + 1 == 16) {
      alert("YOU HAVE REACHED THE MAXIUM AMOUNT OF TABS")
      return;
    }
    const tab: Tab = {
      tabId: tabId,
      tabName: `new tab #${tabId}`,
      tabBody: "# Edit me!",
      syntaxHighlight: false
    }
    // const allTabs = tabsContext?.tabs ?? [];
    // tabsContext?.setTabs([...allTabs, tab]);
  }
  return (

    <div className="flex w-full justify-between px-8 border-t-2 border-b-2">
      <p>{15}/15</p>
      <button onClick={() => createTab()}>+</button>
    </div>
  )
}
