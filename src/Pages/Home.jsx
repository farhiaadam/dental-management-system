import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

import Hero1 from "../assets/Hero1.jpeg";
import Hero2 from "../assets/Hero2.jpeg";
import Hero3 from "../assets/Hero3.jpeg";

import sideLeft from '../assets/side-left.jpeg';
import mainCenter from '../assets/main-center.jpeg';
import sideRight from '../assets/side-right.jpeg';

const Home = () => {
  const { dispatch } = useAppContext();

  const images = [Hero1, Hero2, Hero3];

  const services = [
    { id: 1, icon: "🦷", title: "Cosmetic And Restorative Dentistry", desc: "At Aluer Aesthetic & Dental Clinic, we understand that your smile is a reflection of your person..." },
    { id: 2, icon: "🔍", title: "Veneers And Lumineers", desc: "Veneers and Lumineers offer an effective way to dramatically enhance your smile without extensive de..." },
    { id: 3, icon: "✨", title: "Hollywood Smile Make Over", desc: "If you're dreaming of a red-carpet-ready smile, our Hollywood Smile Makeover at Aluer Aesthetic &..." },
    { id: 4, icon: "🌉", title: "Dental Bridges And Crowns", desc: "When a tooth is damaged, weakened, or missing, crowns and Dental Bridges provide long-lasting, natur..." },
    { id: 5, icon: "🧼", title: "Tooth Whitening", desc: "A bright, confident smile can leave a lasting first impression. At Aluer Aesthetic & Dental Clin..." },
    { id: 6, icon: "🔩", title: "Dental Implants: Permanent, Natural-Looking Tooth Replacement", desc: "Dental implants are the gold standard for replacing missing teeth, offering a permanent, lifelike solution..." },
  ];

  const features = [
    { id: 1, icon: "🏥", title: "Experienced Dental", desc: "Skilled care backed by years of trusted dental experience." },
    { id: 2, icon: "🔬", title: "Advanced Technology", desc: "Modern tools ensure accurate and efficient treatments." },
    { id: 3, icon: "👤", title: "Personalized Treatment", desc: "Custom care plans made to fit your smile and lifestyle." },
    { id: 4, icon: "📞", title: "Client Support 24/7", desc: "We are providing 24/7 support to our clients." },
    { id: 5, icon: "👨‍👩‍👧‍👦", title: "Family-Friendly", desc: "Welcoming space for kids, teens, adults, and seniors." },
    { id: 6, icon: "⭐", title: "Best Service", desc: "Years of Dedicated Excellence in Services." },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Transitions smoothly every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full bg-[#fdfbf7]">
      
      {/* ==========================================
          1. PREMIUM HERO SLIDER (PERFECT BALANCE)
          ========================================== */}
      <div className="relative w-full h-[550px] md:h-screen overflow-hidden flex items-end justify-start px-6 md:px-16 pb-12 md:pb-14">
        
        {/* Carousel Slide Images Wrapper */}
        {images.map((image, index) => {
          const isActive = index === currentImageIndex;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 flex items-end justify-start px-6 md:px-16 pb-12 md:pb-14 transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Background Image Setup */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-in-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${image})`,
                }}
              />

              {/* Text Layout: Beautiful & Well Proportioned at Bottom-Left */}
              <div 
                className={`relative z-10 text-left text-white max-w-2xl flex flex-col items-start space-y-3 ${
                  isActive ? 'animate-[fadeInUp_0.8s_ease-out_forwards]' : 'opacity-0'
                }`}
              >
                <span className="text-[#5b58a6] uppercase tracking-[0.25em] text-[11px] sm:text-xs font-bold drop-shadow-md">
                  Welcome to Aluer Aesthetic
                </span>
                
                <h1 className="text-3xl sm:text-5xl font-serif tracking-wide font-medium leading-tight drop-shadow-lg">
                  Transform Your Smile,<br />
                  <span className="font-light italic text-neutral-200">and Transform Your Life</span>
                </h1>
                
                <p className="text-xs sm:text-sm text-neutral-200 max-w-lg font-light leading-relaxed drop-shadow-md">
                  Experience premium, world-class dental and aesthetic care tailored just for you. Creating confident smiles for every generation.
                </p>
                
                {/* Appointment Modal Action Trigger Button */}
                <button 
                  onClick={() => dispatch({ type: 'OPEN_APPOINTMENT_MODAL' })}
                  className="mt-1 bg-[#5b58a6] hover:bg-[#4a478a] text-white font-bold uppercase tracking-wider text-[11px] sm:text-xs px-8 py-3.5 rounded shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 duration-300"
                >
                  Book An Appointment
                </button>
              </div>
            </div>
          );
        })}

        {/* Bottom Curved Wave Shape Overlay */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[35px] md:h-[50px] fill-[#fdfbf7]">
            <path d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        {/* Slider Bottom Navigation Dots Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentImageIndex ? 'bg-[#5b58a6] w-8' : 'bg-white/30 w-2.5'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ==========================================
          2. WELCOME BRIEF SECTION
          ========================================== */}
      <section className="py-24 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-neutral-950 mb-2">
          Welcome To Aluer
        </h2>
        <h3 className="text-lg md:text-xl font-serif text-[#5b58a6] mb-4">
          Aesthetic & Dental Clinic
        </h3>
        <p className="text-xs md:text-sm text-neutral-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          At Aluer Aesthetic & Dental Clinic, we combine modern dental care with a friendly, patient-focused approach. Our team ensures luxury treatment from start to finish.
        </p>

        {/* Brand Image Structural Grid Context */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center px-4">
          <div className="hidden md:block opacity-80 hover:opacity-100 transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden shadow-lg h-[340px]">
            <img src={sideLeft} alt="Clinic Left Interior View" className="w-full h-full object-cover" />
          </div>
          <div className="transform hover:scale-[1.02] transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl h-[420px] border-4 border-white">
            <img src={mainCenter} alt="Main Dental Treatment Room" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block opacity-80 hover:opacity-100 transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden shadow-lg h-[340px]">
            <img src={sideRight} alt="Clinic Right Consultation Room" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ==========================================
          3. DENTAL SERVICES SECTION
          ========================================== */}
      <section className="py-24 bg-[#fbf8f3] border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#5b58a6] uppercase tracking-widest text-xs font-bold block mb-2">What We Do</span>
          <h2 className="text-3xl font-serif text-neutral-950 mb-3">Our Dental Services</h2>
          <p className="text-xs md:text-sm text-neutral-600 max-w-4xl mx-auto mb-16 leading-relaxed">
            Our dental services are designed to offer complete care from preventive treatments to advanced cosmetic solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-2xl text-[#5b58a6] mb-5 bg-[#fbf8f3] w-12 h-12 flex items-center justify-center rounded-xl group-hover:bg-[#5b58a6] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="font-serif font-bold text-neutral-900 text-base mb-3 group-hover:text-[#5b58a6] transition-colors">
                  {service.title}
                </h4>
                <p className="text-neutral-500 text-xs leading-relaxed mb-5">
                  {service.desc}
                </p>
                <Link to={`/services#${service.id}`} className="text-xs font-semibold text-[#5b58a6] hover:text-[#4a478a] flex items-center gap-1">
                  Read More <span className="transform group-hover:translate-x-1 transition-transform">➔</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link 
              to="/services" 
              className="inline-block bg-[#5b58a6] text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded shadow-md hover:bg-[#4a478a] active:scale-95 transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. WHY CHOOSE US SECTION
          ========================================== */}
      <section className="py-24 bg-white text-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-[#5b58a6] uppercase tracking-widest text-xs font-bold block text-center mb-2">Our Values</span>
          <h2 className="text-3xl font-serif text-center text-neutral-950 mb-20">Why Choose Aluer Clinic</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
            {features.map((feat) => (
              <div key={feat.id} className="flex gap-5 items-start hover:scale-[1.02] transition-transform duration-300">
                <div className="text-2xl p-4 bg-[#fbf8f3] rounded-2xl text-[#5b58a6] shrink-0 border border-neutral-100">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-neutral-950 text-base mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-neutral-600 text-xs leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;