const faqs = [
  {
    question: "What does Weibull do?",
    answer:
      "We set up and operate open-source liquidity software on your own accounts. On centralized exchanges, that's quoting software that keeps order books deep and spreads tight. On DEXs, it's concentrated liquidity positions, band rebalancing and cross-chain price alignment. You own the accounts and approve the parameters; we run, monitor and report on it 24/7.",
  },
  {
    question: "What are dynamic liquidity bands?",
    answer:
      "Think of them as guardrails. A typical setup has two: a wide band (~5%) that gives the market room to breathe with solid depth, and a tight band (~2%) close to the current price. They move with the market automatically. You choose the final settings.",
  },
  {
    question: "How does multi-chain deployment work?",
    answer:
      "We deploy the same approved configuration on multiple L2s at once. Base, Optimism, wherever your token lives. Traders get the same experience on every chain, and liquidity isn't split into disconnected fragments.",
  },
  {
    question: "What is cross-chain arbitrage and why does it matter?",
    answer:
      "If your token trades on three chains, prices will drift apart, and someone will capture that gap. Arbitrage software running on your own wallets keeps prices aligned, and the proceeds stay in your accounts instead of going to a random MEV bot.",
  },
  {
    question: "What does the engagement process look like?",
    answer:
      "Two phases. First, we propose a configuration: liquidity structure, bands, risk limits. You review and approve it in writing. Then we deploy the software on your accounts, monitor it around the clock, and you get a dashboard showing everything in real time. Any later parameter change also goes through your approval.",
  },
  {
    question: "Is Weibull my market maker?",
    answer:
      "No. Weibull is a technical services provider. You own the exchange accounts and wallets, provide the capital, and approve the trading parameters; we set up, operate and monitor open-source software on your behalf for a flat retainer. We never hold your funds, trade for our own account, or accept instructions to inflate volume or target a price.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 border-t border-zinc-800/50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-zinc-800/50">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex items-center justify-between cursor-pointer text-white font-medium">
                {faq.question}
                <svg
                  className="w-5 h-5 text-zinc-500 group-open:rotate-45 transition-transform flex-shrink-0 ml-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
