import InputField from "./InputField";

export default function Generate() {
    return(
        <section className="h-screen bg-black flex items-center justify-center">
            <div className="md:text-[3rem] font-medium text-white mb-36">
              <p>
                WHATS ON YOUR MIND TODAY?
              </p>
            <div className="flex items-center justify-center mt-11">
              <InputField/>
            </div>
            </div>
      </section>
    )
}