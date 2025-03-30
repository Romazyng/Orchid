import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';

export default async function ChatPage({ params }: { params: { chatId: string } }) {
  const supabase = await createClient();
  const { data: messages, error } = await supabase
    .from('messages')
    .select('*')
    .eq('chat_id', params.chatId)
    .order('created_at', { ascending: true });

  if (error || !messages) {
    notFound();
  }

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Чат</h1>
      <div className="space-y-2">
        {messages.map((msg: any) => (
          <div key={msg.id} className="p-2 bg-gray-200 rounded">
            <p>{msg.content}</p>
            <span className="text-xs text-gray-600">{new Date(msg.created_at).toLocaleString()}</span>
          </div>
        ))}
      </div>
      {/* Здесь можно добавить поле ввода для отправки нового сообщения */}
    </div>
  );
}
