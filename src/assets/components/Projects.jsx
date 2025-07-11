import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";
import pic1 from "./photos/Rewwwind.png";
import pic2 from "./photos/salahlogo.png";


const projects = [
  {
    title: "Rewwwind",
    image: pic1,
    description: "sustainability-focused e-commerce platform for trading second-hand books and records.",
    Github: "https://github.com/feminaismail/rewwwind"
  },
  {
    title: "Salah Guide",
    image: pic2,
    description: "cross-platform mobile app to help Muslims learn and perform daily prayers",
    ios: "https://apps.apple.com/us/app/salah-guide-learn-pray/id6738019011",
    android: "https://play.google.com/store/apps/details?id=com.yastech.salahguidefinal&hl=en_SG"
  },

];

export default function Projects() {
  const [visible, setVisible] = useState(Array(projects.length).fill(false));
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => observers.forEach((obs, idx) => {
      if (cardRefs.current[idx]) obs.unobserve(cardRefs.current[idx]);
    });
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-[#181818] py-24" id="projects">
      <h2 className="text-5xl md:text-7xl font-extrabold uppercase text-center mb-12 bg-gradient-to-t from-pink-200/80 to-white/90 bg-clip-text text-transparent drop-shadow-lg">
        Latest Work
      </h2>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar custom-hide-scrollbar">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            ref={el => cardRefs.current[idx] = el}
            className={`
              snap-start h-screen flex flex-col justify-center items-center
              transition-all duration-700
              ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}
          >
            <div className="relative w-full max-w-7xl bg-neutral-800 border border-neutral-700 rounded-2xl shadow-xl flex flex-col sticky top-48 overflow-hidden cursor-pointer opacity-100 transition-transform duration-300 ease-out no-underline">
              {/* Header */}
              <div className="flex items-center justify-between px-10 pt-8 pb-4">
                <h2 className="text-4xl font-bold text-white tracking-tight">{project.title}</h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-neutral-700 transition"
                  aria-label="External link"
                >
                  {/* External link icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              {/* Image */}
              <div className="flex-1 flex items-center px-10">
                <img
                  src={project.image}
                  alt={project.title + ' Screenshot'}
                  className="rounded-xl w-full h-72 object-cover border border-neutral-700"
                />
              </div>
              {/* Description */}
              <div className="px-10 pb-8 pt-4">
                <p className="text-neutral-300 text-lg">{project.description}</p>
                {project.Github && (
                  <div className="mt-4">
                    <a
                      href={project.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-gray-300 hover:text-black font-semibold bg-gray-800 px-4 py-2 rounded-full transition"
                    >
                      View on GitHub
                    </a>
                  </div>
                )}
                {(project.ios || project.android) && (
                  <div className="flex gap-4 mt-4">
                    {project.ios && (
                      <a
                        href={project.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-400 hover:text-blue-600 font-semibold"
                      >
                        iOS
                      </a>
                    )}
                    {project.android && (
                      <a
                        href={project.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-green-500 hover:text-green-700 font-semibold"
                      >
                        Android
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 