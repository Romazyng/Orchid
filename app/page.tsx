'use client'

import WhyUs from "../app/ui/components/WhyUs";
import Image from "next/image";
import Blocks from "../app/ui/components/Blocks";
import Navbar from "../app/ui/components/Navbar";
import FAQSection from "../app/ui/components/FAQ";
import Reviews from "../app/ui/components/Reviews";
import ShowContent from "./utils/ShowContent";

import { Marcellus_SC } from 'next/font/google';

const marcellus = Marcellus_SC({
  subsets: ['latin'], 
  weight: '400',      
  variable: '--font-marcellus', 
});

export default function Home() {
  ShowContent();
  return (
    <main className="flex flex-col min-h-screen max-w-full" >
      
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white md:h-152 md:w-152">
            <div className="text-center mb-[5%] lg:h-48 sm:w-full fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
              <p className="text-[5vw] md:text-[4rem]">
                <strong>Build your</strong> <i className="font-light">own</i> <strong>story</strong>
              </p>
              <h1 className="text-[#747272] text-[3vw] md:text-[2rem]">
                based on your preferences.
              </h1>
            </div>
            <div className="absolute bottom-0 w-[50%] md:flex justify-between items-end">
              <Image
                src="/clKoZCgTHyhJ4eICoT1bJiWb91Q1.png"
                width={251}
                height={251}
                alt="Image 1"
                draggable={false}
                className="w-[15vw] md:w-[15rem] hidden md:block"
              />
              <div className="flex justify-center items-end w-[15vw] md:w-[4rem] translate-y-[-20px]">
              <svg
              className="relative animate-bounce"
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
              <Image
                src="/uojAWLm1FnK0nG6eUDQvr0L7SIo1.png"
                width={251}
                height={251}
                alt="Image 2"
                draggable={false}
                className="w-[15vw] md:w-[15rem] hidden md:block "
              />
            </div>
      </section>
      <Navbar/>
      <div className="fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
        <WhyUs/>
      </div>
      <div className="fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
        <Blocks/>
      </div>
      <section className="flex flex-col items-center mt-48 h-96 text-black fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
            <div className="text-[6vw] md:text-[4rem] font-medium">
              <span>
                Our job is to help you find that<br/> <i className="font-light">idea</i> and make it legendary
              </span>
            </div>
      </section>
      <section className="text-[#747272] md:text-[1.5rem] font-normal flex space-x-[28rem] place-content-center mt-5 ">
          <div className=" w-[334px] h-[344px] rounded-[13px] flex flex-col">
              <p className="mt-10 ml-5 text-[20px] text-black font-semibold">
                  Unleash your potential
                </p>
              <Image
                src='/cats.png'
                alt="cats"
                width={334}
                height={270}
                className="object-cover mt-auto rounded-[13px]"
              />
          </div>
          {/* <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5 54H85.5M85.5 54L54 22.5M85.5 54L54 85.5" stroke="#1E1E1E" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> */}
          <div className=" w-[334px] h-[344px] rounded-[13px] flex flex-col justify-center items-center relative">
          <div className="absolute top-0 mt-16">
            <p className="text-[20px] text-black font-semibold">
              Get better at <br />
              creating
            </p>
          </div>
          <Image
            src='/meet.png'
            alt="meet"
            width={446}
            height={257}
            className="mt-32"
          />
        </div>
      </section>
      <section className="fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
        <div className=" flex flex-col items-center mt-36 h-64">
          <p className="font-medium text-[6vw] md:text-[2.5rem] ">
            Meet the team
          </p>
        </div>
      </section>
      <section className=" min-h-screen">
        <div className="flex justify-around px-[21rem] fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
          <Image
            src='/Chelka_Ch_Chb.png'
            alt="black"
            width={355}
            height={355}
            className=""
          />
          <div className="space-y-4 mt-16 pl-4">
            <p className="font-medium text-[24px]">
              Roman Chernetsky
            </p>
            <p className="font-normal text-[20px] text-[#0099FF]">
              CEO, Frontend
            </p>
            <p className="font-light text-[18px] text-[#747272]">
            I believe that success comes from bold ideas, relentless determination, and the courage to challenge the status quo. Every challenge is an opportunity to grow, 
            and every setback a lesson to move forward stronger. My mission is to inspire my team to dream bigger, push boundaries, and never settle for less than excellence. 
            Together, we have the power to turn vision into reality, to innovate fearlessly, 
            and to make a lasting impact on the world. 
            Let&apos;s continue to rise, lead with purpose, and achieve greatness—one step at a time.
            </p>
          </div>
        </div>
        <div className="flex justify-around px-[21rem] fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
          <div className="space-y-4 mt-16 pl-4">
            <p className="font-medium text-[24px]">
              Nikita Gryaznov
            </p>
            <p className="font-normal text-[20px] text-[#0099FF]">
              Co-Founder, Backend
            </p>
            <p className="font-light text-[18px] text-[#747272]">
            I want to remind you that our work is the backbone of innovation. 
            Each line of code holds the potential to change the game. Embrace challenges as
            opportunities to learn and grow. Dont fear failure; let it guide you to better solutions. 
            Collaboration is key—leverage your teammates&apos; strengths, share ideas, and ask for help.
            </p>
          </div>
          <Image
            src='/Chelka_B_Chb.png'
            alt="white"
            width={355}
            height={355}
          />
        </div>
        <div className="flex justify-around px-[21rem] fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
          <Image
            src='/Ochki_Chb.png'
            alt="glasses"
            width={355}
            height={355}
            className="transform -scale-x-100"
          />
          <div className="space-y-4 mt-16 pl-4">
            <p className="font-medium text-[24px]">
              Klim Popov
            </p>
            <p className="font-normal text-[20px] text-[#0099FF]">
              Co-Founder, AI
            </p>
            <p className="font-light text-[18px] text-[#747272]">
              Through the journey, my passion for AI has driven me to push the limits of whats possible. 
              I believe we have the power to transform lives and shape a better world together. 
              Lets continue to dream big and create the future we envision!
              As Co-founder and AI Developer at Orchid, Im driven to push the boundaries of innovation, 
              create intelligent solutions, and shape the future with impactful technology.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center">
        <div className="px-[21rem] py-8 mt-32">
          <h2 className="text-center font-semibold text-[2.5rem]">How it works?</h2>
          <div className="grid grid-cols-2 gap-4 mt-16">
            <div className="bg-black text-white p-6 rounded-[13px] col-span-1 w-[37rem] h-[14rem] flex justify-start items-end fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
              <div>
                <h3 className="text-[1.2rem] font-medium mb-2">Gathering Your Ideas</h3>
                <p className="text-[0.8rem] font-medium text-[#747272]">
                  We start by understanding your vision. You provide key concepts, themes, and keywords that define your goals. These inputs are stored locally, forming the foundation of the content creation process.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-[13px] col-span-1 w-[30rem] h-[14rem] flex justify-start items-end ml-12">
              <div>
                  <h3 className="text-[1.2rem] font-medium text-black mb-2">Contextual Analysis</h3>
                  <p className="text-[0.8rem] font-medium text-[#747272]">
                  Next, our platform analyzes your keywords using advanced AI. 
                  We assess the tone, style, and context to ensure 
                  the content aligns perfectly with your intended message and purpose.
                  </p>
                </div>
            </div>
            <div className="p-6 rounded-[13px] col-span-1 w-[28rem] h-[18rem] flex justify-start items-end">
              <div>
                <h3 className="text-[1.2rem] font-medium text-black mb-2">Content Generation</h3>
                <p className="text-[0.8rem] font-medium text-[#747272]">
                  Our AI then generates high-quality, tailored text based on your input. The content is crafted to match your needs, whether its creative, formal, or something in between.
                </p>
              </div>
            </div>
            <div className="bg-black text-white p-6 rounded-[13px] col-span-1 w-[42rem] h-[18rem] flex justify-start items-end -translate-x-20 fade-in opacity-0 transform translate-y-10 transition-all duration-1000">
              <div>
                <h3 className="text-[1.2rem] font-medium mb-2">Review and Refine</h3>
                <p className="text-[0.8rem] font-medium text-[#747272]">
                  Finally, you can review the generated content and make any adjustments if needed. Our platform gives you the flexibility to refine the text until it meets your exact expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section className="mt-60">
      <div>
        <h2 className="text-center font-semibold text-[2.5rem]">Frequently asked questions</h2>
      </div>
    </section>
      <FAQSection/>
      <Reviews/>
      <section id='contact' className="bg-black h-[1250px] mt-56">
      <div className=" w-full h-44">
        <h2 className="text-center font-medium text-[4rem] mt-24 text-white">Tell us about yourself</h2>
      </div>
      <div className="flex justify-center items-center">
      <div className="flex flex-col gap-8 w-[80%] max-w-lg">
        <input
          type="text"
          placeholder="Enter your first name"
          className="border-b-2 border-gray-400 bg-transparent p-4 text-xl text-white focus:outline-none focus:border-blue-500 placeholder-gray-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <input
          type="text"
          placeholder="Enter your last name"
          className="border-b-2 border-gray-400 bg-transparent p-4 text-xl text-white focus:outline-none focus:border-blue-500 placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="border-b-2 border-gray-400 bg-transparent p-4 text-xl text-white focus:outline-none focus:border-blue-500 placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Enter your message"
          className="border-b-2 border-gray-400 bg-transparent p-4 text-xl text-white focus:outline-none focus:border-blue-500 placeholder-gray-500"
        />
        <button className="hover:text-sky-500 hover:border-sky-500 border-2 rounded-[13px] border-gray-400 mt-14 bg-transparent p-4 text-xl text-white focus:outline-none focus:border-blue-500 self-center w-[120%]">
          Submit
        </button>
      </div>
    </div>
    <div className="relative">
      <p className={`${marcellus.className} absolute top-[-2rem] left-1/2 transform -translate-x-1/2 text-white text-[2rem] font-bold`}>
        Orchid
      </p>
      <p className="text-center font-normal text-[4rem] mt-64 text-white">
        <strong>Build your</strong> <i className="font-light">own</i> <strong>story</strong>
      </p>
    </div>
    </section>
    </main>
  );
}


