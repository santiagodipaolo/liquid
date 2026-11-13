import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <Link
              href="/"
              className="text-2xl md:text-[28px] font-semibold tracking-tight text-white"
            >
              weibull.
            </Link>
            <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
              <a
                href="/#services"
                className="hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="/#process"
                className="hover:text-white transition-colors"
              >
                Process
              </a>
              <a href="/#about" className="hover:text-white transition-colors">
                About
              </a>
              <Link href="/compare" className="hover:text-white transition-colors">
                Compare
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <a href="/#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800/50 text-center text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Weibull. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
