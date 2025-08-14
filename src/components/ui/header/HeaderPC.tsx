import Image from "next/image";
import { MenuItem } from "@/interfaces";

interface Props {
  menuItems: MenuItem[];
}

export const HeaderPC = ({ menuItems }: Props) => {
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
          {menuItems.map((item) => (
            <li key={item.text} className="menu-item">
              {item.icon}
              {item.text}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
