import React from 'react';
import { useAppContext } from '../context/AppContext';

const BookingButton = ({ variant = "side" }) => {
  const { dispatch } = useAppContext();

  // 1. Floating Sticky Side Button Layout
  if (variant === "side") {
    return (
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button 
          onClick={() => dispatch({ type: 'OPEN_APPOINTMENT_MODAL' })}
          className="bg-[#5b58a6] text-white text-xs font-bold py-4 px-2.5 rounded-l-md shadow-2xl border-y border-l border-white/25 [writing-mode:vertical-lr] rotate-180 hover:bg-[#4a478a] active:scale-95 transition-all duration-200 flex items-center gap-1"
        >
          <span>📅</span> Book Now
        </button>
      </div>
    );
  }

  // 2. Standard Inline Structural Action Button (Used in Navbar / Hero sections)
  return (
    <button 
      onClick={() => dispatch({ type: 'OPEN_APPOINTMENT_MODAL' })}
      className="bg-[#5b58a6] text-white px-5 py-2 rounded text-sm font-bold hover:bg-[#4a478a] active:scale-95 transition shadow-md"
    >
      Book An Appointment
    </button>
  );
};

export default BookingButton;