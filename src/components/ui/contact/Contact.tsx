import { useTranslations } from "next-intl";
import { Github, Linkedin, User, Smartphone, Brush, CodeXml, MessageSquare, Check } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <section
      className="max-w-6xl mx-auto h-fit grid grid-cols-1 sm:grid-cols-2 mt-25 sm:mt-50 gap-15 px-7"
      id="Contact"
    >
      <div className="flex flex-col justify-start items-center sm:items-start">
        <h3>{t("h3-1")}</h3>
        <div className="flex gap-4 mt-4">
          <Link href={"https://github.com/crdavip"} target="_blank">
            <Github size={28} className="social-icon" />
          </Link>
          <Link href={"https://www.linkedin.com/in/crdavip/"} target="_blank">
            <Linkedin size={28} className="social-icon" />
          </Link>
        </div>
        <p className="text-center sm:text-left mt-4">{t("p-1")}</p>
        <h3 className="text-center sm:text-left mt-8">{t("h3-2")}</h3>
        <p className="text-center sm:text-left mt-4">{t("p-2")}</p>
      </div>
      <form className="flex flex-col gap-4" autoComplete="off">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label htmlFor="fullName" className="label-form">
            <User className="absolute ml-3 text-primary-color" strokeWidth={1} />
            <input type="text" name="fullName" id="fullName" placeholder={t("name")} className="input-form" />
          </label>
          <label htmlFor="phone" className="label-form">
            <Smartphone className="absolute ml-3 text-primary-color" strokeWidth={1} />
            <input type="text" name="phone" id="phone" autoComplete="off" placeholder={t("phone")} className="input-form" />
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <input type="checkbox" id="design-option" value="design" className="peer absolute hidden" />
            <label htmlFor="design-option" className="check-form">
              <div className="flex items-center gap-4">
                <Brush className="text-primary-color" strokeWidth={1} />
                <p>{t("design")}</p>
              </div>
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input type="checkbox" id="develop-option" value="develop" className="peer absolute hidden" />
            <label htmlFor="develop-option" className="check-form">
              <div className="flex items-center gap-4">
                <CodeXml className="text-primary-color" strokeWidth={1} />
                <p>{t("develop")}</p>
              </div>
            </label>
          </div>
        </div>
        <label htmlFor="message" className="label-message">
          <MessageSquare className="absolute ml-3 mt-3 text-primary-color" strokeWidth={1} />
          <textarea name="message" id="message" className="input-form" placeholder={t("message")} rows={5} />
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="inline-flex items-start gap-3">
            <label className="relative flex cursor-pointer items-center rounded-md py-1.5" htmlFor="accept">
              <input
                name="accept"
                id="accept"
                type="checkbox"
                className="accept-check before:content[''] peer before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-black opacity-0 transition-opacity peer-checked:opacity-100">
                <Check size={18} />
              </div>
            </label>
            <label className="mt-px cursor-pointer select-none font-light text-[12px]" htmlFor="accept">
              {t("accept")}
            </label>
          </div>
          <div className="w-full flex justify-end items-start">
            <button className="btn-primary w-full">{t("btn-primary")}</button>
          </div>
        </div>
      </form>
    </section>
  );
};
