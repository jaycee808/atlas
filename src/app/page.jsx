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
  subheading: "Power isn’t given. It’s built.",
  paragraphs: [
    "Atlas is a legacy in the making.",
    "For over a decade, I’ve trained to build not just muscle but mindset. I’ve studied what works, tested what doesn’t, and built programs that deliver raw, focused results.",
    "I wasn’t born with this. I built it, like you will.",
    "Atlas is for those who command power, not just chase it. If you’re ready to train with intent, you’re in the right place."
  ],
  quote: "You don’t inherit strength. You forge it."
}

export default function Home() {
  return (
    <main className="min-h-screen space-y-32">

      {/* Hero Section */}
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

      {/* Origins Story */}
      <section className="px-6 md:px-12 py-2 md:py-6 space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-lexend-giga font-bold uppercase text-[var(--gold)]">
            {originsCopy.title}
            </h2>
            <p className="text-xl md:text-2xl font-lexend uppercase text-[var(--mid-gray)] tracking-wide">
              {originsCopy.subheading}
            </p>
            <div className="font-inter text-xl leading-tight space-y-6 text-[var(--light-gray)]">
              {originsCopy.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full h-full relative">
            <Image
              src="/gym-scene-1.png"
              alt="Atlas Origins"
              width={800}
              height={600}
              className="object-cover w-full h-full rounded-md shadow-xl"
            />
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="px-6 md:px-12 py-6 space-y-20">
        <div className="grid items-start">
          <h2 className="text-3xl md:text-5xl font-lexend-giga font-semibold uppercase text-[var(--gold)] tracking-wide">
            Power. Precision. Purpose.
          </h2>
          <p className="text-xl md:text-2xl font-inter text-[var(--mid-gray)] leading-relaxed max-w-xl pt-8">
            Atlas is for men who don’t follow the crowd. Our coaching is built for those who train hard, think sharp, and demand more from every rep.
          </p>
        </div>

        <div className="space-y-16 py-12">
          <h3 className="text-3xl md:text-5xl font-lexend-giga font-semibold uppercase text-[var(--gold)] tracking-wide">
            Services
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div key={i} className="relative group">
                <div className="relative inline-block mb-4">
                  <div className="absolute top-1/2 left-2 -translate-y-1/2 w-2 h-10 bg-[var(--gold)] z-0 transform -skew-x-16" />
                  <span className="relative z-10 text-4xl font-bold font-lexend-giga text-[var(--mid-gray)] px-6">
                    {`0${i + 1}.`}
                  </span>
                </div>

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

      {/* Three Images Tiles */}
      <section className="px-6 md:px-12 space-y-12">
        <div className="grid md:grid-cols-3 gap-6">
          {["/gym-equipment-1.png", "/gym-equipment-2.png", "/gym-equipment-3.png"].map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-md shadow-lg">
              <Image
                src={img}
                alt={`Gym Scene ${i + 1}`}
                width={500}
                height={300}
                className="object-cover w-full h-64 grayscale group-hover:grayscale-0 transition duration-500"
              />
              <div className="absolute bottom-4 left-4 text-white text-xl font-lexend-giga bg-[var(--dark-transparent)] px-3 py-1 rounded-sm">
                {["Intensity", "Consistency", "Growth"][i]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 px-6 md:px-12 space-y-6">
        <h2 className="text-4xl md:text-6xl font-lexend-giga uppercase text-[var(--gold)] tracking-tight">
          Ready to train with Purpose?
        </h2>
        <p className="text-xl md:text-2xl font-inter text-[var(--mid-gray)]">
          Book a free intro call or claim your first session.
        </p>
        <Link href="/book">
          <button className="mt-6 border-2 border-white bg-[var(--dark-transparent)] px-10 py-5 text-lg md:text-xl font-lexend-giga font-bold uppercase tracking-wider text-[var(--white)] hover:bg-[var(--dark)] hover:text-white hover:scale-105 transition-all duration-300">
            Let's Build.
          </button>
        </Link>
      </section>
    </main>
  )
}