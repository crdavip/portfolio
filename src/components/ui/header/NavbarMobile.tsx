"use client";

import { MenuItem } from "@/interfaces";
import { ThemeToggle } from "../theme/ThemeToggle";
import { MenuItemsList } from "./MenuItemsList";

interface Props {
  menuItems: MenuItem[];
}

export const NavbarMobile = ({ menuItems }: Props) => {
  return (
    <nav className="nav-mobile">
      <ul className="flex items-center gap-6 sm:gap-20">
        <MenuItemsList menuItems={menuItems} className="nav-mobile-item" />
        <ThemeToggle className="nav-mobile-item" />
      </ul>
    </nav>
  );
};