import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Запрос пришёл!");

    const body = await req.json();
    console.log("Тело запроса:", body);

    const supabase = await createClient();
    const { messages } = body;

    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      console.error("Ошибка авторизации:", userError);
      return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
    }

    console.log("Пользователь:", user.id);

    let { data: chat, error: chatError } = await supabase
      .from("chats")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false }) 
      .limit(1)
      .single();

    if (chatError || !chat) {
      console.log("Чат не найден, создаём новый...");
      const { data: newChat, error: newChatError } = await supabase
        .from("chats")
        .insert([{ user_id: user.id, messages: [] }])
        .select()
        .single();

      if (newChatError) {
        console.error("Ошибка при создании чата:", newChatError);
        throw newChatError;
      }

      chat = newChat; 
    }

    console.log("Чат найден/создан:", chat.id);

    const newMessage = {
      chat_id: chat.id,
      user_id: user.id,
      content: messages,
    };

    const { error: messageError } = await supabase.from("messages").insert([newMessage]);

    if (messageError) {
      console.error("Ошибка при сохранении сообщения:", messageError);
      throw messageError;
    }

    console.log("Сообщение сохранено!");

    const updatedMessages = [...chat.messages, { role: "user", content: messages }];

    const { error: updateError } = await supabase
      .from("chats")
      .update({ messages: updatedMessages })
      .eq("id", chat.id);

    if (updateError) {
      console.error("Ошибка при обновлении чата:", updateError);
      throw updateError;
    }

    console.log("Чат обновлён!");
    return NextResponse.json({ success: true, chat_id: chat.id });

  } catch (error) {
    console.error("Глобальная ошибка:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
