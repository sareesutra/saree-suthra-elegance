import sareeTissueSilk from "@/assets/saree-tissue-silk.jpg";
import sareeOrganza from "@/assets/saree-organza.jpg";
import sareeBanarasi from "@/assets/saree-banarasi.jpg";

const categories = [
  { image: sareeTissueSilk, name: "Pure Tissue Silk", count: "24 Sarees" },
  { image: sareeOrganza, name: "Organza", count: "18 Sarees" },
  { image: sareeBanarasi, name: "Banarasi", count: "32 Sarees" },
];

const ShopByCollection = () => {
  return (
    <section id="collections" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Browse</p>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-foreground">
            Shop by Collection
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group cursor-pointer relative overflow-hidden aspect-[3/4]">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-display text-2xl lg:text-3xl text-primary-foreground font-semibold">
                  {cat.name}
                </h3>
                <p className="text-gold-light text-sm tracking-widest uppercase mt-2 font-body">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCollection;
