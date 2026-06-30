import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-sky-500 hover:shadow-xl transition-all duration-300">

      <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-7 mb-6">
        {description}
      </p>

      <button className="flex items-center gap-2 text-sky-600 font-semibold hover:gap-4 transition-all">
        Learn More
        <ArrowRight size={18} />
      </button>

    </div>
  );
};

export default ServiceCard;