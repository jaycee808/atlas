import Link from 'next/link'

export default function Home() {
  return (
    <main className="px-6 py-12 md:px-12 md:py-20 space-y-20">
      
      {/* HERO */}
      <section className="space-y-6 text-left">
        <h1 className="text-4xl md:text-6xl font-lexend-giga uppercase leading-tight tracking-tight text-gray-300">
          Build Muscle. <br className="hidden md:block" />
          Command Power.
        </h1>
        <p className="text-xl md:text-2xl font-inter text-neutral-400 max-w-xl mx-auto md:mx-0">
          Elite personal training for men who move with purpose.
        </p>
        <Link href="/contact">
          <button className="mt-4 inline-block border border-gray-300 px-6 py-3 text-xl md:text-2xl font-lexend uppercase tracking-wide hover:bg-neutral-400 hover:text-black transition-colors">
            Start Your Transformation
          </button>
        </Link>
      </section>

      {/* INTRO */}
      <section className="space-y-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-lexend font-semibold text-gray-300">
          Strength isn’t just built — it’s earned.
        </h2>
        <p className="text-lg md:text-xl font-inter text-neutral-400">
          Atlas is a results-driven training brand for men ready to push past limits. Every rep, every plan, every session is engineered for serious growth.
        </p>
      </section>

      {/* SERVICES */}
      <section className="grid gap-12 md:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-lexend uppercase tracking-wide text-gray-300">
            1:1 Personal Training
          </h3>
          <p className="text-base md:text-lg font-inter text-neutral-400">
            In-gym sessions tailored to your goals. Build strength, size, and form — with hands-on guidance every step of the way.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-lexend uppercase tracking-wide text-gray-300">
            Online Coaching
          </h3>
          <p className="text-base md:text-lg font-inter text-neutral-400">
            Expert planning, accountability, and feedback wherever you are. No fluff. Just results.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-lexend uppercase tracking-wide text-gray-300">
            Nutrition Guidance
          </h3>
          <p className="text-base md:text-lg font-inter text-neutral-400">
            Maximize gains and recovery with nutrition plans built around your training. No generic templates.
          </p>
        </div>
      </section>
    </main>
  )
}