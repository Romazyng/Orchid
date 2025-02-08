<<<<<<< HEAD
=======
<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
>>>>>>> 2169ae3c96b3401f59bb5bae05ace8d392ad515a
## Описание
**Orchid** — это платформа для генерации текста на основе ввода ключевых слов. Пользователи могут указать ключевые слова или фразы, а система сгенерирует связный и качественный текст, соответствующий заданной тематике. Приложение построено на **Next.js** для быстродействия и удобства работы.

## Особенности
- Генерация текста на основе ключевых слов.
- Поддержка нескольких языков.
- Настройка длины текста и уровня детализации.
- Интерфейс с возможностью редактирования сгенерированного текста.
- Сохранение результатов в формате `.txt`.

## Технологии
- **Next.js**: Основной фреймворк для фронтенда.
- **Supabase**: Для бэкенда и аутентификации пользователей.
- **Tailwind CSS**: Для стилизации пользовательского интерфейса.
- **Vercel**: Для хостинга и CI/CD.

## Установка

1. **Клонирование репозитория**
   ```bash
   git clone https://github.com/Romazyng/Orchid
   cd Orchid
   ```

2. **Установка зависимостей**
   Убедитесь, что Node.js версии 16+ установлен, затем выполните:
   ```bash
   npm install
   cd app/api
   pip install -r requirements.txt
   ```

3. **Запуск в режиме разработки**
   ```bash
   npm run dev
   ```
   Приложение будет доступно по адресу: `http://localhost:3000`.

4. **Сборка и запуск в продакшен-режиме**
   ```bash
   npm run build
   npm start
   ```

## Использование
1. Войдите в приложение, используя свою учетную запись (аутентификация через Supabase).
2. Введите ключевые слова или фразы в соответствующее текстовое поле.
3. Установите параметры генерации (длина текста, стиль и т.д.).
4. Нажмите кнопку "Сгенерировать".
5. Отредактируйте сгенерированный текст при необходимости и сохраните результат.

## Структура проекта
- **`app/ui/`**: Компоненты пользовательского интерфейса.
- **`public/pics/`**: Хранилище изображений.
- **`pages/`**: Основные страницы приложения.
- **`lib/`**: Логика взаимодействия с Supabase.
- **`.env`**: Конфигурация окружения.

## Пример использования
- Ключевые слова: "технологии", "интеллект", "будущее".
- Результат: "Искусственный интеллект играет ключевую роль в формировании будущего технологий, предоставляя инновационные решения и повышая эффективность в различных отраслях."

## Возможные улучшения
- Добавление опции выбора стиля текста (научный, художественный, деловой).
- Интеграция генерации изображений для визуализации текста.
- Оптимизация алгоритмов генерации для повышения скорости.

## Авторство
© 2024 Orchid   
Для вопросов и предложений свяжитесь с нами по адресу: `misteryo.wins@gmail.com`.

## Лицензия
MIT License
<<<<<<< HEAD
=======
>>>>>>> eaf36ca9955e9f65085fca98c61c6b94f9c7cba4
>>>>>>> 2169ae3c96b3401f59bb5bae05ace8d392ad515a
