import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, Chip, Container, Grid, alpha } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  TrendingUp, 
  Rocket, 
  EmojiEvents, 
  ArrowForward,
  PlayArrow,
  CheckCircle
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const HeroSectionRevamped = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStartJourney = () => {
    navigate('/contact');
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { value: '200+', label: 'Projects Delivered', icon: <Rocket /> },
    { value: '98%', label: 'Client Satisfaction', icon: <EmojiEvents /> },
    { value: '5X', label: 'Avg. ROI Growth', icon: <TrendingUp /> },
  ];

  const features = [
    'Mobile-First Design',
    'Lightning Fast Performance',
    'SEO Optimized',
    'Data-Driven Results'
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'calc(100vh - 64px)', md: '100vh' },
        background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 6 },
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {/* Gradient Orbs */}
        <MotionBox
          style={{ y: y1, opacity }}
          sx={{
            position: 'absolute',
            top: '10%',
            left: '-5%',
            width: { xs: 300, md: 500 },
            height: { xs: 300, md: 500 },
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        <MotionBox
          style={{ y: y2, opacity }}
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '-5%',
            width: { xs: 250, md: 400 },
            height: { xs: 250, md: 400 },
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Animated Grid Pattern */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
            '@keyframes gridMove': {
              '0%': { transform: 'translate(0, 0)' },
              '100%': { transform: 'translate(50px, 50px)' },
            },
          }}
        />

        {/* Floating Icons */}
        {mounted && [
          { top: '15%', left: '15%', delay: 0, icon: '💡' },
          { top: '25%', right: '20%', delay: 0.5, icon: '🚀' },
          { bottom: '30%', left: '10%', delay: 1, icon: '⚡' },
          { bottom: '20%', right: '15%', delay: 1.5, icon: '🎯' },
        ].map((item, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              scale: [0, 1.2, 1, 0],
              y: [0, -20, -40, -60]
            }}
            transition={{ 
              duration: 4, 
              delay: item.delay,
              repeat: Infinity,
              repeatDelay: 4
            }}
            sx={{
              position: 'absolute',
              ...item,
              fontSize: { xs: '1.5rem', md: '2rem' },
              filter: 'drop-shadow(0 4px 8px rgba(16, 185, 129, 0.3))',
            }}
          >
            {item.icon}
          </MotionBox>
        ))}
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Trust Badges */}
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={1.5} 
                sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}
              >
                <Chip 
                  icon={<EmojiEvents sx={{ fontSize: 20 }} />}
                  label="Award Winning Agency" 
                  sx={{
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fde047 100%)',
                    color: '#713f12',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    px: 1,
                    boxShadow: '0 4px 12px rgba(253, 224, 71, 0.3)',
                  }} 
                />
                <Chip 
                  label="📍 Andhra Pradesh" 
                  sx={{
                    background: alpha('#10b981', 0.12),
                    color: '#065f46',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    backdropFilter: 'blur(10px)',
                  }} 
                />
                <Chip 
                  label="🔥 200+ Happy Clients" 
                  sx={{
                    background: alpha('#ef4444', 0.12),
                    color: '#991b1b',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                  }} 
                />
              </Stack>

              {/* Main Headline */}
              <Typography 
                component="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                  fontWeight: 900, 
                  letterSpacing: '-0.04em',
                  lineHeight: 1.1,
                  mb: 3,
                  background: 'linear-gradient(135deg, #065f46 0%, #10b981 50%, #14b8a6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 40px rgba(16, 185, 129, 0.15)',
                }}
              >
                Transform Your Digital Presence
              </Typography>

              {/* Subheadline */}
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'text.secondary', 
                  mb: 4,
                  fontSize: { xs: '1.125rem', md: '1.375rem' },
                  lineHeight: 1.7,
                  fontWeight: 500,
                  maxWidth: 600,
                }}
              >
                We craft <Box component="span" sx={{ fontWeight: 700, color: 'primary.main' }}>mobile-first</Box> digital experiences that drive real results. 
                From stunning websites to data-driven marketing campaigns.
              </Typography>

              {/* Feature List */}
              <Stack spacing={1.5} sx={{ mb: 4 }}>
                {features.map((feature, index) => (
                  <MotionBox
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <CheckCircle 
                        sx={{ 
                          color: 'primary.main', 
                          fontSize: { xs: 20, md: 24 },
                          filter: 'drop-shadow(0 2px 4px rgba(16, 185, 129, 0.3))',
                        }} 
                      />
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 600, 
                          color: 'text.primary',
                          fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                        }}
                      >
                        {feature}
                      </Typography>
                    </Stack>
                  </MotionBox>
                ))}
              </Stack>

              {/* CTA Buttons */}
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                sx={{ mb: { xs: 4, md: 6 } }}
              >
                <MotionButton
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={handleStartJourney}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    px: 4,
                    py: 1.75,
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)',
                    '&:hover': {
                      boxShadow: '0 15px 50px rgba(16, 185, 129, 0.5)',
                      background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                    },
                  }}
                >
                  Start Your Journey
                </MotionButton>
                <MotionButton
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrow />}
                  onClick={handleExploreServices}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    borderWidth: 2,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    px: 4,
                    py: 1.75,
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    background: alpha('#ffffff', 0.8),
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      borderWidth: 2,
                      background: alpha('#10b981', 0.08),
                    },
                  }}
                >
                  Explore Services
                </MotionButton>
              </Stack>

              {/* Stats */}
              <Grid container spacing={{ xs: 2, md: 3 }}>
                {stats.map((stat, index) => (
                  <Grid item xs={4} key={index}>
                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      sx={{
                        textAlign: { xs: 'center', sm: 'left' },
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 3,
                        background: alpha('#ffffff', 0.7),
                        backdropFilter: 'blur(10px)',
                        border: '1px solid',
                        borderColor: alpha('#10b981', 0.2),
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 12px 32px rgba(16, 185, 129, 0.2)',
                        },
                      }}
                    >
                      <Box sx={{ color: 'primary.main', mb: 0.5, display: { xs: 'none', sm: 'block' } }}>
                        {stat.icon}
                      </Box>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontWeight: 900, 
                          color: 'primary.main',
                          fontSize: { xs: '1.5rem', md: '2rem' },
                          mb: 0.5,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          fontWeight: 600,
                          fontSize: { xs: '0.75rem', md: '0.875rem' },
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </MotionBox>
                  </Grid>
                ))}
              </Grid>
            </MotionBox>
          </Grid>

          {/* Right Side - 3D Illustration/Image Placeholder */}
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              sx={{
                position: 'relative',
                height: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Placeholder for 3D illustration or hero image */}
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 6,
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
                  border: '2px solid',
                  borderColor: alpha('#10b981', 0.2),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Animated Rings */}
                {[1, 2, 3].map((i) => (
                  <Box
                    key={i}
                    sx={{
                      position: 'absolute',
                      width: `${i * 33}%`,
                      height: `${i * 33}%`,
                      borderRadius: '50%',
                      border: '2px solid',
                      borderColor: alpha('#10b981', 0.2),
                      animation: `spin${i} ${10 + i * 2}s linear infinite`,
                      '@keyframes spin1': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                      },
                      '@keyframes spin2': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(-360deg)' },
                      },
                      '@keyframes spin3': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                      },
                    }}
                  />
                ))}
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  CharanX
                </Typography>
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Indicator */}
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        sx={{
          position: 'absolute',
          bottom: { xs: 20, md: 40 },
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 50,
            border: '2px solid',
            borderColor: alpha('#10b981', 0.4),
            borderRadius: 20,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: 'primary.main',
              animation: 'scrollDot 1.5s infinite',
              '@keyframes scrollDot': {
                '0%': { top: 8, opacity: 1 },
                '100%': { top: 32, opacity: 0 },
              },
            },
          }}
        />
      </MotionBox>
    </Box>
  );
};

export default HeroSectionRevamped;
