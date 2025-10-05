import React from 'react';
import { Box, Typography, Button, Stack, Chip, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Speed, BarChart, CampaignOutlined, ShoppingCart, TrendingUp, RocketLaunch } from '@mui/icons-material';
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '100vh', sm: '100vh' },
        background: 'linear-gradient(135deg, #0a2f23 0%, #0f4c3a 25%, #1a5f4a 50%, #0f4c3a 75%, #0a2f23 100%)',
        color: 'white',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        pt: { xs: 8, sm: 9, md: 10 },
      }}
    >

      {/* Enhanced Animated Background */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Animated Gradient Orbs */}
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '400px', md: '600px' },
            height: { xs: '400px', md: '600px' },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
            animation: 'float 8s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '350px', md: '500px' },
            height: { xs: '350px', md: '500px' },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
            bottom: '-15%',
            left: '-5%',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '-2s',
            filter: 'blur(50px)',
          }}
        />
        
        {/* Geometric Shapes */}
        <svg
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0, opacity: 0.15 }}
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Animated Geometric Shapes */}
          <polygon points="200,100 250,180 150,180" fill="url(#shapeGradient)" filter="url(#glow)">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 200 140"
              to="360 200 140"
              dur="20s"
              repeatCount="indefinite"
            />
          </polygon>
          
          <circle cx="900" cy="150" r="40" fill="url(#shapeGradient)" filter="url(#glow)" opacity="0.5">
            <animate attributeName="r" values="40;50;40" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite" />
          </circle>
          
          <rect x="700" y="500" width="80" height="80" fill="url(#shapeGradient)" filter="url(#glow)" opacity="0.4">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 740 540"
              to="360 740 540"
              dur="15s"
              repeatCount="indefinite"
            />
          </rect>
          
          {/* Connection Grid */}
          <g stroke="#22c55e" strokeWidth="1" opacity="0.1">
            <line x1="0" y1="200" x2="1200" y2="200" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
            </line>
            <line x1="0" y1="400" x2="1200" y2="400" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1.5s" repeatCount="indefinite" />
            </line>
            <line x1="0" y1="600" x2="1200" y2="600" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
            </line>
          </g>
          
          {/* Floating Particles */}
          <g>
            {[...Array(15)].map((_, i) => (
              <circle
                key={i}
                cx={100 + i * 80}
                cy={150 + (i % 3) * 200}
                r="3"
                fill="#22c55e"
                opacity="0.3"
              >
                <animate
                  attributeName="cy"
                  values={`${150 + (i % 3) * 200};${100 + (i % 3) * 200};${150 + (i % 3) * 200}`}
                  dur={`${3 + (i % 3)}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur={`${2 + (i % 2)}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
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
          py: { xs: 3, md: 4 }, 
          px: { xs: 2, sm: 3, md: 4 },
          position: 'relative',
          zIndex: 1
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={12} lg={10}>
            <MotionBox
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              sx={{
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              {/* Premium Badge */}
              <motion.div variants={staggerItem}>
                <Stack 
                  direction="row" 
                  spacing={1.5} 
                  sx={{ 
                    justifyContent: { xs: 'center', sm: 'flex-start' }, 
                    mb: 3,
                    flexWrap: 'wrap',
                    gap: 1.5
                  }}
                >
                  <Chip 
                    icon={<RocketLaunch sx={{ fontSize: 18, color: '#22c55e' }} />}
                    label="#1 Digital Growth Agency" 
                    sx={{
                      bgcolor: 'rgba(34, 197, 94, 0.12)',
                      backdropFilter: 'blur(10px)',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      py: 2.5,
                      px: 1,
                      '&:hover': {
                        bgcolor: 'rgba(34, 197, 94, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease'
                    }} 
                  />
                  <Chip 
                    icon={<TrendingUp sx={{ fontSize: 18, color: '#10b981' }} />}
                    label="Andhra Pradesh Leaders" 
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(10px)',
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      py: 2.5,
                      px: 1,
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.12)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease'
                    }} 
                  />
                </Stack>
              </motion.div>

              {/* Bold Headline with Gradient */}
              <motion.div variants={staggerItem}>
                <Typography 
                  component="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                    fontWeight: 900, 
                    letterSpacing: '-0.03em',
                    lineHeight: { xs: 1.15, md: 1.1 },
                    mb: 3,
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  Transform Your{' '}
                  <Box 
                    component="span" 
                    sx={{ 
                      background: 'linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: 'none',
                      display: 'inline-block',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-8px',
                        left: 0,
                        width: '100%',
                        height: '6px',
                        background: 'linear-gradient(90deg, #22c55e, transparent)',
                        borderRadius: '3px'
                      }
                    }}
                  >
                    Business
                  </Box>
                  <br />
                  Into a Digital{' '}
                  <Box 
                    component="span" 
                    sx={{ 
                      background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontStyle: 'italic'
                    }}
                  >
                    Powerhouse
                  </Box>
                </Typography>
              </motion.div>

              {/* Enhanced Description */}
              <motion.div variants={staggerItem}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    maxWidth: { xs: '100%', md: '700px' },
                    lineHeight: 1.7,
                    fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
                    mb: 3,
                    fontWeight: 500,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Leading digital marketing agency in <Box component="span" sx={{ color: '#22c55e', fontWeight: 700 }}>Andhra Pradesh</Box>. 
                  We specialize in turning <Box component="span" sx={{ color: '#10b981', fontWeight: 600 }}>Guntur</Box> and <Box component="span" sx={{ color: '#10b981', fontWeight: 600 }}>Vijayawada</Box> businesses 
                  into market dominators through data-driven strategies and cutting-edge digital solutions.
                </Typography>
              </motion.div>

              {/* Stats Row */}
              <motion.div variants={staggerItem}>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3}
                  sx={{ 
                    mb: 4,
                    justifyContent: { xs: 'center', sm: 'flex-start' }
                  }}
                >
                  {[
                    { number: '500+', label: 'Projects Delivered' },
                    { number: '10X', label: 'Average ROI' },
                    { number: '98%', label: 'Client Satisfaction' }
                  ].map((stat, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        textAlign: { xs: 'center', sm: 'left' },
                        position: 'relative'
                      }}
                    >
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          fontWeight: 900, 
                          color: '#22c55e',
                          mb: 0.5,
                          textShadow: '0 0 30px rgba(34, 197, 94, 0.5)'
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </motion.div>

              {/* Premium CTA Buttons */}
              <motion.div variants={staggerItem}>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2.5} 
                  sx={{ 
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    alignItems: { xs: 'center', sm: 'flex-start' }
                  }}
                >
                  <Button 
                    size="large" 
                    variant="contained" 
                    onClick={handleStartJourney}
                    sx={{ 
                      px: { xs: 5, sm: 7 },
                      py: { xs: 2.5, sm: 3 },
                      fontSize: { xs: '1.05rem', sm: '1.15rem' },
                      fontWeight: 800,
                      bgcolor: '#22c55e',
                      borderRadius: '60px',
                      textTransform: 'none',
                      boxShadow: '0 10px 40px rgba(34, 197, 94, 0.4)',
                      minWidth: { xs: '280px', sm: 'auto' },
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        bgcolor: '#16a34a',
                        transform: 'translateY(-4px) scale(1.02)',
                        boxShadow: '0 15px 50px rgba(34, 197, 94, 0.6)',
                      },
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        transition: 'left 0.6s ease',
                      },
                      '&:hover::before': {
                        left: '100%'
                      }
                    }}
                  >
                    🚀 Start Growing Today
                  </Button>
                  
                  <Button 
                    size="large" 
                    variant="outlined"
                    onClick={() => window.open('https://wa.me/919677303310?text=Hi! I want to learn more about digital marketing services in Andhra Pradesh', '_blank')}
                    sx={{ 
                      px: { xs: 5, sm: 6 },
                      py: { xs: 2.5, sm: 3 },
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      fontWeight: 700,
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                      borderWidth: '2px',
                      borderRadius: '60px',
                      textTransform: 'none',
                      minWidth: { xs: '280px', sm: 'auto' },
                      backdropFilter: 'blur(10px)',
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      '&:hover': {
                        borderColor: '#22c55e',
                        borderWidth: '2px',
                        bgcolor: 'rgba(34, 197, 94, 0.15)',
                        transform: 'translateY(-4px) scale(1.02)',
                        boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)',
                      },
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    💬 Get Free Consultation
                  </Button>
                </Stack>
              </motion.div>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Premium Services Section with Glassmorphism */}
        <Box 
          sx={{ 
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(34, 197, 94, 0.05) 100%)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            py: { xs: 5, md: 6 },
            mt: 'auto',
            position: 'relative',
            backdropFilter: 'blur(20px)',
          }}
        >
          <Container maxWidth="xl">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  color: 'white',
                  mb: 1.5,
                  textAlign: 'center',
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', md: '2.25rem' }
                }}
              >
                Our Expertise
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 5,
                  textAlign: 'center',
                  maxWidth: '600px',
                  mx: 'auto',
                  fontSize: { xs: '0.95rem', md: '1.05rem' }
                }}
              >
                Comprehensive digital solutions designed to accelerate your business growth
              </Typography>
            </MotionBox>
            
            <Grid container spacing={3} justifyContent="center">
          {[
            { 
              icon: <BarChart sx={{ fontSize: { xs: 45, md: 50 }, color: '#22c55e' }} />,
              title: 'Social Media Marketing',
              description: 'Build engaged communities and amplify your brand voice across all platforms',
              gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)'
            },
            { 
              icon: <CampaignOutlined sx={{ fontSize: { xs: 45, md: 50 }, color: '#10b981' }} />,
              title: 'Performance Marketing',
              description: 'Data-driven campaigns that deliver measurable results and maximum ROI',
              gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.1) 100%)'
            },
            { 
              icon: <ShoppingCart sx={{ fontSize: { xs: 45, md: 50 }, color: '#059669' }} />,
              title: 'Web & E-commerce',
              description: 'Stunning websites and e-commerce solutions that convert visitors into customers',
              gradient: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(4, 120, 87, 0.1) 100%)'
            },
            {
              icon: <Speed sx={{ fontSize: { xs: 45, md: 50 }, color: '#047857' }} />,
              title: 'AI & Automation',
              description: 'Leverage AI-powered tools to automate workflows and gain competitive insights',
              gradient: 'linear-gradient(135deg, rgba(4, 120, 87, 0.15) 0%, rgba(6, 95, 70, 0.1) 100%)'
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
                sx={{
                  textAlign: 'center',
                  p: { xs: 3.5, md: 4 },
                  borderRadius: 4,
                  background: service.gradient,
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    boxShadow: '0 12px 48px rgba(34, 197, 94, 0.3)',
                    '& .service-icon': {
                      transform: 'scale(1.1) rotateY(360deg)',
                    }
                  },
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    transition: 'left 0.6s ease',
                  },
                  '&:hover::before': {
                    left: '100%'
                  }
                }}
              >
            <Box 
              className="service-icon"
              sx={{ 
                mb: 2.5,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transformStyle: 'preserve-3d'
              }}
            >
              {service.icon}
            </Box>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'white',
                fontWeight: 800,
                mb: 1.5,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              {service.title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.7,
                fontSize: { xs: '0.9rem', md: '0.95rem' }
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

        {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
          }
          25% { 
            transform: translateY(-20px) translateX(10px); 
          }
          50% { 
            transform: translateY(-10px) translateX(-10px); 
          }
          75% { 
            transform: translateY(-30px) translateX(5px); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.6; 
          }
          50% { 
            transform: scale(1.05); 
            opacity: 0.8; 
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.6);
          }
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
