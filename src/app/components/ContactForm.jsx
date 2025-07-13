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
        className="space-y-8 font-lexend text-[var(--light)]"
        >
        <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-xl font-bold tracking-wide uppercase text-[var(--gold)]">
            Name
            </label>
            <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="px-4 py-3 bg-[var(--dark-gray)] text-[var(--white)] border border-[var(--mid-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-light)] rounded-sm"
            />
        </div>

        <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-xl font-bold tracking-wide uppercase text-[var(--gold)]">
            Email
            </label>
            <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="px-4 py-3 bg-[var(--dark-gray)] text-[var(--white)] border border-[var(--mid-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] rounded-sm"
            />
        </div>

        <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-xl font-bold tracking-wide uppercase text-[var(--gold)]">
            Message
            </label>
            <textarea
            id="message"
            placeholder="Enter your message"
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="px-4 py-3 bg-[var(--dark-gray)] text-[var(--white)] border border-[var(--mid-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] rounded-sm"
            />
        </div>

        <button
            type="submit"
            className="uppercase font-bold tracking-wider text-[var(--black)] bg-[var(--gold)] px-8 py-3 mt-4 hover:bg-[var(--gold-light)] transition-all"
        >
            Send
        </button>

        {status && (
            <p className="text-sm text-[var(--mid-gray)] mt-4">{status}</p>
        )}
        </form>
    );
}