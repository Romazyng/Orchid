import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./ui/globals.css";
import Navbar from "./ui/Navbar";
export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Orchid",
  description: "Orchid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter .className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
