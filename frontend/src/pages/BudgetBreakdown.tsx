import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useLocation } from 'react-router-dom';

const BudgetBreakdown: React.FC = () => {
  const location = useLocation();
  const aiData = location.state?.itineraryData;

  const budgetBreakdown = aiData?.budgetBreakdown || {
    flights: { total: 3780, items: [{ name: 'LHR → HND (Business Class)', cost: 3450 }, { name: 'HND → ITM (Domestic)', cost: 330 }] },
    hotels: { total: 2526, items: [{ name: 'Aman Tokyo (4 Nights)', cost: 1280 }, { name: 'The Mitsui Kyoto (3 Nights)', cost: 956 }, { name: 'Traditional Ryokan Hakone', cost: 290 }] },
    foodAndExperiences: { total: 2114, items: [{ name: 'Sukiyabashi Jiro Tasting', cost: 450 }, { name: 'Daily Meal Allowance (Est.)', cost: 1200 }, { name: 'teamLab Planets Private Tour', cost: 464 }] }
  };

  const optimizations = aiData?.optimizations || [
    "Switching to the Shinkansen Green Pass saves $120 while providing premium lounge access.",
    "Moving the stay to Tuesday-Thursday reduces the rate by 18%."
  ];

  const totalCalculated = budgetBreakdown.flights.total + budgetBreakdown.hotels.total + budgetBreakdown.foodAndExperiences.total;
  
  const chartData = [
    { name: 'Flights', value: Math.round((budgetBreakdown.flights.total / totalCalculated) * 100) || 45, color: '#0b10a4' }, 
    { name: 'Hotels', value: Math.round((budgetBreakdown.hotels.total / totalCalculated) * 100) || 30, color: '#1d4ed8' }, 
    { name: 'Food & Exp', value: Math.round((budgetBreakdown.foodAndExperiences.total / totalCalculated) * 100) || 25, color: '#cbd5e1' }, 
  ];

  const avgPerDay = Math.round(totalCalculated / (aiData ? parseInt(aiData.duration) : 12));

  return (
    <main className="pt-32 pb-section-gap px-margin-desktop max-w-container-max mx-auto min-h-screen bg-surface">
      {/* Header Area */}
      <div className="mb-16">
        <span className="font-label-sm text-xs font-bold text-[#0b10a4] uppercase tracking-widest mb-4 block">CURRENT ITINERARY</span>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="font-display-xl text-display-xl md:text-7xl text-on-surface mb-4 capitalize">
              {aiData ? aiData.destination : 'Tokyo & Kyoto'}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              A {aiData ? aiData.duration : '12'}-day curated journey. Budget updated 2 minutes ago.
            </p>
          </div>
          <div className="text-right">
            <span className="font-label-sm text-xs text-outline font-medium block mb-1">Total Estimated Budget</span>
            <span className="font-display-lg text-headline-lg md:text-5xl text-[#0b10a4] font-semibold">
              ${totalCalculated.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Allocation Card */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20 flex flex-col items-center">
            <h3 className="w-full text-left font-headline-sm text-headline-sm mb-8">Allocation</h3>
            
            <div className="relative w-64 h-64 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="font-label-sm text-xs text-outline mb-1">Avg/Day</span>
                <span className="font-display-sm text-3xl text-on-surface">${avgPerDay}</span>
              </div>
            </div>

            <div className="w-full space-y-3">
              {chartData.map((item, index) => (
                <div key={index} className="flex items-center justify-between font-label-sm text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-on-surface-variant">{item.name}</span>
                  </div>
                  <span className="text-on-surface-variant">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Optimization Card */}
          <div className="bg-[#0b10a4] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-center justify-between mb-8 relative z-10">
              <h3 className="font-headline-sm text-headline-sm">AI Optimization</h3>
              <span className="material-symbols-outlined text-white/50 text-3xl">auto_awesome</span>
            </div>
            <div className="space-y-6 mb-8 relative z-10">
              {optimizations.map((opt: string, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <span className="material-symbols-outlined text-white/70 mt-0.5">location_on</span>
                  <p className="font-body-sm text-sm leading-relaxed text-white/90">
                    {opt}
                  </p>
                </div>
              ))}
            </div>
            <button className="w-full py-3 px-6 rounded-xl border border-white/20 text-white font-label-md text-sm hover:bg-white/10 transition-colors relative z-10">
              Apply AI Optimization
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20 h-full">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-headline-sm text-headline-sm">Line Items</h3>
              <button className="text-[#0b10a4] font-label-sm text-xs font-bold hover:opacity-80 transition-opacity">
                + Add Expense
              </button>
            </div>

            {/* Flights Section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0b10a4] text-lg">flight_takeoff</span>
                  <span className="font-label-sm text-xs font-bold tracking-widest text-on-surface uppercase">FLIGHTS</span>
                </div>
                <span className="font-label-sm text-sm font-semibold text-on-surface">${budgetBreakdown.flights.total.toLocaleString()}</span>
              </div>
              <div className="space-y-4">
                {budgetBreakdown.flights.items.map((item: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between font-body-sm text-sm">
                    <span className="text-on-surface-variant">{item.name}</span>
                    <span className="text-on-surface font-medium">${item.cost.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotels Section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0b10a4] text-lg">apartment</span>
                  <span className="font-label-sm text-xs font-bold tracking-widest text-on-surface uppercase">HOTELS</span>
                </div>
                <span className="font-label-sm text-sm font-semibold text-on-surface">${budgetBreakdown.hotels.total.toLocaleString()}</span>
              </div>
              <div className="space-y-4">
                {budgetBreakdown.hotels.items.map((item: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between font-body-sm text-sm">
                    <span className="text-on-surface-variant">{item.name}</span>
                    <span className="text-on-surface font-medium">${item.cost.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Food & Experiences Section */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0b10a4] text-lg">restaurant</span>
                  <span className="font-label-sm text-xs font-bold tracking-widest text-on-surface uppercase">FOOD & EXPERIENCES</span>
                </div>
                <span className="font-label-sm text-sm font-semibold text-on-surface">${budgetBreakdown.foodAndExperiences.total.toLocaleString()}</span>
              </div>
              <div className="space-y-4">
                {budgetBreakdown.foodAndExperiences.items.map((item: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between font-body-sm text-sm">
                    <span className="text-on-surface-variant">{item.name}</span>
                    <span className="text-on-surface font-medium">${item.cost.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="relative rounded-3xl overflow-hidden aspect-[3/1] md:aspect-[4/1] flex items-center shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2000" 
          alt="Destination" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b10a4]/90 to-transparent"></div>
        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <h2 className="font-display-lg text-4xl md:text-5xl text-white mb-4">
            Your next destination: <span className="capitalize">{aiData ? aiData.destination : 'Kyoto'}</span>
          </h2>
          <p className="font-body-md text-white/90 mb-8 max-w-lg">
            Discover the hidden gems. Our AI has already optimized your transport routes between these landmarks.
          </p>
          <button className="bg-white text-[#0b10a4] px-6 py-3 rounded-full font-label-md text-sm hover:scale-105 transition-transform font-bold">
            View Detailed Route
          </button>
        </div>
      </div>
    </main>
  );
};

export default BudgetBreakdown;
