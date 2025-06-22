'use client';
import { useState, useEffect } from 'react';

const bookingContent = {
    heading: "Book a Session",
    paragraphPrimary:
        "Ready to transform your training? Choose a time that works for you and let’s get to work. No fluff. Just results.",
    paragraphSecondary:
        "Once booked, you’ll receive a confirmation email and a short intake form to make sure we hit the ground running.",
    iframeURL: "https://cal.com/atlas-training"
};

export default function Book() {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIframeLoaded(true), 1000); // Simulate slight load delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen grid grid-cols-1 md:grid-cols-3 bg-[var(--dark)] text-[var(--light)]">

        {/* Text Column */}
        <div className="col-span-1 flex flex-col items-start px-6 md:px-12 py-20 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-lexend-giga uppercase tracking-tight leading-tight text-[var(--light-gray)]">
            {bookingContent.heading}
            </h1>
            <p className="text-base md:text-lg font-inter text-[var(--mid-gray)] max-w-md">
            {bookingContent.paragraphPrimary}
            </p>
            <p className="text-base md:text-lg font-inter text-[var(--mid-gray)] max-w-md">
            {bookingContent.paragraphSecondary}
            </p>
        </div>

        {/* Cal.com Widget Column */}
        <div className="relative col-span-2 w-full h-[600px] md:h-auto">
            {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-[var(--mid-gray)] font-inter">
                Loading booking widget...
            </div>
            )}
            <iframe
            src={bookingContent.iframeURL}
            className="w-full h-full border-none"
            allow="camera; microphone; autoplay; encrypted-media;"
            onLoad={() => setIframeLoaded(true)}
            />
            {/* Optional gradient mask */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[var(--dark)] to-transparent pointer-events-none" />
        </div>
        </main>
    );
}