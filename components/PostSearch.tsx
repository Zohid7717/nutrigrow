'use client'
// если мы будем использовать стайт менеджер (например: zustand или rtk) то можно удалить import { getPostsBySearch } from '@/services/getAllPosts' и onSearch(posts)

// import { getPostsBySearch } from '@/services/getAllPosts'
import { usePosts } from '@/store'
import { useState, FormEventHandler } from 'react'

const PostSearch = () => {
  const [search, setSearch] = useState('')
  const getPostsBySearch = usePosts(state => state.getPostsBySearch)
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    await getPostsBySearch(search)
    // onSearch(posts)
  }
  return <form onSubmit={handleSubmit}>
    <input
      type="search"
      placeholder='search'
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
    <button type='submit'>Search</button>
  </form>
}

export default PostSearch