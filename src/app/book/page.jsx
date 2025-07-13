'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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

        {/* Header */}
        <section className="relative h-[80vh] w-full overflow-hidden">

            {/* Header - Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/gym-equipment-1.png"
                    alt="Atlas Training"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
            </div>

            {/* Header Content */}
            <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 max-w-6xl text-left space-y-10">
            <h1 className="text-5xl md:text-7xl font-lexend-giga uppercase text-[var(--gold)] tracking-tight">
                {bookingContent.heading}
            </h1>

            <p className="text-2xl md:text-3xl font-lexend uppercase text-[var(--mid-gray)] tracking-wide">
                {bookingContent.subheading}
            </p>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl pt-4">
                <p className="text-lg md:text-xl font-inter text-[var(--light-gray)] leading-relaxed">
                {bookingContent.paragraphOne}
                </p>
                <p className="text-lg md:text-xl font-inter text-[var(--light-gray)] leading-relaxed">
                {bookingContent.paragraphTwo}
                </p>
            </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[var(--dark)] z-0 pointer-events-none" />
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
                <a
                href="/contact"
                className="inline-block mt-8 px-6 py-3 bg-[var(--gold-transparent)] text-[var-dark] font-semibold font-lexend uppercase tracking-wide rounded transition duration-200"
                >
                Contact Me
                </a>
            </div>
        </section>
        </main>
    );
}