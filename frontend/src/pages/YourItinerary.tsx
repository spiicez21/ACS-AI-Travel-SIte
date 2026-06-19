import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const YourItinerary: React.FC = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const location = useLocation();
  const aiData = location.state?.itineraryData;

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-4');
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [aiData]);

  const setSectionRef = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main className="pt-32 pb-section-gap px-margin-desktop max-w-container-max mx-auto">
      {/* Page Header */}
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-4 block">Generated Journey</span>
          <h1 className="font-display-xl text-display-xl text-on-surface capitalize">{aiData ? aiData.destination : 'The Kyoto Anthology'}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">A curated {aiData ? aiData.duration : '7'}-day exploration.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 border border-outline-variant rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined" data-icon="tune">tune</span>
          Adjust Plan
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Sidebar: Trip Summary */}
        <aside className="lg:col-span-3">
          <div className="sticky top-32 space-y-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow border border-outline-variant/30">
              <h3 className="font-headline-md text-headline-md mb-6">Trip Summary</h3>
              <div className="space-y-6">
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Duration</span>
                  <span className="font-label-md text-label-md">{aiData ? aiData.duration : 7} Days</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Destination</span>
                  <span className="font-label-md text-label-md capitalize">{aiData ? aiData.destination : 'Kyoto & Uji, Japan'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Budget Status</span>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-3/4"></div>
                    </div>
                    <span className="font-label-md text-label-md">On Track</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-outline-variant/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-md text-label-md">Current Weather</span>
                    <span className="material-symbols-outlined text-secondary">partly_cloudy_day</span>
                  </div>
                  <span className="text-2xl font-semibold">22°C</span>
                </div>
              </div>
            </div>

            {/* Map Preview Component */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow border border-outline-variant/30 aspect-square relative group">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" alt="Map Preview" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg flex justify-between items-center">
                <span className="font-label-md text-label-md">Route Preview</span>
                <button className="material-symbols-outlined text-primary" data-icon="open_in_full">open_in_full</button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content: Timeline */}
        <div className="lg:col-span-9 space-y-16">
          {aiData && aiData.itinerary ? (
            aiData.itinerary.map((day: any, index: number) => (
              <section key={index} ref={setSectionRef} className="relative pl-12">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-surface-variant opacity-20"></div>
                <div className="absolute left-[-6px] top-2 w-[14px] h-[14px] rounded-full bg-primary border-4 border-surface ring-2 ring-primary/20"></div>
                
                <header className="mb-8">
                  <h2 className="font-headline-lg text-headline-lg mb-2">Day 0{day.day}: {day.theme}</h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {day.activities && day.activities.map((activity: any, actIndex: number) => (
                    <div key={actIndex} className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow group hover:-translate-y-1 transition-transform flex flex-col">
                      <div className="aspect-video relative overflow-hidden shrink-0">
                        {/* Use dynamic random unsplash images with related keywords to look nice */}
                        <img 
                          src={`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600&random=${index}-${actIndex}`} 
                          alt={activity.location} 
                          className="absolute inset-0 w-full h-full object-cover" 
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm z-10">{activity.time}</div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="font-headline-md text-headline-md mb-2">{activity.location}</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-1">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">No Itinerary Data Found</h2>
              <p>Please generate a journey from the planner first.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default YourItinerary;
