import Image from "next/image";

interface Props {
  lang: string;
}

export const Flags = ({ lang }: Props) => {
  let src = "";
  if (lang === "es") {
    src = "/img/flag-usa.svg";
  } else {
    src = "/img/flag-col.svg";
  }

  return <Image src={src} alt={lang} width={20} height={20} priority />;
};
