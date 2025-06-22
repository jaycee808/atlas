export default function Footer() {
    return (
        <footer className="font-lexend px-8 text-center text-sm md:text-base py-8 text-[var(--mid-gray)] tracking-widest uppercase">
        <div className="text-center md:text-right">
            © {new Date().getFullYear()} Atlas. All Rights Reserved.
        </div>
        </footer>
    )
}