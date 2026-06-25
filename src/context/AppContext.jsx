import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  isModalOpen: false,
  isMobileMenuOpen: false, // Kani wuxuu maamuli doonaa Navbar-ka talifoonada
  appointments: [] // Halkaan waxaa lagu kaydin doonaa ballamaha cusub
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
        isModalOpen: false // Xir modal-ka marka ballanta la kaydiyo
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