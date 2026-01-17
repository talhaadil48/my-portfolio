import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "My Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // slightly higher threshold for cleaner look
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when sidebar is open (prevents weird double-scroll on mobile)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "py-3 sm:py-4 bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/40"
            : "py-4 sm:py-5 bg-background/30 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl sm:text-2xl font-bold text-primary"
            onClick={handleLinkClick}
          >
            Portfolio
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm lg:text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground z-50 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Left-sliding mobile sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 sm:w-80 bg-background/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header inside sidebar */}
          <div className="flex items-center justify-between p-6 border-b border-border/40">
            <span className="text-xl font-bold text-primary">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md hover:bg-muted"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-6 py-8 space-y-6 overflow-y-auto">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-lg font-medium text-foreground/90 hover:text-primary transition-colors duration-200 hover:pl-2"
                onClick={handleLinkClick}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Optional footer in sidebar */}
          <div className="p-6 border-t border-border/40 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio
          </div>
        </div>
      </div>

      {/* Overlay (darkens background when sidebar open) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Spacer to prevent content jump under fixed navbar */}
      <div className={cn("h-16 sm:h-20", isScrolled ? "h-14 sm:h-16" : "")} />
    </>
  );
};