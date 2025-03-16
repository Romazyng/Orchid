'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <div className="bg-white">
      {/* Main Section */}
      <section className="flex flex-col items-center mt-10 md:mt-20 lg:mt-32  text-black px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[6vw] sm:text-[4.5vw] md:text-[3.5vw] lg:text-[3rem] font-medium text-center"
        >
          WHY WORK WITH US?
        </motion.h2>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <Image
            src='/Bumagi_Chb.png'
            width={600}
            height={600}
            alt='Cat'
            className="w-64 sm:w-80 md:w-96 lg:w-[600px] transform -scale-x-100"
          />
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[5.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[3rem] font-medium mt-6 sm:mt-8 md:mt-10 text-center"
        >
          You don&apos;t want a content maker
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[5.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[3rem] font-medium text-[#747272] text-center"
        >
          You want to turn your ideas into reality
        </motion.p>

        {/* Description */}
        <div
          className="mt-8 sm:mt-12 md:mt-16 text-center max-w-4xl mx-auto"
        >
          <p className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2.1rem] font-semibold text-[#11212D]">
            More than a half of users feel like they are out of{" "}
            <span className="bg-black text-white px-1">inspiration</span> or any
            kind of{" "}
            <span className="bg-black text-white px-1">idea</span> of what they
            want to make, and this is what{" "}
            <span className="bg-black text-white px-1">we are here for</span>
          </p>
        </div>
      </section>

      {/* Additional Text Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-[#747272] text-[3.5vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.6rem] font-normal flex flex-col sm:flex-row justify-center gap-6 md:gap-9 px-4 mt-16"
      >
        <p className="max-w-md text-center sm:text-center">
          We know the feeling of being unable to create something new, something
          that will blow people&apos;s mind. For us, the main goal is to give
          people inspiration, give them something that they will turn into
          something great. With Orchid, you&apos;re not just creating, you&apos;re
          crafting something that can leave a lasting impact.
        </p>
        <p className="max-w-md text-center sm:text-center">
          With Orchid, you can finally break through creative barriers and bring
          your ideas to life. We empower you to create something extraordinary—
          something that will captivate and inspire others.
        </p>
      </motion.section>
    </div>
  );
}