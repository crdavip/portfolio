import { useTranslations } from "next-intl";
import { PortfolioCard } from "./PortfolioCard";
import { portfolio } from "@/data";
import { PorfolioItem } from "@/interfaces";

export const Portfolio = () => {
  const portfolioItems: PorfolioItem[] = portfolio;
  const t = useTranslations("Portfolio");

  return (
    <section className="max-w-6xl mx-auto h-fit flex flex-col justify-center items-center mt-25 sm:mt-50 px-4 sm:px-8 xl:px-0 scroll-mt-50" id="Portfolio">
      <h3 className="text-center">{t("h3")}</h3>
      <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {portfolioItems.map((portfolio) => (
          <PortfolioCard key={portfolio.title} portfolio={portfolio} />
        ))}
      </div>
    </section>
  );
};
