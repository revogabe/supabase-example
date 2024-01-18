import { PostHeader, PostList } from '@/features/post'

export default function Home() {
  return (
    <main className="center-start flex min-h-screen w-full flex-col p-4">
      <div className="border-border w-full max-w-[720px] rounded-lg border">
        <PostHeader />
        <PostList />
      </div>
    </main>
  )
}
