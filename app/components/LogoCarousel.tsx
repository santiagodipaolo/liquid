import Image from "next/image";

const logos = [
  { src: "/logos/pol.png", alt: "POL", invert: true, w: 110, h: 50 },
  { src: "/logos/lambda.png", alt: "LambdaClass", invert: true, w: 120, h: 48 },
  { src: "/logos/hummingbot.png", alt: "HummingBot", invert: true, w: 120, h: 90 },
  { src: "/logos/aligned.png", alt: "Aligned", invert: true, w: 120, h: 48 },
  { src: "/logos/levenue.png", alt: "Levenue", invert: true, w: 150, h: 33 },
];

export default function LogoCarousel() {
  return (
    <section className="border-y border-zinc-800/50 py-12" aria-label="In collaboration with">
      <p className="text-center text-sm text-zinc-600 uppercase tracking-wider mb-8">
        Trusted by
      </p>
      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="logo-item flex items-center justify-center h-16 px-12 select-none"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
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
