export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-zinc-800/50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
          Ready to add liquidity?
        </h2>
        <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
          Tell us about your project. Our team responds within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@liquid.xyz"
            className="bg-white text-zinc-950 px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors"
          >
            Email Us
          </a>
          <a
            href="#"
            className="border border-zinc-700 text-zinc-300 px-8 py-3 rounded-full hover:border-zinc-500 hover:text-white transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
