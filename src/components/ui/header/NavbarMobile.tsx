import { Headset, IdCard, Image as ImageIcon } from "lucide-react";
import { Flags } from "../flags/Flags";

export const NavbarMobile = () => {
  return (
    <nav className="nav-mobile">
      <ul className="flex items-center gap-10">
        <li className="nav-mobile-item">
          <IdCard size={16} />
          Resumen
        </li>
        <li className="nav-mobile-item">
          <ImageIcon size={16} /> Portafolio
        </li>
        <li className="nav-mobile-item">
          <Headset size={16} />
          Contacto
        </li>
        <li className="nav-mobile-item">
          <Flags device="mobile" country="usa" />
          EN
        </li>
      </ul>
    </nav>
  );
};
