'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('Sending...');

        const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
        } else {
        setStatus('Failed to send message.');
        }
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="font-lexend text-[var(--white)] space-y-8"
        >
        <div className="space-y-8">
            <label htmlFor="name" className="block uppercase text-xs tracking-[0.2em] text-[var(--mid-gray)] mb-2">
            Name
            </label>
            <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full bg-transparent px-0 py-3 border-b border-[var(--dark-gray)] text-[var(--white)] placeholder-[var(--mid-gray)]/70 focus:outline-none focus:border-[var(--gold)] transition-colors"
            />
        </div>

        <div>
            <label htmlFor="email" className="block uppercase text-xs tracking-[0.2em] text-[var(--mid-gray)] mb-2">
            Email
            </label>
            <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full bg-transparent px-0 py-3 border-b border-[var(--dark-gray)] text-[var(--white)] placeholder-[var(--mid-gray)]/70 focus:outline-none focus:border-[var(--gold)] transition-colors"
            />
        </div>

        <div>
            <label htmlFor="message" className="block uppercase text-xs tracking-[0.2em] text-[var(--mid-gray)] mb-2">
            Message
            </label>
            <textarea
            id="message"
            placeholder="Tell me a little about your goals."
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="w-full bg-transparent px-0 py-3 border-b border-[var(--dark-gray)] text-[var(--white)] placeholder-[var(--mid-gray)]/70 focus:outline-none focus:border-[var(--gold)] transition-colors"
            />
        </div>

        {/* Contact Form Button */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
                type="submit"
                className="inline-flex items-center justify-center border-2 border-[var(--gold)] bg-[var(--gold)] text-[var(--dark)] px-8 py-4 uppercase tracking-widest text-sm md:text-base font-lexend-giga font-bold hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dark)] transition"
            >
                Send
            </button>
        </div>

        {/* Message Status */}
        <p
            id="form-status"
            role="status"
            aria-live="polite"
            className="mt-4 text-sm font-inter text-[var(--mid-gray)]"
        >
            {status === 'success' && 'Message sent!'}
            {status === 'error' && 'Failed to send message.'}
        </p>
        </form>
    );
}