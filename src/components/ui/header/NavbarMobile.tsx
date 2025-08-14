import { MenuItem } from "@/interfaces";

interface Props {
  menuItems: MenuItem[];
}

export const NavbarMobile = ({ menuItems }: Props) => {
  return (
    <nav className="nav-mobile">
      <ul className="flex items-center gap-10">
        {menuItems.map((item) => (
          <li key={item.text} className="nav-mobile-item">
            {item.icon}
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};
