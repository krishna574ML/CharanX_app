import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Paper,
  Stack,
  Avatar,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Forum,
  DesignServices,
  RocketLaunch,
  PlayArrow,
  TrendingUp,
  CheckCircle
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const intervalRef = useRef(null);

  const steps = [
    {
      id: 1,
      icon: <Forum sx={{ fontSize: 32 }} />,
      title: 'Discovery & Strategy',
      subtitle: 'Deep Research Phase',
      description: 'We dive deep into your business goals, analyze your market position, and identify growth opportunities through comprehensive research.',
      duration: '1-2 weeks',
      deliverables: ['Market Analysis', 'Strategy Blueprint', 'Timeline Creation'],
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      metrics: [
        { label: 'Research Hours', value: '40+' },
        { label: 'Market Data Points', value: '500+' }
      ]
    },
    {
      id: 2,
      icon: <DesignServices sx={{ fontSize: 32 }} />,
      title: 'Design & Development',
      subtitle: 'Creative Excellence',
      description: 'Our expert team crafts stunning designs and develops robust solutions that align perfectly with your brand identity and business objectives.',
      duration: '2-4 weeks',
      deliverables: ['Custom Design System', 'Development Framework', 'Brand Assets'],
      color: '#EC4899',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',
      bgColor: 'rgba(236, 72, 153, 0.1)',
      metrics: [
        { label: 'Design Iterations', value: '15+' },
        { label: 'Code Quality Score', value: '98%' }
      ]
    },
    {
      id: 3,
      icon: <RocketLaunch sx={{ fontSize: 32 }} />,
      title: 'Launch & Implementation',
      subtitle: 'Go-Live Strategy',
      description: 'Strategic launch with comprehensive testing, performance optimization, and seamless deployment across all platforms.',
      duration: '1-2 weeks',
      deliverables: ['Launch Strategy', 'Performance Testing', 'Live Deployment'],
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
      bgColor: 'rgba(245, 158, 11, 0.1)',
      metrics: [
        { label: 'Success Rate', value: '99.8%' },
        { label: 'Load Time', value: '<2s' }
      ]
    },
    {
      id: 4,
      icon: <TrendingUp sx={{ fontSize: 32 }} />,
      title: 'Growth & Optimization',
      subtitle: 'Continuous Improvement',
      description: 'Ongoing monitoring, data-driven optimizations, and strategic enhancements to ensure sustained growth and maximum ROI.',
      duration: 'Ongoing',
      deliverables: ['Performance Reports', 'Growth Analytics', 'Optimization Plans'],
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #22C55E 100%)',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      metrics: [
        { label: 'Average Growth', value: '300%' },
        { label: 'Client Retention', value: '95%' }
      ]
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, steps.length]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box 
      id="process" 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(180deg, rgba(99,102,241,0.02) 0%, rgba(255,255,255,1) 50%, rgba(16,185,129,0.02) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)
          `,
          zIndex: 0
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <Chip
              label="How We Work"
              sx={{
                mb: 3,
                px: 3,
                py: 1,
                background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.9rem',
                borderRadius: 6
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 3,
                background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 50%, #059669 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}
            >
              A Clear Path from Idea to Impact
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 800, 
                mx: 'auto', 
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.2rem' }
              }}
            >
              Our four-step process ensures transparency, collaboration, and measurable results every step of the way.
            </Typography>
          </motion.div>

          {/* Auto-play Control */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              variant="outlined"
              startIcon={<PlayArrow />}
              onClick={toggleAutoPlay}
              sx={{
                mt: 4,
                borderRadius: 8,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderColor: isPlaying ? 'success.main' : 'divider',
                color: isPlaying ? 'success.main' : 'text.secondary',
                '&:hover': {
                  borderColor: 'success.main',
                  bgcolor: 'rgba(34, 197, 94, 0.05)'
                }
              }}
            >
              {isPlaying ? 'Pause' : 'Watch'} Process Flow
            </Button>
          </motion.div>
        </Box>

        {/* Interactive Process Timeline */}
        <Box sx={{ mb: 8 }}>
          {/* Step Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Paper
                    onClick={() => handleStepClick(index)}
                    sx={{
                      p: 2,
                      cursor: 'pointer',
                      background: activeStep === index ? step.gradient : 'rgba(255,255,255,0.8)',
                      border: `2px solid ${activeStep === index ? step.color : 'transparent'}`,
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: step.color,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 10px 25px ${step.color}30`
                      }
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar
                        sx={{
                          width: 48,
                          height: 48,
                          background: activeStep === index ? 'rgba(255,255,255,0.2)' : step.gradient,
                          color: activeStep === index ? 'white' : 'white'
                        }}
                      >
                        {step.icon}
                      </Avatar>
                      <Box>
                        <Typography 
                          variant="h6" 
                          fontWeight="700"
                          sx={{ 
                            color: activeStep === index ? 'white' : 'text.primary',
                            fontSize: { xs: '0.9rem', md: '1rem' }
                          }}
                        >
                          Step {step.id}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: activeStep === index ? 'rgba(255,255,255,0.8)' : 'text.secondary',
                            fontSize: { xs: '0.75rem', md: '0.85rem' }
                          }}
                        >
                          {step.subtitle}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Active Step Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  background: `linear-gradient(145deg, ${steps[activeStep].bgColor} 0%, rgba(255,255,255,0.9) 100%)`,
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${steps[activeStep].color}40`,
                  borderRadius: 6,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background Pattern */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 200,
                    height: 200,
                    background: steps[activeStep].gradient,
                    borderRadius: '50%',
                    opacity: 0.1,
                    transform: 'translate(50%, -50%)'
                  }}
                />

                <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} alignItems="center">
                  {/* Content */}
                  <Box sx={{ flex: 1, zIndex: 2 }}>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          background: steps[activeStep].gradient,
                          boxShadow: `0 10px 30px ${steps[activeStep].color}40`
                        }}
                      >
                        {steps[activeStep].icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h3" fontWeight="800" sx={{ mb: 1 }}>
                          {steps[activeStep].title}
                        </Typography>
                        <Chip
                          label={steps[activeStep].duration}
                          size="small"
                          sx={{
                            background: steps[activeStep].gradient,
                            color: 'white',
                            fontWeight: 600
                          }}
                        />
                      </Box>
                    </Stack>

                    <Typography 
                      variant="h6" 
                      color="text.secondary" 
                      sx={{ mb: 4, lineHeight: 1.7, fontSize: { xs: '1rem', md: '1.1rem' } }}
                    >
                      {steps[activeStep].description}
                    </Typography>

                    {/* Deliverables */}
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6" fontWeight="700" sx={{ mb: 2 }}>
                        Key Deliverables:
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {steps[activeStep].deliverables.map((deliverable, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Chip
                              icon={<CheckCircle sx={{ fontSize: 16 }} />}
                              label={deliverable}
                              variant="outlined"
                              sx={{
                                borderColor: steps[activeStep].color,
                                color: steps[activeStep].color,
                                fontWeight: 600,
                                '&:hover': {
                                  bgcolor: steps[activeStep].bgColor
                                }
                              }}
                            />
                          </motion.div>
                        ))}
                      </Stack>
                    </Box>
                  </Box>

                  {/* Metrics Dashboard */}
                  <Box sx={{ minWidth: { xs: '100%', lg: 300 }, zIndex: 2 }}>
                    <Paper
                      elevation={8}
                      sx={{
                        p: 4,
                        background: 'rgba(255,255,255,0.95)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 4,
                        border: '1px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      <Typography variant="h6" fontWeight="700" sx={{ mb: 3, textAlign: 'center' }}>
                        Performance Metrics
                      </Typography>
                      <Stack spacing={3}>
                        {steps[activeStep].metrics.map((metric, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                          >
                            <Box
                              sx={{
                                p: 2,
                                background: steps[activeStep].bgColor,
                                borderRadius: 3,
                                border: `1px solid ${steps[activeStep].color}30`
                              }}
                            >
                              <Typography variant="h4" fontWeight="900" color={steps[activeStep].color}>
                                {metric.value}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" fontWeight="600">
                                {metric.label}
                              </Typography>
                            </Box>
                          </motion.div>
                        ))}
                      </Stack>
                    </Paper>
                  </Box>
                </Stack>
              </Paper>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Process Flow Visualization */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" fontWeight="700" sx={{ mb: 4 }}>
            From Start to Success
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={{ xs: 2, md: 4 }} 
            justifyContent="center"
            alignItems="center"
          >
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      background: step.gradient,
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 900,
                      boxShadow: `0 8px 25px ${step.color}40`,
                      cursor: 'pointer'
                    }}
                    onClick={() => handleStepClick(index)}
                  >
                    {step.id}
                  </Avatar>
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.1 }}
                  >
                    <Box
                      sx={{
                        width: { xs: 2, md: 60 },
                        height: { xs: 60, md: 2 },
                        background: `linear-gradient(${isMobile ? '180deg' : '90deg'}, ${step.color}, ${steps[index + 1].color})`,
                        borderRadius: 1
                      }}
                    />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ProcessSection;
