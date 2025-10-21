import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { brandFont } from "@/config";
import { Footer, Header, HeroAnimated } from "@/components";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cristian David",
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

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${brandFont.className} antialiased scroll-mt-0`} id="Home">
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <HeroAnimated />
            <Header locale={locale} />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
