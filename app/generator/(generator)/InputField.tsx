'use client';

import { useState } from "react";

export default function InputField() {
    const [keywords, setKeywords] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [generatedText, setGeneratedText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && inputValue.trim()) {
            if (keywords.length >= 5) {
                alert("Вы можете добавить максимум 5 ключевых слов.");
            } else {
                setKeywords([...keywords, inputValue.trim()]);
                setInputValue("");
            }
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!/\s/.test(value)) {
            setInputValue(value);
        }
    };

    const handleRemove = (index: number) => {
        setKeywords(keywords.filter((_, i) => i !== index));
    };

    const handleGenerate = async () => {
        if (keywords.length === 0) {
            alert("Добавьте хотя бы одно ключевое слово для генерации текста.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:8000/generator", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question: keywords.join(" ") }), // Изменено на "question"
            });

            if (!response.ok) {
                const error = await response.text();
                console.error("Ошибка от сервера:", error);
                alert(`Ошибка сервера: ${response.statusText}`);
                return;
            }

            const data = await response.json();
            setGeneratedText(data.answer); // Изменено на "answer", чтобы соответствовать серверному ответу
        } catch (error) {
            console.error("Ошибка отправки данных:", error);
            alert("Произошла ошибка при отправке данных. Проверьте сервер.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="">
            <input
                id="word"
                type="text"
                placeholder="Введите ключевое слово"
                className="bg-[#A19E9E] p-4 text-xl w-[473px] text-white focus:outline-none rounded-[10px] focus:border-blue-500 placeholder-gray-500 mb-4"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <div className="flex items-center justify-center">

            <div className="flex gap-2  mb-4 w-max">
                {keywords.map((keyword, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-slate-500 text-white rounded-[10px] px-3 py-1 text-lg"
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
            <button
                onClick={handleGenerate}
                className={`px-6 py-2 rounded-[10px] focus:outline-none ${
                    loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
                disabled={loading}
            >
                {loading ? "Загрузка..." : "Генерировать"}
            </button>
            {generatedText && (
                <div className="flex items-center justify-center mt-4">
                    <div className="p-4 bg-gray-100 rounded-[10px] text-black w-[50%]">
                        <h3 className="text-lg font-bold text-center">Сгенерированный текст:</h3>
                        <p className="text-center">{generatedText}</p>
                    </div>
                </div>
            )}
        </div>
    );
}