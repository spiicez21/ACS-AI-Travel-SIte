import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
      {/* Fade out background for better readability */}
      <div className={`fixed top-0 left-0 w-full h-40 bg-gradient-to-b from-surface via-surface/80 to-transparent pointer-events-none -z-10 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-50'}`}></div>

      <nav className="flex justify-between items-center px-4 md:px-margin-desktop max-w-container-max mx-auto pointer-events-auto gap-2">
        <div className="flex shrink-0 items-center bg-surface/80 backdrop-blur-md px-3 py-2 md:px-6 md:py-3 rounded-full border border-outline-variant shadow-sm pointer-events-auto">
          <Link to="/" className="h-6 md:h-8 w-auto flex items-center">
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
            to="/plan"
          >
            Planner
          </Link>
          <Link
            className="text-on-surface hover:text-primary transition-colors duration-300 font-label-md text-label-md active:opacity-80 active:scale-95"
            to="/itinerary"
          >
            Experiences
          </Link>
          <Link
            className="text-on-surface hover:text-primary transition-colors duration-300 font-label-md text-label-md active:opacity-80 active:scale-95"
            to="/contact"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4 bg-surface/80 backdrop-blur-md px-3 py-1.5 md:px-6 md:py-2 rounded-full border border-outline-variant shadow-sm pointer-events-auto">
          <Link to="/search" className="flex items-center justify-center">
            <button className="material-symbols-outlined text-primary text-lg md:text-xl">
              search
            </button>
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/history" className="text-on-surface hover:text-primary transition-colors duration-300 font-label-sm md:font-label-md text-xs md:text-sm whitespace-nowrap">
                History
              </Link>
              <button 
                onClick={handleLogout}
                className="text-on-surface hover:text-red-400 transition-colors duration-300 font-label-sm md:font-label-md text-xs md:text-sm ml-1 md:ml-2 whitespace-nowrap"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-on-surface hover:text-primary transition-colors duration-300 font-label-sm md:font-label-md text-xs md:text-sm whitespace-nowrap">
              Login
            </Link>
          )}

          <Link to="/plan" className="ml-1 md:ml-2">
            <button className="bg-primary text-on-primary px-4 py-1.5 md:px-6 md:py-2.5 rounded-full font-label-sm md:font-label-md text-xs md:text-sm font-bold hover:opacity-90 transition-all active:scale-95 shadow-sm whitespace-nowrap">
              <span className="hidden sm:inline">Plan Your Trip</span>
              <span className="sm:hidden">Plan</span>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
