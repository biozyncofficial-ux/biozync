import React, { useState, useEffect } from "react";
import { Users, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Import local team images
import balajiImg from "../../assets/images/team/balaji.jpg";
import jkImg from "../../assets/images/team/jk.jpg";
import rishikaImg from "../../assets/images/team/rishika.jpg";
import rexImg from "../../assets/images/team/rex.jpg";

const teamMembers = [
  {
    name: "BALAJI S",
    role: "Co-Founder & CEO",
    img: balajiImg,
    bio: "Visionary leader driving sustainable biotechnology innovation with 10+ years of experience in bioengineering."
  },
  {
    name: "JAYAKRISHNAA P",
    role: "Co-Founder & Head of Commercial",
    img: jkImg,
    bio: "Strategic commercial expert focused on scaling biotechnology solutions for global impact."
  },
  {
    name: "RISHIKA SINGH MALVIYA",
    role: "Genetic Engineering Associate",
    img: rishikaImg,
    bio: "Cutting-edge genetic engineering specialist pioneering breakthrough research in sustainable biology."
  },
  {
    name: "DR. D. REX ARUNRAJ",
    role: "Mentor & Scientific Advisor – Plant Biotechnology",
    img: rexImg,
    bio: "Distinguished plant biotechnology expert guiding research direction with decades of scientific excellence."
  },
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <>
      <style>
        {`
          :root {
            --primary-teal: #00C095;
            --secondary-teal: #00E6B0;
            --text-primary: #E6FFFA;
            --text-secondary: #B3F5E6;
            --bg-primary: #000000;
            --glass-border: rgba(0, 192, 149, 0.15);
            --gradient-primary: linear-gradient(135deg, #00C095 0%, #00E6B0 100%);
            --gradient-bg: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #111111 100%);
            --gradient-card: linear-gradient(135deg, rgba(0, 192, 149, 0.1) 0%, rgba(0, 230, 176, 0.05) 100%);
            --shadow-hover: 0 12px 48px rgba(0, 192, 149, 0.25);
          }

          .team-section {
            background: var(--gradient-bg);
            color: var(--text-primary);
            position: relative;
            overflow: hidden;
          }

          .team-card {
            background: var(--gradient-card);
            border: 1px solid var(--glass-border);
            backdrop-filter: blur(20px);
            transition: all 0.4s ease;
            cursor: pointer;
          }

          .team-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-hover);
            border-color: var(--primary-teal);
          }

          .carousel-button {
            background: var(--gradient-card);
            border: 1px solid var(--glass-border);
            backdrop-filter: blur(10px);
            color: var(--text-primary);
          }

          .carousel-button:hover {
            background: var(--gradient-primary);
          }

          .modal-overlay {
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
          }

          .modal-content {
            background: var(--gradient-card);
            border: 1px solid var(--glass-border);
            backdrop-filter: blur(20px);
          }
        `}
      </style>

      <section className="team-section py-20 px-6 sm:px-10 lg:px-20 relative">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Users className="w-16 h-16 mx-auto mb-6" style={{ color: "var(--primary-teal)" }} />
          <h2
            className="text-5xl md:text-6xl font-black mb-6"
            style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", color: "transparent" }}
          >
            Meet Our Team
          </h2>
          <p className="max-w-3xl mx-auto text-xl" style={{ color: "var(--text-secondary)" }}>
            The brilliant minds behind{" "}
            <span className="font-semibold" style={{ color: "var(--primary-teal)" }}>
              Biozync
            </span>
            – innovators shaping a sustainable future through biotechnology.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card rounded-3xl overflow-hidden shadow-xl"
              onClick={() => setSelectedMember(member)}
            >
              <div className="team-image relative w-full h-72">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                <p className="text-sm font-medium uppercase tracking-wider" style={{ color: "var(--primary-teal)" }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative max-w-md mx-auto mt-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div
                    className="team-card rounded-3xl overflow-hidden shadow-xl"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="team-image relative w-full h-80">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                      <p className="text-sm font-medium uppercase tracking-wider" style={{ color: "var(--primary-teal)" }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Buttons */}
          <button
            onClick={prevSlide}
            className="carousel-button absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="carousel-button absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-6" onClick={() => setSelectedMember(null)}>
            <div
              className="modal-content relative max-w-md w-full rounded-3xl p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
              >
                <span className="text-xl">×</span>
              </button>
              <img src={selectedMember.img} alt={selectedMember.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4" style={{ borderColor: "var(--primary-teal)" }} />
              <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
              <p className="text-sm font-medium mb-4 uppercase tracking-wider" style={{ color: "var(--primary-teal)" }}>{selectedMember.role}</p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{selectedMember.bio}</p>
              <div className="flex justify-center space-x-4 mt-6">
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"><Linkedin className="w-5 h-5" /></button>
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"><Mail className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default TeamSection;
