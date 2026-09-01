import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Baiya Tours & Travels",
  description:
    "South India tours, vehicle arrangements, pilgrimage travel, accommodation and religious event arrangements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#071635] antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}