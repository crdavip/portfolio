"use client";

import Image from "next/image";
import { Brush, CodeXml } from "lucide-react";
import { PorfolioItem } from "@/interfaces";
import { ToolsUsed } from "../tools/ToolsUsed";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  portfolio: PorfolioItem;
}

const categoryIcon = {
  Desarrollo: <CodeXml size={18} />,
  Diseño: <Brush size={18} />,
};

export const PortfolioCard = ({ portfolio }: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
    onClick={()=>console.log(portfolio)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={clsx("portfolio-item", {
        "portfolio-item-dev": portfolio.category === "Desarrollo" && isHover,
        "portfolio-item-des": portfolio.category === "Diseño" && isHover,
      })}
    >
      <div className="w-full h-full z-1 absolute top-0 left-0 flex">
        <div
          className={clsx("badget", {
            "badget-dev": portfolio.category === "Desarrollo",
            "badget-des": portfolio.category === "Diseño",
            "badget-hover": isHover,
          })}
        >
          {categoryIcon[portfolio.category]}
          {portfolio.category}
        </div>
        <div
          className={clsx("absolute bottom-4 left-4 flex flex-col gap-3 brand-transition", {
            "-translate-y-0": isHover,
            "translate-y-22": !isHover,
          })}
        >
          <p>{portfolio.title}</p>
          <ToolsUsed tool={portfolio.tools} />
          <div className="flex gap-4">
            {portfolio.tags.map((tag) => (
              <div key={tag} className="tag-box">
                {tag}
              </div>
            ))}
          </div>
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
      <Image src={portfolio.cover} alt={portfolio.title} width={623} height={415} priority={false} />
    </div>
  );
};
