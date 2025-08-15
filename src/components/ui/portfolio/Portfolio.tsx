import { PortfolioCard } from "./PortfolioCard";
import { portfolio } from "@/data";
import { PorfolioItem } from "@/interfaces";

export const Portfolio = () => {
  const portfolioItems: PorfolioItem[] = portfolio;

  return (
    <section className="max-w-6xl mx-auto h-fit flex flex-col justify-center items-center mt-25 sm:mt-50 px-7">
      <h3 className="text-center">Algunos proyectos recientes</h3>
      <div className="mt-15 grid grid-cols-1 sm:grid-cols-4 gap-6">
        {portfolioItems.map((portfolio) => (
          <PortfolioCard key={portfolio.title} portfolio={portfolio} />
        ))}
      </div>
    </section>
  );
};
