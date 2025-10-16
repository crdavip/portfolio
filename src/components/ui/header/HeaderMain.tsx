"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { MenuItem } from "@/interfaces";
import { HeaderMobile, HeaderPC } from "@/components";

interface Props {
  menuItems: MenuItem[];
}

export const HeaderMain = ({ menuItems }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx("header", {
        "header-active": isScrolled,
      })}
    >
      <HeaderPC menuItems={menuItems} />
      <HeaderMobile />
    </header>
  );
};
