"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Sports", "Weather", "Cars", "Health", "News", "Politics", "Space", "Garden"];
const typingSpeed = 200; 
const deletingSpeed = 50; 
const delayBetweenWords = 1000; 

export default function Typewriter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    
    if (!deleting) {
      if (text.length < currentWord.length) {
        setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
      } else {
        setTimeout(() => setDeleting(true), delayBetweenWords);
      }
    } else {
      if (text.length > 0) {
        setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [text, deleting, index]);

  return (
    <motion.div 
      className="lg:text-[2.1rem] md:text-[1.9rem] sm:text-[1.6rem] font-medium text-white mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
      <motion.span 
        className="inline-block w-1 h-6 bg-gray-400 ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.div>
  );
}
