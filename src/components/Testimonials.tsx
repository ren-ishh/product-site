import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "I've been buying Paprish basmati rice for over three years now. The consistency in quality is remarkable — every grain cooks perfectly. My family won't settle for anything else.",
    name: "Anita Sharma",
    location: "Delhi",
    role: "Home Chef",
    initials: "AS",
  },
  {
    quote:
      "As someone who runs a small tiffin service, the quality of ingredients makes all the difference. Paprish spices have elevated my cooking and my customers can taste the difference.",
    name: "Rajesh Patel",
    location: "Mumbai",
    role: "Tiffin Service Owner",
    initials: "RP",
  },
  {
    quote:
      "Finally, a brand that takes purity seriously. The toor dal is impeccably clean — no stones, no dust. This is the kind of quality I remember from my grandmother's kitchen.",
    name: "Meera Nair",
    location: "Bengaluru",
    role: "Food Blogger",
    initials: "MN",
  },
  {
    quote:
      "Switched to Paprish for all our dry fruit needs. The almonds and cashews are consistently fresh and crunchy. Packaging is excellent too — keeps everything fresh for weeks.",
    name: "Vikram Desai",
    location: "Pune",
    role: "Fitness Enthusiast",
    initials: "VD",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-paprish-100/30 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-paprish-600">
                Testimonials
              </span>
              <span className="accent-line" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight mb-4">
              Loved by
              <br />
              <span className="text-paprish-600 italic">thousands.</span>
            </h2>
            <p className="text-charcoal-muted/60 max-w-lg mx-auto text-base">
              Don't take our word for it — hear from the families and kitchens
              that trust Paprish every single day.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <div className="bg-white rounded-2xl p-7 lg:p-8 border border-charcoal/5 hover:border-charcoal/10 transition-all duration-300 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      className="text-paprish-500"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="currentColor"
                      />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-charcoal-muted/70 leading-relaxed text-sm flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-charcoal/5">
                  <div className="w-11 h-11 rounded-full bg-paprish-100 flex items-center justify-center text-paprish-700 font-semibold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-charcoal-muted/50">
                      {t.role} &middot; {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom accent */}
        <ScrollReveal>
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-2 text-paprish-600">
              <span className="text-xs font-semibold tracking-wider">
                JOIN 50,000+ HAPPY CUSTOMERS
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
