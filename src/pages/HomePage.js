import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
    return (
        <Box sx={{ 
            width: '100%',
            overflowX: 'hidden', // Prevent horizontal scroll
            bgcolor: 'background.default',
            color: 'text.primary'
        }}>
            {/* Hero Section - Full viewport height with engaging content */}
            <HeroSection />
            
            {/* Services Overview - Showcase our expertise */}
            <ServicesOverview />
            
            {/* Client Testimonials - Social proof and results */}
            <Testimonials />
        </Box>
    );
};

export default HomePage;