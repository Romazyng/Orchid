"use client";

import { useEffect, useState } from "react";
import Typewriter from "@/app/ui/typewriter";
import InputField from "./(generator)/InputField";
import WavyText from "../ui/components/WavyText";
import Variants from "../ui/components/Menu";
import { useTheme } from 'next-themes';

export default function Generate() {

  const { theme, setTheme } = useTheme();
  // const [theme, setTheme] = useState('light')
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // useEffect (() => {
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark')
  //   } else{
  //     document.documentElement.classList.remove('dark')
  //   }
  // }, [theme])

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Не рендерим UI до монтирования на клиенте

  const handleGenerate = (text: string) => {
    setIsGenerating(true);
    setGeneratedText(text);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#F6ECE1] relative dark:bg-[#16161D]">
      {/* <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Тема</button> */}
      <div className="text-center transition-all duration-700">
        {!generatedText && (
          <div
            className={`dark:text-[#DADADA] lg:text-[2.5rem] md:text-[2.2rem] sm:text-[1.9rem] font-medium text-[#1E1E26] mb-4 transition-opacity duration-700 ${
              isGenerating ? "opacity-0" : "opacity-100"
            }`}
          >
            <WavyText/>
          </div>
        )}
        {generatedText && (
          <div className="mt-6 p-4 w-full max-w-lg bg-gray-100 rounded-lg shadow-inner h-64 overflow-y-auto text-gray-800">
            {generatedText}
          </div>
        )}


        <div className={`${generatedText ? "mt-20" : "mt-4"} transition-all duration-700`}>
          
          <InputField onGenerate={handleGenerate} />
        </div>
      </div>
    </section>
  );
}
