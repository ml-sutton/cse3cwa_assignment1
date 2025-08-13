import { TabsContext } from "@/utils/tabs/context/tabContext"
import { useContext } from "react"

export const TabsForm: React.FC = () => {
  const tabContext = useContext(TabsContext)
  return (
    <div className="bg-pink-400 max-w-1/2 h-full">
      <form>

      </form>
    </div>
  )
}
