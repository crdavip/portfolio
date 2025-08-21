import Link from "next/link";
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
            <Link key={item.text} href={item.link}>
              <li className="menu-item">
                {item.icon}
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};
