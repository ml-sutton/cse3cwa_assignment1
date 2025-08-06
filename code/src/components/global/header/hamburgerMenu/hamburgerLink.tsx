import Link from "next/link"

interface HamburgerLinkPropTypes {
  name: string
  href: string
}

export const HamburgerLink: React.FC<HamburgerLinkPropTypes> = ({ name, href }) => {
  return (

    <div className="py-4 px-4 bg-[#e2231b] w-full text-center border-l-2 border-b-2 border-[#242424] text-[#fefefe]">
      <Link href={href}>{name}</Link>
    </div>
  )
}
