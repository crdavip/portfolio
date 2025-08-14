import Image from "next/image";

export const HeaderMobile = () => {
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
