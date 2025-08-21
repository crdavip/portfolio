import { Brush, CodeXml, Coffee, Images, Medal, Rocket } from "lucide-react";
import { stats } from "@/data";
import { StatsItem } from "@/interfaces";
import { useTranslations } from "next-intl";

export const Stats = () => {
  const statsIcons = {
    years: <Medal size={42} strokeWidth={1} className="text-primary-color" />,
    webs: <Rocket size={42} strokeWidth={1} className="text-primary-color" />,
    pieces: <Images size={42} strokeWidth={1} className="text-primary-color" />,
    coffees: <Coffee size={42} strokeWidth={1} className="text-primary-color" />,
  };

  const statsItems: StatsItem[] = stats;
  const t = useTranslations("Stats");
  return (
    <section className="max-w-6xl mx-auto h-fit grid grid-cols-1 sm:grid-cols-2 gap-15 mt-25 sm:mt-50 px-7">
      <div className="flex flex-col">
        <h3 className="mb-6 text-center md:text-left">{t("h3")}</h3>
        <p className="mb-3 text-center md:text-left">
          {t("p1")}
          <span className="text-primary-color">
            {t("span")}
          </span>
        </p>
        <p className="text-center md:text-left">
          {t("p2")}
        </p>
        <div className="flex mt-10 gap-5 justify-center sm:justify-start">
          <button className="btn-primary">{t("btn-primary")}</button>
          <button className="btn-secondary">{t("btn-secondary")}</button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col relative items-center justify-center sm:items-start gap-15">
            <div className="flex items-center gap-5 sm:gap-10">
              <div className="w-[16px] h-[80px] border-l border-l-primary-color" />
              <CodeXml size={40} strokeWidth={1} />
              <h4>{t("h4-1")}</h4>
            </div>
            <div className="w-[16px] h-[16px] border border-primary-color rounded-4xl absolute -translate-x-38.5 sm:-translate-x-1.5" />
            <div className="flex items-center gap-5 sm:gap-10">
              <div className="w-[16px] h-[80px] border-l border-l-primary-color" />
              <Brush size={40} strokeWidth={1} />
              <h4>{t("h4-2")}</h4>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-12 gap-4">
          {statsItems.map((item) => (
            <div key={item.title} className="stats">
              <p>{t(item.title)}</p>
              <h4>+{item.stat}</h4>
              {statsIcons[item.title]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
