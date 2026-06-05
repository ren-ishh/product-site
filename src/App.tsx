import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import QualityPromise from "./components/QualityPromise";
import Testimonials from "./components/Testimonials";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { CartProvider, useCart } from "./context/CartContext";

function FloatingCart() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-30 w-14 h-14 bg-charcoal text-white rounded-full shadow-2xl shadow-charcoal/30 flex items-center justify-center transition-all duration-300 hover:bg-charcoal-light hover:scale-110 ${count > 0 ? "scale-100" : "scale-0 pointer-events-none"}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
        </svg>
        {count > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-crimson-700 text-white text-[0.6rem] font-bold rounded-full flex items-center justify-center">
            {count > 9 ? "9+" : count}
          </span>
        )}
      </button>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <QualityPromise />
        <Testimonials />
        <ContactBanner />
      </main>
      <Footer />
      <FloatingCart />
    </CartProvider>
  );
}
