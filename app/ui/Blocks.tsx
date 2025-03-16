'use client'
import Image from "next/image";

export default function Blocks() {
  return (
    <div className="">
      <section className="mt-12 md:mt-24 lg:mt-44 flex flex-col justify-center h-auto px-4 py-8">
        {/* Blocks Section */}
        <div className="w-full md:w-2/3 mx-auto">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Top Left Block */}
            <div className="bg-black rounded-[13px] p-4 flex flex-col justify-between min-h-[200px] sm:min-h-[250px] md:min-h-[300px] min-w-[250px] mx-auto w-2/4">
              <p className="text-lg sm:text-base md:text-lg lg:text-xl text-white font-semibold">
                Lack of <br />
                inspiration
              </p>
              <div className="relative w-full h-32 sm:h-32 md:h-40">
                <Image
                  src='/mad.png'
                  width={171}
                  height={171}
                  alt='mad'
                  className="absolute bottom-0 right-0 w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40"
                />
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 bg-black w-64 h-64 rounded-[13px]">
                    <p className="text-[20px] text-white font-semibold mt-5 ml-5">
                    Lack of <br/>
                    inspiration
                    </p>
                    <Image
                    src='/mad.png'
                    width={171}
                    height={171}
                    alt='mad'
                    className="absolute bottom-0 right-3"
                    />
                </div> */}

            {/* Top Right Block */}
            <div className="bg-black rounded-[13px] p-4 flex items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] min-w-[250px] mx-auto w-2/4">
              <p className="text-lg sm:text-base md:text-lg lg:text-xl text-white font-semibold">
                No motivation
              </p>
            </div>

            {/* Middle Text */}
            <div className="hidden sm:flex col-span-2 justify-center items-center my-0">
              <div className="text-center p-0 rounded-lg">
                <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium text-black rounded-[9px]">
                  Perhaps you are familiar with <br />
                  one of these situations
                </p>
              </div>
            </div>

            {/* Bottom Left Block */}
            <div className="bg-black rounded-[13px] p-4 flex items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] min-w-[250px] mx-auto w-2/4">
              <p className="text-base sm:text-sm md:text-base lg:text-lg text-white font-semibold">
                Or even there&apos;re <br />
                so many ideas so <br />
                it&apos;s getting hard <br />
                to choose <br />
                the best one
              </p>
            </div>

            {/* Bottom Right Block */}
            <div className="bg-black rounded-[13px] p-4 flex flex-col justify-between min-h-[200px] sm:min-h-[250px] md:min-h-[300px] min-w-[250px] mx-auto w-2/4">
              <p className="text-lg sm:text-base md:text-lg lg:text-xl text-white font-semibold">
                You are stealing <br />
                ideas
              </p>
              <div className="relative w-full h-32 sm:h-32 md:h-40">
                <Image
                  src='/robbery.png'
                  alt="robbery"
                  width={171}
                  height={171}
                  className="absolute bottom-0 right-0 w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}