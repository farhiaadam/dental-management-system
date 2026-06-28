import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import DoctorCard from '../components/DoctorCard';
import LocationTabs from '../components/LocationTabs';

const OurTeam = () => {
  const { state } = useAppContext();
  const { doctors } = state;

  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter doctors based on selection
  const filteredDoctors = doctors.filter(doc => {
    const matchesLocation = selectedLocation === 'All' || doc.location === selectedLocation;
    const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLocation && matchesSpecialty && matchesSearch;
  });

  return (
    <div className="w-full bg-[#fdfbf7] min-h-screen pb-16">
      
      {/* HERO BANNER SECTION */}
      <div className="relative h-[280px] md:h-[350px] bg-neutral-900 overflow-hidden flex flex-col items-center justify-center text-center px-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" 
            alt="Dental Team Background" 
            className="w-full h-full object-cover object-center opacity-40 brightness-75"
          />
        </div>

        {/* Heading & Breadcrumbs */}
        <div className="relative z-10 flex flex-col items-center mt-[-20px]">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wider uppercase mb-3">
            Our Team
          </h1>
          
          {/* Breadcrumbs Capsule */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-xs md:text-sm text-neutral-200 tracking-wide">
            <Link to="/" className="hover:text-[#5b58a6] transition-colors">HOME</Link>
            <span className="mx-2 text-[#5b58a6]">»</span>
            <span className="text-white font-medium uppercase">OUR TEAM</span>
          </div>
        </div>

        {/* SVG Wave Shape at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] fill-[#fdfbf7]">
            <path d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* FILTER AND GRID SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 mt-12">
        
        {/* FILTERS CONTAINER */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
          
          {/* Dropdown Specialization */}
          <select 
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="w-full md:w-64 p-3 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-700 outline-none focus:border-[#5b58a6]"
          >
            <option value="All">Select By Specialisation</option>
            <option value="Specialist Endodontist">Specialist Endodontist</option>
            <option value="Cosmetic Dentist">Cosmetic Dentist</option>
            <option value="Implantologist">Implantologist</option>
          </select>

          {/* Location Tabs Component */}
          <LocationTabs 
            selectedLocation={selectedLocation} 
            setSelectedLocation={setSelectedLocation} 
          />

          {/* Search Input */}
          <input 
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 p-3 border border-neutral-300 rounded-lg text-sm outline-none focus:border-[#5b58a6]"
          />
        </div>

        {/* DOCTORS GRID */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-neutral-500 font-medium">
            No doctors matched your search criteria.
          </div>
        )}

      </div>
    </div>
  );
};

export default OurTeam;