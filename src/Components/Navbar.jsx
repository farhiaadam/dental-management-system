import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import BookingButton from './BookingButton';

const Navbar = () => {
  const { state, dispatch } = useAppContext();

  return (
    <nav className="absolute top-0 left-0 w-full z-50 font-sans text-white bg-gradient-to-b from-black/60 to-transparent px-4 sm:px-8 md:px-12 py-3">
      
      {/* QAYBTA HOOSE (Main Menu) */}
      <div className="flex justify-between items-center pt-2">
        
        {/* Logada (Logo) */}
        <div className="z-50">
          <Link to="/" className="block group">
            <h1 className="text-2xl sm:text-3xl font-serif font-medium tracking-widest text-white group-hover:opacity-80 transition">
              aluer
            </h1>
            <small className="block text-[8px] sm:text-[9px] uppercase tracking-wider text-neutral-300 font-light -mt-1">
              Aesthetic & Dental Clinic
            </small>
          </Link>
        </div>

        {/* Menu-yada desktop-ka (Kaliya kuwa aad rabtay baa ku jira) */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "bg-white text-[#dfb28c] px-4 py-2 rounded shadow-sm font-bold" : "hover:text-[#dfb28c] transition py-2"}>Home</NavLink>
          <NavLink to="/about-us" className={({ isActive }) => `hover:text-[#dfb28c] transition py-2 ${isActive ? 'text-[#dfb28c] font-bold' : ''}`}>About Us</NavLink>

          {/* Dropdown Services */}
          <div className="relative group cursor-pointer py-2">
            <span className="hover:text-[#dfb28c] transition flex items-center gap-1">Services <span className="text-[10px]">▼</span></span>
            <div className="absolute top-full left-0 mt-1 hidden group-hover:block bg-white text-neutral-800 rounded shadow-lg min-w-[180px] overflow-hidden py-1">
              <Link to="/services/dental" className="block px-4 py-2 text-xs hover:bg-neutral-100 transition">Dental Care</Link>
              <Link to="/services/aesthetic" className="block px-4 py-2 text-xs hover:bg-neutral-100 transition">Aesthetic Services</Link>
            </div>
          </div>

          <NavLink to="/our-team" className={({ isActive }) => `hover:text-[#dfb28c] transition py-2 ${isActive ? 'text-[#dfb28c] font-bold' : ''}`}>Our Team</NavLink>
          <NavLink to="/contact-us" className={({ isActive }) => `hover:text-[#dfb28c] transition py-2 ${isActive ? 'text-[#dfb28c] font-bold' : ''}`}>Contact Us</NavLink>
          
          {/* Badanka Booking-ka ee Desktop-ka */}
          <BookingButton variant="normal" />
        </div>

        {/* BURGER MENU BUTTON (Taleefoonada yar yar) */}
        <div className="lg:hidden z-50">
          <button 
            onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })}
            className="text-white focus:outline-none p-2 text-2xl"
          >
            {state.isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* MENU-GA MOBILADA (Mobile Sidebar Menu) */}
      <div className={`fixed top-0 right-0 h-full w-[260px] bg-neutral-900/95 backdrop-blur-md shadow-2xl z-40 p-6 pt-24 transform transition-transform duration-300 ease-in-out ${state.isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-5 text-base font-medium">
          <NavLink to="/" onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })} className="hover:text-[#dfb28c] py-2 border-b border-white/5">Home</NavLink>
          <NavLink to="/about-us" onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })} className="hover:text-[#dfb28c] py-2 border-b border-white/5">About Us</NavLink>
          <NavLink to="/services" onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })} className="hover:text-[#dfb28c] py-2 border-b border-white/5">Services</NavLink>
          <NavLink to="/our-team" onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })} className="hover:text-[#dfb28c] py-2 border-b border-white/5">Our Team</NavLink>
          <NavLink to="/contact-us" onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })} className="hover:text-[#dfb28c] py-2 border-b border-white/5">Contact Us</NavLink>
          
          {/* Badanka Booking-ka ee Mobilka */}
          <div className="mt-4" onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })}>
            <BookingButton variant="normal" />
          </div>
        </div>
      </div>

      {/* Badanka dhinaca ka sabaynaya (Book Now) */}
      <BookingButton variant="side" />
    </nav>
  );
};

export default Navbar;