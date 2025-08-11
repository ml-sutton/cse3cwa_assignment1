import { TabsReadContext } from "@/utils/tabs/context/tabReadContext"
import { useContext } from "react"

interface TabNavLinksPropTypes {
  tabName: string
  tabID: number
}
export const TabNavLink: React.FC<TabNavLinksPropTypes> = ({ tabName, tabID }) => {
  const tabContext = useContext(TabsReadContext);
  const handleClick = () => {
    if (tabContext?.loadedTab == tabID) return
    tabContext?.setLoadedTab(tabID);
  }
  return (
    <div className="px-4 py-2 border-b-2" onClick={() => handleClick()}>
      {tabName}
    </div>
  )
}
