"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

interface Props {
  className?: string;
}

export const ThemeToggle = ({className = ""}:Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
    const t = useTranslations("ThemeMode");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return <div className="w-5 h-5" />;
  }

  return (
    <button onClick={handleToggle} className={`${className}`}>
      {theme === "dark" ? <><Sun />{t("light")}</> : <><Moon />{t("dark")}</>}
    </button>
  );
};
