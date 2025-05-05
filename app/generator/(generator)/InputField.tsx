'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; // Используем useRouter для клиентской навигации
import { Spinner } from "@heroui/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface InputFieldProps {
  onGenerate: (text: string) => void;
}

export default function InputField({ onGenerate }: InputFieldProps) {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<string>('world')
  const router = useRouter(); 


  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === " " && inputValue.trim()) {
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
      alert("Добавьте ключевые слова");
      return;
    }

    setLoading(true);

    try {
      // Генерация текста
      const response = await fetch("http://localhost:8000/generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: keywords.join(" "),
          category: categories,
          max_length: 500,
          temperature: 0.9,
          top_k: 50,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Сохранение в Supabase
      const supabaseResponse = await fetch("/api/save-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_input: keywords.join(", "), // запрос пользователя
          bot_response: data.generated_text, // ответ бота
        }),
      });

      if (!supabaseResponse.ok) {
        throw new Error("Ошибка при сохранении чата в Supabase");
      }

      // Получаем chatId из ответа
      const savedChatData = await supabaseResponse.json();
      const chatId = savedChatData.chatId;

      // Редирект на страницу нового чата
      router.replace(`/generator/chats/${chatId}`); // Используем router.replace для клиентской навигации
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Ошибка при генерации текста или сохранении данных");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[800px] mx-auto min-h-28">
      <div className="bg-[#EDE2D6] p-2 text-xl flex w-full max-w-[500px] text-black focus:outline-none rounded-[10px] justify-between">
        <div className="flex mt-[0.2rem] border-r-2 border-[#F6ECE1] h-8">
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="px-2">
            <Image
              alt="theme"
              width={35}
              height={35}
              src='/icons/theme.png'
            /></button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 font-medium">
            <DropdownMenuLabel>Темы</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
            <DropdownMenuItem className="">
              <button onClick={() => setCategories('politics')}>Политика</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button onClick={() => setCategories('world')}>Мир</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button onClick={() => setCategories('religion')}>Религия</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button onClick={() => setCategories('society')}>Общество</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button onClick={() => setCategories('science')}>Наука</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button onClick={() => setCategories('culture')}>Культура</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button onClick={() => setCategories('economy')}>Экономика</button>
            </DropdownMenuItem>
            </DropdownMenuSub>
          </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <input
          type="text"
          placeholder="Enter your keywords"
          className="bg-[#EDE2D6] focus:outline-none w-[87%] ml-2"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleGenerate} className="focus:outline-none">
          {loading ? (
            <Spinner />
          ) : (
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios-glyphs/40/send-letter.png"
              alt="send-letter"
            />
          )}
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex w-full max-w-[473px] justify-center">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className="flex items-center bg-slate-500 text-white rounded-[10px] px-3 py-1 text-lg cursor-pointer mt-2"
              onClick={() => handleRemove(index)}
            >
              <span className="mr-2">{keyword}</span>
              <button className="text-white hover:text-red-500 focus:outline-none">✕</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}