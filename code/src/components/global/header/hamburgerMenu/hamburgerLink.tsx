import { ThemeContext } from "@/utils/theme/context/ThemeContext"
import Link from "next/link"
import { useContext } from "react"

interface HamburgerLinkPropTypes {
  name: string
  href: string
}

export const HamburgerLink: React.FC<HamburgerLinkPropTypes> = ({ name, href }) => {
  const theme = useContext(ThemeContext);
  const themedStyles = theme == null ? "bg-latrobe-dark-header fg-latrobe-dark border-[#e2231b]" : theme == "light" ? "bg-latrobe-light-header fg-latrobe-light border-b-2 border-[#242424]" : "bg-latrobe-dark-header fg-latrobe-dark border-[#e2231b] border-b-2"
  return (
    <div className={`py-4 px-4 w-full text-center border-l-2 border-b-2 ${themedStyles }`}>
      <Link href={href}>{name}</Link>
    </div>
  )
}
