import Image from "next/image";

const logos = [
  { src: "/logos/pol.png", alt: "POL", invert: true },
  { src: "/logos/lambda.png", alt: "LambdaClass", invert: true },
  { src: "/logos/hummingbot.png", alt: "HummingBot", invert: true },
  { src: "/logos/aligned.png", alt: "Aligned", invert: true },
  { src: "/logos/levenue.png", alt: "Levenue", invert: true },
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
              className="logo-item flex items-center justify-center h-12 px-12 select-none"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className={`object-contain opacity-50 hover:opacity-90 transition-opacity ${
                  logo.invert ? "brightness-0 invert" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
