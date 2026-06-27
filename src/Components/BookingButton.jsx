import React from 'react';
import { useAppContext } from '../context/AppContext'; // Hubi meesha uu feylkaaga Context-ku jiro

const BookingButton = ({ variant = "side" }) => {
  const { dispatch } = useAppContext();

  // 1. Haddii aad rabto badanka dhinaca taagan (sida sawirka ku jira)
  if (variant === "side") {
    return (
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button 
          onClick={() => dispatch({ type: 'OPEN_APPOINTMENT_MODAL' })}
          className="bg-[#d38cdf] text-neutral-950 text-xs font-bold py-4 px-2.5 rounded-l-md shadow-2xl border-y border-l border-white/25 [writing-mode:vertical-lr] rotate-180 hover:bg-[#c99f7a] active:scale-95 transition-all duration-200 flex items-center gap-1"
        >
          <span>📅</span> Book Now
        </button>
      </div>
    );
  }

  // 2. Qeybta kale: Haddii aad meel kale u isticmaalayso (sida Hero Section ama Navbar)
  return (
    <button 
      onClick={() => dispatch({ type: 'OPEN_APPOINTMENT_MODAL' })}
      className="bg-[#dfb28c] text-neutral-900 px-5 py-2 rounded text-sm font-bold hover:bg-[#c99f7a] active:scale-95 transition shadow-md"
    >
      Book An Appointment
    </button>
  );
};

export default BookingButton;