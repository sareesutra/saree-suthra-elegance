import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LatestCollection from "@/components/LatestCollection";
import ShopByCollection from "@/components/ShopByCollection";
import QuoteSection from "@/components/QuoteSection";
import AboutSection from "@/components/AboutSection";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialSection from "@/components/TestimonialSection";
import HandworkSection from "@/components/HandworkSection";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[calc(2.5rem+4rem)] lg:pt-[calc(2.5rem+5rem)]">
        <HeroSection />
        <LatestCollection />
        <ShopByCollection />
        <QuoteSection />
        <AboutSection />
        <ProductShowcase />
        <TestimonialSection />
        <HandworkSection />
        <PhotoGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
