'use client'

import Image from 'next/image'
import Link from 'next/link'

const coachingContent = {
    heading: 'Coaching',
    subheading: 'Train with intent. Evolve with purpose.',
    paragraphOne:
        "Atlas coaching is built on a foundation of discipline, precision, and results. Every program is designed to meet you where you are and push you beyond what you thought possible.",
    paragraphTwo:
        "Whether you’re stepping into the gym for the first time or looking to break through plateaus, coaching here isn’t one-size-fits-all. It’s custom, and strategic.",
    services: [
        {
        number: '01',
        title: '1:1 Personal Training',
        kicker: 'Hands-on coaching tailored to your goals.',
        body: 'Every session is structured to maximise strength, technique, and progression. Perfect for those who want accountability and in-person guidance.',
        },
        {
        number: '02',
        title: 'Online Coaching Plans',
        kicker: 'Remote doesn’t mean generic.',
        body: 'With Atlas online coaching, you get structured programming, video breakdowns, and progress tracking. All backed by direct support and check-ins to keep you moving forward.',
        },
        {
        number: '03',
        title: 'Nutrition Guidance',
        kicker: 'Fuel is as important as training.',
        body: 'We’ll cut through the noise of fad diets and build a sustainable approach to eating that supports your performance, recovery, and physique goals.',
        },
    ],
    ctaHeading: 'Ready to Start?',
    ctaText:
        "You need a system, a strategy, and a coach who’s been there before.",
    ctaSub: 'Your story begins here.',
    tiles: [
        {
            title: 'Intensity',
            image: '/gym-equipment-1.png' },
        { 
            title: 'Consistency',
            image: '/gym-equipment-2.png' },
        {
            title: 'Growth',
            image: '/gym-equipment-3.png'
        },
    ],
}

export default function Coaching() {
    return (
        <main className="min-h-screen">
        {/* Hero - Header */}
        <section className="relative h-[60vh] w-full overflow-hidden">
            <Image
            src="/gym-equipment-2.png"
            alt="Atlas Training"
            fill
            priority
            className="object-cover brightness-50"
            />

            <div className="relative z-10 h-full">
            <div className="mx-auto max-w-7xl h-full px-6 md:px-12 lg:px-16">
                <div className="h-full grid grid-cols-12 items-center">
                <div className="col-span-12 md:col-span-10 lg:col-span-8 space-y-4">
                    <h1 className="font-lexend-giga uppercase text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[var(--gold)]">
                    {coachingContent.heading}
                    </h1>
                    <p className="font-lexend uppercase text-[clamp(1rem,1.8vw,1.5rem)] tracking-wide text-[var(--mid-gray)]">
                    {coachingContent.subheading}
                    </p>
                </div>
                </div>
            </div>
            </div>

            {/* Image fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-transparent to-[var(--dark)]" />
        </section>

        {/* Coaching Intro */}
        <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-14 md:py-20">
            <div className="grid md:grid-cols-12 gap-8 md:gap-10">
            <aside className="hidden md:block md:col-span-2 lg:col-span-3">
                <span className="font-lexend uppercase tracking-[0.2em] text-xs text-[var(--mid-gray)]">
                Overview
                </span>
                <hr className="mt-4 w-16 border-t-2 border-[var(--gold)]/60" />
            </aside>

            <div className="md:col-span-10 lg:col-span-9">
                <div className="grid md:grid-cols-2 gap-8">
                <p className="font-inter text-[var(--light-gray)] text-base md:text-lg leading-relaxed">
                    {coachingContent.paragraphOne}
                </p>
                <p className="font-inter text-[var(--light-gray)] text-base md:text-lg leading-relaxed">
                    {coachingContent.paragraphTwo}
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Coaching - Grid */}
        <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24">
            <div className="grid grid-cols-12 gap-6 md:gap-8">
            <aside className="col-span-12 md:col-span-2 lg:col-span-3">
                <div className="sticky top-6">
                <span className="font-lexend uppercase tracking-[0.2em] text-xs text-[var(--mid-gray)]">
                    Services
                </span>
                <hr className="mt-4 w-16 border-t-2 border-[var(--gold)]/60" />
                </div>
            </aside>

            <div className="col-span-12 md:col-span-10 lg:col-span-9 lg:border-l lg:border-[var(--dark-gray)]/40 lg:pl-12">
                <ul className="divide-y divide-[var(--dark-gray)]/60">
                {coachingContent.services.map((s) => (
                    <li key={s.number} className="py-10 md:py-12">
                    <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
                        <div className="col-span-3 sm:col-span-2">
                        <span className="block font-lexend-giga text-[clamp(2rem,5vw,3.5rem)] leading-none text-[var(--gold)]">
                            {s.number}
                        </span>
                        </div>
                        <div className="col-span-9 sm:col-span-10">
                        <h3 className="uppercase font-lexend-giga text-2xl md:text-4xl tracking-tight">
                            {s.title}
                        </h3>
                        <p className="mt-2 font-lexend uppercase text-xs md:text-sm tracking-wide text-[var(--mid-gray)]">
                            {s.kicker}
                        </p>
                        <p className="mt-4 font-inter text-[var(--light-gray)] text-base md:text-lg leading-relaxed max-w-3xl">
                            {s.body}
                        </p>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </section>

        {/* Coaching CTA */}
        <section className="border-t border-[var(--dark-gray)]">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-18 md:py-24 text-center">
            <h2 className="font-lexend-giga uppercase text-[clamp(2rem,4.5vw,3.75rem)] tracking-tight text-[var(--gold)]">
                {coachingContent.ctaHeading}
            </h2>
            <p className="mt-4 font-inter text-[var(--mid-gray)] text-lg md:text-2xl">
                {coachingContent.ctaText}
            </p>
            <p className="mt-2 font-lexend uppercase tracking-wide text-xs md:text-sm text-[var(--light-gray)]">
                {coachingContent.ctaSub}
            </p>

                {/* CTA - Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
                    <Link
                        href="/book"
                        className="inline-flex items-center justify-center border-2 border-[var(--gold)] bg-[var(--gold)] text-[var(--dark)] px-10 py-5 uppercase tracking-widest text-base md:text-lg font-lexend-giga font-bold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dark)]"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </section>

        {/* Image Tiles */}
        <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-20 md:py-24">
            <div className="grid md:grid-cols-3 gap-6">
            {coachingContent.tiles.map((tile, i) => (
                <div key={i} className="relative group overflow-hidden rounded-md">
                <Image
                    src={tile.image}
                    alt={`Gym Tile ${tile.title}`}
                    width={900}
                    height={600}
                    className="object-cover w-full h-64 grayscale group-hover:grayscale-0 transition duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-[var(--dark)]/60 px-4 py-2 rounded-sm">
                    <span className="text-[var(--white)] text-base md:text-lg font-lexend-giga uppercase tracking-wide">
                    {tile.title}
                    </span>
                </div>
                </div>
            ))}
            </div>
        </section>
        </main>
    )
}