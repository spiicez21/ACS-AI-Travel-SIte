import React, { useState } from 'react';

const TripSummary: React.FC = () => {
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'processing' | 'confirmed'>('idle');

  const handleBooking = () => {
    setBookingStatus('processing');
    setTimeout(() => {
      setBookingStatus('confirmed');
    }, 1500);
  };

  return (
    <main className="pt-32 pb-section-gap relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -top-20 -left-20 -z-10"></div>
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl bottom-0 -right-20 -z-10"></div>
      <div className="max-w-container-max mx-auto px-margin-desktop">
        
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end mb-16">
          <div className="lg:col-span-8">
            <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-4 block">Preparation Complete</span>
            <h1 className="font-display-xl text-display-xl text-on-background mb-6">Your Expedition <br />is Ready.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Review the curated details of your upcoming journey through the Nordic Fjords. Every detail has been precision-engineered for an atmospheric and seamless experience.</p>
          </div>
          <div className="lg:col-span-4 flex justify-end space-x-4">
            <button className="flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors group">
              <span className="material-symbols-outlined text-[20px]">share</span>
              <span className="font-label-md text-label-md">Share Journey</span>
            </button>
            <button className="flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors group">
              <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
              <span className="font-label-md text-label-md">Download PDF</span>
            </button>
          </div>
        </div>

        {/* Bento Layout Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Main Hero Image Card */}
          <div className="md:col-span-7 h-[600px] rounded-xl overflow-hidden relative editorial-shadow group">
            <img src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?auto=format&fit=crop&q=80&w=2000" alt="Lofoten Archipelago" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <span className="font-label-sm text-label-sm bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-4 inline-block">Primary Destination</span>
              <h3 className="font-headline-lg text-headline-lg">Lofoten Archipelago, Norway</h3>
            </div>
          </div>

          {/* Summary Details Card */}
          <div className="md:col-span-5 flex flex-col space-y-gutter">
            <div className="bg-white p-10 rounded-xl editorial-shadow flex-grow border border-surface-container-high/50">
              <h4 className="font-headline-md text-headline-md mb-8 border-b border-surface-container-high pb-4">Trip Summary</h4>
              <div className="space-y-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">calendar_today</span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline uppercase">Schedule</p>
                      <p className="font-body-md text-body-md font-semibold">Sept 12 — Sept 24, 2024</p>
                    </div>
                  </div>
                  <span className="text-on-surface-variant font-label-md text-label-md">12 Nights</span>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">group</span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline uppercase">Guests</p>
                      <p className="font-body-md text-body-md font-semibold">02 Adults</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">explore</span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline uppercase">Experience Tier</p>
                      <p className="font-body-md text-body-md font-semibold">Editorial Signature</p>
                    </div>
                  </div>
                  <span className="bg-secondary-container/10 text-secondary font-label-sm text-label-sm px-2 py-0.5 rounded">All-Inclusive</span>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-dashed border-outline-variant">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant">Estimated Total</p>
                    <p className="font-label-sm text-label-sm text-outline italic">Includes local taxes & concierge fees</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display-lg text-[40px] text-primary leading-none">$14,250.00</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <button 
                    onClick={handleBooking}
                    className={`w-full py-5 rounded-full text-white font-label-md text-label-md font-bold tracking-wide active:scale-95 transition-all editorial-shadow flex items-center justify-center ${bookingStatus === 'confirmed' ? 'bg-green-600' : 'bg-gradient-to-br from-[#1A00FF] to-[#2F82FF]'}`}
                    disabled={bookingStatus !== 'idle'}
                  >
                    {bookingStatus === 'idle' && 'Book Journey'}
                    {bookingStatus === 'processing' && (
                      <><span className="material-symbols-outlined animate-spin mr-2">progress_activity</span> Processing...</>
                    )}
                    {bookingStatus === 'confirmed' && (
                      <><span className="material-symbols-outlined mr-2">check_circle</span> Booking Confirmed</>
                    )}
                  </button>
                  <button className="w-full py-5 rounded-full border border-outline-variant text-on-surface font-label-md text-label-md font-medium hover:bg-surface-container-low transition-colors">
                    Save to Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Small Asset / Social Card */}
            <div className="bg-primary-container p-8 rounded-xl text-on-primary-container flex justify-between items-center editorial-shadow">
              <div>
                <h5 className="font-headline-md text-headline-md mb-1">Invite Travelers</h5>
                <p className="font-body-md text-body-md opacity-80">Share the itinerary with your party.</p>
              </div>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <span className="material-symbols-outlined text-sm">add</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-primary-container bg-surface-dim"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Section */}
        <div className="mt-section-gap">
          <h2 className="font-headline-lg text-headline-lg mb-12 text-center">Itinerary Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 editorial-shadow relative">
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600" alt="Accommodations" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p className="font-label-sm text-label-sm text-primary mb-2">Accommodations</p>
              <h4 className="font-headline-md text-headline-md mb-2">Mirror Glass Cabin</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Three nights of immersive Arctic isolation in the heart of Senja.</p>
            </div>
            
            {/* Item 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 editorial-shadow relative">
                <img src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=600" alt="Aurora" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p className="font-label-sm text-label-sm text-primary mb-2">Expedition</p>
              <h4 className="font-headline-md text-headline-md mb-2">Aurora Photography</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Private guided session with professional equipment provided.</p>
            </div>

            {/* Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 editorial-shadow relative">
                <img src="https://images.unsplash.com/photo-1414235077428-33898dd14582?auto=format&fit=crop&q=80&w=600" alt="Gastronomy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p className="font-label-sm text-label-sm text-primary mb-2">Gastronomy</p>
              <h4 className="font-headline-md text-headline-md mb-2">Arctic Table Experience</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">A 12-course tasting menu centered around seasonal coastal foraging.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TripSummary;
