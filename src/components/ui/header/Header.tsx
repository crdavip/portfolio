"use client";

import { HeaderMain } from "./HeaderMain";
import { NavbarMobile } from "./NavbarMobile";
import type { MenuItem } from "@/interfaces";
import { Headset, IdCard, ImageIcon } from "lucide-react";
import { Flags } from "../flags/Flags";
import { useTranslations } from "next-intl";
import { useScrollToSection } from "@/hooks";

interface Props {
  locale: string;
}

export const Header = ({ locale }: Props) => {
  const t = useTranslations("Menu");

  const { scrollToSection } = useScrollToSection();

  const handleScrollTo = (id: string) => {
    scrollToSection(id);
  };

  const menuItems: MenuItem[] = [
    {
      icon: <IdCard />,
      text: t("item-1"),
      onClick: () => handleScrollTo("about-section"),
    },
    {
      icon: <ImageIcon />,
      text: t("item-2"),
      onClick: () => handleScrollTo("portfolio-section"),
    },
    {
      icon: <Headset />,
      text: t("item-3"),
      onClick: () => handleScrollTo("contact-section"),
    },
    {
      icon: <Flags lang={locale} />,
      text: t("item-4"),
      link: `${locale === "en" ? "/es" : "/en"}`,
    },
  ];
  return (
    <>
      <HeaderMain menuItems={menuItems} />
      <NavbarMobile menuItems={menuItems} />
    </>
  );
};
