import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { NavBar } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MY PORTFOLIO",
  description: "my portfolio using next, tailwind, framer motion, sentry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
