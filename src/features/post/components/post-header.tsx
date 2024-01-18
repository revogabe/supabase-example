'use client'

import React from 'react'
import { Button } from '@/shadcn/button'
import { Textarea } from '@/shadcn/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Calendar, Gif, Image as ImageIcon, List, Smiley } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const postSchema = z.object({
  content: z.string().min(1),
})

type PostFormValues = z.infer<typeof postSchema>

export const PostHeader = () => {
  const { register, handleSubmit, reset } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
  })

  const onSubmit = (payload: PostFormValues) => {
    console.log(payload)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border-border border-b p-2 pb-4">
      <Textarea
        {...register('content')}
        placeholder="O que está acontencendo?"
        className="border-transparent bg-transparent shadow-none focus-visible:ring-0"
      />
      <div className="center-between mt-2 flex w-full">
        <div className="text-muted-foreground flex gap-2 px-2">
          <ImageIcon width={20} height={20} className="cursor-pointer hover:opacity-65" />
          <Gif width={20} height={20} className="cursor-pointer hover:opacity-65" />
          <List width={20} height={20} className="cursor-pointer hover:opacity-65" />
          <Smiley width={20} height={20} className="cursor-pointer hover:opacity-65" />
          <Calendar width={20} height={20} className="cursor-pointer hover:opacity-65" />
        </div>
        <Button className="rounded-full" size="sm">
          Postar
        </Button>
      </div>
    </form>
  )
}
