import React from 'react';
import { Box, Typography, Button, Stack, Chip, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Speed, BarChart, CampaignOutlined, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);

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

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '100vh', sm: '100vh' },
        background: 'linear-gradient(135deg, #0f4c3a 0%, #1a5f4a 50%, #0d3a2e 100%)',
        color: 'white',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        pt: { xs: 5, sm: 6, md: 7 },
      }}
    >

      {/* Network Background Graphics */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Connection lines and nodes */}
        <svg
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          
          {/* Connection Lines */}
          <g stroke="#22c55e" strokeWidth="1" opacity="0.2">
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
          
          {/* Network Nodes with Subtle Animation */}
          <g>
            <circle cx="100" cy="200" r="6" fill="url(#nodeGradient)">
              <animate attributeName="r" values="6;8;6" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="150" r="8" fill="url(#nodeGradient)">
              <animate attributeName="r" values="8;10;8" dur="4.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="500" cy="250" r="7" fill="url(#nodeGradient)">
              <animate attributeName="r" values="7;9;7" dur="4.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="180" r="6" fill="url(#nodeGradient)">
              <animate attributeName="r" values="6;8;6" dur="4.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="900" cy="300" r="8" fill="url(#nodeGradient)">
              <animate attributeName="r" values="8;10;8" dur="4.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="400" r="5" fill="url(#nodeGradient)">
              <animate attributeName="r" values="5;7;5" dur="4.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="350" r="7" fill="url(#nodeGradient)">
              <animate attributeName="r" values="7;9;7" dur="4.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="450" r="6" fill="url(#nodeGradient)">
              <animate attributeName="r" values="6;8;6" dur="4.7s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="380" r="8" fill="url(#nodeGradient)">
              <animate attributeName="r" values="8;10;8" dur="4.1s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>


      </Box>

      {/* Main Content */}
      <Container 
        maxWidth="xl" 
        sx={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          py: { xs: 2, md: 3 }, 
          pt: { xs: 1, md: 2 },
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <MotionBox
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              sx={{
                textAlign: { xs: 'center', sm: 'left' },
                maxWidth: '100%'
              }}
            >
              {/* Trust Badge with Location Focus */}
              <motion.div variants={staggerItem}>
                <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-start', mb: 4 }}>
                  <Chip 
                    label="🏆 #1 Digital Growth Agency" 
                    sx={{
                      bgcolor: 'rgba(34, 197, 94, 0.15)',
                      color: '#22c55e',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                    }} 
                  />
                  <Chip 
                    label="📍 Andhra Pradesh" 
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                    }} 
                  />
                </Stack>
              </motion.div>

              {/* Enhanced Main Headline with Location Focus */}
              <motion.div variants={staggerItem}>
                <Typography 
                  component="h1" 
                  sx={{ 
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 900, 
                    letterSpacing: '-0.02em',
                    lineHeight: { xs: 1.2, md: 1.1 },
                    mb: { xs: 2, md: 3 },
                    px: { xs: 1, sm: 0 }
                  }}
                >
                  Elevate Your Business in{' '}
                  <Box component="span" sx={{ color: '#22c55e', textShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}>
                    Andhra Pradesh
                  </Box>
                  <br />
                  <Box component="span" sx={{ 
                    background: 'linear-gradient(90deg, #ffffff 0%, #22c55e 50%, #ffffff 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Experience Rapid Growth
                  </Box>
                </Typography>
              </motion.div>

              {/* Enhanced Description with Local Focus */}
              <motion.div variants={staggerItem}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.85)', 
                    maxWidth: { xs: '100%', md: '600px' },
                    lineHeight: { xs: 1.5, md: 1.6 },
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem' },
                    mb: { xs: 2, md: 2 },
                    px: { xs: 1, sm: 0 }
                  }}
                >
                  Specialized digital marketing solutions for businesses in <strong style={{ color: '#22c55e' }}>Guntur</strong>, <strong style={{ color: '#22c55e' }}>Vijayawada</strong>, and across Andhra Pradesh. We transform local businesses into market leaders through strategic digital presence.
                </Typography>
                
                {/* Location Highlights */}
                <Stack 
                  direction="row" 
                  spacing={1} 
                  sx={{ 
                    mb: { xs: 3, md: 4 },
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    flexWrap: 'wrap',
                    gap: { xs: 0.5, sm: 1 },
                    px: { xs: 1, sm: 0 }
                  }}
                >
                  <Chip 
                    label="🏢 Guntur Business Hub" 
                    size="small"
                    sx={{ 
                      bgcolor: 'rgba(34, 197, 94, 0.1)', 
                      color: '#22c55e',
                      fontWeight: 500,
                      '&:hover': { bgcolor: 'rgba(34, 197, 94, 0.2)' }
                    }} 
                  />
                  <Chip 
                    label="🌟 Vijayawada Excellence" 
                    size="small"
                    sx={{ 
                      bgcolor: 'rgba(34, 197, 94, 0.1)', 
                      color: '#22c55e',
                      fontWeight: 500,
                      '&:hover': { bgcolor: 'rgba(34, 197, 94, 0.2)' }
                    }} 
                  />
                  <Chip 
                    label="🚀 AP Digital Leaders" 
                    size="small"
                    sx={{ 
                      bgcolor: 'rgba(34, 197, 94, 0.1)', 
                      color: '#22c55e',
                      fontWeight: 500,
                      '&:hover': { bgcolor: 'rgba(34, 197, 94, 0.2)' }
                    }} 
                  />
                </Stack>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div variants={staggerItem}>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={{ xs: 2, sm: 2 }} 
                  sx={{ 
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    px: { xs: 1, sm: 0 },
                    alignItems: { xs: 'center', sm: 'flex-start' }
                  }}
                >
                  <Button 
                    size="large" 
                    variant="contained" 
                    onClick={handleStartJourney}
                    sx={{ 
                      px: { xs: 4, sm: 6 },
                      py: { xs: 2, sm: 2.5 },
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      fontWeight: 700,
                      bgcolor: '#22c55e',
                      borderRadius: '50px',
                      textTransform: 'none',
                      boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)',
                      minWidth: { xs: '200px', sm: 'auto' },
                      '&:hover': {
                        bgcolor: '#16a34a',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 35px rgba(34, 197, 94, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transition: 'left 0.5s ease',
                      },
                      '&:hover::before': {
                        left: '100%'
                      }
                    }}
                  >
                    🚀 Start Your AP Growth Journey
                  </Button>
                  
                  <Button 
                    size="large" 
                    variant="outlined"
                    onClick={() => window.open('https://wa.me/919677303310?text=Hi! I want to learn more about digital marketing services in Andhra Pradesh', '_blank')}
                    sx={{ 
                      px: { xs: 4, sm: 4 },
                      py: { xs: 2, sm: 2.5 },
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                      fontWeight: 600,
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '50px',
                      textTransform: 'none',
                      minWidth: { xs: '200px', sm: 'auto' },
                      '&:hover': {
                        borderColor: '#22c55e',
                        bgcolor: 'rgba(34, 197, 94, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    💬 WhatsApp Us
                  </Button>
                </Stack>
              </motion.div>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Key Services Section */}
        <Box 
          sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            py: 4,
            mt: 'auto'
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
          {[
            { 
              icon: <BarChart sx={{ fontSize: 40, color: '#22c55e' }} />,
              title: 'Social Media Marketing',
              description: 'Strategic social media growth'
            },
            { 
              icon: <CampaignOutlined sx={{ fontSize: 40, color: '#22c55e' }} />,
              title: 'Digital Marketing',
              description: 'Performance advertising campaigns'
            },
            { 
              icon: <ShoppingCart sx={{ fontSize: 40, color: '#22c55e' }} />,
              title: 'Website Solutions',
              description: 'AI powered Website development'
            },
            {
              icon: <Speed sx={{ fontSize: 40, color: '#22c55e' }} />,
              title: 'AI and Data Strategy Systems',
              description: 'Unlock insights and automation with AI-driven data solutions'
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            sx={{
              textAlign: 'center',
              p: 3,
              borderRadius: 2,
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                transform: 'translateY(-5px)',
              },
              transition: 'all 0.3s ease'
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
              </MotionBox>
            </Grid>
          ))}
            </Grid>
          </Container>
        </Box>

        {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.4; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 0.6; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
      `}</style>

      {/* Hidden build timestamp */}
      <Box aria-hidden sx={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}>
        <Typography component="span" variant="caption">{BUILD_TIMESTAMP}</Typography>
      </Box>
    </Box>
  );
};

const BUILD_TIMESTAMP = process.env.REACT_APP_BUILD_TIMESTAMP || new Date().toISOString();

export default HeroSection;
