import Link from "next/link";
const TheHeader = () => {
  return (
    <header className='container'>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}

export default TheHeader