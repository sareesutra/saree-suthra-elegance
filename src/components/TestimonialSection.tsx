import { Star } from "lucide-react";

const testimonials = [
  {
    text: "I wore this saree and got so many compliments! Absolutely love it 😍",
    author: "Priya M.",
    rating: 5,
  },
  {
    text: "The quality of silk is unmatched. Saree Suthra never disappoints!",
    author: "Anjali S.",
    rating: 5,
  },
  {
    text: "Beautiful craftsmanship and fast delivery. My go-to store for sarees.",
    author: "Meera K.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Loved by Thousands</p>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-foreground">
            What Our Customers Say
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center p-6 lg:p-8 border border-gold/20 bg-cream">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-base lg:text-lg text-foreground italic leading-relaxed mb-4">
                "{t.text}"
              </p>
              <p className="text-gold-dark font-display font-semibold text-sm tracking-widest uppercase">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
