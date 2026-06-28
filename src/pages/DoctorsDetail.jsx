import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import TreatmentList from '../components/TreatmentList';
import WorkingHours from '../components/WorkingHours';

const DoctorsDetail = () => {
  const { id } = useParams();
  const { state, dispatch } = useAppContext();
  
  // Find the specific doctor matching the URL ID
  const doctor = state.doctors.find(doc => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="text-center py-50 bg-[#fdfbf7] min-h-screen pt-36">
        <h2 className="text-xl font-serif text-neutral-800">Doctor not found!</h2>
        <Link to="/our-team" className="text-[#5b58a6] text-sm mt-4 inline-block hover:underline">➔ Return to Our Team</Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fdfbf7] min-h-screen">
      
      {/* 
          Main Container: Added spacing (pt-28 md:pt-36) at the top 
          to push the profile container cleanly below the fixed navbar 
      */}
      <div className="max-w-7xl mx-auto px-4 pt-28 md:pt-36 pb-20">
        
        {/* HERO PROFILE BOX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* Image Sidebar Layout */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden bg-[#fbf8f3] shadow-xl border-b-8 border-r-8 border-[#5b58a6] h-[450px]">
            <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover object-top" />
          </div>

          {/* Info Brand Dashboard Card Panel (Updated background to #5b58a6) */}
          <div className="lg:col-span-8 bg-[#5b58a6] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-center relative shadow-2xl">
            
            <div className="inline-block bg-white text-[#5b58a6] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full w-fit mb-6 shadow-sm">
              {doctor.specialty}
            </div>

            <h1 className="text-3xl md:text-5xl font-serif tracking-wide mb-2 uppercase text-white">
              {doctor.name}
            </h1>
            <p className="text-neutral-200 font-sans text-sm tracking-wider mb-8 font-medium">
              {doctor.degrees}
            </p>

            <div className="space-y-4 text-sm md:text-base font-light text-neutral-100 max-w-2xl mb-8">
              <div className="flex items-center gap-3">
                <span className="bg-white/10 p-1.5 rounded-lg text-lg">🎓</span>
                <p><strong className="text-white">Experience:</strong> {doctor.experience}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-white/10 p-1.5 rounded-lg text-lg">🗣️</span>
                <p><strong className="text-white">Languages:</strong> {doctor.languages}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-white/10 p-1.5 rounded-lg text-lg">📍</span>
                <p><strong className="text-white">Clinic Location:</strong> {doctor.location}</p>
              </div>
            </div>

            {/* Appointment Dispatch Actions Setup */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => dispatch({ type: 'OPEN_APPOINTMENT_MODAL' })}
                className="bg-white hover:bg-neutral-100 text-[#5b58a6] px-6 py-3.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg flex items-center gap-2"
              >
                📅 Book Appointment
              </button>
              <button className="bg-[#4a478a] hover:bg-[#3d3a73] text-white p-3.5 rounded-xl transition-all border border-white/10 shadow-md">
                📞
              </button>
              <button className="bg-[#4a478a] hover:bg-[#3d3a73] text-white p-3.5 rounded-xl transition-all border border-white/10 shadow-md">
                ✉️
              </button>
            </div>

          </div>
        </div>

        {/* 2. REUSABLE TREATMENT LIST COMPONENT */}
        <TreatmentList treatments={doctor.treatments} />

        {/* 3. BIO & WORKING HOURS BLOCK SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Detailed About Statement Panel */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-neutral-200/60 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4 border-b pb-3 border-[#5b58a6]/40">
              About the Doctor
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {doctor.name} is highly qualified in {doctor.specialty} with a distinguished career built over {doctor.experience.toLowerCase()}. Offering specialized patient care and world-class dental management services in {doctor.location}.
            </p>
          </div>

          {/* New External Working Hours Component */}
          <div className="lg:col-span-4">
            <WorkingHours />
          </div>

        </div>

      </div>
    </div>
  );
};

export default DoctorsDetail;