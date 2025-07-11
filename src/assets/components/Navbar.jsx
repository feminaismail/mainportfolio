import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl tracking-tight animate-fade-in">FEMINA JASMIN</span>
        <div className="space-x-6">
          <a href="#about" className="nav-link hover:underline transition-all duration-300">About</a>
          <a href="#projects" className="nav-link hover:underline transition-all duration-300">Work</a>
          <a href="#contact" className="nav-link hover:underline transition-all duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 