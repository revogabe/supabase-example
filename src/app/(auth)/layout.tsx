import React from 'react'
import { redirect } from 'next/navigation'
import { getSession } from '@/features/auth/utils/auth'

export const dynamic = 'force-dynamic'

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  return <main className="center flex min-h-screen w-full flex-col">{children}</main>
}
