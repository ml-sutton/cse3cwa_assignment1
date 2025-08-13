import { TabsContext } from "../../../utils/tabs/context/tabContext"
import React, { useContext, useState } from "react"

export const TabsForm: React.FC = () => {
  const tabContext = useContext(TabsContext)
  const [tabName, setTabName] = useState("new Tab")
  const handleTabName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTabName(event.target.value);

  }
  return (
    <div className="min-w-1/2 h-full">
      <form>
        <label htmlFor="tab-input">Tab Name : </label>
        <input type="text" id="tab-input" value={tabName} onChange={handleTabName} />
        <hr />
        <textarea name="" id=""></textarea>
      </form>
    </div>
  )
}
