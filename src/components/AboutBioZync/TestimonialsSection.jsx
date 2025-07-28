import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO, EcoGenesis Labs",
      text: "Biozync's innovative approach to bio‑engineering has transformed how we think about sustainable solutions.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, GreenByte AI",
      text: "Their AI‑driven biotechnology platform accelerated our green initiatives by 300%.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Elena Vasquez",
      role: "Director, VerdeCorp",
      text: "Collaboration with Biozync was pivotal in achieving our sustainability goals ahead of schedule.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
          What Our Partners Say
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Trusted by leading organizations worldwide
        </p>

        {/* Testimonial Card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-green-400"
          />

          {/* Rating */}
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-current" size={20} />
            ))}
          </div>

          <blockquote className="text-xl italic text-gray-300 mb-6">
            "{testimonials[current].text}"
          </blockquote>

          <h4 className="text-lg font-semibold text-white">
            {testimonials[current].name}
          </h4>
          <p className="text-green-400">{testimonials[current].role}</p>

          {/* Dots for navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === i
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
