import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BTS Brasil • Fanbase Não Oficial & Tributo ARMY",
  description: "Landing page brasileira dedicada ao BTS (Bangtan Sonyeondan) e à comunidade ARMY. Conheça a história, os 7 integrantes, discografia e canais oficiais.",
  keywords: ["BTS", "ARMY", "BTS Brasil", "K-pop", "Borahae", "RM", "Jin", "SUGA", "j-hope", "Jimin", "V", "Jung Kook"],
  authors: [{ name: "Comunidade de Fãs BTS Brasil" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased bg-[#070312] text-white`}
    >
      <body className="min-h-full flex flex-col bg-[#070312] text-white selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
