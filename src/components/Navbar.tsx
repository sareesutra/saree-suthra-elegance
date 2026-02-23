import { useState } from "react";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Collections", href: "#collections" },
  { label: "New Arrivals", href: "#latest" },
  { label: "Pure Silk", href: "#silk" },
  { label: "Handwork", href: "#handwork" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gold/20">
      {/* Top bar */}
      <div className="bg-foreground text-primary-foreground text-center py-1.5 text-sm tracking-widest uppercase">
        Free Shipping on Orders Above ₹2999
      </div>

      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <a href="#" className="font-display text-2xl lg:text-3xl font-bold tracking-wider text-gold-dark uppercase">
            Saree Suthra
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em] text-foreground hover-gold-underline pb-1 transition-colors hover:text-gold-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="text-foreground hover:text-gold-dark transition-colors">
              <Search size={20} />
            </button>
            <button aria-label="Account" className="hidden sm:block text-foreground hover:text-gold-dark transition-colors">
              <User size={20} />
            </button>
            <button aria-label="Cart" className="relative text-foreground hover:text-gold-dark transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm uppercase tracking-[0.2em] text-foreground hover:text-gold-dark py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
