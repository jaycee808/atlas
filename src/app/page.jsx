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

export default function Home() {
  return (
    <main className="px-6 py-6 md:px-12 md:py-20 space-y-32">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/atlas-hero-1.png"
            alt="Atlas Training"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center w-full h-full md:block">
          {/* FORGE + your */}
          <div className="relative md:absolute md:top-12 md:left-12">
            <h1 className="text-6xl md:text-9xl font-lexend-giga font-bold uppercase text-[var(--light-gray)] leading-none">
              FORGE
            </h1>
            <div className="absolute -bottom-16 left-[60%] md:-bottom-14 md:left-[75%]">
              <h2 className="font-island-moments text-8xl md:text-9xl text-[var(--gold)] leading-none">
                your
              </h2>
            </div>
          </div>

          {/* LEGACY */}
          <div className="mt-10 md:mt-0 md:absolute md:bottom-10 md:right-10">
            <h1 className="text-6xl md:text-9xl font-lexend-giga font-bold uppercase text-[var(--light-gray)] leading-none">
              LEGACY
            </h1>
          </div>
        </div>
      </section>

      {/* SERVICES + CTA SECTION */}
      <section className="space-y-16 mx-auto text-left">

        {/* Services Heading */}
        <div className="space-y-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-lexend font-semibold uppercase text-[var(--gold)] tracking-wide">
            Strength isn’t given. It’s built.
          </h2>
          <p className="text-lg md:text-xl font-inter text-[var(--mid-gray)] leading-relaxed">
            Atlas is for men who don’t follow the crowd. Our coaching is built for those who train hard, think sharp, and demand more from every rep.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-lexend uppercase tracking-wide text-[var(--light-gray)]">
                {service.title}
              </h3>
              <p className="text-base md:text-lg font-inter text-[var(--mid-gray)] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <Link href="/book">
            <button className="mt-4 inline-block border border-[var(--light-gray)] px-8 py-4 text-base md:text-lg font-lexend uppercase tracking-wider hover:bg-[var(--light-gray)] hover:text-[var(--dark)] transition-colors">
              Let's Build.
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}