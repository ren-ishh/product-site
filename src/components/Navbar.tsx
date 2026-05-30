import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-paprish-500 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg transition-colors duration-300 group-hover:bg-paprish-600">
            P
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-bold text-lg text-charcoal tracking-tight">
              Paprish
            </span>
            <span className="text-[0.65rem] text-paprish-600 tracking-[0.2em] uppercase font-medium">
              Foods
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-charcoal-light hover:text-paprish-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-paprish-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-charcoal text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-charcoal-light transition-all duration-300 hover:shadow-lg hover:shadow-charcoal/10"
        >
          Get in Touch
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] bg-charcoal transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-charcoal transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-charcoal transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <li
              key={link.label}
              className={`transition-all duration-500 ${
                mobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-serif text-charcoal hover:text-paprish-600 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className={`mt-10 bg-charcoal text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-charcoal-light transition-all duration-500 ${
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
