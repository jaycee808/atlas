import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[var(--dark)] font-lexend">
        {/* Section Divider */}
        <div className="h-px w-full bg-[var(--gold)]/40" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-8 py-14">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start">
            <Image
                src="/atlas-logo.svg"
                alt="Atlas"
                width={260}
                height={76}
                priority
                className="w-auto h-14 md:h-16"
            />
            </div>

            {/* Navlinks */}
            <nav aria-label="Footer" className="mt-10">
            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-10 uppercase tracking-widest text-sm md:text-base font-medium text-[var(--gold)]">
                {[
                { href: "/coaching", label: "Coaching" },
                { href: "/book", label: "Book" },
                { href: "/contact", label: "Contact" },
                ].map((item) => (
                <li key={item.href}>
                    <Link
                    href={item.href}
                    className="hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dark)]"
                    >
                    {item.label}
                    </Link>
                </li>
                ))}
            </ul>
            </nav>

            {/* Copyright */}
            <div className="mt-10 text-center md:text-right uppercase tracking-widest text-xs opacity-80 text-[var(--light-gray)]">
            © {year} Atlas. All Rights Reserved.
            </div>
        </div>
        </footer>
    );
}