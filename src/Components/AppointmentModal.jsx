import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const AppointmentModal = () => {
  // Retrieve global state and actions from application context
  const { state, dispatch } = useAppContext();
  const { doctors, isModalOpen } = state;
  
  // Local form state definitions
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Cosmetic And Restorative Dentistry');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Mogadishu');
  const [date, setDate] = useState('2026-07-01');
  const [time, setTime] = useState('09:00');

  // Prevent rendering if modal state flag is set to false
  if (!isModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct new organized appointment object payload
    const newAppointment = {
      id: Date.now(),
      fullName,
      phone,
      service,
      doctorName: selectedDoctor || (doctors && doctors[0]?.name) || 'Any Available Doctor',
      location: selectedLocation,
      date,
      time
    };

    // Dispatch payload directly to global context reducer state
    dispatch({ type: 'ADD_APPOINTMENT', payload: newAppointment });
    
    // Display interactive system confirmation to the user
    alert("Thank you! Your appointment has been successfully booked.");

    // Reset local transactional form states
    setFullName('');
    setPhone('');
    setSelectedDoctor('');
    setSelectedLocation('Mogadishu');
    dispatch({ type: 'CLOSE_APPOINTMENT_MODAL' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Background overlay click-shield handler to dismiss modal */}
      <div className="absolute inset-0" onClick={() => dispatch({ type: 'CLOSE_APPOINTMENT_MODAL' })}></div>
      
      {/* Central Form Card Container Component */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative z-10 animate-in fade-in zoom-in-95 duration-200 border border-neutral-100">
        
        {/* Absolute Top Dismissal Trigger Button Layout */}
        <button 
          onClick={() => dispatch({ type: 'CLOSE_APPOINTMENT_MODAL' })}
          className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-600 font-light text-xl transition-colors duration-200"
        >
          ✕
        </button>

        <div className="mb-6">
          <h3 className="text-xl font-serif font-bold text-neutral-900 mb-1">Book an Appointment</h3>
          <p className="text-xs text-neutral-500">Please provide your details below to secure your clinical session.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Patient Full Name Input Field */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">Full Name</label>
            <input 
              type="text" 
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl p-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#5b58a6]/20 focus:border-[#5b58a6] transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* Contact Mobile Phone Number Input Field */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">Phone Number</label>
            <input 
              type="tel" 
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl p-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#5b58a6]/20 focus:border-[#5b58a6] transition-all"
              placeholder="+252 61 XXXXXXX"
            />
          </div>

          {/* Clinic Location Selection Dropdown */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">Select Clinic Location</label>
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-white border border-neutral-200 rounded-xl p-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#5b58a6]/20 focus:border-[#5b58a6] transition-all"
            >
              <option value="Mogadishu">Mogadishu Clinic</option>
              <option value="Hargeysa">Hargeysa Clinic</option>
              <option value="Garowe">Garowe Clinic</option>
            </select>
          </div>

          {/* Medical Service Specialization Category Selector */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">Select Service</label>
            <select 
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-white border border-neutral-200 rounded-xl p-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#5b58a6]/20 focus:border-[#5b58a6] transition-all"
            >
              <option value="Cosmetic And Restorative Dentistry">Cosmetic & Restorative Dentistry</option>
              <option value="Veneers And Lumineers">Veneers & Lumineers</option>
              <option value="Hollywood Smile Make Over">Hollywood Smile Makeover</option>
              <option value="Dental Bridges And Crowns">Dental Bridges & Crowns</option>
              <option value="Tooth Whitening">Tooth Whitening</option>
              <option value="Dental Implants">Dental Implants Replacement</option>
            </select>
          </div>

          {/* Dynamic Medical Doctor Assignment Selection Component */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">Select Professional Practitioner</label>
            <select 
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="w-full bg-white border border-neutral-200 rounded-xl p-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#5b58a6]/20 focus:border-[#5b58a6] transition-all"
            >
              <option value="">Any Available Specialist</option>
              {doctors && doctors.map((doc) => (
                <option key={doc.id} value={doc.name}>
                  {doc.name} ({doc.specialty})
                </option>
              ))}
            </select>
          </div>

          {/* Split Structural Calendar Date and Session Time Field Block Layout */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">Preferred Date</label>
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white border border-neutral-200 rounded-xl p-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#5b58a6]/20 focus:border-[#5b58a6] transition-all"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">Preferred Time</label>
              <input 
                type="time" 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-white border border-neutral-200 rounded-xl p-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#5b58a6]/20 focus:border-[#5b58a6] transition-all"
              />
            </div>
          </div>

          {/* Core Submit Call To Action System Button */}
          <button 
            type="submit" 
            className="w-full mt-2 bg-[#5b58a6] hover:bg-[#4a478a] text-white font-bold uppercase tracking-wider text-xs p-4 rounded-xl shadow-lg transition-all transform active:scale-95 duration-200"
          >
            Confirm Appointment Session
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;