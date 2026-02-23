import sareeTissueSilk from "@/assets/saree-tissue-silk.jpg";
import sareeBanarasi from "@/assets/saree-banarasi.jpg";
import sareeModel from "@/assets/saree-model-1.jpg";
import sareeOrganza from "@/assets/saree-organza.jpg";

const silkProducts = [
  { image: sareeTissueSilk, name: "Golden Tissue Silk", price: "₹14,999" },
  { image: sareeBanarasi, name: "Red Zari Work", price: "₹16,499" },
  { image: sareeModel, name: "Crimson Kanjivaram", price: "₹12,999" },
  { image: sareeOrganza, name: "Blush Organza Silk", price: "₹9,999" },
];

const ProductShowcase = () => {
  return (
    <section id="silk" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Handpicked</p>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-foreground">
            Pure Tissue Silk
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {silkProducts.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-body text-sm lg:text-base text-foreground tracking-wide">{product.name}</h3>
              <p className="text-gold-dark font-display font-semibold text-lg mt-1">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-accent text-accent-foreground px-10 py-3 text-sm uppercase tracking-[0.25em] font-body hover:bg-crimson-light transition-colors duration-300"
          >
            Explore All
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
