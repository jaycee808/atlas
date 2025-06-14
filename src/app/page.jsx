import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="px-6 py-12 md:px-12 md:py-20 space-y-20">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden h-[70vh] px-6 md:px-12 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-image-3.png"
            alt="Atlas Training"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* FORGE / YOUR / LEGACY */}
        <div className="w-full max-w-7xl mx-auto h-full">
          <h1 className="absolute top-6 left-4 xtra-large-text font-lexend uppercase font-extrabold text-[var(--light-gray)]">
            FORGE
          </h1>
          <h2 className="absolute top-[45%] left-[30%] text-8xl font-lexend uppercase font-bold text-[var(--light-gray)]">
            YOUR
          </h2>
          <h3 className="absolute -bottom-4 right-4 xtra-large-text font-lexend uppercase font-extrabold text-[var(--light-gray)]">
            LEGACY
          </h3>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <div className="space-y-6 text-left">
        <h1 className="text-4xl md:text-6xl font-lexend-giga uppercase leading-tight tracking-tight text-[var(--light-gray)]">
          Command Power.
        </h1>
        <p className="text-xl md:text-2xl font-inter text-[var(--mid-gray)] max-w-xl mx-auto md:mx-0">
          Elite personal training for men who move with purpose.
        </p>
        <Link href="/">
          <button className="mt-4 inline-block border border-[var(--mid-gray)] px-6 py-3 text-xl md:text-2xl font-lexend uppercase tracking-wide hover:bg-[var(--mid-gray)] hover:text-[var(--dark)] transition-colors">
            Start Your Transformation
          </button>
        </Link>
      </div>

      {/* INTRO */}
      <section className="space-y-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-lexend font-semibold text-[var(--light-gray)]">
          Strength isn’t just built — it’s earned.
        </h2>
        <p className="text-lg md:text-xl font-inter text-[var(--mid-gray)]">
          Atlas is a results-driven training brand for men ready to push past limits. Every rep, every plan, every session is engineered for serious growth.
        </p>
      </section>

      {/* SERVICES */}
      <section className="grid gap-12 md:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-lexend uppercase tracking-wide text-[var(--light-gray)]">
            1:1 Personal Training
          </h3>
          <p className="text-base md:text-lg font-inter text-[var(--mid-gray)]">
            In-gym sessions tailored to your goals. Build strength, size, and form — with hands-on guidance every step of the way.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-lexend uppercase tracking-wide text-[var(--light-gray)]">
            Online Coaching
          </h3>
          <p className="text-base md:text-lg font-inter text-[var(--mid-gray)]">
            Expert planning, accountability, and feedback wherever you are. No fluff. Just results.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-lexend uppercase tracking-wide text-[var(--light-gray)]">
            Nutrition Guidance
          </h3>
          <p className="text-base md:text-lg font-inter text-[var(--mid-gray)]">
            Maximize gains and recovery with nutrition plans built around your training. No generic templates.
          </p>
        </div>
      </section>
    </main>
  )
}