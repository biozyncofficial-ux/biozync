import React from "react";
import c3Image from "../../assets/projects/c3supertree.jpg";
import c4Image from "../../assets/projects/c4supertree.jpg";

const FeaturedProjects = () => {const projects = [
  {
    title: "C3 SuperTree",
    description:
      "Smart trees that waste less and capture more — optimized for near-term deployment by recycling photorespiration byproducts into sugars.",
    image: c3Image,
    progress: 40,
    link: "/products/c3superTree", // ✅ Corrected
  },
  {
    title: "C4 SuperTree",
    description:
      "A long-term R&D moonshot to bring C4 photosynthesis to trees for maximum carbon removal efficiency and resilience in harsh climates.",
    image: c4Image,
    progress: 20,
    link: "/products/c4SuperTree", // ✅ Corrected
  },
];


  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400">
            Our innovations driving the next wave of climate resilience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:border-green-400/50 hover:scale-105 transform transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-gradient-to-r from-green-400 to-emerald-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <a
                  href={project.link}
                  className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-full transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
