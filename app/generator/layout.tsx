import { getUser } from '@/utils/supabase/getUser';
import GeneratorNavbar from '../ui/components/GeneratorNavbar';

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
      <GeneratorNavbar user={user} />
      {children}
    {/* </ThemeProvider> */}
    </>
  );
}
