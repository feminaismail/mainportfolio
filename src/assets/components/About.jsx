import React, { useState } from "react";
import photo1 from "./photos/IMG_4360.jpg";
import photo2 from "./photos/banner.png";
import photo3 from "./photos/IMG_6850.jpeg";
import natureVideo from "./photos/IMG_5349.mp4";

// Array of hobbies, each with an image, title, description, icon, and optional link or video
const hobbies = [
  {
    image: photo1,
    title: "Photography",
    description: "I love capturing moments and landscapes with my camera.",
    icon: "📷"
  },
  {
    image: photo3,
    title: "Sports",
    description: "Exploring new places on my bike keeps me active and inspired.",
    icon: "🏀"
  },
  {
    video: natureVideo,
    title: "Nature",
    description: "Experimenting in the kitchen is my way to relax and create.",
    icon: "🌿"
  },
  {
    image: photo2,
    title: "Content Creation",
    description: "I create videos about faith and life on my YouTube channel.",
    icon: "🎥",
    link: "https://www.youtube.com/@DeenwithFem"
  }
];

export default function About() {
  const [current, setCurrent] = useState(0);

  const nextHobby = () => setCurrent((current + 1) % hobbies.length);
  const prevHobby = () => setCurrent((current - 1 + hobbies.length) % hobbies.length);

  return (
    <section id="about" className="max-w-3xl mx-auto py-24 px-4 flex flex-col md:flex-row gap-12 items-center justify-center">
      {/* Image or Video */}
      <div className="w-full max-w-sm flex-shrink-0">
        {hobbies[current].video ? (
          <video
            src={hobbies[current].video}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl object-cover object-bottom w-full h-80 shadow-md"
          />
        ) : (
          <img
            src={hobbies[current].image}
            alt={hobbies[current].title}
            className="rounded-xl object-cover w-full h-80 shadow-md"
          />
        )}
      </div>
      {/* Hobby Info */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <div className="bg-[#222] rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
          <div className="text-5xl mb-4">{hobbies[current].icon}</div>
          <h3 className="text-2xl font-bold mb-2 text-[#f9dad9]">{hobbies[current].title}</h3>
          <p className="text-neutral-300 mb-6 text-center">{hobbies[current].description}</p>
          {hobbies[current].link && (
            <a
              href={hobbies[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-2 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition"
            >
              Visit My YouTube Channel
            </a>
          )}
          <div className="flex gap-4 mt-4">
            <button
              onClick={prevHobby}
              className="px-4 py-2 rounded-full bg-[#181818] text-white border border-[#f9dad9] hover:bg-[#f9dad9] hover:text-[#181818] transition"
              aria-label="Previous hobby"
            >
              &larr;
            </button>
            <button
              onClick={nextHobby}
              className="px-4 py-2 rounded-full bg-[#181818] text-white border border-[#f9dad9] hover:bg-[#f9dad9] hover:text-[#181818] transition"
              aria-label="Next hobby"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 