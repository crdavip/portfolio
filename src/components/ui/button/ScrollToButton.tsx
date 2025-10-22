"use client";

import { useScrollToSection } from "@/hooks";

interface Props {
  text: string;
  link: string;
  className?: string;
}

export const ScrollToButton = ({ text, link, className }: Props) => {
  const { scrollToSection } = useScrollToSection();

  const handleScrollTo = (id: string) => {
    scrollToSection(id);
  };

  return (
    <button onClick={() => handleScrollTo(link)} className={className}>
      {text}
    </button>
  );
};
