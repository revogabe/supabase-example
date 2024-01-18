import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../tailwind/globals.css'

import { ThemeProvider } from '@/providers/theme.provider'
import { ModeToggle } from '@/shadcn/toggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Supabase Example',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
