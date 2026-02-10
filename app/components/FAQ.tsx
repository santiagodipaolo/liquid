const faqs = [
  {
    question: "What is crypto market making?",
    answer:
      "Market making is the process of providing continuous buy and sell orders on an exchange to ensure liquidity. Market makers narrow the bid-ask spread, reduce price volatility, and make it easier for traders to execute orders at fair prices.",
  },
  {
    question: "How does Liquid provide liquidity?",
    answer:
      "Liquid deploys proprietary algorithmic trading strategies that maintain two-sided order books across multiple exchanges simultaneously. Our systems operate 24/7, automatically adjusting to market conditions to provide consistent depth and tight spreads.",
  },
  {
    question: "What exchanges does Liquid support?",
    answer:
      "Liquid operates across 30+ centralized and decentralized exchanges, including Binance, OKX, Bybit, Coinbase, Kraken, dYdX, Uniswap, and Hyperliquid. We continuously expand our exchange coverage based on client needs.",
  },
  {
    question: "What should I look for in a crypto market maker?",
    answer:
      "Key factors include transparency in reporting, proven infrastructure reliability, exchange coverage, alignment of incentives, and the technical expertise of the team. A good market maker provides real-time dashboards, maintains high uptime, and offers flexible engagement models.",
  },
  {
    question: "How does market making work for new token launches?",
    answer:
      "For token launches, Liquid designs a comprehensive liquidity strategy that covers pre-launch preparation, initial listing support, and ongoing market making. This includes setting initial price ranges, establishing order book depth, and managing volatility during the critical early trading period.",
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
