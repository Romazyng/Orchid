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
        <div
          className={`lg:text-[2.5rem] md:text-[2.2rem] sm:text-[1.9rem] font-medium text-[#1E1E26] mb-4 transition-opacity duration-700 ${
            isGenerating ? "opacity-0" : "opacity-100"
          }`}
        >
          <p>WHATS ON YOUR MIND TODAY?</p>
          <Typewriter />
        </div>

        <div className={`${isGenerating ? "mt-20" : "mt-4"} transition-all duration-700`}>
          <InputField onGenerate={handleGenerate} />
        </div>
      </div>
    </section>
  );
}
