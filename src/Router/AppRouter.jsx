import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound'; 
import { AppProvider } from '../context/AppContext'; 
import ScrollToTop from '../components/ScrollToTop';
import AppointmentModal from '../components/AppointmentModal';

// Halkan waxaa lagu soo kordhiyey boggaga cusub ee Kooxda iyo Profile-ka Dhakhtarka
import OurTeam from '../pages/OurTeam';
import DoctorsDetail from '../pages/DoctorsDetail';

import Footer from '../components/Footer';


const AppRouter = () => {
  return (
    <AppProvider>
      <ScrollToTop />
      <Navbar />
      <AppointmentModal />
      <div className="min-h-screen bg-gray-50">
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          
          <Route path="/our-team" element={<OurTeam />} />
          
          
          <Route path="/team/:id" element={<DoctorsDetail />} />

          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </AppProvider>
  );
};

export default AppRouter;