"use client";

import { useState } from "react";
import Image from "next/image";


const FAQSection = () => {
  const faqs = [
    {
      question: "What is Orchids text generation platform?",
      answer:
        "Orchid's platform is an AI-powered tool that helps you create high-quality, customized text based on your input. It's designed to streamline content creation by analyzing your ideas and generating tailored, ready-to-use content quickly.",
        pic: '/icons/1.png'
    },
    {
      question: "How does the platform work?",
      answer:
        "The process is simple: you provide keywords and concepts, our AI processes the information,and then we generate personalized text that matches your needs. You can review and refine the output to ensure it meets your expectations.",
        pic: '/icons/2.png'
    },
    {
      question: "Who can benefit from using this platform?",
      answer:
        "Our platform is ideal for anyone who creates content—writers, marketers, and business owner Whether you need website copy, blog posts, product descriptions, or creative writing, Orchid helps you save time while delivering high-quality results.",
        pic: '/icons/3.png'
    },
    {
        question: "Is the content generated unique?",
        answer:
          "Yes! Our AI generates completely original content based on your input. Every piece of text is customized to your specifications, ensuring it’s unique and tailored to your needs.",
        pic: '/icons/4.png'
    },
    {
        question: "Can I make changes to the generated text?",
        answer:
        "Absolutely. After the content is generated, you have the flexibility to review and edit it as needed. Our platform allows for easy refinement to ensure the final result is exactly what you’re looking for.",
        pic: '/icons/5.png'
    },
    {
        question: "What does the name 'Orchid' mean and why was it chosen?",
        answer:
          "The name 'Orchid' was chosen because it symbolizes beauty, creativity, and growth—values that resonate deeply with our mission. Just like an orchid flower, our platform is designed to help ideas bloom into something remarkable. It represents the elegance and precision we bring to text generation, while also reflecting the nurturing process of turning simple concepts into powerful, impactful content.",
          pic: '/icons/6.png'
    }
  ];

  // Хранение состояния активного вопроса
  const [activeIndex, setActiveIndex] = useState(null);

  // Функция для переключения активного вопроса
  const toggleFAQ = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 py-12 mt-16">
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 mb-4 last:mb-0"
          >
            {/* Вопрос */}
                <Image
                    src={faq.pic || '/default-icon.png'}
                    alt="icon"
                    width={24} 
                    height={24} 
                />
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left p-4 text-[1.3rem] font-medium transition-all"
            >
              {faq.question}
              <span className="text-2xl transition-transform duration-300">
                {activeIndex === index ? "⏶" : "⏷"}
              </span>
            </button>
            {/* Ответ */}
            <div
              className={`overflow-hidden transition-max-height duration-300 ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="p-4 text-[#747272] text-[1.1rem] font-medium">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
