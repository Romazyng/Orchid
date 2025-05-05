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
      .split(' ') 
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' '); 
  };

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


  useEffect(() => {
    const channel = supabase
      .channel('public:chat') 
      .on(
        'postgres_changes',
        {
          event: 'INSERT', 
          schema: 'public',
          table: 'chat',
        },
        (payload) => {
          console.log('Realtime событие:', payload);
  
          if (payload.eventType === 'INSERT') {
            const newChat = payload.new;
  
            if (newChat.user_id === user.id) {
              setChats((prevChats) => [newChat, ...prevChats]);
            }
          }
        }
      )
      .subscribe();
  
    return () => {
      supabase.removeChannel(channel); 
    };
  }, [supabase, user]);

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 lg:w-[70rem] lg:h-[3.5rem] bg-[#EDE2D6] text-white rounded-[10px] z-10 backdrop-blur-sm dark:bg-[#1E1E26]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="lg:w-[6.9rem] lg:h-[3rem] ml-5 mt-1 flex items-center justify-center">
          <Link href="/" className={`${marcellus.className} antialiased text-xl sm:text-3xl text-black dark:text-[#CCD0CF]`}>
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
              <DropdownMenuLabel>{user.user_metadata?.name || 'Guest'}</DropdownMenuLabel>
              <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Link href='/generator'>
                    Новый чат
                  </Link>
                </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Чаты</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                  <DropdownMenuSubContent className='overflow-y-auto scrollbar h-32'>
                      {loading ? (
                        <DropdownMenuItem>Загрузка...</DropdownMenuItem>
                      ) : chats.length > 0 ? (
                        chats.map((chat) => (
                          <DropdownMenuItem key={chat.id}>
                            <Link href={`/generator/chats/${chat.chat_id}`} className="w-full">
                            <span className="text-sm font-medium">{capitalizeWords(chat.user_input)}</span>
                            <span className="text-sm text-gray-500 ml-2">
                              {new Date(chat.created_at).toLocaleDateString()}
                            </span>
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