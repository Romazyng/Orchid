import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';

export default async function ChatPage({ params }: { params: Promise<{ chatId: string }> }) {
  const resolvedParams = await params; 
  const supabase = await createClient();

  // Используем chat_id для фильтрации данных
  const { data: chat, error } = await supabase
    .from('chat')
    .select('*')
    .eq('chat_id', resolvedParams.chatId)
    .order('created_at', { ascending: true });

  if (error || !chat || chat.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Чат</h1>
      <div className="space-y-2">
        {chat.map((msg: any) => (
          <div key={msg.id} className="p-2 bg-gray-200 rounded">
            <p>{msg.bot_response}</p> 
            <span className="text-xs text-gray-600">{new Date(msg.created_at).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
