import { NextResponse } from 'next/server'

const query = 'matrix'
export const GET = async (req: Request) => {
  const API_KEY = process.env.OMDB_SECRET
  const movies = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`).then(res => res.json())
  return NextResponse.json(movies)
}