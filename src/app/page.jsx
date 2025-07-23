import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: "1:1 Personal Training",
    desc: "Private in-gym sessions designed for strength, size, and precision. Hands-on form correction. No distractions. Just results."
  },
  {
    title: "Online Coaching",
    desc: "Remote programming with progress tracking, expert check-ins, and full accountability."
  },
  {
    title: "Nutrition Guidance",
    desc: "Tailored nutrition protocols that support muscle gain, recovery, and real-world performance. Built for your body."
  }
]

const originsCopy = {
  title: "Origins",
  subheading: "Where power is built.",
  paragraphOneHeading: "Atlas is a legacy in the making.",
  paragraphOneText: "For over a decade, I’ve trained to build not just muscle but mindset. I’ve studied what works, tested what doesn’t, and built programs that deliver raw, focused results.",
  paragraphTwoHeading: "I wasn’t born with this. I built it, like you will.",
  paragraphTwoText: "Atlas is for those who command power, not just chase it. If you’re ready to train with intent, you’re in the right place.",
}

export default function Home() {
  return (
    <main className="min-h-screen">

    {/* Hero Section */}
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/atlas-hero-background.png"
          alt="Atlas Training"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">
        <div className="relative flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-lexend-giga font-bold uppercase text-[var(--light-gray)] leading-[1] drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]">
            FORGE
          </h1>
          <h2 className="absolute top-[5%] md:top-[10%] text-8xl md:text-9xl font-island-moments text-[var(--gold)] leading-none z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            your
          </h2>
          <h1 className="text-6xl md:text-8xl font-lexend-giga font-bold uppercase text-[var(--light-gray)] leading-[0.8] mt-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]">
            LEGACY
          </h1>
        </div>

        <Link href="/book">
          <button className="mt-12 border-2 border-[var(--white)] bg-[var(--dark-transparent)] px-10 py-5 text-lg md:text-xl font-lexend-giga font-bold uppercase tracking-wider text-[var(--white)] hover:bg-[var(--dark)] hover:text-[var(--white)] hover:scale-105 transition-all duration-300">
            Let's Build.
          </button>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[var(--dark)] z-0 pointer-events-none" />
    </section>

    {/* The Atlas Code Section*/}
    <section className="bg-[var(--dark)] py-12 px-6">
      <div className="mx-auto text-center">
        <p className="text-xs md:text-sm uppercase tracking-widest font-lexend text-[var(--mid-gray)] mb-4">
          The Atlas Code
        </p>
        <h3 className="text-xs md:text-3xl font-lexend-giga uppercase text-[var(--light-gray)] tracking-tight">
          Intensity <span className="text-[var(--gold)]">/ </span> Consistency <span className="text-[var(--gold)]">/ </span> 
          Growth
        </h3>
      </div>
    </section>

    {/* Section Divider */}
    <hr className="w-24 border-t-2 border-[var(--gold)] mx-auto my-16 opacity-30" />

    {/* Origins Section */}

    <section className="relative w-full overflow-hidden">
      {/* Background Image Header */}
      <div className="absolute inset-0 h-[60vh] -z-10">
        <Image
          src="/gym-scene-1.png"
          alt="Atlas Origins - Gym Scene"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Header Content */}
      <div className="h-[60vh] flex flex-col justify-center px-6 md:px-12 relative z-10 text-left">
        <h2 className="text-5xl md:text-7xl font-lexend-giga font-bold uppercase text-[var(--gold)]">
          {originsCopy.title}
        </h2>
      </div>
      {/* Paragraph Content */}
      <div className="relative z-10 px-6 md:px-12 py-20">
        <h2 className="mt-4 text-xl md:text-2xl font-lexend uppercase text-[var(--mid-gray)] tracking-tight mb-12">
          {originsCopy.subheading}
        </h2>
        <div className="mx-auto grid md:grid-cols-3 gap-16">
          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-lexend font-bold text-[var(--gold)]">
              {originsCopy.paragraphOneHeading}
            </h3>
            <p className="text-xl md:text-xl font-inter tracking-tight text-[var(--light-gray)]">
              {originsCopy.paragraphOneText}
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-lexend font-bold text-[var(--gold)]">
              {originsCopy.paragraphTwoHeading}
            </h3>
            <p className="text-xl md:text-xl font-inter tracking-tight text-[var(--light-gray)]">
              {originsCopy.paragraphTwoText}
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Section Divider */}
    <hr className="w-24 border-t-2 border-[var(--gold)] mx-auto my-16 opacity-30" />

    {/* Services Section */}
    <section className="relative w-full overflow-hidden">

      {/* Background Image Header */}
      <div className="absolute inset-0 h-[60vh] -z-10">
        <Image
          src="/gym-equipment-1.png"
          alt="Gym Equipment"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Header Content */}
      <div className="h-[60vh] flex flex-col justify-center px-6 md:px-12 relative z-10 text-left">
        <h2 className="text-5xl md:text-7xl font-lexend-giga font-bold uppercase text-[var(--gold)]">
          Services
        </h2>
      </div>

      {/* Services Content */}
      <div className="relative z-10 px-6 md:px-12 py-20 space-y-16">
        <h3 className="text-3xl md:text-5xl font-lexend-giga font-semibold uppercase text-[var(--gold)] tracking-wide">
          What We Offer
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div key={i} className="relative group">
              <div className="relative inline-block mb-4">
                <div className="absolute top-1/2 left-2 -translate-y-1/2 w-2 h-10 bg-[var(--gold)] z-0 transform -skew-x-16" />
                <span className="relative z-10 text-4xl font-bold font-lexend-giga text-[var(--light-gray)] px-6">
                  {`0${i + 1}.`}
                </span>
              </div>

              <h4 className="text-2xl font-lexend uppercase text-[var(--mid-gray)] tracking-wide pb-1">
                {service.title}
              </h4>
              <p className="text-xl font-inter tracking-tight text-[var(--light-gray)] leading-relaxed pt-2">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="text-center py-20 px-6 md:px-12 space-y-6">
      <h2 className="text-4xl md:text-6xl font-lexend-giga uppercase text-[var(--gold)] tracking-tight">
          Ready to train with Purpose?
      </h2>
      <p className="text-xl md:text-2xl font-inter tracking-tight text-[var(--mid-gray)]">
          Book a free intro call or claim your first session.
      </p>
      <Link href="/book">
          <button className="mt-6 border-2 border-[var(--white)] bg-[var(--dark-transparent)] px-10 py-5 text-lg md:text-xl font-lexend-giga font-bold uppercase tracking-wider text-[var(--white)] hover:bg-[var(--black)] hover:text-[var(--white)] hover:scale-105 transition-all duration-300">
            Let's Build.
          </button>
      </Link>
    </section>
    </main>
  )
}