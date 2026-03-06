const faqs = [
  {
    question: "What does Liquid do?",
    answer:
      "We handle liquidity, both sides of it. On centralized exchanges, we run market making algorithms that keep order books deep and spreads tight. On DEXs, we manage concentrated liquidity positions, rebalance bands, and run cross-chain arb. Everything runs 24/7, fully automated.",
  },
  {
    question: "What are dynamic liquidity bands?",
    answer:
      "Think of them as guardrails. We set up two: a wide band (~5%) that gives the market room to breathe with solid depth, and a tight band (~2%) that locks in stability close to the current price. They move together automatically as the market moves.",
  },
  {
    question: "How does multi-chain deployment work?",
    answer:
      "We deploy the same strategy on multiple L2s at once. Base, Optimism, wherever your token lives. The pricing stays in sync, traders get the same experience on every chain, and liquidity isn't split into disconnected fragments.",
  },
  {
    question: "What is cross-chain arbitrage and why does it matter?",
    answer:
      "If your token trades on three chains, prices will drift apart. Someone is going to capture that gap. We'd rather it be us (on your behalf) than a random MEV bot. Our arb system keeps prices aligned and routes the profit back to the protocol.",
  },
  {
    question: "What does the engagement process look like?",
    answer:
      "Two phases. First, we design the strategy together: what the liquidity structure should look like, how bands are configured, what the risk parameters are. Then we deploy. Bots go live, arb systems start running, and you get a dashboard where you can see everything in real time.",
  },
  {
    question: "What is order book market making?",
    answer:
      "It's the job of keeping buy and sell orders on an exchange so people can actually trade. Our algorithms place and update these orders constantly, adjusting for volatility, managing inventory, and keeping spreads competitive across multiple exchanges at once.",
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
