export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden" role="contentinfo" aria-label="Paprish Foods footer">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-crimson-700/40 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2">
            {/* ─── MASSIVE FOOTER LOGO ─── */}
            <a href="#home" className="inline-block mb-8 group" aria-label="Paprish Foods — Go to homepage">
              <img
                src="/images/logo.png"
                alt="Paprish Foods Logo — Natural Spices and Instant Mixes"
                className="w-auto h-32 sm:h-40 object-contain transition-transform duration-500 group-hover:scale-105 origin-left"
                width="200"
                height="160"
                loading="lazy"
              />
            </a>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Bringing you the purest packaged foods — from our family to yours. Quality you can taste, trust you can count on.
            </p>

            {/* Social + Contact buttons */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+918531934020"
                className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
                aria-label="Call Paprish Foods: +91 85319 34020"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>

              <a
                href="https://wa.me/918531934020"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300"
                aria-label="WhatsApp Paprish Foods"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/paprish_foods?igsh=MXQ2YWJ1cmI4eTFiYw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-crimson-400 hover:bg-crimson-400/10 transition-all duration-300"
                aria-label="Paprish Foods on Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
            </div>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-5">Quick Links</h2>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Quality Promise", href: "#quality" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/40 hover:text-white transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products">
            <h2 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-5">Products</h2>
            <ul className="space-y-3">
              {[
                "Instant Snack Mixes",
                "Pure Spices & Masalas",
              ].map((product) => (
                <li key={product}>
                  <a href="#products" className="text-sm text-white/40 hover:text-white transition-colors duration-300">{product}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Address with schema-friendly markup */}
          <div>
            <h2 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-5">Contact</h2>
            <address className="not-italic">
              <ul className="space-y-4 text-sm text-white/40">
                <li>
                  <a href="tel:+918531934020" className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-400 group-hover:text-crimson-300" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    +91 85319 34020
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/918531934020" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#25D366] transition-colors duration-300 group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-400 group-hover:text-[#25D366]" aria-hidden="true">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </li>
                <li className="flex items-start gap-3 mt-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson-400 mt-0.5 shrink-0" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="leading-relaxed">
                    Devala, Gudalur,<br />
                    Nilgiris, Tamil Nadu,<br />
                    India
                  </span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">&copy; {currentYear} Paprish Foods. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/admin" className="text-xs text-white/10 hover:text-white/50 transition-colors duration-300">Admin Portal</a>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}