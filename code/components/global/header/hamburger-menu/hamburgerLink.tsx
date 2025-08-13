import { ThemeContext } from "../../../../utils/theme/context/themeContext"
import Link from "next/link"
import { useContext } from "react"

interface HamburgerLinkPropTypes {
  name: string
  href: string
}

export const HamburgerLink: React.FC<HamburgerLinkPropTypes> = ({ name, href }) => {
  const theme = useContext(ThemeContext);
  const themedStyles = theme?.theme == "dark" ? "bg-latrobe-dark-navlinks fg-latrobe-dark border-[#e2231b] " : "bg-latrobe-light-navlinks fg-latrobe-light border-b-2 border-[#242424]"
  return (
    <Link href={href} className="">
      <div className={`py-4 px-4 w-full text-center border-l-2 border-b-2 ${themedStyles} `}>
        {name}
      </div>
    </Link>
  )
}
