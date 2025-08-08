"use client"
import { PageLinks } from "@/const/pagelinks"
import { HamburgerLink } from "./hamburgerLink"
import { ThemeSwitcher } from "../../theme-switcher/themeSwitcher";

interface HamburgerMenuPropTypes {
  isOpen: boolean
}
export const HamburgerMenu: React.FC<HamburgerMenuPropTypes> = ({ isOpen }) => {
  return (
    <div className={`flex  transition-all flex-row ${isOpen ? "h-fit" : "h-0"}`}>
      <div className={`flex flex-col mt-4 h-fit justify-center items-center ${isOpen ? "flex" : "hidden"}`}>
        <ul>
          {PageLinks.map((item, key) => (<li key={key}>
            <HamburgerLink href={item.href} name={item.name} />
          </li>))}
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </div>
  )
}
