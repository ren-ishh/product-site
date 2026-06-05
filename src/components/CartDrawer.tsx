import { useState } from "react";
import { useCart } from "@/context/CartContext";

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f2dbb8' width='400' height='300'/%3E%3Ctext fill='%23c4853d' font-family='serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

const SHIPPING_RATES = {
  tamilnadu: { label: "Tamil Nadu", price: 20 },
  other: { label: "Other States", price: 30 },
  north: { label: "Northern States", price: 50 },
} as const;

type ShippingRegion = keyof typeof SHIPPING_RATES;

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, removeFromCart, updateQty, clearCart, total, count } = useCart();
  const [shippingRegion, setShippingRegion] = useState<ShippingRegion>("tamilnadu");

  function handleWhatsApp() {
    if (items.length === 0) return;

    const lines = items.map(
      (item, i) =>
        `${i + 1}. ${item.name} \u00d7 ${item.quantity} \u2014 \u20B9${parseInt(item.price) * item.quantity}`
    ).join("\n");

    const shipping = SHIPPING_RATES[shippingRegion];
    const finalTotal = total + shipping.price;

    const message =
      `Hello Paprish Foods! 🌿\n\nHere is my order:\n\n${lines}\n\n📦 Shipping (${shipping.label}): ₹${shipping.price}\n🧾 *Total: ₹${finalTotal}*\n\nPlease confirm availability and share payment details. Thank you!`;

    window.open(`https://wa.me/918531934020?text=${encodeURIComponent(message)}`, "_blank");
    clearCart();
    onClose();
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/5 shrink-0">
          <div>
            <h2 className="font-serif font-bold text-xl text-charcoal">Your Cart</h2>
            <p className="text-xs text-charcoal-muted/50 mt-0.5">{count} item{count !== 1 ? "s" : ""}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-charcoal/5 flex items-center justify-center hover:bg-charcoal/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-16 h-16 bg-paprish-100 rounded-2xl flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-paprish-400">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <p className="font-serif text-lg text-charcoal mb-1">Cart is empty</p>
              <p className="text-sm text-charcoal-muted/50">Add products to get started</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 p-3 bg-paprish-50/50 rounded-2xl border border-charcoal/5">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-paprish-100 shrink-0">
                  <img
                    src={item.image_url || PLACEHOLDER}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = PLACEHOLDER; }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-semibold text-charcoal text-sm leading-snug line-clamp-2">
                    {item.name}
                  </h4>
                  <p className="text-[0.65rem] text-crimson-700 font-bold uppercase tracking-wide mt-0.5">
                    {item.weight}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-charcoal/8 px-1 py-0.5">
                      <button
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-charcoal hover:text-paprish-600 transition-colors"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14" /></svg>
                      </button>
                      <span className="font-bold text-charcoal text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-charcoal hover:text-paprish-600 transition-colors"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                      </button>
                    </div>

                    <span className="font-bold text-charcoal text-sm">
                      ₹{parseInt(item.price) * item.quantity}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-6 h-6 flex items-center justify-center text-charcoal-muted/30 hover:text-red-400 transition-colors"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="shrink-0 border-t border-charcoal/5 px-6 py-5 space-y-4 bg-white">
            <div className="bg-paprish-50 rounded-xl px-4 py-3 space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-xs text-charcoal-muted/60">
                  <span className="truncate mr-2">{item.name} × {item.quantity}</span>
                  <span className="shrink-0 font-medium">₹{parseInt(item.price) * item.quantity}</span>
                </div>
              ))}

              {/* Shipping Selection */}
              <div className="border-t border-charcoal/8 pt-3 pb-1 mt-2 space-y-2">
                <p className="text-xs font-semibold text-charcoal mb-1">Shipping Region:</p>
                <div className="flex flex-col gap-2">
                  {(Object.entries(SHIPPING_RATES) as [ShippingRegion, typeof SHIPPING_RATES[ShippingRegion]][]).map(([key, { label, price }]) => (
                    <label key={key} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="shipping"
                          value={key}
                          checked={shippingRegion === key}
                          onChange={(e) => setShippingRegion(e.target.value as ShippingRegion)}
                          className="w-4 h-4 accent-crimson-700 cursor-pointer"
                        />
                        <span className="text-sm text-charcoal-muted/80 group-hover:text-charcoal transition-colors">{label}</span>
                      </div>
                      <span className="text-xs font-medium text-charcoal-muted/60">+₹{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Totals Breakdown */}
              <div className="border-t border-charcoal/8 pt-3 flex flex-col gap-1.5">
                <div className="flex justify-between text-xs text-charcoal-muted/60">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-xs text-charcoal-muted/60">
                  <span>Courier Charge</span>
                  <span>₹{SHIPPING_RATES[shippingRegion].price}</span>
                </div>
                <div className="flex justify-between font-bold text-charcoal text-sm mt-1">
                  <span>Total</span>
                  <span className="font-bold text-crimson-700">₹{total + SHIPPING_RATES[shippingRegion].price}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Send Order on WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="w-full text-xs text-charcoal-muted/40 hover:text-red-400 transition-colors py-1"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}