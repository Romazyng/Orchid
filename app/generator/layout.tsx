import { getUser } from '@/utils/supabase/getUser';
import GeneratorNavbar from '../ui/components/GeneratorNavbar';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser(); // Получаем пользователя на сервере

  return (
    <>
      <GeneratorNavbar user={user} />
      {children}
    </>
  );
}
