import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#5b58a6] text-gray-300">

      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-serif text-black tracking-wider">
            Velora
          </h2>

          <p className="text-[#dfb28c] text-sm mt-1">
            Dental & Aesthetic Clinic
          </p>

          <p className="mt-6 leading-7 text-sm">
            We provide exceptional dental and aesthetic care with modern
            technology, experienced professionals, and personalized treatment
            plans.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-black font-semibold text-lg mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[#dfb28c]">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-[#dfb28c]">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#dfb28c]">Services</Link></li>
            <li><Link to="/our-team" className="hover:text-[#dfb28c]">Our Team</Link></li>
            <li><Link to="/contact-us" className="hover:text-[#dfb28c]">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-black font-semibold text-lg mb-6">
            Our Services
          </h3>

          <ul className="space-y-3 text-sm">
            <li>General Dentistry</li>
            <li>Teeth Whitening</li>
            <li>Dental Implants</li>
            <li>Smile Makeover</li>
            <li>Facial Aesthetics</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-black font-semibold text-lg mb-6">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm">

            <p>📍 Mogadishu, Somalia</p>

            <p>📞 +252 61 XXX XXXX</p>

            <p>✉ info@veloraclinic.com</p>

            <div className="flex gap-4 pt-3 text-xl">
              <a href="#">📘</a>
              <a href="#">📷</a>
              <a href="#">▶️</a>
              <a href="#">💼</a>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className=" : border-t border-white/10 py-6 text-center text-sm text-black">
        © {new Date().getFullYear()} Velora Dental & Aesthetic Clinic. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;