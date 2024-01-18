'use client'

import React from 'react'
import { Button } from '@/shadcn/button'
import { Textarea } from '@/shadcn/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { HeartIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { CommentList } from './comments-list'

const commentSchema = z.object({
  comment: z.string().min(1),
})

type CommentFormValues = z.infer<typeof commentSchema>

export const Post = () => {
  const [comment, setComment] = React.useState(false)

  const { register, handleSubmit, reset } = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
  })

  const onSubmit = (payload: CommentFormValues) => {
    console.log(payload)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col border-b p-6 last-of-type:border-none"
    >
      <h5 className="font-medium">Daniel Gabriel</h5>
      <p className="mt-3 leading-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sequi laboriosam id, hic,
        vel ullam vero alias soluta ducimus quisquam sed, quos error voluptates sit? Id repudiandae
        quos laboriosam perferendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
        sequi laboriosam id, hic, vel ullam vero alias soluta ducimus quisquam sed, quos error
        voluptates sit? Id repudiandae quos laboriosam perferendis.
      </p>
      <div className="center-between mt-4 flex w-full gap-3">
        <div className="center-start flex h-8">
          <p className="text-xs leading-none">Postado há 23 minutos</p>
        </div>

        <div className="center-end flex gap-3">
          <Button size="icon" variant="ghost">
            <HeartIcon />
          </Button>
          <Button size="sm" onClick={() => setComment(!comment)}>
            Comment
          </Button>
        </div>
      </div>
      {comment && (
        <Textarea {...register('comment')} className="mt-4" placeholder="Comente aqui...." />
      )}
      <CommentList />
    </form>
  )
}
