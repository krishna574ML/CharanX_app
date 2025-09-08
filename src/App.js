import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import ScrollToTop from './components/common/ScrollToTopLeftSide';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPageNew from './pages/ContactPageNew';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, pt: { xs: 8, md: 10 } }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPageNew />} />
          </Routes>
        </Box>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </Box>
    </Router>
  );
}

export default App;
