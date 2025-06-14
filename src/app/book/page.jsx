'use client';

export default function Book() {
    return (
        <main className="min-h-screen grid grid-cols-1 md:grid-cols-3">
        
        <div className="col-span-1 flex flex-col items-start px-6 md:px-12 py-20 space-y-6">
            <h1 className="text-4xl md:text-6xl font-lexend-giga uppercase tracking-tight leading-tight">
            Book a Session
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-md">
            Ready to transform your training? Choose a time that works for you and let’s get to work. No fluff. Just results.
            </p>
        </div>

        <div className="col-span-2 w-full h-[600px] md:h-auto">
            <iframe
            src="https://cal.com/atlas-training"
            className="w-full h-full border-none"
            allow="camera; microphone; autoplay; encrypted-media;"
            ></iframe>
        </div>

        </main>
    );
}