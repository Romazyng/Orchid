import Typewriter from "@/app/ui/typewriter";
import HTMLContent from "@/app/ui/count";
import InputField from "./(generator)/InputField";
import Background from "../ui/background";
import { auth } from "@/auth"
import Image from "next/image"
import { SignOutButton } from "../ui/components/sign-out-button";
import AvatarWithSignOut from "../ui/components/AvatarProfile";

export default async function Generate() {
    const session = await auth()

    return (
        <section className="h-screen flex items-center justify-center ">
            <div className="text-center ">
                <div className="lg:text-[2.5rem] md:text-[2.2rem] sm:text-[1.9rem] font-medium text-white mb-4 ">
                    <div className=" w-fit absolute top-0 right-0 m-4 rounded-full shadow-lg">
                    {/* <SignOutButton/> */}
                    </div>
                    <p>WHATS ON YOUR MIND TODAY?</p>
                    <Typewriter />
                    <Background/>
                </div>
                <InputField/>
                {session?.user?.image && (
                <div className="absolute top-0 right-0 m-4">
                    <AvatarWithSignOut src={session.user.image} alt="Avatar" />
                </div>
                )}
            </div>
        </section>
    );
}