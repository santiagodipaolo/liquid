const metrics = [
  { value: "$500M+", label: "Monthly Volume" },
  { value: "30+", label: "Exchanges" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Global Operation" },
];

export default function Metrics() {
  return (
    <section className="border-y border-zinc-800/50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-mono text-white mb-2">
              {m.value}
            </div>
            <div className="text-sm text-zinc-500 uppercase tracking-wider">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
