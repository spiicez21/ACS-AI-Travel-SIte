import React, { useEffect, useState } from 'react';

const BudgetBreakdown: React.FC = () => {
  const [strokeOffset1, setStrokeOffset1] = useState(283);
  const [strokeOffset2, setStrokeOffset2] = useState(283);

  useEffect(() => {
    // Animate rings on load
    setTimeout(() => {
      setStrokeOffset1(155.65);
      setStrokeOffset2(212.25);
    }, 100);
  }, []);

  return (
    <main className="pt-32 pb-section-gap px-margin-desktop max-w-container-max mx-auto">
      {/* Hero Section: Total Budget */}
      <section className="mb-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-4 block">Current Itinerary</span>
            <h1 className="font-display-xl text-display-xl mb-2">Tokyo & Kyoto</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">A 12-day curated journey through Japan's imperial history and neon futures. Budget updated 2 minutes ago.</p>
          </div>
          <div className="text-right">
            <span className="font-label-md text-label-md text-on-surface-variant mb-1 block">Total Estimated Budget</span>
            <div className="font-display-lg text-display-lg text-primary">$8,420.00</div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Left Column: Chart & Visuals */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
          <div className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow relative overflow-hidden h-full min-h-[400px]">
            <h3 className="font-headline-md text-headline-md mb-8">Allocation</h3>
            <div className="relative flex justify-center items-center py-12">
              <svg className="w-64 h-64 -rotate-90">
                {/* Background Circle */}
                <circle cx="128" cy="128" fill="transparent" r="110" stroke="#f1efff" strokeWidth="24"></circle>
                {/* Flights (45%) */}
                <circle
                  className="transition-all duration-1000 ease-out"
                  cx="128" cy="128" fill="transparent" r="110" stroke="#1000bc" strokeWidth="24"
                  style={{ strokeDasharray: 283, strokeDashoffset: strokeOffset1 }}
                ></circle>
                {/* Hotels (30%) */}
                <circle
                  className="transition-all duration-1000 ease-out"
                  cx="128" cy="128" fill="transparent" r="110" stroke="#0058bd" strokeWidth="24"
                  style={{ strokeDasharray: 283, strokeDashoffset: strokeOffset2, transform: 'rotate(162deg)', transformOrigin: 'center center' }}
                ></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Avg/Day</span>
                <span className="font-headline-lg text-headline-lg">$701</span>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="font-label-md text-label-md">Flights</span>
                </div>
                <span className="font-label-md text-label-md">45%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="font-label-md text-label-md">Hotels</span>
                </div>
                <span className="font-label-md text-label-md">30%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-outline-variant"></span>
                  <span className="font-label-md text-label-md">Activities</span>
                </div>
                <span className="font-label-md text-label-md">15%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-surface-variant"></span>
                  <span className="font-label-md text-label-md">Food</span>
                </div>
                <span className="font-label-md text-label-md">10%</span>
              </div>
            </div>
          </div>

          {/* AI Savings Tips */}
          <div className="bg-primary text-on-primary p-10 rounded-xl editorial-shadow relative">
            <span className="material-symbols-outlined absolute top-8 right-8 text-on-primary/20 text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
            <h3 className="font-headline-md text-headline-md mb-6">AI Optimization</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-on-primary-container">lightbulb</span>
                <p className="font-body-md text-body-md">Switching to the Shinkansen Green Pass saves <strong className="font-bold">$120</strong> while providing premium lounge access.</p>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-on-primary-container">calendar_today</span>
                <p className="font-body-md text-body-md">Moving the Park Hyatt stay to Tuesday-Thursday reduces the rate by <strong className="font-bold">18%</strong>.</p>
              </div>
              <button className="w-full py-4 mt-4 border border-on-primary/30 rounded-lg font-label-md text-label-md hover:bg-white/10 transition-colors">
                Apply All Optimization
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Breakdown */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8">
          <div className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow h-full">
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-headline-md text-headline-md">Line Items</h3>
              <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-low px-3 py-2 rounded-md transition-colors">
                <span className="material-symbols-outlined text-sm">add</span> Add Expense
              </button>
            </div>
            <div className="space-y-12">
              {/* Category: Flights */}
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant mb-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">flight_takeoff</span>
                    <h4 className="font-label-md text-label-md uppercase tracking-widest font-bold">Flights</h4>
                  </div>
                  <span className="font-label-md text-label-md">$3,780</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md text-on-surface-variant">LHR → HND (Business Class)</span>
                    <span className="font-body-md text-body-md">$3,450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md text-on-surface-variant">HND → ITM (Domestic)</span>
                    <span className="font-body-md text-body-md">$330</span>
                  </div>
                </div>
              </div>

              {/* Category: Hotels */}
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant mb-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">apartment</span>
                    <h4 className="font-label-md text-label-md uppercase tracking-widest font-bold">Hotels</h4>
                  </div>
                  <span className="font-label-md text-label-md">$2,526</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md text-on-surface-variant">Aman Tokyo (4 Nights)</span>
                    <span className="font-body-md text-body-md">$1,280</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md text-on-surface-variant">The Mitsui Kyoto (3 Nights)</span>
                    <span className="font-body-md text-body-md">$956</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md text-on-surface-variant">Traditional Ryokan Hakone</span>
                    <span className="font-body-md text-body-md">$290</span>
                  </div>
                </div>
              </div>

              {/* Category: Food & Activities */}
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant mb-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">restaurant</span>
                    <h4 className="font-label-md text-label-md uppercase tracking-widest font-bold">Food & Experiences</h4>
                  </div>
                  <span className="font-label-md text-label-md">$2,114</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md text-on-surface-variant">Sukiyabashi Jiro Tasting</span>
                    <span className="font-body-md text-body-md">$450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md text-on-surface-variant">Daily Meal Allowance (Est.)</span>
                    <span className="font-body-md text-body-md">$1,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md text-on-surface-variant">TeamLab Planets Private Tour</span>
                    <span className="font-body-md text-body-md">$464</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Experience Image (Editorial Touch) */}
      <section className="mt-section-gap">
        <div className="relative h-[400px] w-full rounded-xl overflow-hidden editorial-shadow group">
          <div className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-gray-200"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-on-primary max-w-lg">
            <h3 className="font-headline-lg text-headline-lg mb-4">Your next destination: Kyoto</h3>
            <p className="font-body-md text-body-md opacity-90 mb-6">Discover the hidden temples of Higashiyama. Our AI has already optimized your transport routes between these landmarks.</p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-label-md text-label-md font-bold transition-transform active:scale-95 hover:bg-gray-100">
              View Detailed Route
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BudgetBreakdown;
