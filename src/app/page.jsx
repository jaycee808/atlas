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
    <main className="min-h-screen space-y-32">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/atlas-hero-background.png"
            alt="Atlas Training"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">
          <div className="relative flex flex-col items-center space-y-0 md:space-y-0">
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
            <button className="mt-12 border-2 border-white bg-[var(--dark-transparent)] px-10 py-5 text-lg md:text-xl font-lexend-giga font-bold uppercase tracking-wider text-[var(--white)] hover:bg-[var(--dark)] hover:text-white hover:scale-105 transition-all duration-300">
              Let's Build.
            </button>
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-6 md:px-12 py-20 space-y-20">

        {/* Introductory Heading + Paragraph */}
        <div className="grid items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-lexend-giga font-semibold uppercase text-[var(--gold)] tracking-wide">
              Strength isn’t given. <br />It’s built.
            </h2>
          </div>
          <div className="py-8">
            <p className="text-xl md:text-2xl font-inter text-[var(--mid-gray)] leading-relaxed max-w-xl">
              Atlas is for men who don’t follow the crowd. Our coaching is built for those who train hard, think sharp, and demand more from every rep.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="relative space-y-16 px-4 py-12 pb-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/gym-equipment-1.png"
              alt="Gym Equipment"
              className="w-full h-full object-cover opacity-26"
            />
          </div>

          {/* Heading */}
          <h3 className="text-3xl md:text-5xl font-lexend-giga font-semibold uppercase text-[var(--gold)] tracking-wide">
            Services
          </h3>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-10 py-8">
            {services.map((service, i) => (
              <div key={i} className="relative group">

                {/* Number + Gold Block */}
                <div className="relative inline-block mb-4">
                  <div className="absolute top-1/2 left-2 -translate-y-1/2 w-2 h-10 bg-[var(--gold)] z-0 transform -skew-x-16" />
                  <span className="relative z-10 text-4xl font-bold font-lexend-giga text-[var(--mid-gray)] px-6">
                    {`0${i + 1}.`}
                  </span>
                </div>

                {/* Title + Text */}
                <h4 className="text-2xl font-lexend uppercase text-[var(--light-gray)] tracking-wide border-b border-[var(--light-gray)] pb-1">
                  {service.title}
                </h4>
                <p className="text-lg font-inter text-[var(--mid-gray)] leading-relaxed pt-2">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}