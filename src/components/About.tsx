import ScrollReveal from "./ScrollReveal";

const values = [
  {
    number: "01",
    title: "Crafted with Care",
    description:
      "Every product is made with intention — no shortcuts, no unnecessary additives. Just real ingredients, handled with pride.",
  },
  {
    number: "02",
    title: "Rich in Natural Goodness",
    description:
      "From aromatic spice blends to ready-to-use mandi and biriyani kits — every pack delivers a premium, chemical-free experience.",
  },
  {
    number: "03",
    title: "A Promise in Every Pack",
    description:
      "Paprish Foods is more than a brand. It's a commitment to purity, consistency, and excellence — delivered to your kitchen every time.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-paprish-100/40 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Desktop only: image LEFT, text RIGHT ── */}
          <div className="hidden lg:block">
            <ScrollReveal>
              <div className="image-frame relative">
                <div className="aspect-[5/6] rounded-2xl overflow-hidden bg-paprish-200">
                  <img
                    src="/images/about-craft.jpg"
                    alt="Crafting natural mixes at Paprish Foods"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Stats card overlay — desktop only */}
              <div className="hidden lg:flex absolute -right-8 bottom-12 bg-white rounded-2xl shadow-lg px-6 py-5 items-center gap-5">
                <div className="text-center">
                  <div className="font-serif font-bold text-2xl text-charcoal">100%</div>
                  <div className="text-[0.65rem] text-charcoal-muted/60 tracking-wide uppercase">Natural</div>
                </div>
                <div className="w-[1px] h-10 bg-charcoal/10" />
                <div className="text-center">
                  <div className="font-serif font-bold text-2xl text-charcoal">0%</div>
                  <div className="text-[0.65rem] text-charcoal-muted/60 tracking-wide uppercase">Chemicals</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Text content — always visible ── */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="accent-line" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson-700">
                  Our Story
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight mb-6">
                What is
                <br />
                <span className="text-crimson-700">Paprish Foods?</span>
              </h2>

              <p className="text-base text-charcoal-muted/70 leading-relaxed mb-8">
                At Paprish Foods, we redefine everyday food with a touch of purity and excellence. Our philosophy is rooted in creating products that are crafted with care, free from unnecessary chemicals, and rich in natural goodness.
              </p>

              <p className="text-base text-charcoal-muted/70 leading-relaxed mb-10">
                Every blend, every mix, and every product is designed to deliver a premium experience — from aromatic spices to ready-to-use mandi and biriyani kits. We are not just building a food brand; we are building a promise — a promise of purity, consistency, and excellence in every pack.
              </p>
            </ScrollReveal>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, i) => (
                <ScrollReveal key={value.number} delay={i * 100}>
                  <div className="flex gap-5 group cursor-default">
                    <span className="font-serif text-2xl text-crimson-700/30 font-bold leading-none mt-0.5 transition-colors duration-300 group-hover:text-crimson-700">
                      {value.number}
                    </span>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-charcoal mb-1">{value.title}</h4>
                      <p className="text-sm text-charcoal-muted/60 leading-relaxed max-w-sm">{value.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ── Mobile only: image BELOW text ── */}
          <div className="lg:hidden">
            <ScrollReveal>
              <div className="aspect-[5/6] rounded-2xl overflow-hidden bg-paprish-200">
                <img
                  src="/images/about-craft.jpg"
                  alt="Crafting natural mixes at Paprish Foods"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Mobile stats row */}
              <div className="flex justify-center gap-10 mt-6 pt-6 border-t border-charcoal/10">
                <div className="text-center">
                  <div className="font-serif font-bold text-2xl text-charcoal">100%</div>
                  <div className="text-[0.65rem] text-charcoal-muted/60 uppercase tracking-wide">Natural</div>
                </div>
                <div className="w-px bg-charcoal/10" />
                <div className="text-center">
                  <div className="font-serif font-bold text-2xl text-charcoal">0%</div>
                  <div className="text-[0.65rem] text-charcoal-muted/60 uppercase tracking-wide">Chemicals</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}