'use client'

import Link from 'next/link';
import { Marcellus_SC } from 'next/font/google';

const marcellus = Marcellus_SC({
  subsets: ['latin'], 
  weight: '400',      
  variable: '--font-marcellus', 
});

const scrollToSection = () => {
  const targetSection = document.getElementById('contact');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
    return (
        <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 lg:w-[21rem] lg:h-[3.45rem] bg-[#181717]/90 text-white rounded-[36px] z-10">
            <div className="container mx-auto flex justify-between items-center">
              <div className="bg-[#0b0b0b]/80 rounded-[36px] lg:w-[6.9rem] lg:h-[3.40rem]  flex items-center justify-center">
                <Link href="/" className={`${marcellus.className} antialiased text-2xl`}>
                  Orchid
                </Link>
              </div>
              <ul className=" flex items-center space-x-4"> 
                <li className="flex items-center justify-center">
                  <a onClick={scrollToSection} className="text-center cursor-pointer">
                    Contact us
                  </a>
                </li>
                <li className="bg-[#ffffff]/90 rounded-[36px] lg:w-[7.1rem] lg:h-[3.5rem] flex items-center justify-center text-black">
                  <Link href="/login" className="text-center">
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
      );
}