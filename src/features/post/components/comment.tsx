'use client'

import React from 'react'
import { Button } from '@/shadcn/button'
import { Textarea } from '@/shadcn/textarea'
import { HeartIcon } from '@radix-ui/react-icons'

export const Comment = () => {
  return (
    <div className="flex w-full flex-col rounded-lg border p-4">
      <h5 className="text-sm font-medium">Daniel Gabriel</h5>
      <p className="mt-2 line-clamp-3 leading-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sequi laboriosam id, hic,
        vel ullam vero alias soluta ducimus quisquam sed, quos error voluptates sit? Id repudiandae
        quos laboriosam perferendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}
