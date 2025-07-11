'use client'
import Image from 'next/image'
import Link from 'next/link'

const coachingContent = {
    heading: "Coaching",
    subheading: "Train with Intent. Evolve with Purpose.",
    paragraphOne:
        "Atlas coaching is built on discipline, precision, and growth. Every rep, every set, every phase is planned",
    paragraphTwo:
        "Whether in person or online, the goal is the same: to break limits and rebuild stronger. This isn’t a template. It’s tailored performance.",
    tiles: [
        {
        title: "Intensity",
        image: "/gym-equipment-1.png",
        },
        {
        title: "Consistency",
        image: "/gym-equipment-2.png",
        },
        {
        title: "Growth",
        image: "/gym-equipment-3.png",
        },
    ],
    ctaHeading: "Ready to go all in?",
    ctaText: "Book your first session or start with a free intro call. Let’s build.",
    ctaButton: "Book Now",
}

export default function Coaching() {
    return (
        <main className="min-h-screen bg-[var(--black)] text-[var(--white)]">
        
        {/* Header Section */}
        <section className="relative h-[80vh] w-full overflow-hidden">
            <div className="absolute inset-0 -z-10">
            <Image
                src="/gym-equipment-2.png"
                alt="Atlas Coaching"
                fill
                className="object-cover brightness-50"
                priority
            />
            </div>

            <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 max-w-6xl space-y-10">
            <h1 className="text-5xl md:text-7xl font-lexend-giga uppercase text-[var(--gold)] tracking-tight">
                {coachingContent.heading}
            </h1>
            <p className="text-2xl md:text-3xl font-lexend uppercase text-[var(--light-gray)] tracking-wide">
                {coachingContent.subheading}
            </p>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl pt-4">
                <p className="text-lg md:text-xl font-inter text-[var(--mid-gray)] leading-relaxed">
                {coachingContent.paragraphOne}
                </p>
                <p className="text-lg md:text-xl font-inter text-[var(--mid-gray)] leading-relaxed">
                {coachingContent.paragraphTwo}
                </p>
            </div>
            </div>
        </section>

        {/* Three Image Tiles */}
        <section className="px-6 md:px-12 py-24">
            <div className="grid md:grid-cols-3 gap-6">
            {coachingContent.tiles.map((tile, i) => (
                <div key={i} className="relative group overflow-hidden rounded-md shadow-lg">
                <Image
                    src={tile.image}
                    alt={`Gym Tile ${tile.title}`}
                    width={500}
                    height={300}
                    className="object-cover w-full h-64 grayscale group-hover:grayscale-0 transition duration-500"
                />
                <div className="absolute bottom-4 left-4 text-[var(--white)] text-xl font-lexend-giga bg-[var(--dark-transparent)] px-4 py-2 rounded-sm uppercase tracking-wide">
                    {tile.title}
                </div>
                </div>
            ))}
            </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 px-6 md:px-12 space-y-6 border-t border-[var(--dark-gray)]">
            <h2 className="text-4xl md:text-6xl font-lexend-giga uppercase text-[var(--gold)] tracking-tight">
            {coachingContent.ctaHeading}
            </h2>
            <p className="text-xl md:text-2xl font-inter text-[var(--mid-gray)]">
            {coachingContent.ctaText}
            </p>
            <Link href="/book">
            <button className="mt-6 border-2 border-[var(--white)] bg-[var(--dark-transparent)] px-10 py-5 text-lg md:text-xl font-lexend-giga font-bold uppercase tracking-wider text-[var(--white)] hover:bg-[var(--black)] hover:text-[var(--white)] hover:scale-105 transition-all duration-300">
                {coachingContent.ctaButton}
            </button>
            </Link>
        </section>
        </main>
    )
}