import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen md:max-w-full" >
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white md:h-152 md:w-152">
        <div className="text-center mb-[5%] lg:h-48 sm:w-full">
          <p className="text-[5vw] md:text-[4rem]">
            <strong>Build your</strong> <i>own</i> <strong>story</strong>
          </p>
          <h1 className="text-[#747272] text-[3vw] md:text-[2rem]">based on your preferences.</h1>
        </div>
        <div className="absolute bottom-0 w-[50%] md:flex justify-between items-end ">
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
              className="relative"
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
            className="w-[15vw] md:w-[15rem] hidden md:block"
          />
        </div>
      </section>
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
    </main>
  );
}


