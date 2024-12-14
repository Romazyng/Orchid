import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center  mb-[5%]">
          <p className="text-[64px]">
            <strong>Build your</strong> <i>own</i> <strong>story</strong>
          </p>
          <h1 className="text-[#747272] text-[32px]">based on your preferences.</h1>
        </div>
        <div className="absolute bottom-0 w-[50%] flex justify-between ">
          <Image
            src="/clKoZCgTHyhJ4eICoT1bJiWb91Q.png"
            width={251}
            height={251}
            alt="Image 1"
            draggable={false}
          />
          <Image
            src="/uojAWLm1FnK0nG6eUDQvr0L7SIo.png"
            width={251}
            height={251}
            alt="Image 2"
            draggable={false}
          />
        </div>
      </section>

      {/* Белая секция */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
        <h2 className="text-[48px] font-bold">Welcome to the light section!</h2>
        <p className="text-[24px] mt-5">This is the second part of your story.</p>
      </section>
    </main>
  );
}
