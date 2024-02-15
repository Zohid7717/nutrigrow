import { NextResponse } from 'next/server'
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export const DELETE = (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id
  //logic delete post
  // redirect('/blog') место return можем переходить по нужному адресу
  return NextResponse.json({id})
}