'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const navlink = usePathname()

    const linkClass = (path) =>
        `transition-all duration-200 uppercase tracking-wide ${
        navlink === path ? 'font-bold' : 'opacity-70'
        } hover:opacity-100`

    return (
        <nav className="w-full px-6 py-4 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between">
        <Link
            href="/"
            className="text-5xl md:text-6xl font-lexend-giga uppercase tracking-tight text-gray-300"
        >
            Atlas
        </Link>

        <div className="flex flex-row md:flex-row gap-2 md:gap-8 text-lg md:text-2xl font-lexend mt-4 md:mt-0 text-gray-300">
            <Link href="/origins" className={linkClass('/origins')}>
            Origins
            </Link>
            <Link href="/coaching" className={linkClass('/coaching')}>
            Coaching
            </Link>
            <Link href="/book" className={linkClass('/book')}>
            Book
            </Link>
        </div>
        </nav>
    )
}