import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const supabase = await createClient();

        // Получаем текущего пользователя
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
            console.error("Ошибка авторизации:", userError);
            return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
        }

        console.log("Пользователь:", user.id);

        // Получаем список чатов из таблицы `chat`
        const { data: chat, error: chatError } = await supabase
            .from("chat") // Используем таблицу `chat`
            .select("*")
            .eq("user_id", user.id)
            .order("created_at", { ascending: false });

        if (chatError) {
            console.error("Ошибка при получении чатов из Supabase:", chatError);
            throw chatError;
        }

        console.log("Чаты:", chat); // Логируем полученные данные
        return NextResponse.json(chat);
    } catch (error) {
        console.error("Глобальная ошибка:", error);
        return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
}