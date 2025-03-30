'use client';

import Link from 'next/link';
import { Marcellus_SC } from 'next/font/google';
import UserProfile from '../../generator/UserProfile';
import { signOut } from '@/app/login/actions';
import { Button } from "@/components/ui/button";
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
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import NewChatButton from '@/app/generator/chats/newChatButton';

// Инициализация шрифта
const marcellus = Marcellus_SC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
});

interface GeneratorNavbarProps {
  user: any;
}

export default function GeneratorNavbar({ user }: GeneratorNavbarProps) {
  // Для примера используем статический массив чатов.
  // В реальном проекте эти данные можно получить через API.
  const chats = [
    { id: 'chat-1', name: 'Чат 1' },
    { id: 'chat-2', name: 'Чат 2' },
    { id: 'chat-3', name: 'Чат 3' },
  ];

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 lg:w-[70rem] lg:h-[3.5rem] bg-[#EDE2D6]/30 text-white rounded-[10px] z-10 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="lg:w-[6.9rem] lg:h-[3rem] ml-5 mt-1 flex items-center justify-center">
          <Link href="/" className={`${marcellus.className} antialiased text-3xl text-black`}>
            Orchid
          </Link>
          <NewChatButton/>
        </div>
        <div className="flex-1 flex items-center justify-center">
          {/* Здесь можно оставить другие элементы, например, кнопки навигации */}
        </div>
        <div className="flex items-center ml-auto mr-4 mt-1">
          {user && (
            <form className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-0 border-0 bg-transparent shadow-none hover:bg-transparent">
                    <UserProfile user={user} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 font-medium">
                  {/* Имя пользователя */}
                  <DropdownMenuLabel>{user.user_metadata?.name || 'Guest'}</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  {/* Подменю с чатами */}
                  <DropdownMenuGroup>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Чаты</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {chats.map((chat) => (
                            <DropdownMenuItem key={chat.id}>
                              {chat.name}
                            </DropdownMenuItem>
                          ))}
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
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
