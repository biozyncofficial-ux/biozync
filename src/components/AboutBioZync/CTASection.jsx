import React from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-green-900 via-black to-emerald-900 text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text text-transparent">
          Join the BioZync Revolution
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with us to innovate, collaborate, and create sustainable solutions for a greener future.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>

          <a
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-green-400 text-green-300 hover:bg-green-400 hover:text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Explore Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
