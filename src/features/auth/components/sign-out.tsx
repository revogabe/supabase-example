'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/shadcn/button'
import { useSupabaseBrowser } from '@/utils/supabase'
import { ExitIcon } from '@radix-ui/react-icons'

import { signOut } from '../utils/auth'

export const SignOut = async () => {
  const supabase = useSupabaseBrowser()
  const router = useRouter()

  const handlleSignOut = async () => {
    const { error } = await signOut(supabase)
    if (!error) router.push('/login')
  }

  return (
    <Button
      onClick={handlleSignOut}
      variant="outline"
      size="icon"
      className="absolute right-0 top-0 m-4 mt-16"
    >
      <ExitIcon />
    </Button>
  )
}
