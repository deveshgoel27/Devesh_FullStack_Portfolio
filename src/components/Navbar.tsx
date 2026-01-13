import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Find active link and update indicator position
    const activeIndex = navLinks.findIndex(link => link.path === location.pathname);
    const activeLink = linkRefs.current[activeIndex];
    
    if (activeLink && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    }
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          TR
        </Link>

        {/* Navigation Pills - Desktop */}
        <div 
          ref={navRef}
          className="hidden md:flex items-center glass-card px-2 py-2 rounded-full relative"
        >
          {/* Animated Indicator */}
          <div 
            className="nav-indicator"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />
          
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              ref={el => linkRefs.current[index] = el}
              to={link.path}
              className={`nav-pill ${
                location.pathname === link.path ? "nav-pill-active" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <Link to="/contact" className="btn-outline text-sm hidden md:block">
          Book a Call
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-4">
          <div className="glass-card rounded-2xl p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl transition-colors ${
                  location.pathname === link.path 
                    ? "bg-primary/20 text-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
