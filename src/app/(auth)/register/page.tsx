import React from 'react'
import Link from 'next/link'
import { RegisterForm } from '@/features/auth'
import { Button } from '@/shadcn/button'

export default function Register() {
  return (
    <main className="center flex min-h-screen flex-col p-4 lg:p-24">
      <RegisterForm />

      <Button variant="outline" className="fixed left-0 top-0 m-4" asChild>
        <Link href="/login">Voltar</Link>
      </Button>
    </main>
  )
}
