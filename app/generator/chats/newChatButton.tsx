'use client';
import { useRouter } from "next/navigation";

export default function NewChatButton() {
  const router = useRouter();

  const createChat = async () => {
    const res = await fetch('/api/create-chat', { method: 'POST' });
    const data = await res.json();
    if (data.chatId) {
      router.push(`/chat/${data.chatId}`);
    }
  };

  return (
    <button
      onClick={createChat}
      className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
    >
      Новый чат
    </button>
  );
}
