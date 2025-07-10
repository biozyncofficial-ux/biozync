import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './pages/AboutPage';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import C4SuperTreePage from './pages/C4SuperTreePage';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Custom styles for your color scheme */}
      <style jsx>{`
        .navbar-gradient {
          background: linear-gradient(135deg, rgba(0, 192, 149, 0.1) 0%, rgba(0, 230, 176, 0.05) 100%);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 192, 149, 0.15);
        }
        .nav-link {
          color: #B3F5E6;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #00E6B0;
          text-shadow: 0 0 10px rgba(0, 192, 149, 0.4);
        }
        .logo-gradient {
          background: linear-gradient(135deg, #00C095 0%, #00E6B0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-gradient {
          background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #111111 100%);
          border-top: 1px solid rgba(0, 192, 149, 0.15);
        }
        .footer-link {
          color: #80EDD1;
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: #00E6B0;
          text-shadow: 0 0 8px rgba(0, 192, 149, 0.3);
        }
        .tailwind-test {
          background: linear-gradient(135deg, #00C095 0%, #00E6B0 100%);
          box-shadow: 0 0 30px rgba(0, 192, 149, 0.4);
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar-gradient sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="logo-gradient text-2xl font-bold tracking-wide">
            BioZync
          </div>
          <div className="flex space-x-8">
            <Link to="/" className="nav-link font-medium hover:scale-105 transform transition-all duration-300">
              Home
            </Link>
            <Link to="/about" className="nav-link font-medium hover:scale-105 transform transition-all duration-300">
              About
            </Link>
            <Link to="/products" className="nav-link font-medium hover:scale-105 transform transition-all duration-300">
              Products
            </Link>
            <Link to="/contact" className="nav-link font-medium hover:scale-105 transform transition-all duration-300">
              Contact
            </Link>
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/c4SuperTree" element={<C4SuperTreePage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer-gradient mt-20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tailwind Test Block */}
          <div className="tailwind-test text-white text-2xl p-6 rounded-lg mb-8 text-center font-bold">
            Tailwind Test Block - Custom Gradient Applied
          </div>
          
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
              <Link to="/about" className="footer-link text-center hover:scale-105 transform transition-all duration-300">
                About
              </Link>
              <Link to="/products" className="footer-link text-center hover:scale-105 transform transition-all duration-300">
                Products
              </Link>
              <Link to="/contact" className="footer-link text-center hover:scale-105 transform transition-all duration-300">
                Join the Movement
              </Link>
            </div>
            
            {/* Footer Socials */}
            <div className="flex justify-center md:justify-end space-x-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link hover:scale-110 transform transition-all duration-300"
              >
                LinkedIn
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link hover:scale-110 transform transition-all duration-300"
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