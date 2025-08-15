interface TabNavLinksPropTypes {
  tabName: string
  tabID: number
  selectedTab: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
}
export const TabNavLink: React.FC<TabNavLinksPropTypes> = ({ tabName, tabID, selectedTab, setSelectedTab }) => {
  const handleClick = () => {
    if (selectedTab !== tabID - 1) {
      setSelectedTab(tabID - 1)
    }
  }
  return (
    <div className="px-4 py-2 border-b-2" onClick={() => handleClick()}>
      {tabName}
    </div>
  )
}
