import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Slider = () => {
  const t = useTranslations("Slider");
  return (
    <section className="max-w-6xl mx-auto h-fit grid grid-cols-1 sm:grid-cols-2 gap-15 mt-20 sm:mt-0 px-7">
      <div className="flex flex-col justify-center">
        <h2 className="slide-text">{t("h2")}</h2>
        <h1 className="slide-text">{t("h1")}</h1>
        <h3 className="slide-text">
          {t("h3")}
          <span className="text-primary-color">{t("span")}</span>
        </h3>
        <div className="flex mt-10 gap-5 justify-center sm:justify-start">
          <Link href={"/#Contact"}>
            <button className="btn-primary">{t("btn-primary")}</button>
          </Link>
          <Link href={"/#Portfolio"}>
            <button className="btn-secondary">{t("btn-secondary")}</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Image src="/img/slide-img.svg" alt="Slide Image" width={508} height={453} priority />
      </div>
    </section>
  );
};
