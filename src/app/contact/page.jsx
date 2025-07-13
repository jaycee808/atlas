'use client'

import Image from 'next/image'
import ContactForm from '../components/ContactForm'

const contactContent = {
    heading: "Contact",
    subheading: "Start the Conversation",
    paragraphOne: "Got a question? Want to collaborate? Let’s connect and talk possibilities.",
    paragraphTwo: "Use the form below to get in touch. I’ll get back to you within 48 hours.",
}

export default function Contact() {
    return (
        <main className="min-h-screen">
        
        {/* Header Section */}
        <section className="relative h-[80vh] w-full overflow-hidden">
            <div className="absolute inset-0 -z-10">
            <Image
                src="/gym-equipment-3.png"
                alt="Atlas Coaching"
                fill
                className="object-cover brightness-30"
                priority
            />
            </div>

            <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 max-w-6xl space-y-10">
            <h1 className="text-5xl md:text-7xl font-lexend-giga uppercase text-[var(--gold)] tracking-tight">
                {contactContent.heading}
            </h1>
            <p className="text-2xl md:text-3xl font-lexend uppercase text-[var(--mid-gray)] tracking-wide">
                {contactContent.subheading}
            </p>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl pt-4">
                <p className="text-lg md:text-xl font-inter text-[var(--light-gray)] tracking-tight">
                {contactContent.paragraphOne}
                </p>
                <p className="text-lg md:text-xl font-inter text-[var(--light-gray)] tracking-tight">
                {contactContent.paragraphTwo}
                </p>
            </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[var(--dark)] z-0 pointer-events-none" />
        </section>

        {/* Contact Form */}
        <section className="px-6 md:px-12 py-24 mx-auto">
            <ContactForm />
        </section>
        </main>
    )
}