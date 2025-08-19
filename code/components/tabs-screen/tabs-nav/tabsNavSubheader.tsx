import CreateNewTab from "../../../utils/tabs/data-access/CreateNewTab";
import DeleteTabFromLocalStorage from "../../../utils/tabs/data-access/DeleteTabFromLocalStorage.";
import { Tab } from "../../../utils/tabs/models/tab";
interface TabsNavSubHeaderPropTypes {
  tabs: Tab[]
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
  selectedTab: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
  tabCount: number
}
export const TabsNavSubHeader: React.FC<TabsNavSubHeaderPropTypes> = ({ tabs, setTabs, selectedTab, setSelectedTab, tabCount }) => {
  const createTab = () => {
    console.log(tabCount)
    CreateNewTab(tabs, tabCount).then(newTabs => {
      setTabs(newTabs);
    }).catch(error => {
      console.warn(error);
      setTabs(tabs);
    })

  }
  const deleteTab = () => {
    const tabToDelete: number = selectedTab;
    const didDelete = DeleteTabFromLocalStorage(tabs, tabToDelete);
    didDelete.then(tabsValue => {
      setTabs(tabsValue)
      setSelectedTab(tabToDelete+1);
    }).catch(error => {
      console.error(error)
    })
  }
  return (

    <div className="flex w-full justify-end gap-4 pl-4 px-2 border-t-2 border-b-2">
      <p className="mr-auto">{tabCount}/15</p>
      <button onClick={() => createTab()}>+</button>
      <button onClick={() => deleteTab()}>-</button>
    </div>
  )
}
