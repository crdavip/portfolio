"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export const SliderImage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-[453px]" />;

  return (
    <Image
      src={`/img/slide-img-${theme === "dark" ? "black" : "white"}.png`}
      alt="Slide Image"
      width={508}
      height={453}
      priority
      className="slide-img"
    />
  );
};
