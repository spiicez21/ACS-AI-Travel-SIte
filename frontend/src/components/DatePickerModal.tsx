import React, { useState } from 'react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  isAfter, 
  isBefore, 
  differenceInDays 
} from 'date-fns';

interface DatePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (duration: number, startDate: Date | null, endDate: Date | null) => void;
  initialStartDate?: Date | null;
  initialEndDate?: Date | null;
}

const DatePickerModal: React.FC<DatePickerModalProps> = ({ isOpen, onClose, onConfirm, initialStartDate, initialEndDate }) => {
  const [currentMonth, setCurrentMonth] = useState(initialStartDate || new Date());
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate || null); 
  const [endDate, setEndDate] = useState<Date | null>(initialEndDate || null);

  if (!isOpen) return null;

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const onDateClick = (day: Date) => {
    if (!startDate || (startDate && endDate)) {
      // Start a new selection
      setStartDate(day);
      setEndDate(null);
    } else if (startDate && !endDate) {
      // End the selection
      if (isBefore(day, startDate)) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  const clearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const handleConfirm = () => {
    if (startDate && endDate) {
      const days = differenceInDays(endDate, startDate) + 1;
      onConfirm(days, startDate, endDate);
      onClose();
    }
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button onClick={prevMonth} className="p-1 hover:bg-surface-variant rounded-full transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <h2 className="font-label-md text-label-md font-bold tracking-widest text-on-surface uppercase">
            {format(currentMonth, 'MMMM yyyy')}
          </h2>
          <button onClick={nextMonth} className="p-1 hover:bg-surface-variant rounded-full transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-outline-variant hidden md:block">
            {format(currentMonth, 'MMMM')} — {format(addMonths(currentMonth, 1), 'MMMM')}
          </span>
          <button onClick={onClose} className="p-1 hover:bg-surface-variant rounded-full transition-colors text-outline">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = 'eeeee'; // S M T W T F S
    const startDateOfWeek = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center font-label-sm text-xs text-outline mb-2">
          {format(addDays(startDateOfWeek, i), dateFormat)}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDateOfWeek = startOfWeek(monthStart);
    const endDateOfWeek = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDateOfWeek;
    let formattedDate = '';

    while (day <= endDateOfWeek) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;

        // Logic for styling
        const isSelectedStart = startDate && isSameDay(day, startDate);
        const isSelectedEnd = endDate && isSameDay(day, endDate);
        const isWithinRange = startDate && endDate && isAfter(day, startDate) && isBefore(day, endDate);
        const isCurrentMonth = isSameMonth(day, monthStart);

        let bgClass = "bg-transparent";
        let textClass = "text-on-surface hover:bg-surface-variant";
        let roundedClass = "rounded-full";

        if (!isCurrentMonth) {
          textClass = "text-outline-variant";
        }

        if (isSelectedStart) {
          bgClass = "bg-[#0b10a4]"; // Match screenshot specific dark blue
          textClass = "text-white font-bold";
          // If range exists, we round the left side only for a continuous bar effect
          roundedClass = endDate ? "rounded-l-full rounded-r-none" : "rounded-full";
        } else if (isSelectedEnd) {
          bgClass = "bg-[#0b10a4]";
          textClass = "text-white font-bold";
          roundedClass = "rounded-r-full rounded-l-none";
        } else if (isWithinRange) {
          bgClass = "bg-indigo-100";
          textClass = "text-on-surface font-semibold";
          roundedClass = "rounded-none";
        }

        days.push(
          <div key={day.toString()} className={`relative w-full aspect-square flex items-center justify-center ${isWithinRange ? 'bg-indigo-100' : ''}`}>
             <button
              onClick={() => onDateClick(cloneDay)}
              className={`absolute inset-0 flex items-center justify-center w-full h-full text-sm transition-colors ${bgClass} ${textClass} ${roundedClass}`}
            >
              <span className="z-10 relative">{formattedDate}</span>
            </button>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const calculatedDays = (startDate && endDate) ? differenceInDays(endDate, startDate) + 1 : 0;
  const calculatedNights = Math.max(0, calculatedDays - 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[2rem] w-full max-w-4xl flex flex-col md:flex-row overflow-hidden shadow-2xl animate-fade-in-up">
        
        {/* Left Panel */}
        <div className="bg-[#f4f3fb] p-8 md:w-1/3 flex flex-col justify-between">
          <div>
            <span className="font-label-sm text-xs font-bold text-[#0b10a4] uppercase tracking-widest block mb-4">Select Dates</span>
            <h1 className="text-5xl font-display-xl leading-tight mb-12">
              {format(currentMonth, 'MMMM')} <br />
              {format(currentMonth, 'yyyy')}
            </h1>

            <div className="space-y-6">
              <div>
                <span className="font-label-sm text-xs text-outline mb-1 block">Departure</span>
                <p className="text-2xl font-semibold text-[#0b10a4] border-b border-outline-variant/30 pb-4">
                  {startDate ? format(startDate, 'MMM d') : '--'}
                </p>
              </div>
              <div>
                <span className="font-label-sm text-xs text-outline mb-1 block">Return</span>
                <p className="text-2xl font-semibold text-[#0b10a4]">
                  {endDate ? format(endDate, 'MMM d') : '--'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex items-center text-outline-variant gap-2 text-sm">
              <span className="material-symbols-outlined text-[20px] text-[#0b10a4]">schedule</span>
              <span className="text-[#0b10a4] font-medium">{calculatedDays} Days / {calculatedNights} Nights</span>
            </div>
            <button 
              onClick={handleConfirm}
              disabled={!startDate || !endDate}
              className="w-full bg-[#0b10a4] text-white py-4 rounded-xl font-semibold transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            >
              Confirm Dates
            </button>
          </div>
        </div>

        {/* Right Panel (Calendar) */}
        <div className="p-8 md:w-2/3 bg-white flex flex-col justify-between">
          <div>
            {renderHeader()}
            <div className="px-4">
              {renderDays()}
              {renderCells()}
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-outline-variant/30 flex justify-end gap-6 text-sm font-semibold">
            <button onClick={clearDates} className="text-outline hover:text-on-surface transition-colors">Clear</button>
            <button className="text-[#0b10a4] hover:opacity-80 transition-opacity">Flexible Dates</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DatePickerModal;
