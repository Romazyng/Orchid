'use client'

import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isGeneratorPage = pathname.startsWith('/generator')

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={isGeneratorPage ? 'dark' : 'light'}
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  )
}
