import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/IAEDTS.jpg" 
            alt="IAETDS Logo" 
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 font-sans text-xs tracking-[0.2em] uppercase">
          {isHomePage ? (
            <>
              <a href="#about" className="text-platinum hover:text-gold transition-colors duration-300">About</a>
              <a href="#apply" className="text-platinum hover:text-gold transition-colors duration-300">Partnership</a>
            </>
          ) : (
            <>
              <Link to="/" className="text-platinum hover:text-gold transition-colors duration-300">Home</Link>
              <Link to="/#about" className="text-platinum hover:text-gold transition-colors duration-300">About</Link>
              <Link to="/partnership" className="text-platinum hover:text-gold transition-colors duration-300">Partnership</Link>
            </>
          )}
        </div>
        <Link
          to="/partnership"
          className="px-6 py-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] gold-border text-gold hover:bg-primary/10 transition-all duration-300"
        >
          Apply
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
