import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export const useLanguageSwitch = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.replace(newPathname);
    });
  };

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "es" : "en";
    handleLanguageChange(newLocale);
  };

  return {
    locale,
    isPending,
    handleLanguageChange,
    toggleLanguage,
  };
};
