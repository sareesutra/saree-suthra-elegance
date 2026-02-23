import sareeModel from "@/assets/saree-model-1.jpg";
import sareeOrganza from "@/assets/saree-organza.jpg";
import sareeBanarasi from "@/assets/saree-banarasi.jpg";
import sareeHandwork from "@/assets/saree-handwork.jpg";
import sareeGallery from "@/assets/saree-gallery-1.jpg";
import sareeTissueSilk from "@/assets/saree-tissue-silk.jpg";

const images = [
  { src: sareeModel, alt: "Red silk saree model" },
  { src: sareeOrganza, alt: "Pink organza saree" },
  { src: sareeBanarasi, alt: "Red banarasi saree" },
  { src: sareeHandwork, alt: "Blue handwork saree" },
  { src: sareeGallery, alt: "Green silk saree" },
  { src: sareeTissueSilk, alt: "Gold tissue silk saree" },
];

const PhotoGallery = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Inspiration</p>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-foreground">
            Photo Gallery
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {images.map((img, i) => (
            <div key={i} className="group cursor-pointer overflow-hidden aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
