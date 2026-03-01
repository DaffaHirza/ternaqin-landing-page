import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TernaQin",
  description: "Smart livestock management platform",
  icons: {
    icon: "/img/logoternaqin.svg",
    shortcut: "/img/logoternaqin.svg",
    apple: "/img/logoternaqin.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#F3F3F3]`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
