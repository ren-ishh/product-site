export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-paprish-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-4 mb-6 group">
              {/* LOGO MADE BIGGER HERE (Changed h-10 to h-20) */}
              <img
                src="/images/logo.png"
                alt="Paprish Foods Logo"
                className="w-auto h-40 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {/* Note: Delete this div below if your logo image already includes the text */}

            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Bringing you the purest packaged foods — from our family to yours. Quality you can taste, trust you can count on.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/paprish_foods?igsh=MXQ2YWJ1cmI4eTFiYw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-5">Quick Links</h4>
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
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-5">Products</h4>
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
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li>
                <a href="tel:+916374603180" className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-paprish-400 group-hover:text-paprish-300">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +91 63746 03180
                </a>
              </li>
              <li>
                <a href="https://wa.me/916374603180" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#25D366] transition-colors duration-300 group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-paprish-400 group-hover:text-[#25D366]">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-paprish-400 mt-0.5 shrink-0">
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
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">&copy; {currentYear} Paprish Foods. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/admin.html" className="text-xs text-white/10 hover:text-white/50 transition-colors duration-300">Admin Portal</a>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}