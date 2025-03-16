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
        <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 lg:w-[25rem] lg:h-[3.5rem] bg-[#181717]/90 text-white rounded-[36px] z-10 backdrop-blur-sm">
            <div className="container mx-auto flex justify-between items-center">
              <div className="bg-[#0b0b0b]/20 rounded-[36px] lg:w-[6.9rem] lg:h-[3rem] ml-1 mt-1 flex items-center justify-center">
                <Link href="/" className={`${marcellus.className} antialiased text-2xl`}>
                  Orchid
                </Link>
              </div>
              <ul className=" flex items-center"> 
                <li className="rounded-[36px] lg:w-[6.9rem] lg:h-[3rem] mt-1 flex items-center justify-center text-white hover:bg-[#313131] duration-500 font-semibold">
                  <a onClick={scrollToSection} className="text-center cursor-pointer">
                    Contact us
                  </a>
                </li>
                <li className="bg-[#ffffff]/90 rounded-[36px] lg:w-[10.5rem] lg:h-[3rem] mt-1 mr-1 flex items-center justify-center text-black font-semibold">
                  <Link href="/login" className="text-center">
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
      );
}