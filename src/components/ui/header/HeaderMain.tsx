"use client";

import { useMemo } from "react";
import clsx from "clsx";
import { MenuItem } from "@/interfaces";
import { HeaderMobile, HeaderPC } from "@/components";
import { useScrollViewport } from "@/hooks";

interface Props {
  menuItems: MenuItem[];
}

export const HeaderMain = ({ menuItems }: Props) => {
  const threshold = useMemo(() => {
    if (typeof window === "undefined") return 0;
    return window.innerHeight * 1.1;
  }, []);

  const { isScrolledPast } = useScrollViewport({ threshold });

  return (
    <header className={clsx("header", { "header-active": isScrolledPast })}>
      <HeaderPC menuItems={menuItems} />
      <HeaderMobile />
    </header>
  );
};
