import React from 'react'

export const dynamic = 'force-dynamic'

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  // function ensured

  return <main className="center flex min-h-screen w-full flex-col">{children}</main>
}
