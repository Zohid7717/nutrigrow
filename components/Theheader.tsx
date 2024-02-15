import Navigation from './Navigation'

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About us", href: "/about" },
]

const TheHeader = () => {
  return (
    <header className='container'>
      <Navigation navLinks={navItems} />
    </header>
  )
}

export default TheHeader