"use client";

import { useState } from "react";
import Typewriter from "@/app/ui/typewriter";
import InputField from "./(generator)/InputField";

export default function Generate() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#F6ECE1] relative">
      <div className="text-center transition-all duration-700">
        {!isGenerating && (
          <div className="lg:text-[2.5rem] md:text-[2.2rem] sm:text-[1.9rem] font-medium text-[#1E1E26] mb-4">
            <div className="w-fit absolute top-0 right-0 m-4 rounded-full shadow-lg" />
            <p>WHATS ON YOUR MIND TODAY?</p>
            <Typewriter />
          </div>
        )}
        <div className={`${isGenerating ? "mt-20" : "mt-4"} transition-all duration-700`}>
          <InputField onGenerate={handleGenerate} />
          
        </div>
      </div>

      <div className="absolute top-4 sm:top-4 sm:right-4 md:top-6 md:right-6" />
    </section>
  );
}
