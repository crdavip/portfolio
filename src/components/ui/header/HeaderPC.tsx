import Link from "next/link";
import { MenuItem } from "@/interfaces";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Logo } from "../logo/Logo";

interface Props {
  menuItems: MenuItem[];
}

export const HeaderPC = ({ menuItems }: Props) => {
  return (
    <div className="header-pc">
      <Logo />
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
          <ThemeToggle className="menu-item" />
        </ul>
      </nav>
    </div>
  );
};
