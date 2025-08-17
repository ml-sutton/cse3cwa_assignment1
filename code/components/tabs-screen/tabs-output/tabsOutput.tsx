import { useState } from "react";
import { Tab } from "../../../utils/tabs/models/tab";
import { GenerateTabOutput } from "../../../utils/tabs/generator/GenerateOutput";

interface TabsOutputPropTypes {
  tabs: Tab[]
}

export const TabsOutput: React.FC<TabsOutputPropTypes> = ({ tabs }) => {
  const [outputData, setOutputData] = useState<string>("");
  const handleTabCompilation = () => {
    const data = GenerateTabOutput(tabs);
    setOutputData(data);
  }


  return (
    <div className="max-w-1/4 flex flex-col">
      <div className=" flex justify-around">
        <button onClick={() => handleTabCompilation()}>Compile Tabs</button>
        {outputData !== "" ? (<button> Copy to clipboard</button>) : <></>}
      </div>
      <hr />
      <code>
        {outputData === "" ? "compile some tabs to see some output" : outputData}
      </code>
    </div>
  )
}
