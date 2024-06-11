import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thesispro Nepal",
  description: "Your academic success, our priority!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
