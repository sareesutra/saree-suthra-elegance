import sareeModel from "@/assets/saree-model-1.jpg";
import sareeOrganza from "@/assets/saree-organza.jpg";
import sareeBanarasi from "@/assets/saree-banarasi.jpg";
import sareeHandwork from "@/assets/saree-handwork.jpg";

const products = [
  { image: sareeModel, name: "Red Kanjivaram Silk Saree", price: "₹12,999", tag: "New" },
  { image: sareeOrganza, name: "Pink Organza Floral Saree", price: "₹8,499", tag: "Trending" },
  { image: sareeBanarasi, name: "Red Banarasi Zari Saree", price: "₹15,999", tag: "Bestseller" },
  { image: sareeHandwork, name: "Royal Blue Handwork Saree", price: "₹18,499", tag: "Premium" },
];

const LatestCollection = () => {
  return (
    <section id="latest" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Curated for You</p>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-foreground">
            Latest Collection
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] uppercase tracking-widest px-3 py-1">
                  {product.tag}
                </span>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>
              <h3 className="font-body text-sm lg:text-base text-foreground tracking-wide">{product.name}</h3>
              <p className="text-gold-dark font-display font-semibold text-lg mt-1">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block border-2 border-gold text-gold-dark px-10 py-3 text-sm uppercase tracking-[0.25em] font-body hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
