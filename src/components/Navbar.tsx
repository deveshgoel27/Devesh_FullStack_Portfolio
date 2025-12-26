import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

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

        {/* Navigation Pills */}
        <div className="hidden md:flex items-center glass-card px-2 py-2 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-pill ${
                location.pathname === link.path ? "nav-pill-active" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact" className="btn-outline text-sm hidden md:block">
          Book a Call
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
