import { useState, useEffect, useMemo, type FormEvent } from "react";
import Select from "react-select";
import { useCart } from "@/context/CartContext";
// 1. Import your new data file
import { INDIA_LOCATIONS } from "@/data/indiaLocations"; 

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f2dbb8' width='400' height='300'/%3E%3Ctext fill='%23c4853d' font-family='serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

const SHIPPING_RATES = {
  tamilnadu: { label: "Tamil Nadu", price: 20 },
  other: { label: "Other States", price: 30 },
  north: { label: "Northern States", price: 50 },
} as const;

type ShippingRegion = keyof typeof SHIPPING_RATES;

type CustomerDetails = {
  name: string;
  phone: string;
  address: string;
  district: string;
  state: string;
  pincode: string;
  alternateMobile: string;
};

interface Props {
  open: boolean;
  onClose: () => void;
}

const initialCustomerDetails: CustomerDetails = {
  name: "",
  phone: "",
  address: "",
  district: "",
  state: "",
  pincode: "",
  alternateMobile: "",
};

// 2. OPTIMIZATION: Calculate state options outside the component 
// so it only runs once when the app loads, not on every render.
const stateOptions = Object.keys(INDIA_LOCATIONS).map(state => ({ 
  value: state, 
  label: state 
}));

const customSelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    borderRadius: '0.75rem', 
    minHeight: '46px', 
    boxShadow: state.isFocused ? '0 0 0 2px rgba(221, 160, 90, 0.2)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    borderColor: state.isFocused ? '#dda05a' : '#e5e7eb',
    '&:hover': {
      borderColor: state.isFocused ? '#dda05a' : '#e5e7eb'
    },
    fontSize: '0.875rem',
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected ? '#DD1F1F' : state.isFocused ? '#faf1e0' : 'white',
    color: state.isSelected ? 'white' : '#1e1e1e',
    fontSize: '0.875rem',
    cursor: 'pointer',
    '&:active': {
      backgroundColor: '#DD1F1F',
      color: 'white'
    }
  }),
  placeholder: (base: any) => ({
    ...base,
    color: '#9ca3af',
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: '0.75rem',
    overflow: 'hidden',
    zIndex: 9999,
  })
};

