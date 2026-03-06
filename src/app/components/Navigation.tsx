import { Link, useLocation } from "react-router";
import { useState } from "react";
import logoImage from "figma:asset/b85c585ec0688ab1d286ccb57efab3f251fdd4fb.png";

export function Navigation() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="Clean Queens Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-[#1E5DB8] font-medium"
                  : "text-gray-700 hover:text-[#1E5DB8]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${
                isActive("/services")
                  ? "text-[#5BC85A] font-medium"
                  : "text-gray-700 hover:text-[#5BC85A]"
              }`}
            >
              Services
            </Link>
            <Link
              to="/join-our-team"
              className={`transition-colors ${
                isActive("/join-our-team")
                  ? "text-[#D946A6] font-medium"
                  : "text-gray-700 hover:text-[#D946A6]"
              }`}
            >
              Join Our Team
            </Link>
            <Link
              to="/booking"
              className={`px-6 py-2 bg-[#1E5DB8] text-white rounded-full hover:bg-[#1a4da0] transition-colors ${
                isActive("/booking") ? "ring-2 ring-[#D946A6]" : ""
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Desktop spacer */}
          <div className="hidden md:block w-32"></div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-5">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`text-lg font-medium transition-colors ${
              isActive("/") ? "text-[#1E5DB8]" : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className={`text-lg font-medium transition-colors ${
              isActive("/services") ? "text-[#5BC85A]" : "text-gray-700"
            }`}
          >
            Services
          </Link>
          <Link
            to="/join-our-team"
            onClick={() => setMenuOpen(false)}
            className={`text-lg font-medium transition-colors ${
              isActive("/join-our-team") ? "text-[#D946A6]" : "text-gray-700"
            }`}
          >
            Join Our Team
          </Link>
          <Link
            to="/booking"
            onClick={() => setMenuOpen(false)}
            className="text-center px-6 py-3 bg-[#1E5DB8] text-white rounded-full hover:bg-[#1a4da0] transition-colors font-semibold"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}