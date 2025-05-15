'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Используем useRouter для клиентской навигации
import { Spinner } from "@heroui/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useTheme } from 'next-themes';

interface InputFieldProps {
  onGenerate: (text: string) => void;
}

export default function InputField({ onGenerate }: InputFieldProps) {
  const { theme} = useTheme();
  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<string>('world')
  const [isDark, setIsDark] = useState(false);
  const router = useRouter(); 

  const topics = [
  { id: 'politics', label: 'Политика', color: '#FF4C4C' },
  { id: 'world', label: 'Мир', color: '#4CAF50' },
  { id: 'religion', label: 'Религия', color: '#9C27B0' },
  { id: 'society', label: 'Общество', color: '#FF9800' },
  { id: 'science', label: 'Наука', color: '#2196F3' },
  { id: 'culture', label: 'Культура', color: '#401E12' },
  { id: 'economy', label: 'Экономика', color: '#D9048E' },
  ];

  const getCategory = (category: string, isDark: boolean) => {
    switch (category) {
      case 'politics':
        return '/icons/politics.png'
      case 'world':
        return '/icons/world.png'
      case 'religion':
        return '/icons/religion.png'
      case 'society':
        return '/icons/society.png'
      case 'science':
        return '/icons/science.png'
      case 'culture':
        return '/icons/culture.png'
      case 'economy':
        return '/icons/economy.png'
      default:
        return '/icons/theme.png'
    }
  }

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

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
    <div className="flex flex-col items-center w-full max-w-[800px] mx-auto min-h-28 ">
      <div className="bg-[#EDE2D6] p-2 text-xl flex w-full max-w-[500px] dark:bg-[#1E1E26] text-black focus:outline-none rounded-[10px] justify-between">
        <div className="flex mt-[0.2rem] border-r-2 border-[#F6ECE1] h-8">
          {/* <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Тема</button> */}
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="px-2">
                <Image
                  alt="theme"
                  width={30}
                  height={30}
                  src={getCategory(categories, isDark)}
                />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 font-medium">
          <DropdownMenuLabel>Темы</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {topics.map((topic) => (
            <DropdownMenuItem
              key={topic.id}
              className="hover:cursor-pointer flex items-center space-x-2"
              onClick={() => setCategories(topic.id)}
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: topic.color }}
              />
              <span>{topic.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <input
          type="text"
          placeholder="Enter your keywords"
          className="bg-[#EDE2D6] focus:outline-none w-[87%] ml-2 dark:bg-[#1E1E26] text-black dark:text-white"
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
              src={isDark ? '/icons/white-arrow.png' : "https://img.icons8.com/ios-glyphs/40/send-letter.png"}
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
              className="flex items-center bg-[#EDE2D6] dark:bg-[#1E1E26] text-black dark:text-white rounded-[10px] px-3 py-1 text-lg cursor-pointer mt-2"
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