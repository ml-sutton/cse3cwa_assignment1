import { TabsContext } from "@/utils/tabs/context/tabContext"
import { useContext } from "react"

interface TabNavLinksPropTypes {
  tabName: string
  tabID: number
}
export const TabNavLink: React.FC<TabNavLinksPropTypes> = ({ tabName, tabID }) => {
  const tabContext = useContext(TabsContext);
  const handleClick = () => {

  }
  return (
    <div className="px-4 py-2 border-b-2">
      {tabName}
    </div>
  )
}
