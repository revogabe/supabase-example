import { cookies } from 'next/headers'
import { Database } from '@/types/supabase'
import { createSupabaseServer } from '@/utils/supabase'
import { SupabaseClient } from '@supabase/supabase-js'

/* -------------------------------------------------------------------------- */
/* Sign Out
/* -------------------------------------------------------------------------- */

export async function signOut(supabase: SupabaseClient) {
  return await supabase.auth.signOut()
}

/* -------------------------------------------------------------------------- */
/* Get Session
/* -------------------------------------------------------------------------- */

export async function getSession() {
  cookies().getAll()
  const supabase = createSupabaseServer()
  const { data } = await supabase.auth.getSession()
  return data.session
}

/* -------------------------------------------------------------------------- */
/* Get User
/* -------------------------------------------------------------------------- */

export async function getUser() {
  cookies().getAll()
  const session = await getSession()
  if (!session) throw new Error('Session not found')

  const supabase = createSupabaseServer()
  // Poderiamos pegar os dados do usuario direto do session.user porém não
  // teriamos um controle no usuario pois a tabela de auth eh bloqueada e não iamos ter tipagem
  const { data: user } = await supabase.auth.getUser()
  if (!user) throw new Error('User not found')

  return { ...user }
}
