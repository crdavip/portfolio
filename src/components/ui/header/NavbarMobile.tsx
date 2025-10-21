"use client";

import { useMemo } from "react";
import clsx from "clsx";
import { MenuItem } from "@/interfaces";
import { ThemeToggle } from "../theme/ThemeToggle";
import { MenuItemsList } from "./MenuItemsList";
import { useScrollViewport } from "@/hooks";

interface Props {
  menuItems: MenuItem[];
}

export const NavbarMobile = ({ menuItems }: Props) => {
  const threshold = useMemo(() => {
    if (typeof window === "undefined") return 0;
    return window.innerHeight * 0.9;
  }, []);

  const { isScrolledPast } = useScrollViewport({ threshold });

  return (
    <nav
      className={clsx("nav-mobile opacity-0 transition-all duration-500", {
        "opacity-100 pointer-events-auto lg:hidden": isScrolledPast,
        "pointer-events-none": !isScrolledPast,
      })}
    >
      <ul className="flex items-center gap-6 sm:gap-20">
        <MenuItemsList menuItems={menuItems} className="nav-mobile-item" />
        <ThemeToggle className="nav-mobile-item" />
      </ul>
    </nav>
  );
};
