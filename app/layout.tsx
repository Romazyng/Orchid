import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "../app/globals.css";
<<<<<<< HEAD
=======
import Navbar from "./ui/Navbar";
>>>>>>> eaf36ca9955e9f65085fca98c61c6b94f9c7cba4

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
<<<<<<< HEAD
=======
        <Navbar/>
>>>>>>> eaf36ca9955e9f65085fca98c61c6b94f9c7cba4
        {children}
      </body>
    </html>
  );
}
