import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const categories = [
  { id: "all", label: "All Products" },
  { id: "rice", label: "Rice & Grains" },
  { id: "spices", label: "Spices & Masalas" },
  { id: "pulses", label: "Pulses & Lentils" },
  { id: "dryfruits", label: "Dry Fruits" },
];

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  weight: string;
  description: string;
  featured?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    category: "rice",
    image: "/images/product-rice.jpg",
    weight: "1 kg · 5 kg · 10 kg",
    description:
      "Long-grain, aromatic basmati aged to perfection. Each grain cooks separate and fluffy.",
    featured: true,
  },
  {
    id: 2,
    name: "Golden Sella Rice",
    category: "rice",
    image: "/images/product-rice.jpg",
    weight: "1 kg · 5 kg · 10 kg",
    description:
      "Parboiled rice with a rich golden hue — perfect for biryanis and everyday meals.",
  },
  {
    id: 3,
    name: "Pure Kashmiri Chili Powder",
    category: "spices",
    image: "/images/product-spices.jpg",
    weight: "100g · 250g · 500g",
    description:
      "Vibrant red chili with mild heat and deep color. Sun-dried and stone-ground.",
    featured: true,
  },
  {
    id: 4,
    name: "Garam Masala Blend",
    category: "spices",
    image: "/images/product-spices.jpg",
    weight: "100g · 250g · 500g",
    description:
      "A house blend of aromatic spices roasted and ground fresh for that authentic flavor.",
  },
  {
    id: 5,
    name: "Turmeric Powder",
    category: "spices",
    image: "/images/product-spices.jpg",
    weight: "100g · 250g · 500g",
    description:
      "Pure Curcuma longa with high curcumin content. No artificial colors added.",
  },
  {
    id: 6,
    name: "Toor Dal (Arhar)",
    category: "pulses",
    image: "/images/product-lentils.jpg",
    weight: "500g · 1 kg · 5 kg",
    description:
      "Premium split pigeon peas, polished and cleaned. The foundation of every great dal.",
    featured: true,
  },
  {
    id: 7,
    name: "Moong Dal (Split)",
    category: "pulses",
    image: "/images/product-lentils.jpg",
    weight: "500g · 1 kg · 5 kg",
    description:
      "Light, easy-to-digest yellow lentils — ideal for khichdi, halwa, and everyday dal.",
  },
  {
    id: 8,
    name: "Organic Almonds",
    category: "dryfruits",
    image: "/images/product-lentils.jpg",
    weight: "250g · 500g · 1 kg",
    description:
      "California-grown almonds, hand-sorted for size and quality. Crunchy and nutrient-rich.",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 lg:py-32 bg-parchment relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-paprish-600">
                Our Range
              </span>
              <span className="accent-line" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight mb-4">
              Handpicked for your
              <br />
              <span className="text-paprish-600 italic">kitchen.</span>
            </h2>
            <p className="text-charcoal-muted/60 max-w-lg mx-auto text-base">
              Every product in our catalogue is sourced with intention and packed
              with care — because your family deserves nothing less.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-charcoal text-white shadow-lg shadow-charcoal/10"
                    : "bg-white text-charcoal-muted/70 hover:text-charcoal hover:bg-white/80 border border-charcoal/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 60}>
              <div className="group bg-white rounded-2xl overflow-hidden hover-lift relative border border-charcoal/5">
                {/* Featured badge */}
                {product.featured && (
                  <div className="product-card-ribbon">Bestseller</div>
                )}

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-paprish-100/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif font-semibold text-charcoal leading-snug text-base">
                      {product.name}
                    </h3>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-paprish-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-paprish-600"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted/50 leading-relaxed mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="pt-3 border-t border-charcoal/5">
                    <span className="text-[0.65rem] font-semibold tracking-wider text-paprish-600 uppercase">
                      {product.weight}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
