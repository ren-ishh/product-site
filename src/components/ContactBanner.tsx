import ScrollReveal from "./ScrollReveal";

export default function ContactBanner() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-parchment relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-paprish-200/30 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-paprish-100/40 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-paprish-600">
                Get in Touch
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight mb-6">
              Let's talk about
              <br />
              <span className="text-paprish-600 italic">your needs.</span>
            </h2>

            <p className="text-charcoal-muted/60 leading-relaxed max-w-md mb-10 text-base">
              Whether you're a retailer looking to stock our products, a
              distributor interested in partnership, or a customer with a query —
              we'd love to hear from you.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-paprish-100 flex items-center justify-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-paprish-600"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-charcoal-muted/50 uppercase tracking-wider font-medium">
                    Phone
                  </div>
                  <div className="text-charcoal font-medium">
                    +91 98765 43210
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-paprish-100 flex items-center justify-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-paprish-600"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-charcoal-muted/50 uppercase tracking-wider font-medium">
                    Email
                  </div>
                  <div className="text-charcoal font-medium">
                    hello@paprishfoods.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-paprish-100 flex items-center justify-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-paprish-600"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-charcoal-muted/50 uppercase tracking-wider font-medium">
                    Address
                  </div>
                  <div className="text-charcoal font-medium">
                    123 Food Park, Industrial Area,<br />
                    New Delhi — 110001
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Contact Form */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-charcoal/5">
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-7">
                Send us a message
              </h3>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-muted/60 uppercase tracking-wider mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="w-full px-4 py-3 rounded-xl bg-paprish-50 border border-transparent focus:border-paprish-300 focus:bg-white outline-none text-sm text-charcoal placeholder:text-charcoal-muted/30 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-muted/60 uppercase tracking-wider mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="w-full px-4 py-3 rounded-xl bg-paprish-50 border border-transparent focus:border-paprish-300 focus:bg-white outline-none text-sm text-charcoal placeholder:text-charcoal-muted/30 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-muted/60 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-paprish-50 border border-transparent focus:border-paprish-300 focus:bg-white outline-none text-sm text-charcoal placeholder:text-charcoal-muted/30 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-muted/60 uppercase tracking-wider mb-2">
                    I'm interested in
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-paprish-50 border border-transparent focus:border-paprish-300 focus:bg-white outline-none text-sm text-charcoal transition-all duration-300 appearance-none cursor-pointer">
                    <option value="">Select an option</option>
                    <option value="retail">Retail Partnership</option>
                    <option value="distribution">Distribution</option>
                    <option value="bulk">Bulk Orders</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-muted/60 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-paprish-50 border border-transparent focus:border-paprish-300 focus:bg-white outline-none text-sm text-charcoal placeholder:text-charcoal-muted/30 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal text-white font-medium py-3.5 rounded-xl hover:bg-charcoal-light transition-all duration-300 text-sm hover:shadow-lg hover:shadow-charcoal/10"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
