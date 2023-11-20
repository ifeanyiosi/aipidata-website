import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aipidata Limited",
  description:
    "We help make your data Simple, Accessible, and Intelligent every time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        {" "}
        <div className="w-full"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
