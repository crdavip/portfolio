"use client";

import { MenuItem } from "@/interfaces";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Logo } from "../logo/Logo";
import { MenuItemsList } from "./MenuItemsList";

interface Props {
  menuItems: MenuItem[];
}

export const HeaderPC = ({ menuItems }: Props) => {
  return (
    <div className="header-pc">
      <Logo />
      <nav>
        <ul className="flex lg:gap-2 xl:gap-5">
          <MenuItemsList menuItems={menuItems} className="menu-item" />
          <ThemeToggle className="menu-item" />
        </ul>
      </nav>
    </div>
  );
};