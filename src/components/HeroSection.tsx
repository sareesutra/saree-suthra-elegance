import heroImage from "@/assets/hero-saree.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious red and gold silk saree"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <p className="text-gold-light text-sm tracking-[0.4em] uppercase mb-4 font-body">
          Exclusive Collection 2026
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
          Pure Tissue Silk
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl font-body max-w-xl mx-auto mb-8">
          The finest silk sarees, crafted with love and tradition for the modern woman
        </p>
        <a
          href="#latest"
          className="inline-block bg-primary text-primary-foreground px-10 py-3.5 text-sm uppercase tracking-[0.25em] font-body hover:bg-gold-dark transition-colors duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
