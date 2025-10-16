"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

export const ThemeToggle = ({className = ""}:Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};
