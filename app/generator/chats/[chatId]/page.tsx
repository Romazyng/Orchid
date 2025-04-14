import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import { Marcellus_SC } from 'next/font/google';
import {Card, Skeleton} from "@heroui/react";

const marcellus = Marcellus_SC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
});
export default async function ChatPage({ params }: { params: Promise<{ chatId: string }> }) {
  const resolvedParams = await params; 
  const supabase = await createClient();

  

  const { data: chat, error } = await supabase
    .from('chat')
    .select('*')
    .eq('chat_id', resolvedParams.chatId)
    .order('created_at', { ascending: true });

  if (error || !chat || chat.length === 0) {
    notFound();
  }

  const capitalizeWords = (str: string): string => {
    return str
      .split(' ') 
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' '); 
  };

  return (
      <div className="min-h-screen p-4 flex justify-center bg-[#F6ECE1]">
        <div className="mt-40 p-12 max-w-4xl bg-[#F6ECE1] rounded-lg shadow-inner h-[40rem] overflow-y-auto scrollbar text-gray-800">
          {chat.map((msg: any) => (
            <div key={msg.id} className={`${marcellus.className} antialiased text-lg text-black`}>
              <h1 className="text-2xl font-medium mb-4">{capitalizeWords(msg.user_input)}</h1>
              <p>{msg.bot_response}</p> 
              <span className="text-xs text-gray-600">{new Date(msg.created_at).toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

  );
}
