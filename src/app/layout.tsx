import type { Metadata } from "next";
import { brandFont } from "@/config";
import { Header } from "@/components";
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
  return (
    <html lang={lang}>
      <body className={`${brandFont.className} antialiased`}>
        <Header lang={lang} />
        {children}
      </body>
    </html>
  );
}
