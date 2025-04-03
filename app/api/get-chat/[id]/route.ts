import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params; // Получаем ID чата из параметров маршрута

        const supabase = await createClient();

        // Получаем текущего пользователя
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
            console.error("Ошибка авторизации:", userError);
            return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
        }

        console.log("Пользователь:", user.id);

        // Получаем конкретный чат по ID
        const { data: chat, error: chatError } = await supabase
            .from("chat")
            .select("*")
            .eq("id", id)
            .eq("user_id", user.id)
            .single();

        if (chatError || !chat) {
            console.error("Чат не найден:", chatError);
            return NextResponse.json({ error: "Чат не найден" }, { status: 404 });
        }

        return NextResponse.json(chat);
    } catch (error) {
        console.error("Глобальная ошибка:", error);
        return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
}