import Image from "next/image";
import Link from "next/link";

export const HeaderMobile = () => {
  return (
    <div className="header-mobile">
      <Link href={"/#Home"}>
        <Image
          src="/img/Logo-white.svg"
          alt="Logo Cristian David"
          className="logo-brand"
          width={200}
          height={36}
          priority
        />
      </Link>
    </div>
  );
};
