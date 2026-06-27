import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Footer from '../components/Footer';
// import Products from '../pages/Products';
// import ProductsList from '../components/ProductsList'; 
// import ProductDetail from '../components/ProductDetail';
import NotFound from '../components/NotFound'; 
import { AppProvider } from '../context/AppContext'; 


import ScrollToTop from '../components/ScrollToTop';
// import Checkout from '../pages/Checkout';

import AppointmentModal from '../components/AppointmentModal';

const AppRouter = () => {
  return (
    <AppProvider>
      <ScrollToTop />
      <Navbar />
      <AppointmentModal />
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About/>} />
          {/* <Route path="/About" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductsList />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route> */}
          
          
          
          {/* <Route path="/contact" element={<Contacts />} />  */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </AppProvider>
  );
};

export default AppRouter;