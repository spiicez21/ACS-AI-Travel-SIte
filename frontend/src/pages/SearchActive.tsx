import React, { useEffect, useRef } from 'react';

const SearchActive: React.FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Add custom CSS for search state
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      .search-dropdown-shadow { box-shadow: 0 10px 40px rgba(0, 54, 98, 0.08); }
      .premium-blur { backdrop-filter: blur(20px); background: rgba(255, 255, 255, 0.95); }
      .editorial-image-hover img { transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
      .editorial-image-hover:hover img { transform: scale(1.05); }
    `;
    document.head.appendChild(styleSheet);

    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <main className="pt-32 min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-desktop relative">
        {/* Hero Context (Simulated Background for Dropdown) */}
        <div className="mb-section-gap">
          <div className="grid grid-cols-12 gap-gutter items-end mb-12">
            <div className="col-span-8">
              <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase mb-4 block">Spring Anthology</span>
              <h1 className="font-display-xl text-display-xl text-on-surface">Precision in Wanderlust.</h1>
            </div>
          </div>
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden relative bg-gray-200">
            {/* Background image placeholder */}
          </div>
        </div>

        {/* THE SEARCH DROPDOWN STATE */}
        <div className="absolute top-[-24px] right-margin-desktop z-[60] w-[640px]">
          <div className="premium-blur search-dropdown-shadow rounded-2xl overflow-hidden border border-outline-variant/30 animate-in fade-in slide-in-from-top-4 duration-500">
            {/* Search Header */}
            <div className="p-8 border-b border-outline-variant/20 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">search</span>
              <input
                ref={searchInputRef}
                className="bg-transparent border-none p-0 focus:ring-0 w-full font-headline-md text-headline-md text-on-surface placeholder:text-outline-variant outline-none"
                placeholder="Explore trajectories..."
                type="text"
              />
            </div>
            
            <div className="p-8 space-y-10">
              {/* Trending Trajectories */}
              <section>
                <div className="flex justify-between items-end mb-6">
                  <h3 className="font-label-sm text-label-sm text-outline tracking-widest uppercase">Trending Trajectories</h3>
                  <a className="font-label-sm text-label-sm text-primary hover:underline transition-all" href="#">View Global Map</a>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {/* Kyoto */}
                  <div className="group cursor-pointer editorial-image-hover">
                    <div className="aspect-[4/5] rounded-lg overflow-hidden mb-3 bg-gray-200">
                    </div>
                    <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Kyoto</h4>
                    <p className="font-label-sm text-label-sm text-outline">Japan</p>
                  </div>
                  {/* Amalfi */}
                  <div className="group cursor-pointer editorial-image-hover">
                    <div className="aspect-[4/5] rounded-lg overflow-hidden mb-3 bg-gray-200">
                    </div>
                    <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Amalfi Coast</h4>
                    <p className="font-label-sm text-label-sm text-outline">Italy</p>
                  </div>
                  {/* Lofoten */}
                  <div className="group cursor-pointer editorial-image-hover">
                    <div className="aspect-[4/5] rounded-lg overflow-hidden mb-3 bg-gray-200">
                    </div>
                    <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Lofoten</h4>
                    <p className="font-label-sm text-label-sm text-outline">Norway</p>
                  </div>
                </div>
              </section>

              {/* Editorial Collections */}
              <section>
                <h3 className="font-label-sm text-label-sm text-outline tracking-widest uppercase mb-6">Editorial Collections</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between group cursor-pointer p-4 rounded-xl hover:bg-surface-container-low transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">auto_stories</span>
                      </div>
                      <div>
                        <h4 className="font-body-md text-body-md font-bold text-on-surface">The Nordic Anthology</h4>
                        <p className="font-label-sm text-label-sm text-outline">8 Destinations • Curated by THISAI</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </div>
                  <div className="flex items-center justify-between group cursor-pointer p-4 rounded-xl hover:bg-surface-container-low transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">architecture</span>
                      </div>
                      <div>
                        <h4 className="font-body-md text-body-md font-bold text-on-surface">Silent Architectures</h4>
                        <p className="font-label-sm text-label-sm text-outline">12 Retreats • Brutalist Minimalism</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </div>
                </div>
              </section>

              {/* Recent Searches */}
              <section>
                <h3 className="font-label-sm text-label-sm text-outline tracking-widest uppercase mb-4">Recent Searches</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-surface-container rounded-full font-label-md text-label-md text-primary flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-on-primary transition-all">
                    Atacama Desert <span className="material-symbols-outlined text-[16px]">history</span>
                  </span>
                  <span className="px-4 py-2 bg-surface-container rounded-full font-label-md text-label-md text-primary flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-on-primary transition-all">
                    Swiss Alps <span className="material-symbols-outlined text-[16px]">history</span>
                  </span>
                  <span className="px-4 py-2 bg-surface-container rounded-full font-label-md text-label-md text-primary flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-on-primary transition-all">
                    Tokyo Nightlife <span className="material-symbols-outlined text-[16px]">history</span>
                  </span>
                </div>
              </section>
            </div>

            {/* Footer Action */}
            <div className="bg-surface-container-low p-6 flex justify-center">
              <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                Advanced Directional Search <span className="material-symbols-outlined text-[18px]">keyboard_command_key</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchActive;
