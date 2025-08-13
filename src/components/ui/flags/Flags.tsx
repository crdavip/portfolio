import Image from "next/image";

interface Props {
  country: string;
  device: string;
}

export const Flags = ({ country, device }: Props) => {
  let src = "";
  if (country === "usa") {
    src = "/img/flag-usa.svg";
  } else {
    src = "/img/flag-col.svg";
  }

  let size = 0;
  if (device === "pc") {
    size = 20;
  } else {
    size = 14;
  }

  return <Image src={src} alt={country} width={size} height={size} priority />;
};
