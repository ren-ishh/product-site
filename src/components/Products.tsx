import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { supabase } from "@/lib/supabase";
import type { Product } from "@/types/product";
import { CATEGORIES } from "@/types/product";

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f2dbb8' width='400' height='300'/%3E%3Ctext fill='%23c4853d' font-family='serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

const allCategories = [{ id: "all", label: "All Products" }, ...CATEGORIES];

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  // Ordering Modal State
  const [orderProduct, setOrderProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

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

  // Helper to open the order modal and reset quantity
  const handleOpenOrder = (product: Product) => {
    setOrderProduct(product);
    setQuantity(1);
  };

  // Helper to calculate total price
  const getBasePrice = (priceStr: string) => {
    // Strips out any non-numeric characters just in case
    return parseInt(priceStr.replace(/\D/g, "")) || 0;
  };

  // Helper to generate the WhatsApp Link
  const handleWhatsAppOrder = () => {
    if (!orderProduct) return;

    const basePrice = getBasePrice(orderProduct.price);
    const total = basePrice * quantity;

    const message = `Hello Paprish Foods! 🌿\nI would like to place an order:\n\n📦 *Product:* ${orderProduct.name}\n⚖️ *Weight:* ${orderProduct.weight}\n🔢 *Quantity:* ${quantity}\n💰 *Total Price:* ₹${total}\n\nPlease let me know the payment and delivery details.`;

    const whatsappUrl = `https://wa.me/916374603180?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Close modal after ordering
    setOrderProduct(null);
  };

  return (
    <section id="products" className="py-24 lg:py-32 bg-parchment relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-paprish-600">Our Range</span>
              <span className="accent-line" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight mb-4">
              Handpicked for your<br />
              <span className="text-paprish-600 italic">kitchen.</span>
            </h2>
            <p className="text-charcoal-muted/60 max-w-lg mx-auto text-base">
              Every product in our catalogue is sourced with intention and packed with care — because your family deserves nothing less.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {allCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                    ? "bg-charcoal text-white shadow-lg shadow-charcoal/10"
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((product, i) => (
                  <ScrollReveal key={product.id} delay={i * 60}>
                    {/* Make the entire card clickable */}
                    <div
                      onClick={() => handleOpenOrder(product)}
                      className="group bg-white rounded-2xl overflow-hidden hover-lift relative border border-charcoal/5 h-full flex flex-col cursor-pointer"
                    >
                      {product.featured && (
                        <div className="product-card-ribbon">Bestseller</div>
                      )}

                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden bg-paprish-100/50 shrink-0 relative">
                        <img
                          src={product.image_url || PLACEHOLDER}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => { e.currentTarget.src = PLACEHOLDER; }}
                        />
                        {/* Hover Overlay indicating clickability */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="bg-white text-charcoal font-medium text-sm px-5 py-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            Order Now
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-serif font-semibold text-charcoal leading-snug text-base">
                            {product.name}
                          </h3>
                          <span className="shrink-0 w-8 h-8 rounded-full bg-paprish-100 flex items-center justify-center transition-colors duration-300 group-hover:bg-paprish-200">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-paprish-600">
                              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>
                        <p className="text-xs text-charcoal-muted/50 leading-relaxed mb-3 line-clamp-2 flex-1">
                          {product.description}
                        </p>

                        {/* Price and Weight */}
                        <div className="pt-3 border-t border-charcoal/5 flex items-center justify-between">
                          <span className="text-[0.65rem] font-sans font-bold tracking-wider text-paprish-600 uppercase">
                            {product.weight}
                          </span>
                          {product.price && (
                            <span className="font-sans font-bold text-charcoal text-base tracking-tight">
                              ₹{product.price}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* ─── ORDERING MODAL ─── */}
      {orderProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm" onClick={() => setOrderProduct(null)} />

          <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl z-10 overflow-hidden animate-fade-up">

            {/* Modal Header Image */}
            <div className="h-48 w-full bg-paprish-100 relative">
              <img
                src={orderProduct.image_url || PLACEHOLDER}
                alt={orderProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setOrderProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-charcoal hover:bg-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <span className="text-[0.65rem] font-bold tracking-wider text-paprish-600 uppercase mb-2 block">
                  {orderProduct.weight}
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                  {orderProduct.name}
                </h3>
                <p className="text-sm text-charcoal-muted/60 leading-relaxed">
                  {orderProduct.description}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between bg-cream px-5 py-4 rounded-xl mb-6 border border-charcoal/5">
                <div className="font-medium text-charcoal text-sm">Quantity</div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-full bg-white border border-charcoal/10 flex items-center justify-center hover:bg-paprish-50 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /></svg>
                  </button>
                  <span className="font-bold text-charcoal w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-charcoal/10 flex items-center justify-center hover:bg-paprish-50 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                </div>
              </div>

              {/* Total Price & Submit */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-medium text-charcoal-muted/60">Total Price</div>
                <div className="font-sans font-bold text-3xl text-charcoal tracking-tight">
                  ₹{getBasePrice(orderProduct.price) * quantity}
                </div>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#25D366] text-white font-medium py-3.5 rounded-xl hover:bg-[#20bd5a] transition-all duration-300 shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2 group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Place Order on WhatsApp
              </button>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}