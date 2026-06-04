import ScrollReveal from "./ScrollReveal";

const values = [
  {
    number: "01",
    title: "Pure & Unadulterated",
    description: "We never use fillers, artificial colors, or chemical preservatives. What you see on our ingredient list is exactly what you get.",
  },
  {
    number: "02",
    title: "Perfectly Proportioned",
    description: "Our instant snack mixes are crafted using traditional recipes, balancing premium ingredients so you get perfect, golden, and crispy snacks every single time.",
  },
  {
    number: "03",
    title: "Freshness Sealed",
    description: "From our stone-ground spices to our ready-to-cook batter mixes, everything is packed hygienically to lock in maximum aroma and authentic flavor.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-paprish-100/40 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div className="image-frame">
              <div className="aspect-[5/6] rounded-2xl overflow-hidden bg-paprish-200">
                <img src="/images/about-craft.jpg" alt="Crafting natural mixes at Paprish Foods" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
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

          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="accent-line" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-paprish-600">Our Story</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight mb-6">
                Real ingredients,
                <br />
                <span className="text-paprish-600 italic">unforgettable flavor.</span>
              </h2>
              <p className="text-base text-charcoal-muted/70 leading-relaxed mb-8">
                Paprish Foods was born from a simple passion: bringing the authentic, comforting flavors of home-cooked snacks to your kitchen, without the hassle. We realized that convenience shouldn't mean compromising on your family's health.
              </p>
              <p className="text-base text-charcoal-muted/70 leading-relaxed mb-10">
                That's why our signature masala blends and instant snack mixes are crafted entirely from nature. By carefully selecting premium spices and grains, we deliver products that let you effortlessly fry perfect, golden bajjis, crispy bondas, and delicious fritters that taste exactly like grandmother used to make.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {values.map((value, i) => (
                <ScrollReveal key={value.number} delay={i * 100}>
                  <div className="flex gap-5 group cursor-default">
                    <span className="font-serif text-2xl text-paprish-300 font-bold leading-none mt-0.5 transition-colors duration-300 group-hover:text-paprish-500">
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
        </div>
      </div>
    </section>
  );
}