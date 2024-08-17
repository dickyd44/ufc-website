import type { Metadata } from "next";
import { Arimo, DM_Sans, PT_Sans_Narrow } from "next/font/google";
import "./globals.css";
import { AppFooter, AppNavbar } from "@/layouts";

const arimo = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "UFC",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        <AppNavbar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
