const logos = [
  "Protocol A",
  "Protocol B",
  "Protocol C",
  "Protocol D",
  "Protocol E",
  "Protocol F",
  "Protocol G",
  "Protocol H",
];

export default function LogoCarousel() {
  return (
    <section className="border-y border-zinc-800/50 py-12" aria-label="Trusted by">
      <p className="text-center text-sm text-zinc-600 uppercase tracking-wider mb-8">
        Trusted by
      </p>
      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="logo-item flex items-center justify-center h-10 px-8 text-zinc-500 text-lg font-semibold tracking-wide select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
