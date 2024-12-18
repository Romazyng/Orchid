'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InputField() {
    const [keywords, setKeywords] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const router = useRouter()

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && inputValue.trim()) {
            if (keywords.length >= 5) {
                router.push("/"); 
            } else {
                // добавить новое слово в массив
                setKeywords([...keywords, inputValue.trim()]);
                setInputValue(""); // очистка инпута
            }
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const value = event.target.value;

        // разрешаем обновление только если строка не содержит пробелов
        if (!/\s/.test(value)) {
            setInputValue(value);
        }
    };

    const handleRemove = (index: number) => {
        setKeywords(keywords.filter((_, i) => i !== index));
    };
    return (
            <div>
                <input
                    type="text"
                    placeholder="Enter the keyword"
                    className="bg-[#A19E9E] p-4 text-xl w-[473px] text-white focus:outline-none rounded-[10px] focus:border-blue-500 placeholder-gray-500 mb-4"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
                <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, index) => (
                    <div 
                        key={index} 
                        className="flex items-center bg-gray-700 text-white rounded-[10px] px-3 py-1 text-lg"
                    >
                        <span className="mr-2">{keyword}</span>
                        <button 
                            onClick={() => handleRemove(index)} 
                            className="text-white hover:text-red-500 focus:outline-none"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
