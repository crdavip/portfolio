"use client";

import Link from "next/link";
import { MenuItem } from "@/interfaces";
import { useLanguageSwitch } from "@/hooks/useLanguageSwitch";

interface Props {
  menuItems: MenuItem[];
  className?: string;
}

export const MenuItemsList = ({ menuItems, className = "menu-item" }: Props) => {
  const { toggleLanguage } = useLanguageSwitch();

  return (
    <>
      {menuItems.map((item) =>
        item.isLanguageSwitch ? (
          <button key={item.text} className={className} onClick={toggleLanguage} aria-label={item.text}>
            {item.icon}
            {item.text}
          </button>
        ) : (
          <Link key={item.text} href={item.link} aria-label={item.text}>
            <li className={className}>
              {item.icon}
              {item.text}
            </li>
          </Link>
        )
      )}
    </>
  );
};
