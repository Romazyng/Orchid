'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
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
import UserProfile from '../../generator/UserProfile';
import { Button } from '@/components/ui/button';
import { signOut } from '@/app/login/actions';

import { Marcellus_SC } from 'next/font/google';

const marcellus = Marcellus_SC({
  subsets: ['latin'], 
  weight: '400',      
  variable: '--font-marcellus', 
});

export default function GeneratorNavbar({ user }: { user: any }) {
  const [chats, setChats] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const supabase = createClientComponentClient();

  const capitalizeWords = (str: string): string => {
    return str
      .split(' ') // разделяем строку по пробелам
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Делаем первую букву заглавной
      .join(' '); // объединяем слова обратно в строку
  };

  // загрузка начального списка чатов
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const { data, error } = await supabase
          .from('chat')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setChats(data || []);
      } catch (error) {
        console.error('Ошибка при загрузке чатов:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, [user]);

  // подписка на изменения в реальном времени
  useEffect(() => {
    const channel = supabase
      .channel('public:chat') // название канала
      .on(
        'postgres_changes',
        {
          event: 'INSERT', // слушаем только INSERT
          schema: 'public',
          table: 'chat',
        },
        (payload) => {
          console.log('Realtime событие:', payload);
  
          if (payload.eventType === 'INSERT') {
            const newChat = payload.new;
  
            // проверяем принадлежит ли чат текущему пользователю
            if (newChat.user_id === user.id) {
              setChats((prevChats) => [newChat, ...prevChats]);
            }
          }
        }
      )
      .subscribe();
  
    return () => {
      supabase.removeChannel(channel); // отписываемся при размонтировании компонента
    };
  }, [supabase, user]);

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 lg:w-[70rem] lg:h-[3.5rem] bg-[#EDE2D6]/30 text-white rounded-[10px] z-10 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="lg:w-[6.9rem] lg:h-[3rem] ml-5 mt-1 flex items-center justify-center">
          <Link href="/" className={`${marcellus.className} antialiased text-xl sm:text-3xl text-black`}>
                    Orchid
          </Link>
        </div>
        <div className="flex items-center ml-auto mr-4 mt-1">
          {user && (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0 border-0 bg-transparent outline-none shadow-none hover:bg-transparent">
                <UserProfile user={user} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 font-medium">
              {/* Имя пользователя */}
              <DropdownMenuLabel>{user.user_metadata?.name || 'Guest'}</DropdownMenuLabel>
              <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Link href='/generator'>
                    Новый чат
                  </Link>
                </DropdownMenuItem>
              <DropdownMenuSeparator />
              {/* подменю с чатами */}
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Чаты</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                      {loading ? (
                        <DropdownMenuItem>Загрузка...</DropdownMenuItem>
                      ) : chats.length > 0 ? (
                        chats.map((chat) => (
                          <DropdownMenuItem key={chat.id}>
                            <Link href={`/generator/chats/${chat.chat_id}`} className="w-full">
                              {capitalizeWords(chat.user_input)}
                            </Link>
                          </DropdownMenuItem>
                        ))
                      ) : (
                        <DropdownMenuItem>Нет чатов</DropdownMenuItem>
                      )}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                Выйти
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
}