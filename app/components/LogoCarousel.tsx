import Image from "next/image";

const logos = [
  { src: "/logos/lambda.png", alt: "LambdaClass" },
  { src: "/logos/hummingbot.png", alt: "HummingBot" },
  { src: "/logos/evmos.png", alt: "Evmos" },
  { src: "/logos/dusk.png", alt: "Dusk" },
  { src: "/logos/aligned.png", alt: "Aligned" },
  { src: "/logos/uba.png", alt: "UBA" },
  { src: "/logos/levenue.png", alt: "Levenue" },
];

export default function LogoCarousel() {
  return (
    <section className="border-y border-zinc-800/50 py-12" aria-label="In collaboration with">
      <p className="text-center text-sm text-zinc-600 uppercase tracking-wider mb-8">
        In collaboration with
      </p>
      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="logo-item flex items-center justify-center h-12 px-10 select-none"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={48}
                className="object-contain opacity-50 hover:opacity-90 transition-opacity brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
