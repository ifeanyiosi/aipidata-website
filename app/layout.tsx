import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aipidata Limited",
  description:
    "We help make your data Simple, Accessible, and Intelligent everytime.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {" "}
        <div className="w-full">
          <Navbar /> {children} <Footer />
        </div>
      </body>
    </html>
  );
}
