import React, { useEffect, useState } from 'react';

const BudgetEmptyState: React.FC = () => {
  const [needleRotation, setNeedleRotation] = useState(45);

  useEffect(() => {
    // Add custom styles
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      .perspective-1000 { perspective: 1000px; }
      .floating { animation: floating 6s ease-in-out infinite; }
      @keyframes floating {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(1deg); }
      }
    `;
    document.head.appendChild(styleSheet);

    const interval = setInterval(() => {
      setNeedleRotation(prev => {
        const variance = Math.floor(Math.random() * 10) - 5;
        // Keep it roughly around the base rotation
        const base = prev > 180 ? 225 : 45; 
        let newRot = prev + variance;
        if (Math.abs(newRot - base) > 20) newRot = base;
        return newRot;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-section-gap flex flex-col items-center justify-center relative px-margin-mobile md:px-margin-desktop">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Empty State Container */}
      <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-12">
        {/* Compass / Minimalist Graph Illustration */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
          {/* Floating Elements for Depth */}
          <div className="absolute inset-0 floating">
            <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-primary/20"></div>
            <div className="absolute bottom-20 right-5 w-6 h-6 rounded-full bg-secondary/10"></div>
            <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-outline"></div>
          </div>

          {/* Central Visualization */}
          <div className="relative z-10 w-full h-full flex items-center justify-center p-8 bg-white rounded-[40px] shadow-[0_10px_40px_rgba(0,54,98,0.05)] perspective-1000">
            {/* Animated Compass / Graph Hybrid */}
            <svg className="w-full h-full text-primary/10" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeDasharray="4 4" strokeWidth="0.5"></circle>
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1"></circle>
              <circle cx="100" cy="100" r="40" stroke="currentColor" strokeDasharray="2 2" strokeWidth="0.5"></circle>
              {/* Axis lines */}
              <line stroke="currentColor" strokeWidth="0.5" x1="100" x2="100" y1="20" y2="180"></line>
              <line stroke="currentColor" strokeWidth="0.5" x1="20" x2="180" y1="100" y2="100"></line>
              {/* Compass Needle (Animated) */}
              <g className="origin-center transition-transform duration-1000 ease-in-out" style={{ transform: `rotate(${needleRotation}deg)` }}>
                <path d="M100 40 L110 100 L100 110 L90 100 Z" fill="#1000bc"></path>
                <path d="M100 160 L90 100 L100 90 L110 100 Z" fill="#e3e1f1"></path>
              </g>
              {/* Minimalist Graph Nodes */}
              <circle className="animate-pulse" cx="140" cy="70" fill="#0058bd" r="4"></circle>
              <circle cx="60" cy="130" fill="#1000bc" r="3"></circle>
              <path d="M60 130 Q100 80 140 70" stroke="#1000bc" strokeDasharray="200" strokeWidth="1.5" style={{ strokeDashoffset: 0 }}></path>
            </svg>
            {/* Glass Overlay for Texture */}
            <div className="absolute inset-0 border border-white/40 rounded-[40px] pointer-events-none"></div>
          </div>

          {/* Decorative Card Peeking */}
          <div className="absolute -bottom-6 -right-6 w-48 h-32 bg-surface-container-low rounded-2xl shadow-sm border border-outline-variant -rotate-6 -z-10 flex flex-col p-4 space-y-2 opacity-60">
            <div className="w-12 h-2 bg-outline-variant rounded"></div>
            <div className="w-full h-1 bg-surface-container rounded"></div>
            <div className="w-2/3 h-1 bg-surface-container rounded"></div>
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-4 max-w-lg">
          <h1 className="font-headline-lg text-headline-lg md:text-headline-lg text-on-surface tracking-tight">Defining Your Investment</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Your personalized fiscal architecture is awaiting direction. Generate an itinerary to unlock a precise breakdown of accommodations, transport, and curated experiences.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button 
            className="group relative bg-gradient-to-r from-[#1000bc] to-[#0058bd] text-on-primary px-10 py-4 rounded-full font-label-md text-label-md shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            onMouseEnter={() => setNeedleRotation(225)}
            onMouseLeave={() => setNeedleRotation(45)}
          >
            Generate Itinerary to View Breakdown
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
              <span className="material-symbols-outlined !text-[18px]">arrow_forward</span>
            </span>
          </button>
          <button className="px-8 py-4 text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors">
            Configure Preferences First
          </button>
        </div>
      </div>

      {/* Secondary Context Sections (Editorial Precision) */}
      <div className="mt-section-gap w-full grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="p-8 bg-white rounded-3xl border border-outline-variant/30 flex flex-col space-y-4">
          <span className="material-symbols-outlined text-primary text-3xl">insights</span>
          <h3 className="font-headline-md text-headline-md text-on-surface">Dynamic Allocation</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Real-time adjustments to your total investment based on seasonal fluctuations and availability.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-outline-variant/30 flex flex-col space-y-4">
          <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
          <h3 className="font-headline-md text-headline-md text-on-surface">Curated Value</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Each breakdown ensures the highest standard of luxury while maintaining editorial precision in costs.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-outline-variant/30 flex flex-col space-y-4">
          <span className="material-symbols-outlined text-primary text-3xl">account_balance_wallet</span>
          <h3 className="font-headline-md text-headline-md text-on-surface">Transparent Tiers</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Compare multiple scenarios from essential luxury to complete immersion in a single view.</p>
        </div>
      </div>
    </main>
  );
};

export default BudgetEmptyState;
