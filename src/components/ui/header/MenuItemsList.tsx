"use client";

import Link from "next/link";
import { MenuItem } from "@/interfaces";

interface Props {
  menuItems: MenuItem[];
  className?: string;
}

export const MenuItemsList = ({ menuItems, className = "menu-item" }: Props) => {
  return (
    <>
      {menuItems.map((item) => {
        if (item.onClick) {
          return (
            <button key={item.text} aria-label={item.text} className={className} onClick={item.onClick}>
              {item.icon}
              {item.text}
            </button>
          );
        } else {
          return (
            <Link key={item.text} href={item.link ?? ""} aria-label={item.text}>
              <li className={className}>
                {item.icon}
                {item.text}
              </li>
            </Link>
          );
        }
      })}
    </>
  );
};
