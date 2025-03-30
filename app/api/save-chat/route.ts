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
    console.log("Сохраняем в Supabase...");

    const { data, error } = await supabase.from("chats").insert([
      { user_id: user.id, messages }
    ]);

    if (error) {
      console.error("Ошибка Supabase:", error);
      throw error;
    }

    console.log("Успешно сохранено!", data);
    return NextResponse.json({ success: true, chat: data });

  } catch (error) {
    console.error("Глобальная ошибка:", error);
    const errorMessage = error instanceof Error ? error.message : "Неизвестная ошибка";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
