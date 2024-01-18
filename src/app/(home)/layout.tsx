import React from 'react'
import { redirect } from 'next/navigation'
import { SignOut } from '@/features/auth/components/sign-out'
import { getSession } from '@/features/auth/utils/auth'

export const dynamic = 'force-dynamic'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="center flex min-h-screen w-full">
      <SignOut />
      {children}
    </main>
  )
}
