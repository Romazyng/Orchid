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
        <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 w-[325px] h-[55px] bg-[#454040]/90 text-white rounded-[36px] z-10">
            <div className="container mx-auto flex justify-between items-center">
              <div className="bg-[#3A3737]/80 rounded-[36px] w-[106px] h-[55px] flex items-center justify-center">
                <Link href="/" className={`${marcellus.className} antialiased text-2xl`}>
                  Orchid
                </Link>
              </div>
              <ul className=" flex items-center space-x-4"> {/* Увеличен space-x */}
                <li className="flex items-center justify-center">
                  <a onClick={scrollToSection} className="text-center cursor-pointer">
                    Contact us
                  </a>
                </li>
                <li className="bg-[#CCD0CF]/80 rounded-[36px] w-[106px] h-[55px] flex items-center justify-center text-black">
                  <Link href="/auth/login" className="text-center">
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
      );
}