import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { supabase } from "@/lib/supabase";
import type { Review, ReviewFormData } from "@/types/review";

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({ name: "", location: "", quote: "", rating: 5 });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      // Only fetch APPROVED reviews for the public website
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .eq("is_approved", true)
        .order("created_at", { ascending: false });
      if (data) setReviews(data as Review[]);
      setLoading(false);
    }
    fetchReviews();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const newReview: ReviewFormData = {
      name: form.name,
      location: form.location,
      quote: form.quote,
      rating: form.rating,
      source: "Website",
      is_approved: true // CHANGED: This makes it instantly live!
    };

    await supabase.from("reviews").insert(newReview);
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setForm({ name: "", location: "", quote: "", rating: 5 });
    }, 3000);
  }

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-paprish-100/30 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson-700">Customer Reviews</span>
              <span className="accent-line" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight mb-4">
              Loved by families<br /><span className="text-crimson-700">across The World.</span>
            </h2>
            <p className="text-charcoal-muted/60 max-w-lg mx-auto text-base mb-8">
              Real feedback from real kitchens. See why our 100% natural mixes are becoming an evening snack staple.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-crimson-700 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-crimson-800 transition-all duration-300 shadow-lg shadow-crimson-700/20"
            >
              Share Your Experience
            </button>
          </div>
        </ScrollReveal>

        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-8 h-8 border-2 border-paprish-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center text-charcoal-muted/50 py-10">
            Be the first to leave a review!
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 lg:p-8 border border-charcoal/5 hover:border-charcoal/10 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} width="15" height="15" viewBox="0 0 24 24" className={j < t.rating ? "text-crimson-700" : "text-gray-200"}>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                        </svg>
                      ))}
                    </div>
                    {t.source !== "Website" && (
                      <span className="text-[0.65rem] text-charcoal-muted/40 font-medium px-2 py-1 bg-charcoal/5 rounded-md">via {t.source}</span>
                    )}
                  </div>
                  <blockquote className="text-charcoal-muted/70 leading-relaxed text-sm flex-1 mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="flex items-center gap-4 pt-5 border-t border-charcoal/5">
                    <div className="w-11 h-11 rounded-full bg-crimson-700/10 flex items-center justify-center text-crimson-700 font-semibold text-sm shrink-0 uppercase">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                      <div className="text-xs text-charcoal-muted/50">Verified Buyer &middot; {t.location}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* Submission Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl z-10">
            {submitted ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Thank You!</h3>
                <p className="text-charcoal-muted/60 text-sm">Your review has been submitted and is pending approval.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-xl font-bold text-charcoal">Write a Review</h3>
                  <button type="button" onClick={() => setShowModal(false)} className="text-charcoal-muted/50 hover:text-charcoal"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg></button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-muted/60 uppercase tracking-wider mb-2">Name</label>
                    <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-paprish-50 outline-none text-sm focus:bg-white focus:border-paprish-300 border border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-muted/60 uppercase tracking-wider mb-2">Location</label>
                    <input required type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. Chennai" className="w-full px-4 py-3 rounded-xl bg-paprish-50 outline-none text-sm focus:bg-white focus:border-paprish-300 border border-transparent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal-muted/60 uppercase tracking-wider mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" onClick={() => setForm({ ...form, rating: star })} className="focus:outline-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" className={star <= form.rating ? "text-crimson-700" : "text-gray-200"}>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal-muted/60 uppercase tracking-wider mb-2">Your Experience</label>
                  <textarea required rows={4} value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-paprish-50 outline-none text-sm focus:bg-white focus:border-paprish-300 border border-transparent transition-all resize-none" />
                </div>
                <button type="submit" disabled={submitting} className="w-full py-3.5 bg-charcoal text-white rounded-xl font-medium text-sm hover:bg-charcoal-light disabled:opacity-50">
                  {submitting ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}