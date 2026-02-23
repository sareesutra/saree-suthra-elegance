import sareeGallery from "@/assets/saree-gallery-1.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={sareeGallery}
              alt="About Saree Suthra"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold -z-10 hidden lg:block" />
          </div>

          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Our Story</p>
            <h2 className="text-3xl lg:text-5xl font-display font-semibold text-foreground mb-6">
              Saree Suthra
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-8" />
            <p className="text-muted-foreground font-body text-base lg:text-lg leading-relaxed mb-6">
              Born from a passion for preserving India's rich textile heritage, Saree Suthra brings you handpicked sarees from the finest weavers across the country. Each piece tells a story of craftsmanship passed down through generations.
            </p>
            <p className="text-muted-foreground font-body text-base lg:text-lg leading-relaxed mb-8">
              From the shimmering Kanjivaram silks of Tamil Nadu to the intricate Banarasi weaves of Varanasi, we curate only the most exceptional pieces for the discerning woman.
            </p>
            <a
              href="#"
              className="inline-block bg-accent text-accent-foreground px-10 py-3.5 text-sm uppercase tracking-[0.25em] font-body hover:bg-crimson-light transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
