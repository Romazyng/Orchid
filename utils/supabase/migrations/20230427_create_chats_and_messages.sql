-- Создание таблицы чатов
DROP TABLE IF EXISTS chats CASCADE;

CREATE TABLE chats (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at timestamp with time zone DEFAULT now()
);

-- Создание таблицы сообщений
DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    chat_id uuid REFERENCES chats(id) ON DELETE CASCADE,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);
