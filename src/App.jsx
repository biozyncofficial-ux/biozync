import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./pages/AboutPage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import C4SuperTreePage from "./pages/C4SuperTreePage";
import C3SuperTreePage from "./pages/C3SuperTreePage";
import Contact from "./pages/Contact";

import GetTree from "./pages/GetTree";
import Leaderboard from "./pages/Leaderboard";
import YourDashboard from "./pages/YourDashboard";
import CooperateDashboard from "./pages/CooperateDashboard";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDropdowns = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <style jsx>{`
        .navbar-gradient {
          background: linear-gradient(
            135deg,
            rgba(0, 192, 149, 0.1) 0%,
            rgba(0, 230, 176, 0.05) 100%
          );
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 192, 149, 0.15);
          transition: all 0.3s ease-in-out;
        }
        .navbar-scrolled {
          background: linear-gradient(
            135deg,
            rgba(0, 192, 149, 0.2) 0%,
            rgba(0, 230, 176, 0.1) 100%
          );
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(0, 192, 149, 0.2);
          position: fixed !important;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transform: translateY(0);
          transition: all 0.3s ease-in-out;
          padding: 8px 16px !important;
        }
        .nav-link {
          color: #b3f5e6;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #00e6b0;
          text-shadow: 0 0 10px rgba(0, 192, 149, 0.4);
        }
        .logo-gradient {
          background: linear-gradient(135deg, #00c095 0%, #00e6b0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-gradient {
          background: linear-gradient(
            135deg,
            #000000 0%,
            #0a0a0a 50%,
            #111111 100%
          );
          border-top: 1px solid rgba(0, 192, 149, 0.15);
        }
        .footer-link {
          color: #80edd1;
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: #00e6b0;
          text-shadow: 0 0 8px rgba(0, 192, 149, 0.3);
        }
        .mobile-menu-gradient {
          background: linear-gradient(
            180deg,
            rgba(0, 192, 149, 0.15) 0%,
            rgba(0, 0, 0, 0.95) 100%
          );
          backdrop-filter: blur(15px);
        }
        .hamburger-line {
          width: 25px;
          height: 3px;
          background: #b3f5e6;
          margin: 4px 0;
          transition: 0.3s;
        }
        .hamburger-line-small {
          width: 20px;
          height: 2px;
          background: #b3f5e6;
          margin: 3px 0;
          transition: 0.3s;
        }
        .hamburger-active .hamburger-line:nth-child(1),
        .hamburger-active .hamburger-line-small:nth-child(1) {
          transform: rotate(-45deg) translate(-6px, 6px);
        }
        .hamburger-active .hamburger-line:nth-child(2),
        .hamburger-active .hamburger-line-small:nth-child(2) {
          opacity: 0;
        }
        .hamburger-active .hamburger-line:nth-child(3),
        .hamburger-active .hamburger-line-small:nth-child(3) {
          transform: rotate(45deg) translate(-6px, -6px);
        }
        .navbar-spacer {
          height: 80px;
        }
        .navbar-spacer-scrolled {
          height: 56px;
        }
        @media (max-width: 768px) {
          .navbar-gradient, .navbar-scrolled {
            backdrop-filter: blur(8px);
          }
          .navbar-spacer {
            height: 72px;
          }
          .navbar-spacer-scrolled {
            height: 48px;
          }
        }
      `}</style>

      {/* Single Dynamic Navigation */}
      <nav className={`${scrolled ? 'navbar-scrolled' : 'navbar-gradient'} px-4 sm:px-6 ${scrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-4 md:py-6'}`}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between ${scrolled ? 'h-12 sm:h-14' : 'h-16 sm:h-18 md:h-20'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeDropdowns}>
            <img
              src="/logo.png"
              alt="BioZync Logo"
              className={`w-auto ${scrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-12 md:h-14'}`}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className={`hidden md:flex items-center relative ${scrolled ? 'space-x-4 lg:space-x-6 text-sm sm:text-base' : 'space-x-6 lg:space-x-8 text-sm sm:text-base md:text-lg'}`}>
            <Link
              to="/"
              className="nav-link font-medium hover:scale-105 transition-all duration-300"
              onClick={closeDropdowns}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link font-medium hover:scale-105 transition-all duration-300"
              onClick={closeDropdowns}
            >
              About
            </Link>
            <Link
              to="/products"
              className="nav-link font-medium hover:scale-105 transition-all duration-300"
              onClick={closeDropdowns}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="nav-link font-medium hover:scale-105 transition-all duration-300"
              onClick={closeDropdowns}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className={`md:hidden flex flex-col justify-center items-center ${
              scrolled ? 'w-6 h-6' : 'w-8 h-8'
            } ${mobileMenuOpen ? "hamburger-active" : ""}`}
            onClick={toggleMobileMenu}
          >
            {scrolled ? (
              <>
                <div className="hamburger-line-small"></div>
                <div className="hamburger-line-small"></div>
                <div className="hamburger-line-small"></div>
              </>
            ) : (
              <>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mobile-menu-gradient border-b border-gray-800 z-50">
            <div className={`flex flex-col px-4 ${scrolled ? 'space-y-3 py-4' : 'space-y-4 py-6'}`}>
              <Link
                to="/"
                className={`nav-link font-medium py-2 border-b border-gray-800 hover:scale-105 transition-all duration-300 ${scrolled ? 'text-base' : 'text-lg'}`}
                onClick={closeDropdowns}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-link font-medium py-2 border-b border-gray-800 hover:scale-105 transition-all duration-300 ${scrolled ? 'text-base' : 'text-lg'}`}
                onClick={closeDropdowns}
              >
                About
              </Link>
              <Link
                to="/products"
                className={`nav-link font-medium py-2 border-b border-gray-800 hover:scale-105 transition-all duration-300 ${scrolled ? 'text-base' : 'text-lg'}`}
                onClick={closeDropdowns}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className={`nav-link font-medium py-2 border-b border-gray-800 hover:scale-105 transition-all duration-300 ${scrolled ? 'text-base' : 'text-lg'}`}
                onClick={closeDropdowns}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from jumping when navbar becomes fixed */}
      {scrolled && <div className="navbar-spacer-scrolled"></div>}

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/products/c3superTree"
            element={<C3SuperTreePage />}
          />
          <Route path="/products/c4SuperTree" element={<C4SuperTreePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-tree" element={<GetTree />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/your-dashboard" element={<YourDashboard />} />
          <Route
            path="/cooperate-dashboard"
            element={<CooperateDashboard />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer-gradient mt-20 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Footer Logo */}
            <div className="text-center md:text-left">
              <div className="logo-gradient text-lg sm:text-xl font-bold mb-2">BioZync</div>
              <p className="text-gray-300 text-xs sm:text-sm">
                Restoring Earth, one innovation at a time.
              </p>
            </div>

            {/* Footer Menu */}
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <Link
                to="/about"
                className="footer-link hover:scale-105 transform transition-all duration-300 text-xs sm:text-sm md:text-base text-center sm:text-left"
              >
                About
              </Link>
              <Link
                to="/products"
                className="footer-link hover:scale-105 transform transition-all duration-300 text-xs sm:text-sm md:text-base text-center sm:text-left"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="footer-link hover:scale-105 transform transition-all duration-300 text-xs sm:text-sm md:text-base text-center sm:text-left"
              >
                Contact
              </Link>
            </div>

            {/* Footer Socials */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-end space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base text-center sm:text-left"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base text-center sm:text-left"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 BioZync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;