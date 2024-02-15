'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLink = {
  label: string
  href: string
}

type Props = {
  navLinks: NavLink[]
}

const Navigation = ({navLinks}: Props) => {
  const pathname = usePathname()
  const session = useSession()
  console.log(session)
  return <nav>
    {navLinks.map((link) => {
      const isActive = pathname === link.href
      return (
        <Link
          key={link.label}
          href={link.href}
          className={isActive ? 'active' : ''}
        >
          {link.label}
        </Link>
      )
    })}
    {session?.data && (
      <Link href="/profile">Profile</Link>
    )}
    {session?.data ?
      <Link href="#" onClick={()=>signOut({callbackUrl:'/'})}>Sign Out</Link> :
      <Link href="/api/auth/signin">Sign In</Link>
    }
  </nav>
}

export default Navigation