// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Orchid',
  description: '...',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
            {children}
      </body>
    </html>
  )
}
