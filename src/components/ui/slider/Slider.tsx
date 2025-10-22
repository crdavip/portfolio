import { useTranslations } from "next-intl";
import { SliderImage } from "./SliderImage";
import { ScrollToButton } from "../button/ScrollToButton";

export const Slider = () => {
  const t = useTranslations("Slider");

  return (
    <section className="max-w-6xl mx-auto h-fit grid grid-cols-1 sm:grid-cols-2 gap-15 sm:gap-0 lg:gap-15 mt-20 sm:mt-0 px-4 sm:px-8 xl:px-0">
      <div className="flex flex-col justify-center">
        <h2 className="slide-text font-light">{t("h2")}</h2>
        <h1 className="slide-text">{t("h1")}</h1>
        <h3 className="slide-text font-light">
          {t("h3")}
          <span className="text-primary-color">{t("span")}</span>
        </h3>
        <div className="flex mt-10 gap-5 justify-center sm:justify-start">
          <ScrollToButton text={t("btn-primary")} link="contact-section" className="btn-primary" />
          <ScrollToButton text={t("btn-secondary")} link="portfolio-section" className="btn-secondary" />
        </div>
      </div>
      <div className="flex flex-col items-end">
        <SliderImage />
      </div>
    </section>
  );
};
