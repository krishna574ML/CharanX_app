import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { BarChart, CampaignOutlined, ShoppingCart, Speed } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/contact');
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };
  
  const keyServices = [
    { 
      icon: <BarChart sx={{ fontSize: 40, color: '#22c55e' }} />,
      title: 'Social Media Marketing',
      description: 'Strategic social media growth'
    },
    { 
      icon: <CampaignOutlined sx={{ fontSize: 40, color: '#22c55e' }} />,
      title: 'Digital Advertising',
      description: 'Performance advertising campaigns'
    },
    { 
      icon: <ShoppingCart sx={{ fontSize: 40, color: '#22c55e' }} />,
      title: 'Website & E-commerce',
      description: 'Engaging and converting web solutions'
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: '#22c55e' }} />,
      title: 'AI & Data Strategy',
      description: 'Unlock insights with AI-driven solutions'
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f4c3a 0%, #1a5f4a 50%, #0d3a2e 100%)',
        color: 'white',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Network Background Graphics */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <svg
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          <g stroke="#22c55e" strokeWidth="1.5" opacity="0.4">
            <line x1="100" y1="200" x2="300" y2="150" />
            <line x1="300" y1="150" x2="500" y2="250" />
            <line x1="500" y1="250" x2="700" y2="180" />
            <line x1="700" y1="180" x2="900" y2="300" />
            <line x1="200" y1="400" x2="400" y2="350" />
            <line x1="400" y1="350" x2="600" y2="450" />
            <line x1="600" y1="450" x2="800" y2="380" />
            <line x1="300" y1="150" x2="400" y2="350" />
            <line x1="500" y1="250" x2="600" y2="450" />
          </g>
          <g>
            <circle cx="100" cy="200" r="8" fill="url(#nodeGradient)"><animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" /></circle>
            <circle cx="300" cy="150" r="12" fill="url(#nodeGradient)"><animate attributeName="r" values="12;16;12" dur="2.5s" repeatCount="indefinite" /></circle>
            <circle cx="500" cy="250" r="10" fill="url(#nodeGradient)"><animate attributeName="r" values="10;14;10" dur="3.2s" repeatCount="indefinite" /></circle>
            <circle cx="700" cy="180" r="8" fill="url(#nodeGradient)"><animate attributeName="r" values="8;12;8" dur="2.8s" repeatCount="indefinite" /></circle>
            <circle cx="900" cy="300" r="12" fill="url(#nodeGradient)"><animate attributeName="r" values="12;16;12" dur="3.5s" repeatCount="indefinite" /></circle>
            <circle cx="200" cy="400" r="6" fill="url(#nodeGradient)"><animate attributeName="r" values="6;10;6" dur="2.2s" repeatCount="indefinite" /></circle>
            <circle cx="400" cy="350" r="10" fill="url(#nodeGradient)"><animate attributeName="r" values="10;14;10" dur="3.8s" repeatCount="indefinite" /></circle>
            <circle cx="600" cy="450" r="8" fill="url(#nodeGradient)"><animate attributeName="r" values="8;12;8" dur="2.7s" repeatCount="indefinite" /></circle>
            <circle cx="800" cy="380" r="12" fill="url(#nodeGradient)"><animate attributeName="r" values="12;16;12" dur="3.1s" repeatCount="indefinite" /></circle>
          </g>
        </svg>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ flex: 1, display: 'flex', alignItems: 'center', py: { xs: 4, md: 8 }, pt: { xs: 12, md: 16 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={7}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              sx={{
                textAlign: { xs: 'center', lg: 'left' },
              }}
            >
              <motion.div variants={staggerItem}>
                <Typography 
                  component="h1" 
                  sx={{ 
                    fontSize: { xs: '2.8rem', md: '4rem', lg: '4.5rem' },
                    fontWeight: 900, 
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    mb: 3,
                  }}
                >
                  Ignite Your Brand.{' '}
                  <Box component="span" sx={{ 
                    background: 'linear-gradient(90deg, #22c55e, #86efac)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Dominate Social.
                  </Box>
                  <br />
                  Experience Rapid Growth.
                </Typography>
              </motion.div>

              <motion.div variants={staggerItem}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    maxWidth: '600px',
                    lineHeight: 1.6,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    mb: 4,
                    mx: { xs: 'auto', lg: 0 }
                  }}
                >
                  We build passionate communities, amplify your message, and turn visitors into lifelong customers.
                </Typography>
              </motion.div>

              <motion.div variants={staggerItem}>
                <Button 
                  size="large" 
                  variant="contained" 
                  onClick={handleStartJourney}
                  sx={{ 
                    px: 6,
                    py: 2,
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    bgcolor: '#22c55e',
                    borderRadius: '50px',
                    textTransform: 'none',
                    boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)',
                    '&:hover': {
                      bgcolor: '#16a34a',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(34, 197, 94, 0.4)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Start Your Growth Journey
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Key Services Section */}
        <Box 
          sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            py: 4,
            mt: 'auto',
            backdropFilter: 'blur(5px)'
          }}
        >
          <Container maxWidth="xl">
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                mb: 3,
                textAlign: 'center',
                fontWeight: 600
              }}
            >
              Key Services
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
              {keyServices.map((service, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 3,
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.08)',
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        {service.icon}
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: 'white',
                          fontWeight: 700,
                          mb: 1
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.7)',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
    </Box>
  );
};

export default HeroSection;
