const protocols = [
  "Uniswap",
  "Aerodrome",
  "Velodrome",
  "Base",
  "Optimism",
  "Ethereum",
];

export default function Partners() {
  return (
    <section
      className="py-20 md:py-28 border-t border-zinc-800/50"
      aria-label="Supported protocols and chains"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm text-zinc-600 uppercase tracking-wider mb-10">
          Protocols & Chains
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
          {protocols.map((name) => (
            <span
              key={name}
              className="text-zinc-500 text-lg font-semibold tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
