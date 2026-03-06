const faqs = [
  {
    question: "What does Liquid do?",
    answer:
      "Liquid provides end-to-end DeFi liquidity infrastructure. We design long-term liquidity strategies, deploy them across multiple L2 chains, and manage dynamic liquidity bands and cross-chain arbitrage — all fully automated.",
  },
  {
    question: "What are dynamic liquidity bands?",
    answer:
      "Dynamic bands are active liquidity layers that move with the market price. We operate a wide band (~5% range) for healthy depth and smooth price discovery, and a tight band (~2% range) for immediate stability and spread control. These layers work together to absorb sudden pressure while allowing organic price movement.",
  },
  {
    question: "How does multi-chain deployment work?",
    answer:
      "We deploy the same liquidity strategy simultaneously across multiple L2 networks (such as Base and Optimism) with unified logic. This ensures coordinated pricing, reduces fragmentation, and gives token holders a consistent experience regardless of which chain they trade on.",
  },
  {
    question: "What is cross-chain arbitrage and why does it matter?",
    answer:
      "When the same token trades on multiple chains, price discrepancies naturally arise. Our arbitrage infrastructure continuously monitors and captures these differences before third parties can extract that value. This keeps prices aligned across chains while retaining arbitrage profits within the protocol ecosystem.",
  },
  {
    question: "What does the engagement process look like?",
    answer:
      "We work in two phases. Phase I (Design) covers the long-term liquidity framework, short-term backstop strategy, and dynamic band configuration. Phase II (Execution) includes multi-chain deployment, automated bot infrastructure, cross-chain arbitrage setup, and ongoing monitoring with real-time reporting dashboards.",
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
