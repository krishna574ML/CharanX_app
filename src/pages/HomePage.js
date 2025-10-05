import React from 'react';
import { Box } from '@mui/material';
import HeroSectionRevamped from '../components/home/HeroSectionRevamped';
import ServicesOverviewRevamped from '../components/home/ServicesOverviewRevamped';
import ProcessSectionRevamped from '../components/home/ProcessSectionRevamped';

const HomePage = () => {
    return (
        <Box sx={{ 
            width: '100%',
            overflowX: 'hidden', // Prevent horizontal scroll
            bgcolor: 'background.default',
            color: 'text.primary'
        }}>
            {/* Hero Section - Ultra-modern with gradient background */}
            <HeroSectionRevamped />
            
            {/* Services Overview - Enhanced cards with hover effects */}
            <ServicesOverviewRevamped />
            
            {/* Our Process - Step-by-step journey visualization */}
            <ProcessSectionRevamped />
        </Box>
    );
};

export default HomePage;