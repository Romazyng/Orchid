import Image from "next/image";

export default function Home() {
  return (
   <main className="flex items-center justify-center h-screen bg-black">
    <div className="text-center">
      <p className="text-[64px]">
        <strong>Build your</strong> <i>own</i> <strong>story</strong>
      </p>
      <h1 className="text-[#747272] text-[32px]">based on your preferences.</h1>
    </div>
    <div className="images">
    <Image 
            src = '/clKoZCgTHyhJ4eICoT1bJiWb91Q.png'
            width={271}
            height={271}
            className='absolute bottom-0 left-1/4 '
            alt='Grandma'
            draggable={false}
          />
    <Image 
            src = '/uojAWLm1FnK0nG6eUDQvr0L7SIo.png'
            width={271}
            height={271}
            className='absolute bottom-0 right-1/4 '
            alt='Grandma'
            draggable={false}
          />
    </div>
   </main>
  );
}
