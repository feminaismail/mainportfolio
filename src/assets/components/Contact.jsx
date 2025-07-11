import React from "react";

export default function Contact() {
  const email = "feminajasminismail@email.com";
  return (
    <section
      id="contact"
      className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#181818] py-24 relative"
    >
      {/* Clickable overlay */}
      <a
        href={`mailto:${email}`}
        className="absolute top-0 left-0 w-full h-full z-20 cursor-pointer"
        aria-label="Email me"
        tabIndex={-1}
        style={{ background: "transparent" }}
      />
      {/* Background box */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] h-full bg-black/30 rounded-3xl z-0" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-5xl md:text-8xl font-extrabold uppercase text-center mb-8 bg-gradient-to-t from-pink-200/80 to-white/90 bg-clip-text text-transparent drop-shadow-lg">
          GET IN TOUCH
        </h2>
        <a
          href={`mailto:${email}`}
          className="inline-block px-8 py-3 border-2 border-white rounded-full font-bold text-white bg-black/40 hover:bg-pink-200 hover:text-[#181818] transition text-lg md:text-xl shadow relative z-10"
          style={{ fontFamily: "inherit" }}
        >
          {email}
        </a>
      </div>
    </section>
  );
} 