import { getUser } from '@/utils/supabase/getUser';
import GeneratorNavbar from './GeneratorNavbar';
import { ThemeProvider } from 'next-themes';
import { ThemeWrapper } from '@/app/generator/ThemeSwitcher';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser(); // Получаем пользователя на сервере
  // const pathname = usePathname()
  // const enableDark = pathname.startsWith('/generator')

  return (
    <>
    {/* <ThemeProvider attribute="class"
            disableTransitionOnChange
            enableSystem={false} // отключаем автоматическое определение системной темы
            storageKey="my-app-theme" // ключ для localStorage
            defaultTheme={enableDark ? 'dark' : 'light'}
    > */}
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="generator-theme"
    >
      <ThemeWrapper>
        <GeneratorNavbar user={user} />
        {children}
      </ThemeWrapper>
    </ThemeProvider>
    {/* </ThemeProvider> */}
    </>
  );
}
