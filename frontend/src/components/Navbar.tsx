import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 w-full z-50 transition-all duration-300 pointer-events-none ${
        scrolled ? 'py-4 shadow-sm' : 'py-6'
      }`}
    >
      <nav className="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto pointer-events-auto">
        <div className="flex items-center bg-surface/80 backdrop-blur-md px-6 py-3 rounded-full border border-outline-variant shadow-sm pointer-events-auto">
          <Link to="/" className="h-8 w-auto flex items-center">
            <img
              src="/Logo/logo.png"
              alt="THISAI Logo"
              className="h-full w-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 bg-surface/80 backdrop-blur-md px-10 py-3 rounded-full border border-outline-variant shadow-sm pointer-events-auto">
          <Link
            className="text-on-surface hover:text-primary transition-colors duration-300 font-label-md text-label-md active:opacity-80 active:scale-95"
            to="/destinations"
          >
            Destinations
          </Link>
          <Link
            className="text-on-surface hover:text-primary transition-colors duration-300 font-label-md text-label-md active:opacity-80 active:scale-95"
            to="/planner"
          >
            Planner
          </Link>
          <Link
            className="text-on-surface hover:text-primary transition-colors duration-300 font-label-md text-label-md active:opacity-80 active:scale-95"
            to="/experiences"
          >
            Experiences
          </Link>
          <Link
            className="text-on-surface hover:text-primary transition-colors duration-300 font-label-md text-label-md active:opacity-80 active:scale-95"
            to="/about"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-4 bg-surface/80 backdrop-blur-md px-6 py-2 rounded-full border border-outline-variant shadow-sm pointer-events-auto">
          <button className="material-symbols-outlined text-primary text-xl">
            search
          </button>
          <Link to="/plan">
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md font-bold hover:opacity-90 transition-all active:scale-95 shadow-sm">
              Plan Your Trip
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
