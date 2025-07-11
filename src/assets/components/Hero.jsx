import React from "react";
import "./Hero.css"; // For custom container-type if needed
import headshot from "./photos/headshot.png";
const Hero = () => {
  // Scroll to projects section
  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Open email client
  const handleEmailClick = () => {
    window.location.href = "mailto:feminajasminismail@email.com";
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#181818] text-white px-4 relative">
      {/* Projects icon (top left) */}
      <button
        onClick={handleProjectsClick}
        className="absolute top-6 left-6 bg-gray-800 hover:bg-gray-700 rounded-lg p-2 shadow transition"
        aria-label="View Projects"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="13" rx="2" fill="none"/>
          <path d="M3 7V5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 1.6.8l1.8 2.4H21a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7z" stroke="currentColor"/>
        </svg>
      </button>
      {/* Message icon (top right) */}
      <button
        onClick={handleEmailClick}
        className="absolute top-6 right-6 bg-gray-800 hover:bg-gray-700 rounded-lg p-2 shadow transition"
        aria-label="Contact via Email"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" fill="none"/>
          <path d="M3 7l9 6 9-6" stroke="currentColor"/>
        </svg>
      </button>
      {/* Hero image in responsive, rounded rectangle */}
      <div className="w-full max-w-5xl flex flex-col items-center mt-20 mb-8 relative">
        <div className="relative w-full flex justify-center">
          <div className="hero_background-image-wrapper flex justify-center items-center h-[8.65rem] md:h-[11rem] lg:h-[13rem] w-full max-w-5xl mx-auto rounded-3xl bg-neutral-800 overflow-visible">
            <img
              src={headshot}
              alt="Profile"
              className="object-cover h-[38rem] md:h-[46rem] lg:h-[54rem] w-auto rounded-2xl mx-auto -mt-40 md:-mt-56 lg:-mt-72 drop-shadow-2xl"
              style={{ zIndex: 2 }}
            />
          </div>
          {/* Overlapping name */}
          <h1 className="absolute left-0 right-0 -bottom-16 text-center text-[7vw] md:text-[5vw] font-extrabold uppercase leading-none tracking-tight bg-gradient-to-t from-pink-200/80 to-white/90 bg-clip-text text-transparent select-none pointer-events-none">
            FEMINA JASMIN
          </h1>
        </div>
      </div>
      {/* Subtitle and button */}
      <div className="mt-24 flex flex-col items-center w-full px-8">
        <span className="text-xl text-gray-300 mb-6">Web Developer</span>
        <a
          href="mailto:feminajasminismail@email.com"
          className="inline-flex items-center px-6 py-2 border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-black transition-all duration-200"
        >
          Get in touch &rarr;
        </a>
      </div>
    </section>
  );
};

export default Hero; 