export default function CartDrawer({ open, onClose }: Props) {
  const { items, removeFromCart, updateQty, clearCart, total, count } = useCart();
  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const [shippingRegion, setShippingRegion] = useState<ShippingRegion>("tamilnadu");
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>(initialCustomerDetails);

  // 3. OPTIMIZATION: Use useMemo so district logic only calculates when the state actually changes
  const districtOptions = useMemo(() => {
    if (!customerDetails.state || !INDIA_LOCATIONS[customerDetails.state]) return [];
    return INDIA_LOCATIONS[customerDetails.state].map(district => ({ 
      value: district, 
      label: district 
    }));
  }, [customerDetails.state]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open || items.length === 0) {
      setStep("cart");
    }
  }, [open, items.length]);

  function updateCustomerDetail(field: keyof CustomerDetails, value: string) {
    setCustomerDetails((prev) => ({ ...prev, [field]: value }));
  }

  function handleWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (items.length === 0) return;

    if (!customerDetails.state || !customerDetails.district) {
      alert("Please select both your State and District.");
      return;
    }

    const lines = items.map(
      (item, i) =>
        `${i + 1}. ${item.name} \u00d7 ${item.quantity} \u2014 \u20B9${parseInt(item.price) * item.quantity}`
    ).join("\n");

    const shipping = SHIPPING_RATES[shippingRegion];
    const finalTotal = total + shipping.price;

    const message =
      `Hello Paprish Foods! 🌿\n\nHere is my order:\n\n${lines}\n\n*Customer Details*\nName: ${customerDetails.name}\nPhone: ${customerDetails.phone}\nShipping Address: ${customerDetails.address}\nDistrict: ${customerDetails.district}\nState: ${customerDetails.state}\nPincode: ${customerDetails.pincode}\nAlternate Mobile: ${customerDetails.alternateMobile || "Not provided"}\n\n📦 Shipping (${shipping.label}): ₹${shipping.price}\n🧾 *Total: ₹${finalTotal}*\n\nPlease confirm availability and share payment details. Thank you!`;

    window.open(`https://wa.me/918531934020?text=${encodeURIComponent(message)}`, "_blank");
    clearCart();
    setCustomerDetails(initialCustomerDetails);
    setStep("cart");
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
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/5 shrink-0 bg-white z-10">
          <div className="flex items-center gap-3">
            {step === "checkout" && (
              <button
                onClick={() => setStep("cart")}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-charcoal hover:bg-gray-200 transition-colors mr-1"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div>
              <h2 className="font-serif font-bold text-xl text-charcoal">
                {step === "cart" ? "Your Cart" : "Checkout Details"}
              </h2>
              {step === "cart" && (
                <p className="text-xs text-charcoal-muted/50 mt-0.5">{count} item{count !== 1 ? "s" : ""}</p>
              )}
            </div>
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

        {step === "cart" && (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                  <div className="w-16 h-16 bg-paprish-100 rounded-2xl flex items-center justify-center mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-paprish-400">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                    </svg>
                  </div>
                  <p className="font-serif text-lg text-charcoal mb-1">Cart is empty</p>
                  <p className="text-sm text-charcoal-muted/50">Add products to get started</p>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 p-3 bg-white rounded-2xl border border-charcoal/5 shadow-sm">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-paprish-100 shrink-0 border border-charcoal/5">
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
                          <div className="flex items-center gap-2 bg-gray-50 rounded-lg border border-charcoal/8 px-1 py-0.5">
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
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="shrink-0 border-t border-charcoal/5 px-6 py-5 bg-white z-10 animate-fade-in">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-sm font-semibold text-charcoal-muted/70">Subtotal</span>
                  <span className="font-serif text-xl font-bold text-charcoal">₹{total}</span>
                </div>
                <button
                  onClick={() => setStep("checkout")}
                  className="w-full bg-crimson-700 hover:bg-crimson-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-crimson-700/20"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-xs font-semibold text-charcoal-muted/40 hover:text-red-400 transition-colors py-3 mt-1"
                >
                  Clear cart
                </button>
              </div>
            )}
          </>
        )}

        {step === "checkout" && (
          <form onSubmit={handleWhatsApp} className="flex-1 flex flex-col overflow-hidden animate-fade-in">
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6 bg-gray-50/50">

              <div className="bg-white rounded-xl p-4 border border-charcoal/5 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted/50 mb-3">Order Summary</h3>
                <div className="space-y-2 mb-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-xs text-charcoal-muted/80">
                      <span className="truncate mr-2">{item.quantity}x {item.name}</span>
                      <span className="shrink-0 font-medium">₹{parseInt(item.price) * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-dashed border-gray-200 pt-3 space-y-2">
                  <p className="text-xs font-semibold text-charcoal mb-2">Shipping Region:</p>
                  <div className="flex flex-col gap-2">
                    {(Object.entries(SHIPPING_RATES) as [ShippingRegion, typeof SHIPPING_RATES[ShippingRegion]][]).map(([key, { label, price }]) => (
                      <label key={key} className="flex items-center justify-between cursor-pointer group bg-gray-50 px-3 py-2 rounded-lg border border-transparent hover:border-gray-200 transition-colors">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="shipping"
                            value={key}
                            checked={shippingRegion === key}
                            onChange={(e) => setShippingRegion(e.target.value as ShippingRegion)}
                            className="w-4 h-4 accent-crimson-700 cursor-pointer"
                          />
                          <span className="text-sm font-medium text-charcoal-muted/80 group-hover:text-charcoal transition-colors">{label}</span>
                        </div>
                        <span className="text-xs font-bold text-charcoal-muted/60">+₹{price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 pb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted/50">Delivery Details</h3>

                <div>
                  <label htmlFor="customer-name" className="block text-xs font-semibold text-charcoal mb-1.5">Full Name</label>
                  <input
                    id="customer-name"
                    required
                    type="text"
                    value={customerDetails.name}
                    onChange={(e) => updateCustomerDetail("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-charcoal outline-none focus:border-paprish-400 focus:ring-2 focus:ring-paprish-400/20 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-charcoal mb-1.5">Phone Number</label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    inputMode="tel"
                    value={customerDetails.phone}
                    onChange={(e) => updateCustomerDetail("phone", e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-charcoal outline-none focus:border-paprish-400 focus:ring-2 focus:ring-paprish-400/20 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="shipping-address" className="block text-xs font-semibold text-charcoal mb-1.5">Detailed Address</label>
                  <textarea
                    id="shipping-address"
                    required
                    rows={2}
                    value={customerDetails.address}
                    onChange={(e) => updateCustomerDetail("address", e.target.value)}
                    placeholder="Shop Name/House no., Street, Area"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-charcoal outline-none focus:border-paprish-400 focus:ring-2 focus:ring-paprish-400/20 transition-all resize-none shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {/* SEARCHABLE STATE DROPDOWN */}
                  <div className="relative z-30">
                    <label htmlFor="state" className="block text-xs font-semibold text-charcoal mb-1.5">State</label>
                    <Select
                      options={stateOptions}
                      value={stateOptions.find(opt => opt.value === customerDetails.state) || null}
                      onChange={(option) => {
                        updateCustomerDetail("state", option ? option.value : "");
                        updateCustomerDetail("district", ""); // Reset district when state changes
                      }}
                      placeholder="Search state..."
                      isSearchable
                      styles={customSelectStyles}
                    />
                  </div>

                  {/* SEARCHABLE DISTRICT DROPDOWN */}
                  <div className="relative z-20">
                    <label htmlFor="district" className="block text-xs font-semibold text-charcoal mb-1.5">District</label>
                    <Select
                      options={districtOptions}
                      value={districtOptions.find(opt => opt.value === customerDetails.district) || null}
                      onChange={(option) => {
                        updateCustomerDetail("district", option ? option.value : "");
                      }}
                      placeholder={customerDetails.state ? "Search district..." : "Select state first"}
                      isSearchable
                      isDisabled={!customerDetails.state}
                      styles={customSelectStyles}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label htmlFor="pincode" className="block text-xs font-semibold text-charcoal mb-1.5">Pincode</label>
                    <input
                      id="pincode"
                      required
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      title="Enter a 6 digit pincode"
                      value={customerDetails.pincode}
                      onChange={(e) => updateCustomerDetail("pincode", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-charcoal outline-none focus:border-paprish-400 focus:ring-2 focus:ring-paprish-400/20 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="alternate-mobile" className="block text-xs font-semibold text-charcoal mb-1.5">Alternate Mobile</label>
                    <input
                      id="alternate-mobile"
                      type="tel"
                      inputMode="tel"
                      value={customerDetails.alternateMobile}
                      onChange={(e) => updateCustomerDetail("alternateMobile", e.target.value)}
                      placeholder="(Optional)"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-charcoal outline-none focus:border-paprish-400 focus:ring-2 focus:ring-paprish-400/20 transition-all shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="shrink-0 border-t border-charcoal/5 px-6 py-5 bg-white z-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-charcoal">Final Total:</span>
                <span className="font-serif text-xl font-bold text-crimson-700">₹{total + SHIPPING_RATES[shippingRegion].price}</span>
              </div>
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Place Order on WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
