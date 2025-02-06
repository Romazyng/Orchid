import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "../app/globals.css";
import Navbar from "./ui/Navbar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Orchid",
  description: "Orchid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
