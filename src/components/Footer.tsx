export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-paprish-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-paprish-500 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg transition-colors duration-300 group-hover:bg-paprish-400">
                P
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-lg text-white tracking-tight">
                  Paprish
                </span>
                <span className="text-[0.65rem] text-paprish-400 tracking-[0.2em] uppercase font-medium">
                  Foods
                </span>
              </div>
            </a>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Bringing you the purest packaged foods — from our family to yours.
              Quality you can taste, trust you can count on.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {["Instagram", "Facebook", "Twitter"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
                  aria-label={platform}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                  { label: "Home", href: "#home" },
                  { label: "About Us", href: "#about" },
                  { label: "Products", href: "#products" },
                  { label: "Quality Promise", href: "#quality" },
                  { label: "Contact", href: "#contact" },
                ].map(
                (link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {[
                "Rice & Grains",
                "Spices & Masalas",
                "Pulses & Lentils",
                "Dry Fruits",
                "Flours",
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>+91 98765 43210</li>
              <li>hello@paprishfoods.com</li>
              <li className="leading-relaxed">
                123 Food Park, Industrial Area,
                <br />
                New Delhi — 110001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {currentYear} Paprish Foods. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
