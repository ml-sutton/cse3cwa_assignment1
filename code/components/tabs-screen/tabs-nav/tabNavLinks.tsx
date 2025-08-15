interface TabNavLinksPropTypes {
  tabName: string
  tabID: number
}
export const TabNavLink: React.FC<TabNavLinksPropTypes> = ({ tabName, tabID }) => {
  const handleClick = () => {

  }
  return (
    <div className="px-4 py-2 border-b-2" onClick={() => handleClick()}>
      {tabName}
    </div>
  )
}
