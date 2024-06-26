import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Manrope } from "next/font/google";

import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${comfortaa.className} ${manrope.className}`}
      >
        <Providers>
          <div className="flex flex-col h-screen">{children}</div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}