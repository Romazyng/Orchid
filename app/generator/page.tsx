import Typewriter from "@/app/ui/typewriter";
import HTMLContent from "@/app/ui/count";
import InputField from "./(generator)/InputField";
import Background from "../ui/background";
import { auth } from "@/auth"
import Image from "next/image"
import { SignOutButton } from "../ui/components/sign-out-button";

export default async function Generate() {
    const session = await auth()
    return (
        <section className="h-screen flex items-center justify-center ">
            <div className="text-center ">
                <div className="lg:text-[2.5rem] md:text-[2.2rem] sm:text-[1.9rem] font-medium text-white mb-4 ">
                    <SignOutButton/>
                    <p>WHATS ON YOUR MIND TODAY?</p>
                    <Typewriter />
                    <Background/>
                </div>
                <InputField/>
                {session?.user?.image && (
                <Image
                    src={session.user.image}
                    width={50}
                    height={50}
                    alt="Avatar"
                    className="absolute top-0 right-0 m-4 rounded-full shadow-lg"
                />
                )}
            </div>
        </section>
    );
}
