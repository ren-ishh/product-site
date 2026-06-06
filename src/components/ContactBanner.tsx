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
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson-700">
                Get in Touch
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight mb-6">
              Ready to
              <br />
              <span className="text-crimson-700">place an order?</span>
            </h2>

            <p className="text-charcoal-muted/60 leading-relaxed max-w-md mb-6 lg:mb-10 text-base">
              Whether you are ordering for your home, looking for wholesale products, or just have a question, simply contact us! We make it easy to get our products straight to your store.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <a href="tel:+918531934020" className="w-11 h-11 rounded-xl bg-crimson-700/10 flex items-center justify-center shrink-0 hover:bg-crimson-700/20 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-700">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </a>
                <div>
                  <div className="text-xs text-charcoal-muted/50 uppercase tracking-wider font-medium">Phone</div>
                  <a href="tel:+918531934020" className="text-charcoal font-medium hover:text-crimson-700 transition-colors">
                    +91 85319 34020
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-crimson-700/10 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-700">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-charcoal-muted/50 uppercase tracking-wider font-medium">Location</div>
                  <div className="text-charcoal font-medium">
                    Devala, Gudalur, Nilgiris,<br />Tamil Nadu, India
                  </div>
                </div>
              </div>

              {/* 3 Pill Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="tel:+918531934020"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-crimson-700/10 hover:bg-crimson-700/20 transition-colors text-crimson-700 text-sm font-semibold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call
                </a>
                <a
                  href="https://wa.me/918531934020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors text-[#128C7E] text-sm font-semibold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#128C7E">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/paprish_foods?igsh=MXQ2YWJ1cmI4eTFiYw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors text-pink-600 text-sm font-semibold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-600">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - WhatsApp CTA Card */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-charcoal/5 text-center">
              <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">
                Order via WhatsApp
              </h3>
              <p className="text-charcoal-muted/70 text-sm leading-relaxed mb-8">
                Skip the forms! The fastest way to get our 100% natural mixes delivered to your door is by messaging us directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/918531934020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#25D366] text-white font-medium py-3.5 rounded-xl hover:bg-[#20bd5a] transition-all duration-300 shadow-lg shadow-[#25D366]/20 group"
              >
                Chat with us
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}