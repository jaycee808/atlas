'use client';

import { useEffect } from 'react';

export default function Book() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
        document.body.removeChild(script);
        };
    }, []);

    return (
        <main className="text-gray-300 px-6 md:px-12 py-20">
        <section className="max-w-4xl mx-auto space-y-10">
            <h1 className="text-5xl md:text-7xl font-lexend uppercase tracking-tight">
            Book
            </h1>
            <p className="text-lg font-inter text-gray-300">
            Ready to train? Secure your spot below.
            </p>

            <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/jamie-clark-q8gi?background_color=101015&text_color=e2e8f0&primary_color=94a3b8"
            style={{ minWidth: '320px', height: '1000px' }}
            ></div>
        </section>
        </main>
    );
}