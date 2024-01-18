'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/shadcn/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/shadcn/card'
import { Input } from '@/shadcn/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type LoginFormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (payload: LoginFormValues) => {
    console.log(payload)
    reset()
  }

  return (
    <Card className="p-3">
      <CardHeader>
        <h2>Supabase</h2>
        <p>Faça login com seu e-mail e senha ou usando uma rede social.</p>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-6">
          <label className="flex flex-col gap-3">
            <span>Email</span>
            <Input {...register('email')} type="email" />
          </label>

          <label className="flex flex-col gap-3">
            <span className="center-between flex w-full">
              Senha
              <Button variant="link" size="sm" className="p-0" asChild>
                <Link href="/forgot-password">Esqueceu sua senha?</Link>
              </Button>
            </span>
            <Input {...register('password')} type="password" />
          </label>

          {errors.root && (
            <span className="text-sm font-normal text-red-500">
              {errors.email?.message ?? errors.password?.message}
            </span>
          )}
        </CardContent>
        <CardFooter className="mt-4 flex flex-col gap-4">
          <Button className="w-full">Entrar</Button>
          <Button variant="outline" className="w-full">
            Entrar com Github
          </Button>
          <Button variant="link" asChild>
            <Link href="/register">Criar conta</Link>
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
