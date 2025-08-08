"use client"
import { PageLinks, PageLink } from "@/const/pagelinks"
import { HamburgerLink } from "./hamburgerLink"
import { ThemeContext } from "@/utils/theme/context/ThemeContext";
import { useContext } from "react";
import { ThemeSwitcher } from "../../themeswitcher/themeSwitcher";

interface HamburgerMenuPropTypes {
  isOpen: boolean
}
export const HamburgerMenu: React.FC<HamburgerMenuPropTypes> = ({ isOpen }) => {
  const theme = useContext(ThemeContext);
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
