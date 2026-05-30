export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-parchment to-paprish-100"
    >
      {/* Subtle decorative background */}
      <div className="absolute inset-0 texture-dots opacity-20" />

      {/* Decorative ring */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-paprish-300/25" />
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full border border-paprish-300/15" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-40 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
              <span className="accent-line animate-reveal-line" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-paprish-600">
                Premium Packaged Foods
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-[1.08] tracking-tight mb-6 animate-fade-up">
              Pure taste,
              <br />
              <span className="text-paprish-600 italic font-medium">
                packed fresh
              </span>
              <br />
              for your table.
            </h1>

            <p className="text-base sm:text-lg text-charcoal-muted/70 leading-relaxed max-w-lg mb-10 animate-fade-up delay-200">
              From our kitchen to yours — Paprish Foods brings you the finest
              quality rice, spices, lentils, and dry food essentials, carefully
              sourced and hygienically packed to preserve nature's goodness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-charcoal text-white font-medium px-8 py-4 rounded-full hover:bg-charcoal-light transition-all duration-300 hover:shadow-xl hover:shadow-charcoal/10 group"
              >
                Explore Products
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border border-charcoal/15 text-charcoal font-medium px-8 py-4 rounded-full hover:bg-white/60 hover:border-charcoal/30 transition-all duration-300"
              >
                Our Story
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-charcoal/8 animate-fade-up delay-400">
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-paprish-500"
                >
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
                  <path
                    d="M8 12l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs text-charcoal-muted/60 font-medium">
                  100% Natural
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-paprish-500"
                >
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
                  <path
                    d="M8 12l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs text-charcoal-muted/60 font-medium">
                  Quality Assured
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-paprish-500"
                >
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
                  <path
                    d="M8 12l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs text-charcoal-muted/60 font-medium">
                  Hygienically Packed
                </span>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative animate-fade-up delay-300">
            <div className="image-frame image-frame-right">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-paprish-200">
                <img
                  src="/images/hero-bg.jpg"
                  alt="Paprish Foods premium packaged products"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4 animate-float">
              <div className="w-12 h-12 bg-paprish-100 rounded-xl flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-paprish-600"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-charcoal-muted/60 font-medium">
                  Rated
                </div>
                <div className="font-serif font-bold text-lg text-charcoal leading-tight">
                  4.8 / 5.0
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-8 -right-8 w-24 h-24 border border-paprish-400/20 rounded-full hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
        <span className="text-[0.6rem] tracking-[0.25em] uppercase text-charcoal font-medium">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-charcoal/40 to-transparent" />
      </div>
    </section>
  );
}
