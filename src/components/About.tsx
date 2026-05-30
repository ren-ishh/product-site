import ScrollReveal from "./ScrollReveal";

const values = [
  {
    number: "01",
    title: "Source with Care",
    description:
      "We partner directly with trusted farmers and growers, selecting only the finest raw ingredients at peak freshness.",
  },
  {
    number: "02",
    title: "Process with Precision",
    description:
      "Every batch passes through rigorous quality checks in our state-of-the-art facility before it reaches your kitchen.",
  },
  {
    number: "03",
    title: "Pack with Purpose",
    description:
      "Our packaging preserves flavor and nutrients while being mindful of the environment — good for you, good for the planet.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Subtle background geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-paprish-100/40 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image */}
          <ScrollReveal>
            <div className="image-frame">
              <div className="aspect-[5/6] rounded-2xl overflow-hidden bg-paprish-200">
                <img
                  src="/images/about-craft.jpg"
                  alt="Crafting quality at Paprish Foods"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Stats card overlay */}
            <div className="hidden lg:flex absolute -right-8 bottom-12 bg-white rounded-2xl shadow-lg px-6 py-5 items-center gap-5">
              <div className="text-center">
                <div className="font-serif font-bold text-2xl text-charcoal">
                  15+
                </div>
                <div className="text-[0.65rem] text-charcoal-muted/60 tracking-wide uppercase">
                  Years
                </div>
              </div>
              <div className="w-[1px] h-10 bg-charcoal/10" />
              <div className="text-center">
                <div className="font-serif font-bold text-2xl text-charcoal">
                  200+
                </div>
                <div className="text-[0.65rem] text-charcoal-muted/60 tracking-wide uppercase">
                  Products
                </div>
              </div>
              <div className="w-[1px] h-10 bg-charcoal/10" />
              <div className="text-center">
                <div className="font-serif font-bold text-2xl text-charcoal">
                  50k+
                </div>
                <div className="text-[0.65rem] text-charcoal-muted/60 tracking-wide uppercase">
                  Happy Homes
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="accent-line" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-paprish-600">
                  Our Story
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight mb-6">
                Food that feels
                <br />
                like{" "}
                <span className="text-paprish-600 italic">home.</span>
              </h2>

              <p className="text-base text-charcoal-muted/70 leading-relaxed mb-8">
                Paprish Foods began with a simple belief: everyone deserves access to
                pure, unadulterated food. What started as a small family venture has
                grown into a trusted name in packaged foods, serving thousands of
                households with products that meet the highest standards of quality
                and taste.
              </p>

              <p className="text-base text-charcoal-muted/70 leading-relaxed mb-10">
                Every grain of rice, every pinch of spice, every lentil we pack
                carries the warmth of tradition and the assurance of modern quality
                control. We don't just sell food — we deliver trust.
              </p>
            </ScrollReveal>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, i) => (
                <ScrollReveal key={value.number} delay={i * 100}>
                  <div className="flex gap-5 group cursor-default">
                    <span className="font-serif text-2xl text-paprish-300 font-bold leading-none mt-0.5 transition-colors duration-300 group-hover:text-paprish-500">
                      {value.number}
                    </span>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-charcoal mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-charcoal-muted/60 leading-relaxed max-w-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
