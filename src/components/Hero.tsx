export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Paprish Foods — Natural Spices and Instant Snack Mixes"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-parchment to-paprish-100"
    >
      {/* Subtle decorative background */}
      <div className="absolute inset-0 texture-dots opacity-20" aria-hidden="true" />

      {/* Decorative ring */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-paprish-300/25" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full border border-paprish-300/15" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24 lg:pt-64 lg:pb-40 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
              <span className="accent-line animate-reveal-line" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson-700">
                Premium Packaged Foods
              </span>
            </div>

            {/* H1 — Most important on-page SEO signal */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-[1.08] tracking-tight mb-6 animate-fade-up">
              Pure taste,
              <br />
              <span className="text-crimson-700 font-medium">
                packed fresh,
              </span>
              <br />
              farm to your table.
            </h1>

            <p className="text-base sm:text-lg text-charcoal-muted/70 leading-relaxed max-w-lg mb-10 animate-fade-up delay-200">
              Paprish Foods brings you the finest quality spices, instant snack mixes and authentic masalas — carefully sourced from the Nilgiris and hygienically packed to preserve nature's goodness. 100% natural, zero chemicals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-crimson-700 text-white font-medium px-8 py-4 rounded-full hover:bg-crimson-800 transition-all duration-300 hover:shadow-xl hover:shadow-crimson-700/20 group"
                aria-label="Explore Paprish Foods products"
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
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border border-charcoal/15 text-charcoal font-medium px-8 py-4 rounded-full hover:bg-white/60 hover:border-charcoal/30 transition-all duration-300"
                aria-label="Learn about Paprish Foods story"
              >
                Our Story
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 mt-10 pt-8 border-t border-charcoal/8 animate-fade-up delay-400">
              {[
                "100% Natural",
                "Quality Assured",
                "Hygienically Packed",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-crimson-700"
                    aria-hidden="true"
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
                  <span className="text-xs text-charcoal-muted/60 font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative animate-fade-up delay-300">
            <div className="image-frame image-frame-right">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-paprish-200">
                <img
                  src="/images/hero-bg.jpg"
                  alt="Paprish Foods premium natural spices and instant snack mixes — hygienically packed from the Nilgiris, Tamil Nadu"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width="600"
                  height="750"
                />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-8 -right-8 w-24 h-24 border border-paprish-400/20 rounded-full hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity" aria-hidden="true">
        <span className="text-[0.6rem] tracking-[0.25em] uppercase text-charcoal font-medium">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-charcoal/40 to-transparent" />
      </div>
    </section>
  );
}