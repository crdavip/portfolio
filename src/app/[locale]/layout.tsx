import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { brandFont } from "@/config";
import { Flags, Footer, Header, NavbarMobile } from "@/components";
import { MenuItem } from "@/interfaces";
import { Headset, IdCard, Image as ImageIcon } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inicio | Cristian David",
  description: "Diseñador y Desarrollador",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const t = await getTranslations("Menu");
  const menuItems: MenuItem[] = [
    {
      icon: <IdCard />,
      text: t("item-1"),
      link: "/#About",
    },
    {
      icon: <ImageIcon />,
      text: t("item-2"),
      link: "/#Portfolio",
    },
    {
      icon: <Headset />,
      text: t("item-3"),
      link: "/#Contact",
    },
    {
      icon: <Flags lang={locale} />,
      text: t("item-4"),
      link: `/${locale === "en" ? "es" : "en"}`,
    },
  ];
  return (
    <html lang={locale}>
      <body className={`${brandFont.className} antialiased scroll-mt-0`} id="Home">
        <NextIntlClientProvider locale={locale}>
          <Header menuItems={menuItems} />
          <NavbarMobile menuItems={menuItems} />
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
