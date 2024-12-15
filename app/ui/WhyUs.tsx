'use client'

import Image from "next/image";

export default function WhyUs() {
  return (
    <div>
      <section className="flex flex-col items-center mt-10 min-h-screen text-black">
        <h2 className="text-[6vw] md:text-[2.5rem] font-medium">WHY WORK WITH US?</h2>
        <Image
          src='/Bumagi_Chb.png' 
          width={600}
          height={600}
          alt='Cat'
          className="transform -scale-x-100"
        />
        <p className="text-[6vw] md:text-[2.8rem] font-medium mt-5">You don’t want a contentmaker</p>
        <p className="text-[6vw] md:text-[2.8rem] font-medium text-[#747272]">You want to turn your ideas into reality</p>
        <div className="mt-10 text-[6vw] md:text-[2rem] font-semibold text-[#11212D] text-center">
          <p>
          More than a half of users feel like they are out of <span className="bg-black text-white px-1">inspiration</span> or any<br/> 
          kind of <span className="bg-black text-white px-1">idea</span> of what they want to make, and this is what <span className="bg-black text-white px-1">we are here for</span>
          </p>
        </div>
      </section>
      <section className="text-[#747272] md:text-[1.5rem] font-normal flex space-x-6 place-content-center mt-12">
        <p className="">
        We know the feeling of being unable to create <br/>
        something new,
        something, that will blow <br/>
        people's mind. For us, the main goal<br/>
        is to give people inspiration, give them <br/>
        something, that they
        will turn into something great.<br/>
        With Orchid, you’re not just creating, you’re crafting <br/>
        something that can leave a lasting impact. <br/>
        </p>
        <p className="">
        With Orchid, you can finally break through <br/>
        creative barriers and bring your ideas to life. <br/>
        We empower you to create something<br/>
        extraordinary—something that will captivate <br/>
        and inspire others.
        </p>
    </section>
    </div>
  );
}
