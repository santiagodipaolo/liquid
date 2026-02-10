const exchanges = [
  "Binance",
  "OKX",
  "Bybit",
  "Coinbase",
  "Kraken",
  "dYdX",
  "Uniswap",
  "Hyperliquid",
];

export default function Partners() {
  return (
    <section
      className="py-20 md:py-28 border-t border-zinc-800/50"
      aria-label="Supported exchanges"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
          {exchanges.map((name) => (
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
