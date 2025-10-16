"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-5" />;
  }

  const logo = theme === "dark" ? "/img/Logo-white.svg" : "/img/Logo-black.svg";
  return (
    <Link href={"/#Home"}>
      <Image src={logo} alt="Logo Cristian David" className="logo-brand" width={200} height={36} priority />
    </Link>
  );
};
