'use client'

import React from 'react'
import { Button } from '@/shadcn/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/shadcn/card'
import { Input } from '@/shadcn/input'
import { useSupabaseBrowser } from '@/utils/supabase'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

type RegisterFormValues = z.infer<typeof registerSchema>

export const RegisterForm = () => {
  const supabase = useSupabaseBrowser()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (payload: RegisterFormValues) => {
    await supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
      options: {
        emailRedirectTo: 'http://localhost:3000/api/auth-callback',
        data: {
          name: payload.name,
        },
      },
    })
    reset()
  }

  return (
    <Card className="p-3">
      <CardHeader>
        <h2>Supabase</h2>
        <p>Cadastre-se com seu e-mail e senha ou usando uma rede social.</p>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-6">
          <label className="flex flex-col gap-3">
            <span>Nome completo</span>
            <Input {...register('name')} />
          </label>

          <label className="flex flex-col gap-3">
            <span>Email</span>
            <Input {...register('email')} type="email" />
          </label>

          <label className="flex flex-col gap-3">
            <span>Senha</span>
            <Input {...register('password')} type="password" />
          </label>

          {errors.root && (
            <span className="text-sm font-normal text-red-500">
              {errors.email?.message ?? errors.password?.message}
            </span>
          )}
        </CardContent>
        <CardFooter className="mt-4 flex flex-col gap-4">
          <Button className="w-full">Criar conta</Button>
          <Button variant="outline" className="w-full">
            Criar com Github
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
