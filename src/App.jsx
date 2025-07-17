import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./pages/AboutPage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import C4SuperTreePage from "./pages/C4SuperTreePage";
import C3SuperTreePage from "./pages/C3SuperTreePage";

import GetTree from "./pages/GetTree";
import Leaderboard from "./pages/Leaderboard";
import YourDashboard from "./pages/YourDashboard";
import CooperateDashboard from "./pages/CooperateDashboard";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setProductsOpen] = useState(false);

  const closeDropdowns = () => {
    setDropdownOpen(false);
    setProductsOpen(false);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen(false);
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
        .hamburger-active .hamburger-line:nth-child(1) {
          transform: rotate(-45deg) translate(-6px, 6px);
        }
        .hamburger-active .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        .hamburger-active .hamburger-line:nth-child(3) {
          transform: rotate(45deg) translate(-6px, -6px);
        }
        @media (max-width: 768px) {
          .navbar-gradient {
            backdrop-filter: blur(8px);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar-gradient sticky top-0 z-50 px-4 sm:px-6 py-3 sm:py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeDropdowns}>
            <img
              src="/logo.png"
              alt="BioZync Logo"
              className="h-10 w-auto sm:h-12 md:h-14"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 relative text-sm sm:text-base md:text-lg">
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

            {/* Products Button */}
            <div>
              <Link
                to="/products"
                className="nav-link font-medium hover:scale-105 transition-all duration-300"
                onClick={closeDropdowns}
              >
                Products
              </Link>
            </div>

            {/* Restore With Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="nav-link font-medium hover:scale-105 transition-all duration-300"
              >
                Restore With Us
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg w-56 z-50">
                  <Link
                    to="/get-tree"
                    className="block px-4 py-2 hover:bg-gray-200 text-sm"
                    onClick={closeDropdowns}
                  >
                    Get Tree (Login)
                  </Link>
                  <Link
                    to="/leaderboard"
                    className="block px-4 py-2 hover:bg-gray-200 text-sm"
                    onClick={closeDropdowns}
                  >
                    Leaderboard
                  </Link>
                  <Link
                    to="/your-dashboard"
                    className="block px-4 py-2 hover:bg-gray-200 text-sm"
                    onClick={closeDropdowns}
                  >
                    Your Dashboard
                  </Link>
                  <Link
                    to="/cooperate-dashboard"
                    className="block px-4 py-2 hover:bg-gray-200 text-sm"
                    onClick={closeDropdowns}
                  >
                    Cooperate Dashboard
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 ${
              mobileMenuOpen ? "hamburger-active" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mobile-menu-gradient border-b border-gray-800">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <Link
                to="/"
                className="nav-link font-medium text-lg py-2 border-b border-gray-800 hover:scale-105 transition-all duration-300"
                onClick={closeDropdowns}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-link font-medium text-lg py-2 border-b border-gray-800 hover:scale-105 transition-all duration-300"
                onClick={closeDropdowns}
              >
                About
              </Link>
              <Link
                to="/products"
                className="nav-link font-medium text-lg py-2 border-b border-gray-800 hover:scale-105 transition-all duration-300"
                onClick={closeDropdowns}
              >
                Products
              </Link>
              
              {/* Mobile Restore With Us Section */}
              <div className="border-b border-gray-800 pb-4">
                <div className="nav-link font-medium text-lg py-2 mb-2">
                  Restore With Us
                </div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/get-tree"
                    className="block nav-link text-base py-1 hover:scale-105 transition-all duration-300"
                    onClick={closeDropdowns}
                  >
                    Get Tree (Login)
                  </Link>
                  <Link
                    to="/leaderboard"
                    className="block nav-link text-base py-1 hover:scale-105 transition-all duration-300"
                    onClick={closeDropdowns}
                  >
                    Leaderboard
                  </Link>
                  <Link
                    to="/your-dashboard"
                    className="block nav-link text-base py-1 hover:scale-105 transition-all duration-300"
                    onClick={closeDropdowns}
                  >
                    Your Dashboard
                  </Link>
                  <Link
                    to="/cooperate-dashboard"
                    className="block nav-link text-base py-1 hover:scale-105 transition-all duration-300"
                    onClick={closeDropdowns}
                  >
                    Cooperate Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

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
                to="/get-tree"
                className="footer-link hover:scale-105 transform transition-all duration-300 text-xs sm:text-sm md:text-base text-center sm:text-left"
              >
                Join the Movement
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