const QuoteSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-center">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="w-12 h-[1px] bg-gold mx-auto mb-8" />
        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic text-primary-foreground leading-relaxed">
          "Weaving Tradition into Modern Elegance"
        </blockquote>
        <p className="text-gold-light font-body text-base lg:text-lg mt-6 tracking-wide leading-relaxed max-w-2xl mx-auto">
          At Saree Suthra, we celebrate the timeless beauty of Indian textiles. Every saree in our collection is a masterwork of artisan skill, finest yarn, and ageless craft.
        </p>
        <div className="w-12 h-[1px] bg-gold mx-auto mt-8" />
      </div>
    </section>
  );
};

export default QuoteSection;
