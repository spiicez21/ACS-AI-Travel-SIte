import React, { useEffect, useRef } from 'react';

const YourItinerary: React.FC = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

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
  }, []);

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
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-4 block">Summer Expedition</span>
          <h1 className="font-display-xl text-display-xl text-on-surface">The Kyoto Anthology</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">A curated 7-day exploration of timeless craft, silent gardens, and high-modernist gastronomy.</p>
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
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Dates</span>
                  <span className="font-label-md text-label-md">Oct 14 — Oct 21, 2024</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Destination</span>
                  <span className="font-label-md text-label-md">Kyoto & Uji, Japan</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Budget Status</span>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-3/4"></div>
                    </div>
                    <span className="font-label-md text-label-md">75%</span>
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
          {/* Day 1 Block */}
          <section ref={setSectionRef} className="relative pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-surface-variant opacity-20"></div>
            <div className="absolute left-[-6px] top-2 w-[14px] h-[14px] rounded-full bg-primary border-4 border-surface ring-2 ring-primary/20"></div>
            <header className="mb-8">
              <h2 className="font-headline-lg text-headline-lg mb-2">Day 01: Arrival & Reorientation</h2>
              <p className="font-label-md text-label-md text-outline uppercase tracking-widest">Monday, October 14</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Activity Card */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow group hover:-translate-y-1 transition-transform">
                <div className="aspect-video relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1542051812871-7575008220f8?auto=format&fit=crop&q=80&w=600" alt="Aman Kyoto" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm z-10">14:00</div>
                </div>
                <div className="p-6">
                  <h4 className="font-headline-md text-headline-md mb-2">Check-in: Aman Kyoto</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">Settle into your sanctuary at the foot of the Hidari Daimonji hill, hidden within a secret garden.</p>
                  <div className="flex gap-2">
                    <span className="font-label-sm text-label-sm bg-surface-variant px-3 py-1 rounded-full text-on-surface-variant">Accommodation</span>
                    <span className="font-label-sm text-label-sm bg-surface-variant px-3 py-1 rounded-full text-on-surface-variant">Luxury</span>
                  </div>
                </div>
              </div>

              {/* Activity Card */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow group hover:-translate-y-1 transition-transform">
                <div className="aspect-video relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1545315001-fea9d9241b80?auto=format&fit=crop&q=80&w=600" alt="Zen Meditation" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm z-10">17:00</div>
                </div>
                <div className="p-6">
                  <h4 className="font-headline-md text-headline-md mb-2">Zen Meditation at Ryosoku-in</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">A private session with a resident monk to center your thoughts before the week's journey begins.</p>
                  <div className="flex gap-2">
                    <span className="font-label-sm text-label-sm bg-surface-variant px-3 py-1 rounded-full text-on-surface-variant">Wellness</span>
                    <span className="font-label-sm text-label-sm bg-surface-variant px-3 py-1 rounded-full text-on-surface-variant">Private</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dining Suggestion Block */}
            <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="restaurant">restaurant</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h5 className="font-headline-md text-headline-md text-primary mb-1">Evening Selection: Monk</h5>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Wood-fired omakase focusing on hyper-local ingredients sourced from the nearby mountains of Ohara. Booking confirmed for 20:00.</p>
              </div>
              <button className="px-6 py-2 border border-primary text-primary rounded-full font-label-md text-label-md hover:bg-primary hover:text-white transition-all whitespace-nowrap">View Menu</button>
            </div>
          </section>

          {/* Day 2 Block */}
          <section ref={setSectionRef} className="relative pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-surface-variant opacity-20"></div>
            <div className="absolute left-[-6px] top-2 w-[14px] h-[14px] rounded-full bg-outline-variant border-4 border-surface"></div>
            <header className="mb-8">
              <h2 className="font-headline-lg text-headline-lg mb-2">Day 02: The Path of Philosophy</h2>
              <p className="font-label-md text-label-md text-outline uppercase tracking-widest">Tuesday, October 15</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative">
                  <img src="https://images.unsplash.com/photo-1558862423-f932840c61c3?auto=format&fit=crop&q=80&w=600" alt="Kawai Kanjiro House" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-secondary">09:30</span>
                  <h4 className="font-label-md text-label-md font-bold mt-1">Kawai Kanjiro House</h4>
                  <p className="text-sm text-on-surface-variant">Exploration of the folk-art movement's finest residence.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative">
                  <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600" alt="Ginkaku-ji Gardens" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-secondary">11:30</span>
                  <h4 className="font-label-md text-label-md font-bold mt-1">Ginkaku-ji Gardens</h4>
                  <p className="text-sm text-on-surface-variant">Silent walk through the sand gardens and moss groves.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative">
                  <img src="https://images.unsplash.com/photo-1580828369019-2220f188abcb?auto=format&fit=crop&q=80&w=600" alt="Shunko-in Lunch" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-secondary">13:30</span>
                  <h4 className="font-label-md text-label-md font-bold mt-1">Shunko-in Lunch</h4>
                  <p className="text-sm text-on-surface-variant">Traditional shojin-ryori (monk's cuisine) experience.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hotel Block */}
          <section ref={setSectionRef} className="bg-surface-container-high p-12 rounded-2xl relative overflow-hidden group">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Signature Stay</span>
                </div>
                <h2 className="font-display-lg text-headline-lg mb-4">The Ritz-Carlton, Kyoto</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">Continuing the journey from Day 4. Situated on the banks of the Kamogawa river, this property offers unparalleled views of the Higashiyama mountains.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-outline" data-icon="location_on">location_on</span>
                    <span className="font-label-md text-label-md">Nakagyo Ward, Kyoto</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-outline" data-icon="concierge">concierge</span>
                    <span className="font-label-md text-label-md">24/7 Dedicated Host</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden editorial-shadow h-80 relative">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000" alt="The Ritz-Carlton, Kyoto" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default YourItinerary;
