import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import { Marcellus_SC } from 'next/font/google';
import InputWrapper from '../../(generator)/InputFieldWrapper';

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
    <div className="flex flex-col justify-between bg-[#F6ECE1] min-h-screen w-full dark:bg-[#16161D]">
      <div className="mt-40 p-12 max-w-4xl mx-auto bg-[#EDE2D6]/25 rounded-lg shadow-inner h-[40rem] overflow-y-auto scrollbar text-gray-800 dark:bg-[#1E1E26]">
        {chat.map((msg: any) => (
          <div key={msg.id} className={`${marcellus.className} antialiased text-lg text-black dark:text-[#CCD0CF]`}>
            <h1 className="text-2xl font-medium mb-4">{capitalizeWords(msg.user_input)}</h1>
            <p>{msg.bot_response}</p>
            <span className="text-xs text-gray-600 dark:text-[#CCD0CF]">{new Date(msg.created_at).toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center  sm:mt-5  md:mt-5  lg:h-28 xl:h-[7.3rem] xl:mb-5">

          <InputWrapper/>

      </div>
    </div>
  );
}