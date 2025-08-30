'use client'

import Image from 'next/image'
import ContactForm from '../components/ContactForm'

const contactContent = {
    heading: 'Contact',
    subheading: 'Start the Conversation',
    paragraphOne:
        'Got a question? Want to collaborate? Let’s connect and talk possibilities.',
    paragraphTwo:
        'Use the form below to get in touch. I’ll get back to you within 48 hours.',
}

export default function Contact() {
    return (
        <main className="min-h-screen bg-[var(--dark)] text-[var(--white)]">
        {/* Hero - Header */}
        <section className="relative h-[60vh] w-full overflow-hidden">
            <Image
            src="/gym-equipment-3.png"
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
                    {contactContent.heading}
                    </h1>
                    <p className="font-lexend uppercase text-[clamp(1rem,1.8vw,1.5rem)] tracking-wide text-[var(--mid-gray)]">
                    {contactContent.subheading}
                    </p>
                </div>
                </div>
            </div>
            </div>

            {/* Image fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-transparent to-[var(--dark)]" />
        </section>

        {/* Contact Content */}
        <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-8 md:gap-10">
            <aside className="hidden md:block md:col-span-2 lg:col-span-3">
                <span className="font-lexend uppercase tracking-[0.2em] text-xs text-[var(--mid-gray)]">
                Contact
                </span>
                <hr className="mt-4 w-16 border-t-2 border-[var(--gold)]/60" />
            </aside>

            {/* Contact Content */}
            <div className="col-span-12 md:col-span-10 lg:col-span-9">
                <div className="grid md:grid-cols-2 gap-12">
                {/* Intro Copy - Left */}
                <div>
                    <p className="font-inter text-[var(--light-gray)] text-base md:text-lg leading-relaxed">
                    {contactContent.paragraphOne}
                    </p>
                    <p className="mt-6 font-inter text-[var(--light-gray)] text-base md:text-lg leading-relaxed">
                    {contactContent.paragraphTwo}
                    </p>
                </div>

                {/* Contact Form - Right */}
                <div className="w-[80vw] md:w-full border-l lg:border-[var(--dark-gray)]/40 pl-4 lg:pl-12">
                    <ContactForm />
                </div>
                </div>
            </div>
            </div>
        </section>
        </main>
    )
}