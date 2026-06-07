import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { supabase } from "@/lib/supabase";
import type { Product } from "@/types/product";
import { CATEGORIES } from "@/types/product";
import { useCart } from "@/context/CartContext";

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f2dbb8' width='400' height='300'/%3E%3Ctext fill='%23c4853d' font-family='serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

const allCategories = [{ id: "all", label: "All Products" }, ...CATEGORIES];

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const { addToCart } = useCart();

  // Toast state and handler
  const [toast, setToast] = useState<string | null>(null);
  function handleAddToCart(product: Product, e: React.MouseEvent) {
    e.stopPropagation();
    addToCart(product);
    setToast(`${product.name} added to cart!`);
    setTimeout(() => setToast(null), 3000);
  }

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("display_order", { ascending: true });

      if (!error && data) {
        setProducts(data as Product[]);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const MOBILE_LIMIT = 4;
  const hasMore = filtered.length > MOBILE_LIMIT;

  return (
    <section id="products" className="py-24 lg:py-32 bg-parchment relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson-700">
                Our Range
              </span>
              <span className="accent-line" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight mb-4">
              Handpicked for your<br />
              <span className="text-crimson-700">kitchen.</span>
            </h2>
            <p className="text-charcoal-muted/60 max-w-lg mx-auto text-base">
              Every product in our catalogue is sourced with intention and packed with care — because your family deserves nothing less.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter - UPDATED TO HORIZONTAL SCROLL */}
        <ScrollReveal>
          <div className="flex overflow-x-auto flex-nowrap items-center justify-start lg:justify-center gap-3 mb-14 pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {allCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                    ? "bg-crimson-700 text-white shadow-lg shadow-crimson-700/20"
                    : "bg-white text-charcoal-muted/70 hover:text-charcoal hover:bg-white/80 border border-charcoal/5"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Loading State */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-charcoal/5 animate-pulse">
                <div className="aspect-[4/3] bg-paprish-100" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-paprish-100 rounded w-3/4" />
                  <div className="h-3 bg-paprish-100 rounded w-full" />
                  <div className="h-3 bg-paprish-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {!loading && (
          <>
            {filtered.length === 0 ? (
              <div className="text-center py-24 text-charcoal-muted/50">
                <p className="font-serif text-2xl mb-2">No products yet</p>
                <p className="text-sm">Add products from the admin panel to see them here.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                  {filtered.map((product, i) => (
                    <ScrollReveal
                      key={product.id}
                      delay={i * 60}
                      className={`${!showAll && i >= MOBILE_LIMIT ? "hidden sm:block" : ""}`}
                    >
                      <div
                        className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden hover-lift relative border border-charcoal/5 h-full flex flex-col"
                      >
                        {/* Image */}
                        <div className="aspect-[4/3] overflow-hidden bg-paprish-100/50 shrink-0 relative">
                          <img
                            src={product.image_url || PLACEHOLDER}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            onError={(e) => { e.currentTarget.src = PLACEHOLDER; }}
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center">
                            <button
                              onClick={(e) => handleAddToCart(product, e)}
                              className="bg-crimson-700 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-3 sm:p-5 flex flex-col flex-1">
                          {product.featured && (
                            <div className="product-card-ribbon">Bestseller</div>
                          )}

                          <h3 className="font-serif font-semibold text-charcoal leading-snug text-xs sm:text-base mb-1 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="hidden sm:block text-xs text-charcoal-muted/50 leading-relaxed mb-3 line-clamp-2 flex-1">
                            {product.description}
                          </p>

                          {/* Moved mt-auto here to push both price and button to the exact bottom */}
                          <div className="pt-2 sm:pt-3 border-t border-charcoal/5 flex items-center justify-between mt-auto mb-2 sm:mb-0">
                            <span className="text-[0.55rem] sm:text-[0.65rem] font-sans font-bold tracking-wider text-crimson-700 uppercase truncate mr-1">
                              {product.weight}
                            </span>
                            {product.price && (
                              <span className="font-sans font-bold text-charcoal text-xs sm:text-base shrink-0">
                                ₹{product.price}
                              </span>
                            )}
                          </div>

                          <button
                            onClick={(e) => handleAddToCart(product, e)}
                            className="sm:hidden w-full bg-crimson-700 text-white text-xs font-semibold py-2 rounded-lg hover:bg-crimson-800 transition-colors"
                          >
                            + Add to Cart
                          </button>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* See All / Show Less — mobile only */}
                {hasMore && (
                  <div className="flex justify-center mt-8 sm:hidden">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="flex items-center gap-2 bg-white border border-charcoal/10 text-charcoal text-sm font-semibold px-8 py-3 rounded-full shadow-sm hover:bg-paprish-50 transition-all duration-300"
                    >
                      {showAll ? (
                        <>Show Less <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6" /></svg></>
                      ) : (
                        <>See All {filtered.length} Products <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg></>
                      )}
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
      {/* Toast Popup */}
      {toast && (
        <div className="fixed bottom-24 right-6 z-[100] bg-charcoal text-white text-sm font-medium px-6 py-4 rounded-xl shadow-2xl animate-fade-up flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          {toast}
        </div>
      )}
    </section>
  );
}
