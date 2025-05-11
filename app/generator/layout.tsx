import { getUser } from '@/utils/supabase/getUser';
import GeneratorNavbar from '../ui/components/GeneratorNavbar';
import { ThemeProvider } from "next-themes";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser(); // Получаем пользователя на сервере

  return (
    <>
    <ThemeProvider attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            enableSystem={false} // отключаем автоматическое определение системной темы
            storageKey="my-app-theme" // ключ для localStorage
    >
      <GeneratorNavbar user={user} />
      {children}
    </ThemeProvider>
    </>
  );
}
