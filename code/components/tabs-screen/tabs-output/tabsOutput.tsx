import { useContext, useState } from "react";
import { Tab } from "../../../utils/tabs/models/tab";
import { GenerateTabOutput } from "../../../utils/tabs/generator/GenerateOutput";
import { ThemeContext } from "../../../utils/theme/context/themeContext";

interface TabsOutputPropTypes {
  tabs: Tab[]
}

export const TabsOutput: React.FC<TabsOutputPropTypes> = ({ tabs }) => {
  const [outputData, setOutputData] = useState<string>("");
  const themeContext = useContext(ThemeContext);
  const themedStyles: string = themeContext?.theme === "light" ? "bg-slate-100 text-[#111]" : "bg-slate-800 text-[#fefefe]"

  const handleTabCompilation = () => {
    const data = GenerateTabOutput(tabs);
    setOutputData(data);
  }

  const copyDataToClipboard = () => {
    navigator.clipboard.writeText(outputData)
  }
  return (
    <div className={`lg:min-w-1/4 flex flex-col py-4 px-2 ${themedStyles} border-2 rounded-xl`}>
      <div className="flex justify-around">
        <button onClick={() => handleTabCompilation()}>Compile Tabs</button>
        <button onClick={() => copyDataToClipboard()} disabled={outputData === ""}> Copy to clipboard</button>
      </div>
      <hr />
      <code className="">
        {outputData === "" ? "compile some tabs to see some output" : outputData}
      </code>
    </div>
  )
}
