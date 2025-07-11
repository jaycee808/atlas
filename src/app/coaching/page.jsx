import Image from 'next/image'

export default function Coaching() {
    return (
        <section>
            <h1>The Coaching Page</h1>

        {/* Three Images Tiles */}
        <section className="px-6 md:px-12">
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
                <div className="absolute bottom-4 left-4 text-[var(--white)] text-xl font-lexend-giga bg-[var(--dark-transparent)] px-3 py-1 rounded-sm">
                    {["Intensity", "Consistency", "Growth"][i]}
                </div>
                </div>
            ))}
            </div>
        </section>
        </section>
    )
} 