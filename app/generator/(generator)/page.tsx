import Typewriter from "@/app/ui/typewriter";
import InputField from "./InputField";
import HTMLContent from "@/app/ui/count";

export default function Generate() {
    return(
        <section className="h-screen  flex items-center justify-center">
            <div className="text-center">
                <div className="lg:text-[2.5rem] md:text-[2.2rem] sm:text-[1.9rem] font-medium text-white mb-4">
                    <p>WHATS ON YOUR MIND TODAY?</p>
                    <Typewriter/>
                </div>
                <InputField/>
            </div>
        </section>
    )
}
