import type { Metadata } from "next";
import { brandFont } from "@/config";
import { Flags, Footer, Header, NavbarMobile } from "@/components";
import { MenuItem } from "@/interfaces";
import { Headset, IdCard, Image as ImageIcon } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inicio | Cristian David",
  description: "Diseñador y Desarrollador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = "es";
  const menuItems: MenuItem[] = [
    {
      icon: <IdCard />,
      text: "Resumen",
    },
    {
      icon: <ImageIcon />,
      text: "Portafolio",
    },
    {
      icon: <Headset />,
      text: "Contacto",
    },
    {
      icon: <Flags lang={lang} />,
      text: "EN",
    },
  ];
  return (
    <html lang={lang}>
      <body className={`${brandFont.className} antialiased`}>
        <Header menuItems={menuItems} />
        <NavbarMobile menuItems={menuItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
