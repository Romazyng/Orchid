'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();

  useEffect(() => {
    const isDarkRoute = pathname.startsWith('/generator');

    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme && isDarkRoute && resolvedTheme !== 'light') {
      setTheme('dark');
    }
  }, [pathname]);

  return <>{children}</>;
}
