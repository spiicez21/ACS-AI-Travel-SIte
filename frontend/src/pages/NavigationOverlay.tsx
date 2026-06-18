import React, { useState, useEffect } from 'react';

const NavigationOverlay: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeBg, setActiveBg] = useState<string>('default');

  useEffect(() => {
    // Add custom styles for the menu transition
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      .menu-bg-transition { transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
      .nav-item-hover:hover .nav-line { width: 100%; }
      .nav-line { width: 0%; transition: width 0.4s ease; }
    `;
    document.head.appendChild(styleSheet);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setActiveBg('default');
    }

    return () => {
      document.head.removeChild(styleSheet);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = (bg: string) => {
    setActiveBg(bg);
  };

  const isDarkBg = activeBg !== 'default';

  return (
    <>
      {/* Primary Top Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <div className={`font-display-lg text-[32px] md:text-display-lg font-bold tracking-tighter ${isMenuOpen ? 'text-white' : 'text-primary'} transition-colors duration-300`}>THISAI</div>
        {/* Toggle Button for Menu */}
        <button className="z-[100] group flex items-center gap-3 focus:outline-none" onClick={toggleMenu}>
          <span className={`font-label-md text-label-md uppercase tracking-widest hidden md:block ${isMenuOpen ? 'text-white' : 'text-primary'} transition-colors duration-300`}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </span>
          <div className="relative w-8 h-5 flex flex-col justify-between items-end">
            <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'bg-white translate-y-[9px] rotate-45' : 'bg-primary'}`}></span>
            <span className={`h-0.5 transition-all duration-300 ${isMenuOpen ? 'bg-white opacity-0 w-full' : 'bg-primary w-2/3 group-hover:w-full'}`}></span>
            <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'bg-white -translate-y-[9px] -rotate-45' : 'bg-primary'}`}></span>
          </div>
        </button>
      </header>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-surface-container-lowest transition-opacity duration-500 overflow-hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Hover Background Images */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 menu-bg-transition bg-[#FAFAF7] ${activeBg === 'default' ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute inset-0 menu-bg-transition bg-cover bg-center ${activeBg === 'destinations' ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBULLXRNqcb9FQlIVgDmSA_4KkSk25Ylo6KiFOYnenMHUTC5eTjIMw3eYSXqzNTfyjttsUIy9l3WfzTx80afBRV7UxpUM195e26L_cjMPc6nJfZehDt--1baUkrQCAUzKQM6w5JwdNvj8ZV60QqJkoTp6vx3AeGQEGfYTCoF-6zKAnd5KXBFlWgzFwXTvslQyj2LjJxK__4mKssEZs5SIuv1Vz-v9IUrF6ZazbjLTSCL-P2nS8OAZtSxJ3HZMFGAjlRniGxDPnZHVE')" }}></div>
          <div className={`absolute inset-0 menu-bg-transition bg-cover bg-center ${activeBg === 'planner' ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqPBrRFlgg6fB0SAtb9WC23hMopfvp4XI8CXu63BE_ePktwmVhqhj2hgsO2XXU4g1Zalsbd-MHvjDjWSIYu-T6UBgQC_htibJf8-nTyxLqGrIL57DNahJ9bDex-zUFKr89pEPddTAtEz18t1wZFCvY674YQeceky614naJt0JiEaJjnFkpVI7WTwxDe_LGo73GRxGMQE_8Ly1VM_jwhXWaZ-rE6X-mscRiGr8NVfVQq0jCukrNSgYVVRGor2UL8RaPX2beBiJ4z7w')" }}></div>
          <div className={`absolute inset-0 menu-bg-transition bg-cover bg-center ${activeBg === 'experiences' ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBOcS5f0RA5Oi_w58J-vLjF8OSyAWGdsk2huQJlWm8AlRtcwwhUQyQ359J694qIqPJ6oD3IQBouz4drz4sxqV_aPdGFgywPY1nSroRf6uMmX67r9x1VFpWLvXyDjvlYpwysf7wCUcGehFV0E8RvWBwUQGHHz3atF9o-V46SwWJR7hsvK2iutelGH3oarvSIX_qvfNr8YJIqpuDYfudnRHrz2KVo8yb6wNuBlJJvCGzOA_rxsew15IYh_HKszeF3NEStjmT-7bxcC4')" }}></div>
          <div className={`absolute inset-0 menu-bg-transition bg-cover bg-center ${activeBg === 'about' ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVTW62U3AapjxF8TaoSHAmvINnkF3pYRlwFhMWJ6N6WC63X2qmLIwvKlXdyOyzLfyOmsB7grCvuZ8ugutxP8LbH9O5GFB8LqyNyaGa8q7m5fye_X0FkFtPzgxCC9KAukpp4wuPJO8Zyew2Na1OSHGzLkEf-1vELRMttJac4akN0B4Z2jMDBsPLwwg8ib8xWIh3Zw2n-wB6678ONGIisj1pD5V3_t8KC_U_-b-b3yFYw4uoF9YnueXib5vWhc9HOOhnWFVxStFtr6E')" }}></div>
          <div className={`absolute inset-0 menu-bg-transition bg-cover bg-center ${activeBg === 'journal' ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDD7DmJzqwdZHjRXikG7axU6GjdNAMAyBiugmDEW6av1dxOQvuB--yn-rnm0nLfN5FJXYXJzuA308KwMPtpfEhHvTjtcOQMIFOFUk3p8UG7i1NVoCLWFEpSGZh4EHW69XRcU7k7zvUsLfwZJ3Os4Bb8kZ8erDAHqPpG_WFCyhGxS70213sI5umOH6KUDJUF1n-8nt9hFSteJwVDeQrh28s7_uJ0_mkzTdRAMPeCoBxZ2pgWXYX3CGDQ69EUC-YPd7NhmND7E2i-fRs')" }}></div>
          
          {/* Dark Overlay for Readability on Hover */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isDarkBg ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        {/* Navigation Content */}
        <div className="relative z-10 flex flex-col h-full px-margin-mobile md:px-margin-desktop pt-32 pb-12 max-w-container-max mx-auto">
          <nav className="flex flex-col space-y-4 md:space-y-6" onMouseLeave={() => setActiveBg('default')}>
            {/* Nav Items */}
            <div className="group/nav nav-item-hover relative" onMouseEnter={() => handleMouseEnter('destinations')}>
              <a className={`inline-block font-display-xl text-headline-lg-mobile md:text-display-xl transition-transform duration-500 ${activeBg === 'destinations' ? 'translate-x-6' : 'hover:translate-x-4'} ${isDarkBg ? 'text-white' : 'text-primary'}`} href="#">
                Destinations
              </a>
              <div className={`nav-line h-1 absolute bottom-0 left-0 ${isDarkBg ? 'bg-white' : 'bg-primary'}`}></div>
            </div>
            <div className="group/nav nav-item-hover relative" onMouseEnter={() => handleMouseEnter('planner')}>
              <a className={`inline-block font-display-xl text-headline-lg-mobile md:text-display-xl transition-transform duration-500 ${activeBg === 'planner' ? 'translate-x-6' : 'hover:translate-x-4'} ${isDarkBg ? 'text-white' : 'text-primary'}`} href="#">
                Planner
              </a>
              <div className={`nav-line h-1 absolute bottom-0 left-0 ${isDarkBg ? 'bg-white' : 'bg-primary'}`}></div>
            </div>
            <div className="group/nav nav-item-hover relative" onMouseEnter={() => handleMouseEnter('experiences')}>
              <a className={`inline-block font-display-xl text-headline-lg-mobile md:text-display-xl transition-transform duration-500 ${activeBg === 'experiences' ? 'translate-x-6' : 'hover:translate-x-4'} ${isDarkBg ? 'text-white' : 'text-primary'}`} href="#">
                Experiences
              </a>
              <div className={`nav-line h-1 absolute bottom-0 left-0 ${isDarkBg ? 'bg-white' : 'bg-primary'}`}></div>
            </div>
            <div className="group/nav nav-item-hover relative" onMouseEnter={() => handleMouseEnter('about')}>
              <a className={`inline-block font-display-xl text-headline-lg-mobile md:text-display-xl transition-transform duration-500 ${activeBg === 'about' ? 'translate-x-6' : 'hover:translate-x-4'} ${isDarkBg ? 'text-white' : 'text-primary'}`} href="#">
                About
              </a>
              <div className={`nav-line h-1 absolute bottom-0 left-0 ${isDarkBg ? 'bg-white' : 'bg-primary'}`}></div>
            </div>
            <div className="group/nav nav-item-hover relative" onMouseEnter={() => handleMouseEnter('journal')}>
              <a className={`inline-block font-display-xl text-headline-lg-mobile md:text-display-xl transition-transform duration-500 ${activeBg === 'journal' ? 'translate-x-6' : 'hover:translate-x-4'} ${isDarkBg ? 'text-white' : 'text-primary'}`} href="#">
                Journal
              </a>
              <div className={`nav-line h-1 absolute bottom-0 left-0 ${isDarkBg ? 'bg-white' : 'bg-primary'}`}></div>
            </div>
          </nav>
          
          {/* Bottom Meta Info */}
          <div className={`mt-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 transition-colors duration-500 ${isDarkBg ? 'border-t border-white/20' : 'border-t border-primary/10'}`}>
            <div className="space-y-4">
              <span className={`block font-label-md text-label-md uppercase tracking-widest ${isDarkBg ? 'text-white' : 'text-primary'}`}>Office</span>
              <p className={`font-body-md text-body-md max-w-xs ${isDarkBg ? 'text-white' : 'text-on-surface'}`}>
                128 Rue du Faubourg Saint-Honoré, 75008 Paris, France
              </p>
            </div>
            <div className="flex flex-col md:items-end justify-between">
              <div className="flex gap-8 mb-8 md:mb-0">
                <a className={`font-label-md text-label-md hover:opacity-70 transition-opacity ${isDarkBg ? 'text-white' : 'text-primary'}`} href="#">Instagram</a>
                <a className={`font-label-md text-label-md hover:opacity-70 transition-opacity ${isDarkBg ? 'text-white' : 'text-primary'}`} href="#">LinkedIn</a>
                <a className={`font-label-md text-label-md hover:opacity-70 transition-opacity ${isDarkBg ? 'text-white' : 'text-primary'}`} href="#">Twitter</a>
              </div>
              <p className={`font-label-sm text-label-sm ${isDarkBg ? 'text-white/70' : 'text-outline'}`}>© 2024 THISAI. Editorial Precision in Travel.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Filler Content to showcase interaction */}
      <main className="pt-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        <section className="mb-section-gap">
          <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-primary mb-8 max-w-4xl">
            Precision Travel, <br /> Redefined by AI.
          </h1>
          <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-2xl relative bg-gray-200">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-12 left-12">
              <span className="font-label-md text-label-md text-white bg-primary px-4 py-2 rounded-full mb-4 inline-block">Featured Destination</span>
              <h2 className="font-headline-lg text-headline-lg text-white">The Dolomites, Italy</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NavigationOverlay;
