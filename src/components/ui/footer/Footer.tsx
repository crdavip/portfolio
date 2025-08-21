import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="footer">
      <p>
        Copyright © {new Date().getFullYear()} <span className="font-semibold">Cristian David.</span> {t("p")}
      </p>
    </footer>
  );
};
