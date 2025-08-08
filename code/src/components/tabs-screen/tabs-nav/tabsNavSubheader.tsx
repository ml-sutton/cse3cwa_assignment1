import { TabsContext } from "@/utils/tabs/context/tabContext"
import { useContext } from "react"

export const TabsNavSubHeader: React.FC = () => {
  const tabsContext = useContext(TabsContext);
  return (

    <div className="flex justify-between">
      <p>{tabsContext?.tabs.length}/15</p>
      <button onClick={() => alert("not implemented")}>+</button>
    </div>
  )
}
