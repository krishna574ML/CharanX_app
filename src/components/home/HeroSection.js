import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Stack, Chip, useMediaQuery, useTheme, Avatar, AvatarGroup, Container, Grid, IconButton } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Speed, StarRate, CheckCircle, BarChart, CampaignOutlined, ShoppingCart, Menu as MenuIcon } from '@mui/icons-material';

const MotionBox = motion(Box);

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 25]);
  const rotate = useTransform(scrollY, [0, 300], [0, 360]);

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
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
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f4c3a 0%, #1a5f4a 50%, #0d3a2e 100%)',
        color: 'white',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Enhanced Header Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          background: 'linear-gradient(180deg, rgba(15, 76, 58, 0.9) 0%, rgba(15, 76, 58, 0.7) 50%, transparent 100%)',
          backdropFilter: 'blur(10px)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2, md: 6 }
        }}
      >
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Enhanced Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '1.75rem', md: '2rem' },
              background: 'linear-gradient(90deg, #22c55e, #86efac)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(34, 197, 94, 0.3)',
              letterSpacing: '-0.02em'
            }}
          >
            charanX
          </Typography>

          {/* Enhanced Navigation */}
          <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {['Home', 'Services', 'Portfolio', 'Blog'].map((item, index) => (
              <Button
                key={item}
                sx={{
                  color: index === 0 ? '#22c55e' : 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': {
                    color: '#22c55e',
                    background: 'rgba(34, 197, 94, 0.1)',
                  },
                  '&::after': index === 0 ? {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: 2,
                    background: '#22c55e',
                    borderRadius: 1,
                  } : {},
                  transition: 'all 0.3s ease'
                }}
              >
                {item}
              </Button>
            ))}
            
            {/* Enhanced CTA Button */}
            <Button
              variant="contained"
              sx={{
                bgcolor: '#22c55e',
                color: 'white',
                fontWeight: 700,
                px: 3,
                py: 1,
                borderRadius: '25px',
                textTransform: 'none',
                fontSize: '0.95rem',
                boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)',
                '&:hover': {
                  bgcolor: '#16a34a',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(34, 197, 94, 0.5)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get Your Free Strategy
            </Button>
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: 'white',
              bgcolor: 'rgba(34, 197, 94, 0.2)',
              '&:hover': { bgcolor: 'rgba(34, 197, 94, 0.3)' }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Container>
      </Box>
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
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          
          {/* Connection Lines */}
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
            
            {/* Dynamic Social Media Connections */}
            <line x1="800" y1="120" x2="950" y2="200" strokeDasharray="4,4" opacity="0.6">
              <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="950" y1="200" x2="1050" y2="350" strokeDasharray="4,4" opacity="0.6">
              <animate attributeName="stroke-dashoffset" values="0;8" dur="2.5s" repeatCount="indefinite" />
            </line>
            <line x1="150" y1="300" x2="200" y2="180" strokeDasharray="3,3" opacity="0.5">
              <animate attributeName="stroke-dashoffset" values="0;6" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="1100" y1="150" x2="1000" y2="450" strokeDasharray="5,5" opacity="0.5">
              <animate attributeName="stroke-dashoffset" values="0;10" dur="2.2s" repeatCount="indefinite" />
            </line>
          </g>
          
          {/* Network Nodes with Pulse Animation */}
          <g>
            <circle cx="100" cy="200" r="8" fill="url(#nodeGradient)">
              <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="150" r="12" fill="url(#nodeGradient)">
              <animate attributeName="r" values="12;16;12" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="500" cy="250" r="10" fill="url(#nodeGradient)">
              <animate attributeName="r" values="10;14;10" dur="3.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="180" r="8" fill="url(#nodeGradient)">
              <animate attributeName="r" values="8;12;8" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="900" cy="300" r="12" fill="url(#nodeGradient)">
              <animate attributeName="r" values="12;16;12" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="400" r="6" fill="url(#nodeGradient)">
              <animate attributeName="r" values="6;10;6" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="350" r="10" fill="url(#nodeGradient)">
              <animate attributeName="r" values="10;14;10" dur="3.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="450" r="8" fill="url(#nodeGradient)">
              <animate attributeName="r" values="8;12;8" dur="2.7s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="380" r="12" fill="url(#nodeGradient)">
              <animate attributeName="r" values="12;16;12" dur="3.1s" repeatCount="indefinite" />
            </circle>
          </g>
          
          {/* Social Media Platform Icons - Removed scattered icons */}
          <g fill="#22c55e" opacity="0.5">
            {/* Keep only the network connection visual elements */}
          </g>
        </svg>


      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ flex: 1, display: 'flex', alignItems: 'center', py: { xs: 4, md: 8 }, pt: { xs: 12, md: 14 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={6}>
            <MotionBox
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              sx={{
                textAlign: { xs: 'center', lg: 'left' },
              }}
            >
              {/* Main Headline */}
              <motion.div variants={staggerItem}>
                <Typography 
                  component="h1" 
                  sx={{ 
                    fontSize: { xs: '2.8rem', md: '4rem', lg: '4.5rem' },
                    fontWeight: 900, 
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    mb: 3,
                    mt: { xs: 4, lg: 0 }
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

              {/* Description */}
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
                  We build passionate communities, amplify your message, and turn your lifelong customers.
                </Typography>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={staggerItem}>
                <Button 
                  size="large" 
                  variant="contained" 
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
            </MotionBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            {/* Right side content can be added here if needed */}
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
                title: 'Digital Advertising',
                description: 'Performance advertising campaigns'
              },
              { 
                icon: <ShoppingCart sx={{ fontSize: 40, color: '#22c55e' }} />,
                title: 'Website and E-commerce Solutions',
                description: 'E-commerce optimization'
              },
            ].map((service, index) => (
              <Grid item xs={12} sm={4} key={index}>
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

