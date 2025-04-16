// pages/api/save-chat/route.ts
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        console.log("Запрос пришёл!");

        // Парсим тело запроса
        const body = await req.json();
        console.log("Тело запроса:", body);

        const { user_input, bot_response } = body;

        if (!user_input || !bot_response) {
            return NextResponse.json({ error: "Неверный формат данных" }, { status: 400 });
        }

        const supabase = await createClient();

        // Получаем текущего пользователя
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
            console.error("Ошибка авторизации:", userError);
            return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
        }

        console.log("Пользователь:", user.id);

        // Создаем новую запись в таблице chats
        const { data, error: insertError } = await supabase
            .from("chat")
            .insert({
                user_id: user.id,
                user_input: user_input,
                bot_response: bot_response,
            })
            .select("chat_id") // Возвращаем chatId (или id)
            .single();

        if (insertError || !data) {
            console.error("Ошибка при сохранении чата:", insertError);
            throw insertError;
        }

        console.log("Чат сохранён!");
        return NextResponse.json({ chatId: data.chat_id }); // Возвращаем chatId

    } catch (error) {
        console.error("Глобальная ошибка:", error);
        return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
}