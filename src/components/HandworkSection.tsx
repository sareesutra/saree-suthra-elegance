import sareeHandwork from "@/assets/saree-handwork.jpg";
import sareeGallery from "@/assets/saree-gallery-1.jpg";
import sareeBanarasi from "@/assets/saree-banarasi.jpg";

const handworkProducts = [
  { image: sareeHandwork, name: "Royal Blue Mirror Work", price: "₹22,999" },
  { image: sareeGallery, name: "Emerald Zardozi Saree", price: "₹19,499" },
  { image: sareeBanarasi, name: "Red Aari Work Saree", price: "₹17,999" },
];

const HandworkSection = () => {
  return (
    <section id="handwork" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Artisan Craft</p>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-foreground">
            Handwork Sarees
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {handworkProducts.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-body text-base lg:text-lg text-foreground tracking-wide">{product.name}</h3>
              <p className="text-gold-dark font-display font-semibold text-xl mt-1">{product.price}</p>
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

export default HandworkSection;
