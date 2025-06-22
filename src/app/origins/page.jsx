const originsCopy = {
    title: "Origins",
    subheading: "Power isn’t given. It’s built.",
    paragraphs: [
        "Atlas is a legacy in the making.",
        "For over a decade, I’ve trained to build not just muscle but mindset. I’ve studied what works, tested what doesn’t, and built programs that deliver raw, focused results.",
        "I wasn’t born with this. I built it, like you will.",
        "Atlas is for those who command power, not just chase it. If you’re ready to train with intent, you’re in the right place."
    ],
    quote: "You don’t inherit strength. You forge it."
};

export default function Origins() {
    return (
        <main className="px-6 md:px-12 py-20 space-y-24 bg-[var(--dark)] text-[var(--light)]">

        {/* Hero Section */}
        <section className="mx-auto space-y-10 text-left">
            <h1 className="text-5xl md:text-7xl font-lexend-giga font-bold uppercase tracking-tight text-[var(--light-gray)]">
            {originsCopy.title}
            </h1>

            <p className="text-xl md:text-2xl font-lexend uppercase text-[var(--gold)] tracking-wide">
            {originsCopy.subheading}
            </p>

            <div className="font-inter text-base md:text-lg leading-relaxed space-y-6 text-[var(--light-gray)]">
            {originsCopy.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
            ))}
            </div>
        </section>

        {/* Quote */}
        <section className="border-l-4 border-[var(--gold)] pl-6 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-lexend italic text-[var(--gold)] leading-tight">
            {`“${originsCopy.quote}”`}
            </p>
        </section>
        </main>
    );
}