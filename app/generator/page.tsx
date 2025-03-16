import Typewriter from "@/app/ui/typewriter";
import HTMLContent from "@/app/ui/count";
import InputField from "./(generator)/InputField";
import Background from "../ui/background";
import Image from "next/image"
import GeneratorLayout from "../ui/components/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "../login/actions";
import { redirect } from "next/navigation";
import UserProfile from "../ui/components/UserProfile";
import GeneratorNavbar from "../ui/components/GeneratorNavbar";

export default async function Generate() {

    return (
        <section className="h-screen flex items-center justify-center bg-[#F6ECE1]">
            <GeneratorNavbar/>
            <GeneratorLayout/>
            <div className="text-center ">
                <div className="lg:text-[2.5rem] md:text-[2.2rem] sm:text-[1.9rem] font-medium text-[#1E1E26] mb-4 ">
                    <div className=" w-fit absolute top-0 right-0 m-4 rounded-full shadow-lg">
                    </div>
                    <p>WHATS ON YOUR MIND TODAY?</p>
                    <Typewriter />
                </div>
                <InputField/>
                </div>
                <div className="absolute top-4 sm:top-4 sm:right-4 md:top-6 md:right-6">
                </div>
        </section>
    );
}