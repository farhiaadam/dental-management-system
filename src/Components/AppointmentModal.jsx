import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const AppointmentModal = () => {
  // Ka soo dhoweyso state iyo dispatch hook-gaaga useAppContext
  const { state, dispatch } = useAppContext();
  
  // State-yada maxaliga ah ee foomka laga buuxinayo
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Aesthetic (Trimming & Qurxinta)');
  const [date, setDate] = useState('2026-06-25');
  const [time, setTime] = useState('17:13');

  // Haddii isModalOpen ay false tahay, modal-ka ha tusin qofna
  if (!state.isModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Xogta ballanta cusub ee la ururiyey
    const newAppointment = {
      id: Date.now(),
      fullName,
      phone,
      service,
      date,
      time
    };

    // U dir xogta reducer-ka si loogu kaydiyo array-ga loona xiro modal-ka
    dispatch({ type: 'ADD_APPOINTMENT', payload: newAppointment });
    
    // Tusi fariinta guusha
    alert("Ballantaada si guul leh ayaa loo qabtay!");

    // Dib u reset garee foomka
    setFullName('');
    setPhone('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Haddii qofku meesha madow gujiyo ha xirmo modal-ka */}
      <div className="absolute inset-0" onClick={() => dispatch({ type: 'CLOSE_APPOINTMENT_MODAL' })}></div>
      
      {/* Sanduuqa Foomka */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Badanka X-ta ah ee lagu xiro */}
        <button 
          onClick={() => dispatch({ type: 'CLOSE_APPOINTMENT_MODAL' })}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 font-bold text-xl transition"
        >
          ✕
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-blue-50/50 border border-gray-200 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="Geli magacaaga"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="+25261xxxxxxx"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Select Service</label>
            <select 
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <option>Aesthetic (Trimming & Qurxinta)</option>
              <option>Dental Implants (Bedelaada Ilkaha)</option>
              <option>Teeth Whitening (Caddeyn)</option>
              <option>Checkup (Baaris Guud)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Date</label>
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Time</label>
              <input 
                type="time" 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-amber-200 hover:bg-amber-300 font-bold text-gray-800 p-3 rounded-lg shadow transition duration-200"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;