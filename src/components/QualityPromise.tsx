import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Source Verified",
    description: "Every spice and ingredient is traceable to its origin. We work exclusively with certified farmers who share our commitment to 100% natural, chemical-free agriculture.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 12l3 3 5-5" />
      </svg>
    ),
    title: "Lab Tested",
    description: "Our masalas and instant snack mixes undergo rigorous quality checks. Each batch is tested to ensure zero artificial colors, zero preservatives, and absolute purity.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h4" />
        <circle cx="16" cy="16" r="4" />
        <path d="M10 14v4M8 16h4" />
      </svg>
    ),
    title: "Hygienic Packaging",
    description: "Our instant mixes and spices are packed in a controlled environment with minimal human contact, locking in the authentic aroma and natural shelf life.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Freshness Guaranteed",
    description: "We produce our batter mixes and masalas in small batches. This ensures the authentic, home-cooked flavor reaches your kitchen at its absolute peak.",
  },
];

export default function QualityPromise() {
  return (
    <section id="quality" className="py-24 lg:py-32 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 20px)" }} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-paprish-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-crimson-700" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson-400">
                Quality Promise
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-6">
              We don't cut<br />corners. <span className="text-crimson-400">Ever.</span>
            </h2>
            <p className="text-white/50 leading-relaxed max-w-md mb-10 text-base">
              Quality isn't a department at Paprish — it's the foundation of everything we do. From farm to packet, every step is designed to preserve what nature intended.
            </p>
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="font-serif text-5xl font-bold text-crimson-400 leading-none">100%</div>
              <div>
                <div className="font-medium text-white/80 text-sm">Satisfaction Promise</div>
                <div className="text-white/40 text-xs leading-relaxed mt-1">Not happy with the quality? We'll make it right — no questions asked.</div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] transition-colors duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-crimson-700/15 text-crimson-400 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-crimson-700/25">
                    {feature.icon}
                  </div>
                  <h4 className="font-serif font-semibold text-white mb-2 text-base">{feature.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}