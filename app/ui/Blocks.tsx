import Image from "next/image";
export default function Blocks() {
    return ( 
        <div>
            <section className="mt-52 flex justify-center h-[33rem] ">
                <div className="w-2/3 h-full relative ">
                <div className="absolute top-0 left-0 bg-black w-64 h-64 rounded-[13px]">
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
                </div>
          <div className="absolute top-0 right-0 bg-black w-64 h-64 rounded-[13px] flex justify-center items-center">
          <p className="absolute bottom-0 left-0 text-[20px] text-white font-semibold m-4">
            No motivation
          </p>
          </div>
          <div className="absolute bottom-0 left-0 bg-black w-64 h-64 rounded-[13px] flex justify-center items-center">
            <p className="text-[20px] text-white font-semibold mr-8">
            Or even there're <br/>
            so many ideas so <br/>
            it's getting hard <br/>
            to choose <br/>
            the best one<br/>
            </p>
          </div>
          <div className="absolute bottom-0 right-0 bg-black w-64 h-64 rounded-[13px]">
            <p className="text-[20px] text-white font-semibold mt-5 ml-5">
            You are stealing <br/>
            ideas
            </p>
            <Image
              src='/robbery.png'
              alt="robbery"
              width={171}
              height={171}
              className="absolute bottom-1 right-2"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-7/12 h-full">
            <p className="absolute bottom-0 right-5 font-semibold text-[32px] text-ellipsis">
            Perhaps you are familiar with <br/>
            one of these situations
            </p>
          </div>
        </div>
        </section>
        </div>

    )
}