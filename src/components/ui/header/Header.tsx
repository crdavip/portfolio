import { Headset, IdCard, Image as ImageIcon } from "lucide-react";
import { MenuItem } from "@/interfaces";
import { HeaderMobile, HeaderPC, NavbarMobile, Flags } from "@/components";

interface Props {
  lang: string;
}

export const Header = ({ lang }: Props) => {
  const menuItems: MenuItem[] = [
    {
      icon: <IdCard />,
      text: "Resumen",
    },
    {
      icon: <ImageIcon />,
      text: "Portafolio",
    },
    {
      icon: <Headset />,
      text: "Contacto",
    },
    {
      icon: <Flags lang={lang} />,
      text: "EN",
    },
  ];
  return (
    <>
      <header className="header">
        <HeaderPC menuItems={menuItems} />
        <HeaderMobile />
      </header>
      <NavbarMobile menuItems={menuItems} />
    </>
  );
};
