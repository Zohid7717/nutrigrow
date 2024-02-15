export const getAllPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Произашло ошибка!!!')
  return res.json()
}

export const getPostsBySearch = async (search: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
  if (!res.ok) throw new Error('Произашло ошибка!!!')
  return res.json()
}