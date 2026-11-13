/**
 * The Weibull logo: the Weibull distribution curve (the favicon's mark) set
 * before the "weibull." wordmark. The curve is the brand's one symbol: the
 * classic model of time to failure, for a firm whose job is keeping
 * liquidity from breaking.
 */
export function WeibullMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 28" className={className} aria-hidden="true">
      <path d="M3 25 H37" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M3.00,25.00 L3.38,21.77 L3.76,19.41 L4.13,17.32 L4.51,15.44 L4.89,13.72 L5.27,12.15 L5.64,10.72 L6.02,9.42 L6.40,8.25 L6.78,7.21 L7.16,6.29 L7.53,5.49 L7.91,4.81 L8.29,4.25 L8.67,3.80 L9.04,3.45 L9.42,3.20 L9.80,3.05 L10.18,3.00 L10.56,3.03 L10.93,3.15 L11.31,3.34 L11.69,3.60 L12.07,3.92 L12.44,4.31 L12.82,4.74 L13.20,5.23 L13.58,5.75 L13.96,6.31 L14.33,6.90 L14.71,7.51 L15.09,8.15 L15.47,8.80 L15.84,9.46 L16.22,10.13 L16.60,10.80 L16.98,11.47 L17.36,12.13 L17.73,12.79 L18.11,13.44 L18.49,14.07 L18.87,14.69 L19.24,15.30 L19.62,15.89 L20.00,16.45 L20.38,17.00 L20.76,17.53 L21.13,18.03 L21.51,18.51 L21.89,18.97 L22.27,19.41 L22.64,19.82 L23.02,20.21 L23.40,20.58 L23.78,20.93 L24.16,21.26 L24.53,21.56 L24.91,21.85 L25.29,22.12 L25.67,22.37 L26.04,22.60 L26.42,22.81 L26.80,23.01 L27.18,23.19 L27.56,23.36 L27.93,23.52 L28.31,23.66 L28.69,23.79 L29.07,23.91 L29.44,24.02 L29.82,24.12 L30.20,24.21 L30.58,24.29 L30.96,24.37 L31.33,24.44 L31.71,24.50 L32.09,24.55 L32.47,24.60 L32.84,24.65 L33.22,24.69 L33.60,24.72 L33.98,24.76 L34.36,24.78 L34.73,24.81 L35.11,24.83 L35.49,24.85 L35.87,24.87 L36.24,24.89 L36.62,24.90 L37.00,24.91"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 text-2xl md:text-[28px] font-semibold tracking-tight text-white">
      <WeibullMark className="h-[0.95em] w-auto" />
      weibull.
    </span>
  );
}
