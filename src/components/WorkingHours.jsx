import React from 'react';

const WorkingHours = () => {
  const schedule = [
    { days: 'Saturday - Wednesday', hours: '9:00 AM - 5:00 PM' },
    { days: 'Thursday', hours: '9:00 AM - 1:00 PM' },
    { days: 'Friday', hours: 'Closed / Emergency Only' }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 border border-neutral-200/60 shadow-sm">
      <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4 border-b pb-3 border-[#dfb28c]/40">
        🕒 Working Hours
      </h3>
      <div className="space-y-3">
        {schedule.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-sm border-b border-neutral-100 pb-2 last:border-none">
            <span className="text-neutral-600 font-medium">{item.days}</span>
            <span className={`font-bold ${item.hours === 'Closed / Emergency Only' ? 'text-red-500' : 'text-[#dfb28c]'}`}>
              {item.hours}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingHours;