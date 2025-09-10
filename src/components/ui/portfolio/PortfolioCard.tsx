"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Brush, Code, CodeXml, View } from "lucide-react";
import { PorfolioItem } from "@/interfaces";
import { ToolsUsed } from "../tools/ToolsUsed";
import { Modal } from "../modal/Modal";
import { Tags } from "../tags/Tags";
import { useTranslations } from "next-intl";

interface Props {
  portfolio: PorfolioItem;
}

const categoryIcon = {
  development: <CodeXml size={18} />,
  design: <Brush size={18} />,
};

export const PortfolioCard = ({ portfolio }: Props) => {
  const [open, setOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const t = useTranslations("Portfolio");

  const handleOnClose = () => {
    document.documentElement.style.setProperty("overflow-y", "auto");
    setOpen(false);
  };

  const handleOnOpen = () => {
    document.documentElement.style.setProperty("overflow-y", "hidden");
    setOpen(true);
  };

  return (
    <>
      <Modal category={portfolio.category} open={open} onClose={handleOnClose}>
        <div className="flex flex-col justify-center items-center gap-4">
          <h2>{portfolio.title}</h2>
          <ToolsUsed tool={portfolio.tools} />
          <Tags tags={portfolio.tags} category={portfolio.category} />
          {
             portfolio.category === "development" && (
          <div className="flex gap-5 justify-center sm:justify-start my-3">
            <Link href={"https://github.com/crdavip/aulacontrol"} target="_blank">
              <button className="btn-primary"><View />{t("btn-primary")}</button>
            </Link>
            <Link href={"https://github.com/crdavip/aulacontrol"} target="_blank">
              <button className="btn-secondary"><Code />{t("btn-secondary")}</button>
            </Link>
          </div>
             ) 
          }
          {portfolio.images.map((image, index) => (
            <Image
              key={`${portfolio.title}-${index}`}
              src={`/img/portfolio/${portfolio.title}/${image}`}
              width={1024}
              height={1024}
              alt="Imagen"
              priority={false}
            />
          ))}
        </div>
      </Modal>
      <div
        onClick={handleOnOpen}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={clsx("portfolio-item", {
          "portfolio-item-dev": portfolio.category === "development" && isHover,
          "portfolio-item-des": portfolio.category === "design" && isHover,
        })}
      >
        <div className="w-full h-full z-1 absolute top-0 left-0 flex">
          <div
            className={clsx("badget", {
              "badget-dev": portfolio.category === "development",
              "badget-des": portfolio.category === "design",
              "badget-hover": isHover,
            })}
          >
            {categoryIcon[portfolio.category]}
            {t(portfolio.category)}
          </div>
          <div
            className={clsx("absolute bottom-4 left-4 flex flex-col gap-3 brand-transition", {
              "-translate-y-0": isHover,
              "translate-y-22": !isHover,
            })}
          >
            <p>{portfolio.title}</p>
            <ToolsUsed tool={portfolio.tools} />
            <Tags tags={portfolio.tags} />
          </div>
        </div>
        <div
          className={clsx("portfolio-item-blur", {
            "portfolio-item-blur-hover": isHover,
          })}
        />
        <div
          className={clsx("portfolio-item-bg", {
            "portfolio-item-bg-hover": isHover,
          })}
        />
        <Image
          src={`/img/portfolio/${portfolio.title}/${portfolio.images[0]}`}
          alt={portfolio.title}
          width={623}
          height={415}
          priority={false}
        />
      </div>
    </>
  );
};
