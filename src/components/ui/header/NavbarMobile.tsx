import Link from "next/link";
import { MenuItem } from "@/interfaces";
import { ThemeToggle } from "../theme/ThemeToggle";

interface Props {
  menuItems: MenuItem[];
}

export const NavbarMobile = ({ menuItems }: Props) => {
  return (
    <nav className="nav-mobile">
      <ul className="flex items-center gap-6 sm:gap-20">
        {menuItems.map((item) => (
          <Link key={item.text} href={item.link}>
            <li className="nav-mobile-item">
              {item.icon}
              {item.text}
            </li>
          </Link>
        ))}
        <ThemeToggle className="nav-mobile-item" />
      </ul>
    </nav>
  );
};
