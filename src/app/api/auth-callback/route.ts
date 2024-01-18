import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseRouter } from '@/utils/supabase'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')

  if (code) {
    const supabase = createSupabaseRouter()
    await supabase.auth.exchangeCodeForSession(code)
    return NextResponse.redirect(`http//localhost:3000/login`)
  }

  return NextResponse.redirect(url.origin)
}
