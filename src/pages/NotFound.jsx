import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center bg-white text-black px-6 select-none">
      <div className="text-center space-y-5">
        
        <h1 className="text-8xl font-black tracking-widest text-zinc-900 font-serif">
          404
        </h1>
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">
          Page Not Found
        </h2>
        
        
        <p className="text-xs text-gray-400 max-w-sm mx-auto uppercase tracking-wide leading-relaxed">
          The page you are looking for does not exist or has been moved. 
          Please check the URL or return to the main collection.
        </p>

        
        <div className="pt-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center space-x-2 bg-black text-white text-xs font-black uppercase tracking-widest px-6 py-3 hover:bg-zinc-800 transition shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;