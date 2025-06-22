export default function Footer() {
    return (
        <footer className="w-full px-6 py-8 md:px-12 md:py-10 bg-[var(--dark)] text-[var(--light-gray)] font-lexend uppercase tracking-wider text-sm md:text-base">
        <div className="text-center md:text-right">
            © {new Date().getFullYear()} Atlas. All Rights Reserved.
        </div>
        </footer>
    )
}