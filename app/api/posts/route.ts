import { NextResponse } from 'next/server'
import { posts } from './posts';

export const GET = async (req: Request) => {
  const {searchParams}=new URL(req.url)
  const query = searchParams.get('q')
  let currentPosts = posts
  if (query) {
    currentPosts=posts.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))
  }
  return NextResponse.json({ message: 'hello' })
}

export const POST = async (req: Request) => {
  const body=await req.json()
  return NextResponse.json({body})
}