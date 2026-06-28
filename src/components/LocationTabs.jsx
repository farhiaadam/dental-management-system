import React from 'react';

const LocationTabs = ({ selectedLocation, setSelectedLocation }) => {
  const locations = ['All', 'Mogadishu', 'Hargeysa', 'Garowe'];

  return (
    <div className="flex  p-1.5 rounded-2xl border border-neutral-800 shadow-inner w-full md:w-auto items-center overflow-x-auto scrollbar-none">
      {locations.map((loc) => {
        const isActive = selectedLocation === loc;
        
        return (
          <button
            key={loc}
            onClick={() => setSelectedLocation(loc)}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap flex-1 md:flex-initial ${
              isActive
                ? 'bg-[#5b58a6] text-white  font-bold '
                : 'text-black hover:text-black '
            }`}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
};

export default LocationTabs;