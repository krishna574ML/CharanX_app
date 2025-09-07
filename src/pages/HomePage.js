import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/home/HeroSection_new';
import ServicesOverview from '../components/home/ServicesOverview';
import ProcessSection from '../components/home/ProcessSection';

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
            
            {/* Our Process - 4 modern blocks explaining how we work */}
            <ProcessSection />
        </Box>
    );
};

export default HomePage;