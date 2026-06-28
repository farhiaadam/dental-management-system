import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  return (
    <Link 
      to={`/team/${doctor.id}`} 
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100 flex flex-col h-[400px]"
    >
      {/* Doctor Professional Profile Image Wrapper */}
      <div className="w-full h-[85%] bg-[#fbf8f3] overflow-hidden">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Persistent Bottom Information Dashboard Panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#5b58a6] py-4 text-center border-t border-neutral-800 transition-colors duration-300 group-hover:bg-[#5b58a6]">
        <h4 className="font-serif font-medium text-white text-base tracking-wide group-hover:text-white transition-colors">
          {doctor.name}
        </h4>
      </div>
    </Link>
  );
};

export default DoctorCard;