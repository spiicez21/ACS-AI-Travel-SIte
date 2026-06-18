import React, { useEffect } from 'react';

const DatePickerActive: React.FC = () => {

  useEffect(() => {
    // Add custom CSS for calendar
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
      .selected-range { background: rgba(26, 0, 255, 0.08); }
      .premium-shadow { box-shadow: 0 10px 40px rgba(0, 54, 98, 0.05); }
      .overlay-blur { backdrop-filter: blur(8px); }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <main className="pt-32 min-h-screen">
      {/* Page Context Background */}
      <section className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center mb-16">
          <div>
            <h1 className="font-display-lg text-display-lg text-primary mb-6">Chart Your Path.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-8">
              Our precision planning tools help you navigate the world's most exclusive destinations with editorial clarity and atmospheric calm.
            </p>
          </div>
          <div className="relative h-[400px] rounded-[20px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80&w=2000" alt="Chart Your Path" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* DATE PICKER MODAL OVERLAY */}
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-on-surface/20 overlay-blur"></div>
        
        {/* Modal Content */}
        <div className="relative bg-white w-full max-w-4xl rounded-[20px] premium-shadow overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
          
          {/* Left: Selection Info */}
          <div className="w-full md:w-1/3 bg-surface-container-low p-8 flex flex-col justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">Select Dates</span>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-8">October 2024</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="font-label-sm text-label-sm text-outline block mb-1">Departure</label>
                  <div className="font-headline-md text-headline-md text-primary">Oct 14</div>
                </div>
                <div className="h-px bg-outline-variant w-12"></div>
                <div>
                  <label className="font-label-sm text-label-sm text-outline block mb-1">Return</label>
                  <div className="font-headline-md text-headline-md text-primary">Oct 21</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center gap-2 text-on-surface-variant mb-6">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <span className="font-body-md text-body-md">8 Days / 7 Nights</span>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all">
                Confirm Dates
              </button>
            </div>
          </div>
          
          {/* Right: Calendar Selection */}
          <div className="w-full md:w-2/3 p-8 bg-white">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <span className="font-label-md text-label-md font-bold">OCTOBER 2024</span>
                <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
              <div className="font-label-md text-label-md text-on-surface-variant">October — November</div>
            </div>
            
            {/* Days Header */}
            <div className="calendar-grid mb-2">
              <div className="text-center font-label-sm text-label-sm text-outline py-2">S</div>
              <div className="text-center font-label-sm text-label-sm text-outline py-2">M</div>
              <div className="text-center font-label-sm text-label-sm text-outline py-2">T</div>
              <div className="text-center font-label-sm text-label-sm text-outline py-2">W</div>
              <div className="text-center font-label-sm text-label-sm text-outline py-2">T</div>
              <div className="text-center font-label-sm text-label-sm text-outline py-2">F</div>
              <div className="text-center font-label-sm text-label-sm text-outline py-2">S</div>
            </div>
            
            {/* Calendar Days */}
            <div className="calendar-grid gap-y-1">
              {/* Empty cells for start of month offset */}
              <div className="h-12"></div> {/* Sun */}
              <div className="h-12"></div> {/* Mon */}
              
              {/* Oct 1 - 13 */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(day => (
                <div key={day} className="h-12 flex items-center justify-center font-body-md text-on-surface-variant/40 hover:scale-110 transition-transform cursor-pointer">{day}</div>
              ))}
              
              {/* OCT 14 (Selected Start) */}
              <div className="h-12 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center bg-primary text-white rounded-l-full relative z-10 font-bold">14</div>
              </div>
              
              {/* OCT 15 - 20 (Range) */}
              {[15, 16, 17, 18, 19, 20].map(day => (
                <div key={day} className="h-12 flex items-center justify-center selected-range cursor-pointer">{day}</div>
              ))}
              
              {/* OCT 21 (Selected End) */}
              <div className="h-12 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center bg-primary text-white rounded-r-full relative z-10 font-bold">21</div>
              </div>
              
              {/* Remainder of Oct */}
              {[22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(day => (
                <div key={day} className="h-12 flex items-center justify-center font-body-md hover:bg-surface-container rounded-full cursor-pointer hover:scale-110 transition-transform">{day}</div>
              ))}
            </div>
            
            {/* Footer Actions */}
            <div className="mt-8 pt-6 border-t border-outline-variant flex justify-end gap-4">
              <button className="px-6 py-2 text-outline font-label-md text-label-md hover:text-on-surface transition-colors">Clear</button>
              <button className="px-6 py-2 text-primary font-label-md text-label-md font-bold">Flexible Dates</button>
            </div>
          </div>
          
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-outline hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default DatePickerActive;
