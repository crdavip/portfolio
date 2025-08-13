import type { Metadata } from "next";
import { brandFont } from "@/config";
import { Header, NavbarMobile } from "@/components";
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
  return (
    <html lang="es">
      <body className={`${brandFont.className} antialiased`}>
        <Header />
        <NavbarMobile />
        {children}
        </body>
    </html>
  );
}
