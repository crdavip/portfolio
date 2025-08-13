import Image from "next/image";
import { Headset, IdCard, Image as ImageIcon } from "lucide-react";
import { Flags } from "../flags/Flags";

export const Header = () => {
  return (
    <header className="header">
      <HeaderPC />
      <HeaderMobile />
    </header>
  );
};

const HeaderPC = () => {
  return (
    <div className="header-pc">
      <Image
        src="/img/Logo-white.svg"
        alt="Logo Cristian David"
        className="logo-brand"
        width={200}
        height={36}
        priority
      />
      <nav>
        <ul className="flex gap-5">
          <li className="menu-item">
            <IdCard />
            Resumen
          </li>
          <li className="menu-item">
            <ImageIcon /> Portafolio
          </li>
          <li className="menu-item">
            <Headset />
            Contacto
          </li>
          <li className="menu-item">
            <Flags device="pc" country="usa" />
            EN
          </li>
        </ul>
      </nav>
    </div>
  );
};

const HeaderMobile = () => {
  return (
    <div className="header-mobile">
      <Image
        src="/img/Logo-white.svg"
        alt="Logo Cristian David"
        className="logo-brand"
        width={200}
        height={36}
        priority
      />
    </div>
  );
};
