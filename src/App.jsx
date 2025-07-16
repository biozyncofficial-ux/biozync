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
  const [, setProductsOpen] = useState(false);

  const closeDropdowns = () => {
    setDropdownOpen(false);
    setProductsOpen(false);
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
      `}</style>
{/* Navigation */}
<nav className="navbar-gradient sticky top-0 z-50 px-6 py-3">
  <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
    {/* Logo */}
    <Link to="/" className="flex items-center space-x-3">
      <img
        src="/logo.png"
        alt="BioZync Logo"
        className="h-14 w-auto"
      />
    </Link>

    {/* Nav Links */}
    <div className="flex items-center space-x-8 relative text-lg">
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
          <div className="absolute top-10 left-0 bg-white text-black rounded-md shadow-lg w-56 z-50">
            <Link
              to="/get-tree"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={closeDropdowns}
            >
              Get Tree (Login)
            </Link>
            <Link
              to="/leaderboard"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={closeDropdowns}
            >
              Leaderboard
            </Link>
            <Link
              to="/your-dashboard"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={closeDropdowns}
            >
              Your Dashboard
            </Link>
            <Link
              to="/cooperate-dashboard"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={closeDropdowns}
            >
              Cooperate Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
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
          />{" "}
          {/* ✅ Fixed */}
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
      <footer className="footer-gradient mt-20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Footer Logo */}
            <div className="text-center md:text-left">
              <div className="logo-gradient text-xl font-bold mb-2">BioZync</div>
              <p className="text-gray-300 text-sm">
                Restoring Earth, one innovation at a time.
              </p>
            </div>

            {/* Footer Menu */}
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <Link
                to="/about"
                className="footer-link hover:scale-105 transform transition-all duration-300"
              >
                About
              </Link>
              <Link
                to="/products"
                className="footer-link hover:scale-105 transform transition-all duration-300"
              >
                Products
              </Link>
              <Link
                to="/get-tree"
                className="footer-link hover:scale-105 transform transition-all duration-300"
              >
                Join the Movement
              </Link>
            </div>

            {/* Footer Socials */}
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link hover:scale-110 transition-all duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link hover:scale-110 transition-all duration-300"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2025 BioZync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
