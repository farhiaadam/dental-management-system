import React, { createContext, useContext, useReducer } from 'react';

import Doctor1 from '../assets/Doctor1.jpeg';
import Doctor2 from '../assets/Doctor2.jpeg';
import Doctor3 from '../assets/Doctor3.jpeg';
import Doctor4 from '../assets/Doctor4.jpeg';
import Doctor5 from '../assets/Doctor5.jpeg';
import Doctor6 from '../assets/Doctor6.jpeg';

const initialState = {
  isModalOpen: false,
  isMobileMenuOpen: false,
  appointments: [],
  // Global management state for clinic doctors data
  doctors: [
    {
      id: 1,
      name: "Dr. Avinash Shama Rao",
      specialty: "Specialist Endodontist",
      degrees: "BDS, MDS",
      experience: "More Than 17 Years Of Experience",
      languages: "English, Hindi",
      location: "Mogadishu",
      image: Doctor1, 
      treatments: [
        "Aesthetic Dentistry",
        "Endodontic Retreatment",
        "Endodontic Surgeries",
        "Management Of Pediatric And Adult Traumatic Injuries",
        "Single Visit Root Canal Treatment"
      ]
    },
    {
      id: 2,
      name: "Dr. Nishtha Gadkari",
      specialty: "Cosmetic Dentist",
      degrees: "BDS",
      experience: "More Than 10 Years Of Experience",
      languages: "English",
      location: "Hargeysa",
      image: Doctor2,
      treatments: ["Teeth Whitening", "Veneers And Lumineers", "Smile Makeover"]
    },
    {
      id: 3,
      name: "Dr. Neel Shah",
      specialty: "Implantologist",
      degrees: "BDS, MDS",
      experience: "More Than 12 Years Of Experience",
      languages: "English, Gujarati",
      location: "Garowe",
      image: Doctor3,
      treatments: ["Dental Implants", "Dental Bridges", "Crowns"]
    },
    {
      id: 4,
      name: "Dr. Can Burak",
      specialty: "Orthodontist",
      degrees: "BDS, MSc Orthodontics",
      experience: "More Than 8 Years Of Experience",
      languages: "English, Arabic, Somali",
      location: "Mogadishu",
      image: Doctor4,
      treatments: ["Clear Aligners", "Traditional Braces", "Surgical Orthodontics", "Retainers"]
    },
    {
      id: 5,
      name: "Dr. Kerem Emre",
      specialty: "Oral & Maxillofacial Surgeon",
      degrees: "BDS, FDSRCS",
      experience: "More Than 15 Years Of Experience",
      languages: "English, Somali",
      location: "Hargeysa",
      image: Doctor5,
      treatments: ["Wisdom Teeth Extraction", "Dental Implants", "Jaw Reconstruction", "Facial Trauma Surgery"]
    },
    {
      id: 6,
      name: "Dr. Omer Aras",
      specialty: "Pediatric Dentist",
      degrees: "BDS, MDS",
      experience: "More Than 7 Years Of Experience",
      languages: "English, Arabic",
      location: "Garowe",
      image: Doctor6,
      treatments: ["Child Dental Care", "Fluoride Applications", "Dental Sealants", "Space Maintainers"]
    }
  ]
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_APPOINTMENT_MODAL':
      return { ...state, isModalOpen: true };
    case 'CLOSE_APPOINTMENT_MODAL':
      return { ...state, isModalOpen: false };
    case 'TOGGLE_MOBILE_MENU':
      return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
    case 'ADD_APPOINTMENT':
      return { 
        ...state, 
        appointments: [...state.appointments, action.payload],
        isModalOpen: false 
      };
    default:
      return state;
  }
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);