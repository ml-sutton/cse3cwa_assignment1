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
      <div className={`py-4 px-4 w-screen text-xl lg:text-base lg:w-full lg:text-center border-l-2 border-b-2 border-t-2 border-r-2 lg:border-t-0 lg:border-r-0 ${themedStyles} `}>
        {name}
      </div>
    </Link>
  )
}
