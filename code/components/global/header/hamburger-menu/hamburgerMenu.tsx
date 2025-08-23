"use client"
import { PageLinks } from "../../../../const/pagelinks"
import { ThemeSwitcherHamburger } from "../theme-switcher/themeSwitcherHamburger"
import { HamburgerLink } from "./hamburgerLink"

interface HamburgerMenuPropTypes {
  isOpen: boolean
}
export const HamburgerMenu: React.FC<HamburgerMenuPropTypes> = ({ isOpen }) => {
  return (
    <div className={`flex transition-all flex-row ${isOpen ? "h-fit" : "h-0"}`}>
      <div className={`flex flex-col mt-5.5 h-fit justify-center items-center z-50 ${isOpen ? "flex" : "hidden"}`}>
        <ul>
          {PageLinks.map((item, key) => (<li key={key}>
            <HamburgerLink href={item.href} name={item.name} />
          </li>))}
          <li className="lg:hidden">
            <ThemeSwitcherHamburger />
          </li>
        </ul>
      </div>
    </div>
  )
}
