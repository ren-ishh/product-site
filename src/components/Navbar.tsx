import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Changes the background from transparent to white when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Quality Promise", href: "#quality" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      /* FIXED: Now turns solid white and shrinks when scrolled OR when menu is open */
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled || mobileMenuOpen
        ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
        : "bg-transparent py-5 lg:py-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

        {/* ─── LOGO ─── */}
        <a href="#home" className="flex items-center group">
          <img
            src="/images/logo.png"
            alt="Paprish Foods Logo"
            /* FIXED: Logo shrinks down if the menu is opened, pulling the dropdown to the top! */
            className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${isScrolled || mobileMenuOpen
              ? "h-10 lg:h-16 -mt-1"
              : "h-42 lg:h-[270px] -mt-4"
              }`}
          />
        </a>

        {/* ─── Desktop Menu ─── */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-charcoal/70 hover:text-paprish-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#products"
            className="bg-crimson-700 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-crimson-800 transition-all shadow-md shadow-crimson-700/20"
          >
            Order Now
          </a>
        </nav>

        {/* ─── Mobile Menu Toggle ─── */}
        <button
          className={`lg:hidden text-charcoal p-2 focus:outline-none transition-all duration-500 ${isScrolled ? "mt-0" : "-mt-4"
            }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ─── Mobile Dropdown Menu ─── */}
      {mobileMenuOpen && (
        /* FIXED: Added `h-screen pb-32` to fully cover the background content below it */
        <div className="lg:hidden absolute top-full left-0 w-full h-screen bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-2 animate-fade-in pb-32">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-charcoal py-3 border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 bg-[#25D366] text-white text-center font-bold px-6 py-4 rounded-xl shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}