"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { HeroLogo } from "./HeroLogo";
import { useScrollViewport } from "@/hooks";
import "./hero.css";

export const HeroAnimated = () => {
  const t = useTranslations("HeroAnimated");
  const { isScrolledPast, height } = useScrollViewport();
  const hasAutoScrolled = useRef(false);
  const hasManualScroll = useRef(false);

  const scrollToHeader = () => {
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    window.scrollTo({ top: viewportHeight });
  };

  const scrollToHero = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const handleManualScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0 && !hasAutoScrolled.current && !hasManualScroll.current) {
        hasManualScroll.current = true;
        scrollToHeader();
      }

      if (scrollY <= 0) {
        hasManualScroll.current = false;
        hasAutoScrolled.current = false;
      }
    };

    window.addEventListener("scroll", handleManualScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleManualScroll);
  }, [height]);

  useEffect(() => {
    if (isScrolledPast && !hasAutoScrolled.current) {
      hasAutoScrolled.current = true;
      scrollToHeader();
    } else if (!isScrolledPast && hasAutoScrolled.current) {
      hasAutoScrolled.current = false;
      scrollToHero();
    }
  }, [isScrolledPast, height]);

  return (
    <div className="hero-background">
      <div className="hero-container">
        <div className="w-full h-full absolute z-10 flex justify-center items-center">
          <div className="relative z-10 flex flex-col items-center justify-center px-4 pointer-events-auto group">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#00b7e3] via-background to-[#ff6f3c] opacity-50 group-hover:opacity-75 transition-opacity duration-1000 animate-pulse-slow" />

            <HeroLogo />
          </div>

          <button
            onClick={scrollToHeader}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 hover:text-foreground focus:text-foreground dark:text-background/50 dark:hover:text-background dark:focus:text-background transition-colors duration-300 group cursor-pointer pointer-events-auto animate-bounce-slow"
            aria-label={t("title")}
          >
            <span className="text-sm font-light tracking-widest">{t("title")}</span>
            <ChevronDown className="w-9 h-9 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
        <div className="relative inset-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/90 to-background/95 dark:from-foreground/55 dark:via-foreground/50 dark:to-foreground/55" />

            <div className="absolute top-0 -left-2 w-96 sm:w-140 h-96 sm:h-140 bg-primary/50 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob" />
            <div className="absolute top-0 left-1/5 w-96 sm:w-140 h-96 sm:h-140 bg-primary rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-1000" />
            <div className="absolute bottom-0 -left-2 w-96 sm:w-140 h-96 sm:h-140 bg-secondary rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob" />
            <div className="absolute bottom-0 left-1/5 w-96 sm:w-140 h-96 sm:h-140 bg-secondary/50 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-1000" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.04)_1px,transparent_1px)] dark:bg-transparent bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
          </div>
        </div>
      </div>
    </div>
  );
};
