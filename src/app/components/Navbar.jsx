'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const navlink = usePathname()

    const linkClass = (path) =>
        `transition-opacity duration-200 tracking-wide uppercase font-lexend ${
        navlink === path ? 'font-bold' : 'opacity-70'
        } hover:opacity-100`

    return (
        <nav className="w-full px-6 py-4 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between bg-[var(--black)] text-[var(--light-gray)]">
        <Link href="/" className="text-5xl md:text-6xl font-lexend-giga tracking-tight text-[var(--light-gray)] uppercase">
            <Image
            src="/atlas-logo.svg"
            alt="Atlas Logo"
            height={100}
            width={400}
            priority
            />
        </Link>

        <div className="flex gap-2 md:gap-8 text-lg md:text-2xl mt-4 md:mt-0">
            <Link href="/coaching" className={linkClass('/coaching')}>
            Coaching
            </Link>
            <span className="text-[var(--gold)]">/</span>
            <Link href="/book" className={linkClass('/book')}>
            Book
            </Link>
            <span className="text-[var(--gold)]">/</span>
            <Link href="/contact" className={linkClass('/book')}>
            Contact
            </Link>
        </div>
        </nav>
    )
}