import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navClass = `sticky top-0 z-50 transition-all duration-300 backdrop-blur-md 
    bg-[#a0522d]/20 border-b border-[#a0522d]/30 
    ${scrolled ? "py-2 shadow-lg" : "py-4"}`;

  const linkClass = "text-[#a0522d] hover:text-white transition-colors";

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className={`font-bold tracking-wide transition-all duration-300 text-[#a0522d] ${
            scrolled ? "text-base" : "text-xl"
          }`}
        >
          Dope AF
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-[#a0522d]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={linkClass}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 pb-4 space-y-2 font-medium px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={linkClass + " block"}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
