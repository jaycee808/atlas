'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'

const bookingContent = {
    heading: "Book a Session",
    subheading: "Forge Your Legacy",
    paragraphOne:
        "Choose a time that works for you and let’s build strength, size, and precision.",
    paragraphTwo:
        "You’ll get a confirmation email and an intake form to align on goals before we begin. Let’s make every session count.",
    iframeURL: "https://cal.com/atlas-training"
    };

    export default function Book() {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIframeLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen">
        {/* Hero - Header */}
        <section className="relative h-[60vh] w-full overflow-hidden">
            <Image
            src="/gym-equipment-1.png"
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
                    {bookingContent.heading}
                    </h1>
                    <p className="font-lexend uppercase text-[clamp(1rem,1.8vw,1.5rem)] tracking-wide text-[var(--mid-gray)]">
                    {bookingContent.subheading}
                    </p>
                </div>
                </div>
            </div>
            </div>

            {/* Image fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-transparent to-[var(--dark)]" />
        </section>

        {/* Contact Intro */}
        <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-14 md:py-20">
            <div className="grid md:grid-cols-12 gap-8 md:gap-10">
                <div className="md:col-span-10 lg:col-span-9">
                    <div className="grid md:grid-cols-2 gap-8">
                    <p className="font-inter text-[var(--light-gray)] text-base md:text-lg leading-relaxed">
                        {bookingContent.paragraphOne}
                    </p>
                    <p className="font-inter text-[var(--light-gray)] text-base md:text-lg leading-relaxed">
                        {bookingContent.paragraphTwo}
                    </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Booking Form */}
        <section className="relative w-[full] mx-auto h-[700px] md:h-[800px] rounded-md overflow-hidden shadow-xl">
            {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-[var(--mid-gray)] font-inter z-10">
                Loading booking form...
            </div>
            )}
            <iframe
            src={bookingContent.iframeURL}
            className="w-full h-full border-none"
            allow="camera; microphone; autoplay; encrypted-media;"
            onLoad={() => setIframeLoaded(true)}
            />
            <div className="absolute bottom-0 left-0 w-full h-24" />
        </section>

        {/* CTA to Contact Form */}
        <section className="mt-24 mb-16 px-6">
            <div className="border border-[var-dark-gray] max-w-3xl mx-auto text-center py-12 px-6 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-lexend text-[var-white] tracking-wide uppercase">
                Can’t find a time?
                </h2>
                <p className="mt-4 text-lg text-[var(--mid-gray)] font-inter leading-relaxed">
                No worries — reach out directly and we’ll work around your schedule. Whether it's questions, custom coaching, or planning your first session, I'm here to help.
                </p>
                <Link
                href="/contact"
                className="inline-block mt-8 px-6 py-3 bg-[var(--gold-transparent)] text-[var-dark] font-semibold font-lexend uppercase tracking-wide rounded transition duration-200"
                >
                Contact Me
                </Link>
            </div>
        </section>
        </main>
    );
}