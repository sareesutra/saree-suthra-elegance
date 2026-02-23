import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-16 text-center">
          <h3 className="font-display text-2xl lg:text-3xl mb-3">Stay in Touch</h3>
          <p className="text-gold-light font-body text-sm tracking-widest uppercase mb-6">
            Subscribe for exclusive offers & new arrivals
          </p>
          <form className="flex max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-primary-foreground/20 px-4 py-3 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold"
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-6 py-3 text-sm uppercase tracking-widest font-body hover:bg-crimson-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h4 className="font-display text-2xl font-bold text-gold mb-4 tracking-wider">SAREE SUTHRA</h4>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Celebrating the art of Indian handloom. Every saree tells a story of tradition, craft, and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {["New Arrivals", "Best Sellers", "Pure Silk", "Handwork", "Sale"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/60 hover:text-gold font-body text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h5 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-4">Help</h5>
            <ul className="space-y-2">
              {["Shipping & Returns", "Size Guide", "Track Order", "FAQs", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/60 hover:text-gold font-body text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <span className="text-primary-foreground/60 font-body text-sm">Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span className="text-primary-foreground/60 font-body text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <span className="text-primary-foreground/60 font-body text-sm">hello@sareesuthra.com</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-primary-foreground/40 hover:text-gold transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 text-center">
          <p className="text-primary-foreground/40 font-body text-xs tracking-widest uppercase">
            © 2026 Saree Suthra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
