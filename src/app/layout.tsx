import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { AppFooter, AppNavbar } from "@/layouts";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "UFC - Ultimate Fighting Championship",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <AppNavbar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
