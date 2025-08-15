import { TabsContext } from "../../../utils/tabs/context/tabContext"
import React, { useContext, useState } from "react"

export const TabsForm: React.FC = () => {
  const tabContext = useContext(TabsContext)
  const [tabName, setTabName] = useState("dbTabName")
  const [tabData, setTabData] = useState<string>("dbTabData");
  const handleTabName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTabName(event.target.value);

  }
  const handleTabData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTabData(event.target.value)
  }
  const preventEnter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return tabContext?.tabs.length == 0 ? (
    <>
      {/* no tabs create new tab component */}
      {/* */}
    </>
  ) :
    (<div className="min-w-1/2 h-full">
      <form onSubmit={preventEnter}>
        <label htmlFor="tab-input">Tab Name : </label>
        <input type="text" id="tab-input" value={tabName} onChange={handleTabName} />
        <hr />
        <textarea name="" className="min-w-1/2 h-full" value={tabData} onChange={handleTabData}></textarea>
      </form>
    </div>)

}
