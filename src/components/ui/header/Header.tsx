import { MenuItem } from "@/interfaces";
import { HeaderMobile, HeaderPC } from "@/components";

interface Props {
  menuItems: MenuItem[];
}

export const Header = ({ menuItems }: Props) => {
  return (
    <header className="header">
      <HeaderPC menuItems={menuItems} />
      <HeaderMobile />
    </header>
  );
};
