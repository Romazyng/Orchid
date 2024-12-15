// app/ui/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white md:h-152 md:w-152">
      <div className="text-center mb-[5%] lg:h-48 sm:w-full">
        <p className="text-[5vw] md:text-[4rem]">
          <strong>Build your</strong> <i>own</i> <strong>story</strong>
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
          {/* SVG код */}
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
  );
}
