'use client'

import WhyUs from "./ui/WhyUs";
import Image from "next/image";
import Blocks from "./ui/Blocks";
import FAQSection from "./ui/FAQ";
import Reviews from "./ui/Reviews";
import ShowContent from "./ShowContent";
import { motion } from "framer-motion";

import { Marcellus_SC } from 'next/font/google';
import Navbar from "./ui/Navbar";

const marcellus = Marcellus_SC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
});

export default function Home() {
  ShowContent();
  return (
    <main className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center mb-8 lg:mb-16 fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-[3vw] font-medium">
            <strong>Build your</strong> <i className="font-light">own</i> <strong>story</strong>
          </p>
          <h1 className="text-[#747272] text-lg sm:text-xl md:text-2xl lg:text-[1.5vw] mt-4 font-normal">
            based on your preferences.
          </h1>
        </div>
        <div className="absolute bottom-8 flex justify-center items-end">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 animate-bounce">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 63 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.5 57.75C45.9975 57.75 57.75 45.9975 57.75 31.5C57.75 17.0025 45.9975 5.25 31.5 5.25C17.0025 5.25 5.25 17.0025 5.25 31.5C5.25 45.9975 17.0025 57.75 31.5 57.75Z"
                stroke="#B3B3B3"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 18.75V43.25M32 43.25L44.25 31M32 43.25L19.75 31"
                stroke="#B3B3B3"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* WhyUs Section */}
      <div className="fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
        <WhyUs />
      </div>

      {/* Blocks Section */}
      <div className="fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
        <Blocks />
      </div>

      {/* Idea Section */}
      <section className="flex flex-col items-center mt-20 mb-20 h-95 text-black fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
        <div className="text-[5vw] md:text-[3rem] font-medium text-center">
          <span>
            Our job is to help you find that<br /> <i className="font-light">idea</i> and make it legendary
          </span>
        </div>
      </section>

      {/* Unleash Potential Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-8 md:mt-36 px-4 md:space-x-[9rem] ">
        <div className="w-full md:w-1/3 max-w-sm rounded-lg overflow-hidden">
          <p className="mt-6 ml-6 text-xl font-semibold text-black">
            Unleash your potential
          </p>
          <Image
            src='/cats.png'
            alt="cats"
            width={446}
            height={257}
            className="object-cover mt-4"
          />
        </div>
        <div className="font-bold w-24 h-24 md:block hidden">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0">
          </g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
            </g>
            <g id="SVGRepo_iconCarrier"> 
              <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#000000">
                </path> 
                </g>
              </svg>
        </div>
        <div className="w-full md:w-1/3 max-w-sm rounded-lg overflow-hidden relative">
          <div className="absolute top-6 left-6">
            <p className="text-xl font-semibold text-black">
              Get better at creating
            </p>
          </div>
          <Image
            src='/meet.png'
            alt="meet"
            width={446}
            height={257}
            className="mt-16"
          />
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="flex flex-col items-center mt-36 mb-36 fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
        <p className="text-[6vw] md:text-[2.5rem] font-medium">
          Meet the team
        </p>
      </section>

          {/* Team Members Section */}
    <section className="min-h-screen py-12 md:py-24 bg-[#F2F2F2]">
      {/* Roman Chernetsky */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-8 lg:px-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-1 md:order-1">
            <Image
              src='/Chelka_Ch_Chb.png'
              alt="Roman Chernetsky"
              width={250} 
              height={250} 
              className="w-full max-w-[300px] md:max-w-[300px] lg:max-w-[300px] mx-auto rounded-lg" 
            />
          </div>
          <div className="order-2 md:order-2 space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-medium">Roman Chernetsky</h3>
            <p className="text-lg md:text-lg text-[#0099FF] font-normal">CEO, Frontend</p>
            <p className="text-lg md:text-lg text-[#747272] font-normal">
            I believe that success comes from bold ideas, relentless determination, and the courage to challenge the status quo. Every challenge is an opportunity to grow, 
            and every setback a lesson to move forward stronger. My mission is to inspire my team to dream bigger, push boundaries, and never settle for less than excellence. 
            Together, we have the power to turn vision into reality, to innovate fearlessly, 
            and to make a lasting impact on the world. 
            Let&apos;s continue to rise, lead with purpose, and achieve greatness—one step at a time.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Nikita Gryaznov */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 md:px-8 lg:px-16 mt-12 md:mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-1 md:order-2">
            <Image
              src='/Chelka_B_Chb.png'
              alt="Nikita Gryaznov"
              width={250} 
              height={250} 
              className="w-full max-w-[300px] md:max-w-[300px] lg:max-w-[300px] mx-auto rounded-lg" 
            />
          </div>
          <div className="order-2 md:order-1 space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-medium">Nikita Gryaznov</h3>
            <p className="text-lg md:text-lg text-[#0099FF] font-normal">Co-Founder, Backend</p>
            <p className="text-lg md:text-lg text-[#747272] font-normal">
            I want to remind you that our work is the backbone of innovation. 
            Each line of code holds the potential to change the game. Embrace challenges as
            opportunities to learn and grow. Dont fear failure; let it guide you to better solutions. 
            Collaboration is key—leverage your teammates&apos; strengths, share ideas, and ask for help.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Klim Popov */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-4 md:px-8 lg:px-16 mt-12 md:mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-1 md:order-1">
            <Image
              src='/Ochki_Chb.png'
              alt="Klim Popov"
              width={250} 
              height={250} 
              className="w-full max-w-[300px] md:max-w-[300px] lg:max-w-[300px] mx-auto rounded-lg transform -scale-x-100" 
            />
          </div>
          <div className="order-2 md:order-2 space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-medium">Klim Popov</h3>
            <p className="text-lg md:text-lg text-[#0099FF] font-normal">Co-Founder, AI</p>
            <p className="text-lg md:text-lg text-[#747272] font-normal">
            Through the journey, my passion for AI has driven me to push the limits of whats possible. 
              I believe we have the power to transform lives and shape a better world together. 
              Lets continue to dream big and create the future we envision!
              As Co-founder and AI Developer at Orchid, Im driven to push the boundaries of innovation, 
              create intelligent solutions, and shape the future with impactful technology.
            </p>
          </div>
        </div>
      </motion.div>
    </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-24 px-4 md:px-8 lg:px-16">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold">
          How it works?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 md:mt-16 ">
          <div className="bg-black text-white p-6 rounded-lg min-h-64 md:ml-40">
            <h3 className="text-xl md:text-2xl font-medium mb-4">Gathering Your Ideas</h3>
            <p className="text-sm md:text-base text-[#747272]">
            We start by understanding your vision. You provide key concepts, themes, and keywords that define your goals. These inputs are stored locally, forming the foundation of the content creation process.
            </p>
          </div>
          <div className="p-6 rounded-lg min-h-64 md:mr-40">
            <h3 className="text-xl md:text-2xl font-medium mb-4">Contextual Analysis</h3>
            <p className="text-sm md:text-base text-[#747272]">
            Next, our platform analyzes your keywords using advanced AI. 
                  We assess the tone, style, and context to ensure 
                  the content aligns perfectly with your intended message and purpose.
            </p>
          </div>
          <div className=" p-6 rounded-lg min-h-64 md:ml-40">
            <h3 className="text-xl md:text-2xl font-medium mb-4 ">Content Generation</h3>
            <p className="text-sm md:text-base text-[#747272]">
            Our AI then generates high-quality, tailored text based on your input. The content is crafted to match your needs, whether its creative, formal, or something in between.
            </p>
          </div>
          <div className="bg-black text-white p-6 rounded-lg min-h-64 md:mr-40">
            <h3 className="text-xl md:text-2xl font-medium mb-4">Review and Refine</h3>
            <p className="text-sm md:text-base text-[#747272]">
            Finally, you can review the generated content and make any adjustments if needed. Our platform gives you the flexibility to refine the text until it meets your exact expectations.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-12 md:mt-24">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold">
          Frequently asked questions
        </h2>
        <FAQSection />
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Section */}
      <section id='contact' className="bg-black py-12 md:py-24 mt-12 md:mt-24 min-h-screen">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
            Tell us about yourself
          </h2>
        </div>
        <div className="flex justify-center items-center mt-8 md:mt-16">
          <div className="flex flex-col gap-4 w-full max-w-md px-4">
            <input
              type="text"
              placeholder="Enter your first name"
              className="border-b-2 border-gray-400 bg-transparent p-2 text-white focus:outline-none focus:border-blue-500 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Enter your last name"
              className="border-b-2 border-gray-400 bg-transparent p-2 text-white focus:outline-none focus:border-blue-500 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b-2 border-gray-400 bg-transparent p-2 text-white focus:outline-none focus:border-blue-500 placeholder-gray-500"
            />
            <textarea
              placeholder="Enter your message"
              className="border-b-2 border-gray-400 bg-transparent p-2 text-white focus:outline-none focus:border-blue-500 placeholder-gray-500"
            />
            <button className="hover:text-sky-500 hover:border-sky-500 border-2 rounded-lg border-gray-400 mt-8 bg-transparent p-2 text-white focus:outline-none focus:border-blue-500">
              Submit
            </button>
          </div>
        </div>
        <div className="text-center mt-12 md:mt-24">
          <p className={`${marcellus.className} text-white text-4xl md:text-5xl lg:text-6xl font-bold`}>
            Orchid
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-4">
            <strong>Build your</strong> <i className="font-light">own</i> <strong>story</strong>
          </p>
        </div>
      </section>
    </main>
  );
}