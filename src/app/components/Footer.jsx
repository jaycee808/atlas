export default function Footer() {
    return (
        <footer className="mt-10 px-6 py-8 md:px-12 text-sm md:text-base font-lexend uppercase tracking-wide text-gray-300">
        <p className="text-center md:text-left">
            © {new Date().getFullYear()} Atlas. All Rights Reserved.
        </p>
        </footer>
    )
}
