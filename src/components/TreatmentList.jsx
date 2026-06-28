import React from 'react';

const TreatmentList = ({ treatments }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-neutral-200/60 shadow-sm mb-8">
      <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4 border-b pb-3 border-[#dfb28c]/40">
        Treatments Offered
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {treatments.map((treatment, index) => (
          <div key={index} className="flex items-center gap-2 text-neutral-700 text-sm">
            <span className="text-[#dfb28c] font-bold">✓</span>
            {treatment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentList;