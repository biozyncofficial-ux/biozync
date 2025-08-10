import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

import balajiImg from "../../assets/images/team/balaji.jpg";
import jkImg from "../../assets/images/team/jk.jpg";
import rishikaImg from "../../assets/images/team/rishika.jpg";
import rexImg from "../../assets/images/team/rex.jpg";
import brind from "../../assets/images/team/brind.jpg";
import srivarsh from "../../assets/images/team/srivar.jpg";
import saba from "../../assets/images/team/saba.jpg";
import vaishnavi from "../../assets/images/team/vaishnavi.jpg";

const teamMembers = [
  { name: "BALAJI S", role: "Co-Founder & CEO", img: balajiImg, bio: "Leads both scientific research and startup development, managing the team and building the company from the ground up." },
  { name: "Brindha T M", role: "Co-Founder & CTO", img: brind, bio: "Leads Biozync’s plant R&D, combining biotechnology and bioinformatics to engineer trees for higher carbon capture." },
  { name: "JAYAKRISHNAA P", role: "Co-Founder & Head of Commercial", img: jkImg, bio: "Handles business growth, partnerships, and ensures Biozync’s solution reaches real users and projects." },
  { name: "RISHIKA SINGH MALVIYA", role: "Genetic Engineering Associate", img: rishikaImg, bio: "Works on plant research and development, focusing on creating trees that can absorb more carbon." },
  { name: "SHRIVARSHINI L", role: "Research Associate", img: srivarsh, bio: "Works on plant genetic experiments to enhance growth and carbon fixation traits." },
  { name: "SRI VAISHNAVI DABBERU", role: "Bioinformatics Analyst", img: vaishnavi, bio: "Using biotechnology and CRISPR insights to design trees that capture more carbon." },
  { name: "SABAREESWAR B", role: "Founder’s Office", img: saba, bio: "Oversees operations, strategy, and partnerships to drive Biozync’s mission forward." },
  { name: "DR. D. REX ARUNRAJ", role: "Mentor & Scientific Advisor – Plant Biotechnology", img: rexImg, bio: "Supports the research team with expert advice on plants, genetic techniques, and project planning." },
  
];

const TeamCard = ({ member, onClick }) => (
  <article
    className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 bg-gray-900"
    onClick={onClick}
  >
    <figure className="relative w-full h-40 sm:h-48 md:h-56 lg:h-60">
      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
    </figure>
    <figcaption className="p-3 text-center">
      <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 text-white">{member.name}</h3>
      <p className="text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider text-[var(--primary-teal)]">
        {member.role}
      </p>
    </figcaption>
  </article>
);

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [offset, setOffset] = useState(0);
  const [showSlider, setShowSlider] = useState(false);

  const totalMembers = teamMembers.length;
  const visibleCards = 5; // adjust for breakpoints
  const maxOffset = (100 / visibleCards) * (totalMembers - visibleCards);

  useEffect(() => {
    const step = 0.3; // speed
    const interval = setInterval(() => {
      setOffset((prev) => {
        if (prev >= maxOffset) {
          clearInterval(interval);
          setOffset(maxOffset);
          setShowSlider(true); // show slider after autoplay ends
          return maxOffset;
        }
        return prev + step;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [maxOffset]);

  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 bg-black text-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
          Meet Our Team
        </h2>
        <p className="mt-1 sm:mt-2 text-gray-400 text-sm sm:text-base">
          The people driving BioZync’s mission forward
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div
          className="flex"
          style={{
            transform: `translateX(-${offset}%)`,
            transition: "transform 0.02s linear",
          }}
        >
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 flex-shrink-0"
            >
              <TeamCard
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider for manual control after autoplay */}
      {showSlider && (
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max={maxOffset}
            step="0.1"
            value={offset}
            onChange={(e) => setOffset(parseFloat(e.target.value))}
            className="w-full accent-[var(--primary-teal)]"
          />
        </div>
      )}

      {selectedMember && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 p-6 rounded-3xl max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-white hover:text-red-500"
              onClick={() => setSelectedMember(null)}
            >
              <X />
            </button>
            <img
              src={selectedMember.img}
              alt={selectedMember.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-[var(--primary-teal)]"
            />
            <h3 className="text-lg sm:text-xl font-bold mt-4 text-center">
              {selectedMember.name}
            </h3>
            <p className="text-center text-[var(--primary-teal)] font-medium mb-3 text-sm sm:text-base">
              {selectedMember.role}
            </p>
            <p className="text-gray-300 text-center text-xs sm:text-sm">
              {selectedMember.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
