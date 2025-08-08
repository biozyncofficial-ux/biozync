import React, { useState, useEffect } from "react";
import { Users, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";

import balajiImg from "../../assets/images/team/balaji.jpg";
import jkImg from "../../assets/images/team/jk.jpg";
import rishikaImg from "../../assets/images/team/rishika.jpg";
import rexImg from "../../assets/images/team/rex.jpg";
import brind from "../../assets/images/team/brind.jpg";
import srivarsh from "../../assets/images/team/srivar.jpg";
import saba from "../../assets/images/team/saba.jpg";
import Vaishnavi from "../../assets/images/team/vaishnavi.jpg";

const teamMembers = [
  {
    name: "BALAJI S",
    role: "Co-Founder & CEO",
    img: balajiImg,
    bio: "Leads both scientific research and startup development, managing the team and building the company from the ground up."
  },
  {
    name: "JAYAKRISHNAA P",
    role: "Co-Founder & Head of Commercial",
    img: jkImg,
    bio: "Handles business growth, partnerships, and ensures Biozync’s solution reaches real users and projects."
  },
  {
    name: "RISHIKA SINGH MALVIYA",
    role: "Genetic Engineering Associate",
    img: rishikaImg,
    bio: "Works on plant research and development, focusing on creating trees that can absorb more carbon."
  },
  {
    name: "DR. D. REX ARUNRAJ",
    role: "Mentor & Scientific Advisor – Plant Biotechnology",
    img: rexImg,
    bio: "Supports the research team with expert advice on plants, genetic techniques, and project planning."
  },
  {
    name: "Brindha T M ",
    role: " Co-Founder & CTO",
    img: brind,
    bio: " Leads Biozync’s plant R&D, combining biotechnology and bioinformatics to engineer trees for higher carbon capture."
  },
  {
    name: "L Shrivarshini",
    role: "Research Associate",
    img: srivarsh,
    bio: "Works on plant genetic experiments to enhance growth and carbon fixation traits."
  },
  {
    name: "Sabareeswar B",
    role: "Founder’s Office",
    img: saba,
    bio: " Oversees operations, strategy, and partnerships to drive Biozync’s mission forward."
  },
  {
    name: "Sri Vaishnavi Dabberu ",
    role: " Bioinformatics Analyst",
    img: Vaishnavi,
    bio: " Using biotechnology and CRISPR insights to design trees that capture more carbon."
  },
];

// ✅ Extracted reusable card
const TeamCard = ({ member, onClick }) => (
  <article
    className="team-card rounded-3xl overflow-hidden shadow-xl"
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
    aria-label={`View more about ${member.name}`}
  >
    <figure className="team-image relative w-full h-72 lg:h-80">
      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
    </figure>
    <figcaption className="p-6 text-center">
      <h3 className="text-xl font-bold mb-3">{member.name}</h3>
      <p className="text-sm font-medium uppercase tracking-wider" style={{ color: "var(--primary-teal)" }}>
        {member.role}
      </p>
    </figcaption>
  </article>
);

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in on load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mobile-only auto-scroll
  useEffect(() => {
    if (window.innerWidth >= 1024) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Escape to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="team-section py-20 px-6 sm:px-10 lg:px-20 relative">
      {/* Header */}
      <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <Users className="w-16 h-16 mx-auto mb-6" style={{ color: "var(--primary-teal)" }} />
        <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", color: "transparent" }}>
          Meet Our Team
        </h2>
        <p className="max-w-3xl mx-auto text-xl" style={{ color: "var(--text-secondary)" }}>
          The brilliant minds behind <span className="font-semibold" style={{ color: "var(--primary-teal)" }}>Biozync</span> — innovators shaping a sustainable future through biotechnology.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className={`hidden lg:grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} onClick={() => setSelectedMember(member)} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className={`lg:hidden relative max-w-md mx-auto mt-10 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <TeamCard member={member} onClick={() => setSelectedMember(member)} />
              </div>
            ))}
          </div>
        </div>

        {/* Manual Carousel Buttons */}
        <button onClick={prevSlide} className="carousel-button absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="carousel-button absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70"
          onClick={() => setSelectedMember(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content relative max-w-md w-full rounded-3xl p-8 text-center bg-white/5 backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
              aria-label="Close"
            >
              <span className="text-xl">×</span>
            </button>
            <img
              src={selectedMember.img}
              alt={selectedMember.name}
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4"
              style={{ borderColor: "var(--primary-teal)" }}
            />
            <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
            <p className="text-sm font-medium mb-4 uppercase tracking-wider" style={{ color: "var(--primary-teal)" }}>
              {selectedMember.role}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {selectedMember.bio}
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:someone@example.com`} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
