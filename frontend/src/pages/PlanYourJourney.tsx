import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlanYourJourney: React.FC = () => {
  const [budget, setBudget] = useState(15000);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(parseInt(e.target.value));
  };

  const toggleStyle = (style: string) => {
    setSelectedStyles(prev => 
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      navigate('/generating'); // Navigate to the next step
    }, 2500);
  };

  return (
    <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Animated Background Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block py-1 px-3 bg-secondary-container/10 text-secondary rounded-full font-label-sm text-label-sm mb-4">CURATED BY AI</span>
          <h1 className="font-display-xl text-display-xl md:text-display-xl text-primary mb-4 leading-tight">Design your <br className="hidden md:block" />next perspective.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Tell us your destination and preference. Our precision engine will craft a journey that resonates with your travel philosophy.</p>
        </div>

        {/* Form Container */}
        <div className="glass-card rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-primary/5 bg-white/80 backdrop-blur-md border border-white/30">
          <form className="space-y-12" id="tripForm" onSubmit={handleSubmit}>
            {/* Step 1: Destination & Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="block font-label-md text-label-md text-primary uppercase tracking-widest">Where to?</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">travel_explore</span>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-4 pl-12 pr-4 focus:ring-primary focus:border-primary font-body-md text-body-md transition-all outline-none" placeholder="Search any city or region..." type="text" />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] bg-surface-variant px-2 py-1 rounded text-outline font-bold">AI SEARCH</div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="block font-label-md text-label-md text-primary uppercase tracking-widest">When?</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">calendar_today</span>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-4 pl-12 pr-4 focus:ring-primary focus:border-primary font-body-md text-body-md transition-all outline-none" placeholder="Select dates" type="text" />
                </div>
              </div>
            </div>

            {/* Step 2: Budget Slider */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <label className="block font-label-md text-label-md text-primary uppercase tracking-widest">Planned Investment</label>
                  <p className="text-on-surface-variant text-label-sm">Reflecting your preferred level of luxury</p>
                </div>
                <div className="text-right">
                  <span className="font-display-lg text-headline-lg text-primary" id="budgetValue">${budget.toLocaleString()}</span>
                  <span className="block text-label-sm text-outline uppercase">Estimated total</span>
                </div>
              </div>
              <input
                className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                id="budgetRange"
                max="50000"
                min="1000"
                step="500"
                type="range"
                value={budget}
                onChange={handleBudgetChange}
              />
              <div className="flex justify-between font-label-sm text-outline-variant">
                <span>$1,000</span>
                <span>$50,000+</span>
              </div>
            </div>

            {/* Step 3: Travel Style (Interactive Cards) */}
            <div className="space-y-6">
              <label className="block font-label-md text-label-md text-primary uppercase tracking-widest">Core Narrative</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: 'adventure', name: 'Adventure', img: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=600' },
                  { id: 'relax', name: 'Relax', img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=600' },
                  { id: 'culture', name: 'Culture', img: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&q=80&w=600' },
                  { id: 'food', name: 'Gastronomy', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600' }
                ].map((style) => (
                  <div
                    key={style.id}
                    onClick={() => toggleStyle(style.id)}
                    className={`style-card relative group cursor-pointer border-2 rounded-2xl overflow-hidden aspect-square flex items-center justify-center transition-all hover:scale-[1.02] ${selectedStyles.includes(style.id) ? 'border-primary' : 'border-transparent'}`}
                  >
                    <img src={style.img} alt={style.name} className="absolute inset-0 w-full h-full object-cover transition-all duration-500" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-label-md text-label-md text-center">{style.name}</p>
                    </div>
                    <div className={`selected-indicator absolute top-3 right-3 transition-opacity bg-white text-primary rounded-full p-1 ${selectedStyles.includes(style.id) ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <span className="font-label-md text-label-md">Estimated AI processing time: 3.4s</span>
              </div>
              <button
                className="bg-primary text-white px-12 py-5 rounded-full font-label-md text-headline-md shadow-xl flex items-center justify-center space-x-4 disabled:opacity-70 transition-all hover:-translate-y-1 hover:shadow-2xl active:scale-95"
                type="submit"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                    <span>Synthesizing Journey...</span>
                  </>
                ) : (
                  <>
                    <span>Generate My Journey</span>
                    <span className="material-symbols-outlined">east</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default PlanYourJourney;
