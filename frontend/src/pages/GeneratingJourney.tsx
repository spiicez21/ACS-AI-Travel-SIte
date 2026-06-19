import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GeneratingJourney: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const messages = [
    "Analyzing 1,000+ local experiences",
    "Curating the best boutique hotels",
    "Optimizing routes for clarity",
    "Synthesizing atmospheric data",
    "Polishing your editorial guide"
  ];

  useEffect(() => {
    // Add custom CSS to document head for keyframes, since we can't easily inline them in Tailwind classes
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      .skeleton {
        background: linear-gradient(90deg, #efecfc 25%, #e9e6f6 50%, #efecfc 75%);
        background-size: 200% 100%;
        animation: skeleton-loading 1.5s infinite ease-in-out;
      }
      @keyframes skeleton-loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      .fade-in-up {
        animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(styleSheet);

    // Rotate messages
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2500);

    const generateTrip = async () => {
      try {
        const payload = location.state || {
          destination: 'Kyoto, Japan',
          duration: 7,
          budget: '$15000',
          styles: ['Luxury', 'Culture']
        };

        const response = await fetch('http://localhost:5000/api/journeys/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error('Failed to generate journey');
        }

        const data = await response.json();
        
        // Give the user a moment to see the loading state before snapping to the next screen
        setTimeout(() => {
          navigate('/itinerary', { state: { itineraryData: data } });
        }, 1500);

      } catch (error) {
        console.error('Error generating trip:', error);
        // Fallback or error handling
        navigate('/itinerary');
      }
    };

    generateTrip();

    return () => {
      clearInterval(interval);
      document.head.removeChild(styleSheet);
    };
  }, [navigate, location.state]);

  let statusText = "Finding your direction...";
  if (messageIndex >= 2) statusText = "Almost there...";
  if (messageIndex === 4) statusText = "Finalizing your journey...";

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-surface">

      {/* Skeleton Layout Canvas (Asymmetric Editorial Style) */}
      <div className="w-full max-w-container-max px-margin-desktop grid grid-cols-12 gap-gutter relative z-10 pt-20">
        {/* Left Column: Itinerary Timeline Skeleton */}
        <div className="col-span-12 md:col-span-4 space-y-8 fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="space-y-4">
            <div className="skeleton w-32 h-6 rounded-lg"></div>
            <div className="skeleton w-full h-32 rounded-2xl"></div>
          </div>
          <div className="space-y-4">
            <div className="skeleton w-24 h-6 rounded-lg"></div>
            <div className="skeleton w-full h-48 rounded-2xl"></div>
          </div>
          <div className="space-y-4">
            <div className="skeleton w-40 h-6 rounded-lg"></div>
            <div className="skeleton w-full h-32 rounded-2xl"></div>
          </div>
        </div>
        
        {/* Center Column: Map/Visual Anchor Skeleton */}
        <div className="col-span-12 md:col-span-5 space-y-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="skeleton w-full h-[600px] rounded-2xl shadow-xl"></div>
        </div>
        
        {/* Right Column: Hotel/Experiences Blocks Skeleton */}
        <div className="col-span-12 md:col-span-3 space-y-8 fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="skeleton w-full h-64 rounded-2xl"></div>
          <div className="skeleton w-full h-64 rounded-2xl"></div>
          <div className="skeleton w-full h-24 rounded-2xl"></div>
        </div>
      </div>

      {/* Bottom Message Overlay */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-20 text-center">
        <div className="bg-surface-container-lowest/80 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border border-outline-variant/30 flex items-center gap-3 transition-opacity duration-500">
          <span className="material-symbols-outlined text-primary animate-spin" style={{ fontVariationSettings: "'FILL' 0", fontSize: '20px' }}>
            progress_activity
          </span>
          <p className="font-label-md text-label-md text-on-surface">
            {messages[messageIndex]}
          </p>
        </div>
      </div>
    </main>
  );
};

export default GeneratingJourney;
