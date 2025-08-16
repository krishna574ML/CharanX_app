import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import {
  Search,
  Edit,
  Campaign,
  AutoAwesome,
  ExpandMore,
  ChevronRight,
  Code,
  PieChart,
  CameraEnhance,
  Group,
  Star,
} from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// Helpers
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const lerp = (a, b, t) => a + (b - a) * t;

// Professional Color Palette (Dark Theme)
const professionalColors = {
  primary: "#0B1527",
  secondary: "#192842",
  accent: "#4A90E2", // A clean, trustworthy blue
  light: "#FFFFFF",
  muted: "#BCC5D9",
  text: "#E0E6F0",
  subtleAccent: "rgba(74, 144, 226, 0.1)",
};

// Slides: per-slide styles, text, and animations
// Simplified variants and more consistent professional styling
const heroSlides = [
  {
    headline: "Elevate your brand with digital marketing excellence.",
    text: "Strategically craft your digital presence with data-driven content that connects and converts.",
    bgImage: "url('https://images.unsplash.com/photo-1557804506-6632f05c0f71?q=80&w=1600&auto=format&fit=crop')",
    cardTitle: "Content Strategy",
    cardDescription: "Curate, create, and deploy powerful content across all channels to tell your story.",
    cardServices: [
      { name: "Content Strategy", icon: <AutoAwesome sx={{ fontSize: 16 }} /> },
      { name: "Copywriting", icon: <Edit sx={{ fontSize: 16 }} /> },
      { name: "Visuals & Design", icon: <CameraEnhance sx={{ fontSize: 16 }} /> },
    ],
  },
  {
    headline: "Expand your market reach with intelligent campaigns.",
    text: "Target the right people at the right time with precision-targeted campaigns for maximum ROI.",
    bgImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop')",
    cardTitle: "Performance Marketing",
    cardDescription: "Execute high-impact ad campaigns and optimize for maximum ROI and lead generation.",
    cardServices: [
      { name: "Paid Social", icon: <Campaign sx={{ fontSize: 16 }} /> },
      { name: "PPC Management", icon: <Search sx={{ fontSize: 16 }} /> },
      { name: "Audience Targeting", icon: <Group sx={{ fontSize: 16 }} /> },
    ],
  },
  {
    headline: "Optimize for growth with real-time analytics.",
    text: "Make smarter business decisions with actionable insights from comprehensive data analysis.",
    bgImage: "url('https://images.unsplash.com/photo-1520697204987-a3a10058b291?q=80&w=1600&auto=format&fit=crop')",
    cardTitle: "Actionable Analytics",
    cardDescription: "Track key metrics, understand user behavior, and unlock new growth opportunities.",
    cardServices: [
      { name: "Data Analysis", icon: <PieChart sx={{ fontSize: 16 }} /> },
      { name: "Conversion Funnels", icon: <Search sx={{ fontSize: 16 }} /> },
      { name: "Reporting Dashboards", icon: <AutoAwesome sx={{ fontSize: 16 }} /> },
    ],
  },
  {
    headline: "Innovate your online identity with modern web design.",
    text: "Build a captivating online hub with custom web design that provides an exceptional user experience.",
    bgImage: "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop')",
    cardTitle: "Web & UX/UI",
    cardDescription: "Craft stunning, high-performing websites that captivate your audience from the first click.",
    cardServices: [
      { name: "Web Development", icon: <Code sx={{ fontSize: 16 }} /> },
      { name: "UI/UX Design", icon: <Edit sx={{ fontSize: 16 }} /> },
      { name: "Website SEO", icon: <Search sx={{ fontSize: 16 }} /> },
    ],
  },
];

// Update explore platforms to match slides
const explorePlatforms = heroSlides.map((slide) => ({
  name: slide.cardTitle.split(' ')[0],
}));

// Social platforms, kept as requested
const socialPlatforms = [
  {
    icon: <InstagramIcon sx={{ fontSize: "2.5rem", color: professionalColors.light }} />,
    title: "Instagram",
    gradient: "linear-gradient(45deg, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D)",
  },
  {
    icon: <YouTubeIcon sx={{ fontSize: "2.5rem", color: professionalColors.light }} />,
    title: "YouTube",
    gradient: "linear-gradient(45deg, #FF0000, #CD201F)",
  },
  {
    icon: <FacebookIcon sx={{ fontSize: "2.5rem", color: professionalColors.light }} />,
    title: "Facebook",
    gradient: "linear-gradient(45deg, #4267B2, #3B5998)",
  },
];

// Simplified variants for clean transitions
const fadeInVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

// Simplified CTA button
const ActionButton = ({ children, ...props }) => (
  <Button
    component={motion.button}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    variant="contained"
    sx={{
      background: professionalColors.accent,
      borderRadius: "999px",
      px: { xs: 3, sm: 4 },
      py: { xs: 1.1, sm: 1.4 },
      fontSize: { xs: "0.95rem", sm: "1rem" },
      fontWeight: 700,
      letterSpacing: 0.4,
      boxShadow: `0 8px 24px ${professionalColors.accent}33`,
      "&:hover": {
        background: professionalColors.accent,
        boxShadow: `0 12px 30px ${professionalColors.accent}44`,
        transform: "translateY(-2px)",
      },
      color: professionalColors.light,
      alignSelf: "flex-start",
      textTransform: "none",
    }}
    {...props}
  >
    {children}
  </Button>
);

const FullScreenHeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const prefersReducedMotion = useReducedMotion();

  const [activeTab, setActiveTab] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const autoSlideMs = 8000;

  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  const containerRef = useRef(null);
  
  // New state to manage card visibility on mobile
  const [isCardVisible, setIsCardVisible] = useState(false);

  // Sync tab and slide state
  useEffect(() => {
    setSlideIndex(activeTab);
    progressRef.current = 0;
    setProgress(0);
  }, [activeTab]);

  // Autoplay and progress
  useEffect(() => {
    function step(ts) {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const delta = ts - lastTsRef.current;
      lastTsRef.current = ts;

      progressRef.current += delta;
      const pct = clamp(progressRef.current / autoSlideMs, 0, 1);
      setProgress(pct * 100);
      
      if (progressRef.current >= autoSlideMs) {
        const nextIndex = (slideIndex + 1) % heroSlides.length;
        setSlideIndex(nextIndex);
        setActiveTab(nextIndex);
        progressRef.current = 0;
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
      progressRef.current = 0;
      setProgress(0);
    };
  }, [slideIndex]);

  // Touch / swipe handlers for mobile slide control
  const touchStartX = useRef(null);
  const touchCurrentX = useRef(null);
  const SWIPE_THRESHOLD = 50; // px

  const onTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = touchStartX.current;
  };
  const onTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchCurrentX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchCurrentX.current == null) return;
    const delta = touchCurrentX.current - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) {
        // swipe left -> next
        setSlideIndex((s) => (s + 1) % heroSlides.length);
      } else {
        // swipe right -> prev
        setSlideIndex((s) => (s - 1 + heroSlides.length) % heroSlides.length);
      }
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  const currentSlide = heroSlides[slideIndex];

  return (
    <Box
      ref={containerRef}
      component={motion.div}
      initial="initial"
      animate="animate"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        color: professionalColors.text,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        // Simple, professional background
        backgroundImage: `linear-gradient(120deg, ${professionalColors.primary}CC, ${professionalColors.secondary}DD), ${currentSlide.bgImage}`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        // Simple overlay
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.2)",
          opacity: 0.4,
          transition: "opacity 1.8s ease",
        },
      }}
    >
      {/* Content */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "stretch",
          p: { xs: 3, sm: 4, md: 8, lg: 10 },
          gap: { xs: 4, md: 8 },
          minHeight: "100vh",
          zIndex: 3,
        }}
      >
        {/* Left: Headline + Dynamic Text + CTA */}
        <Box
          sx={{
            flex: { xs: "1 1 auto", md: 2 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pr: { xs: 0, md: 4 },
            maxWidth: { xs: "100%", sm: "90%", md: "58vw" },
            py: { xs: 2, sm: 3, md: 0 },
            alignSelf: 'center',
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          {/* Dynamic headline + crossfade per slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex + "headline"}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={prefersReducedMotion ? {} : fadeInVariant}
            >
              <Typography
                component="h1"
                variant={isMobile ? "h4" : "h1"}
                fontWeight={800}
                gutterBottom
                sx={{
                  letterSpacing: { xs: "-0.01em", md: "-0.02em" },
                  textShadow: "0 4px 30px rgba(0,0,0,0.6)",
                  fontFamily: 'Roboto, sans-serif',
                  lineHeight: 1.1,
                  color: professionalColors.light,
                  span: {
                    color: professionalColors.accent
                  }
                }}
              >
                {currentSlide.headline.split(" with ").map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < currentSlide.headline.split(" with ").length - 1 && (
                      <span style={{ color: professionalColors.accent, whiteSpace: 'nowrap' }}> with </span>
                    )}
                  </React.Fragment>
                ))}
              </Typography>
            </motion.div>
          </AnimatePresence>

          {/* Dynamic subtext + crossfade per slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex + "text"}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={prefersReducedMotion ? {} : fadeInVariant}
              style={{ position: "relative", minHeight: "2rem" }}
            >
              <Typography
                component="p"
                variant={isMobile ? "body1" : "h5"}
                sx={{
                  maxWidth: 680,
                  color: professionalColors.muted,
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 400,
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  mt: 2
                }}
              >
                {currentSlide.text}
              </Typography>
            </motion.div>
          </AnimatePresence>

          {/* CTA + subtle progress indicator */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              mt: { xs: 2.5, md: 3.5 },
              alignItems: "center",
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
            <ActionButton sx={{ px: { xs: 2.5, sm: 3.5 }}}>Get Started</ActionButton>
            <Box
              sx={{
                position: "relative",
                width: { xs: 100, sm: 140 },
                height: 4,
                bgcolor: "rgba(255,255,255,0.3)",
                borderRadius: 999,
                overflow: "hidden",
                display: { xs: "none", sm: "block" },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${progress}%`,
                  bgcolor: professionalColors.accent,
                  transition: "width 120ms linear",
                }}
              />
            </Box>
          </Stack>
        </Box>

        {/* Right: Card with Explore, Social, Services */}
        <Box
          sx={{
            flex: 1,
            width: { xs: "100%", md: "46%" },
            mt: { xs: 4, md: 0 },
            position: { xs: "relative", md: "sticky" },
            top: { md: 96 },
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: "12px", md: "22px" },
            background: professionalColors.secondary,
            border: `1px solid ${professionalColors.subtleAccent}`,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            color: professionalColors.text,
            display: "flex",
            flexDirection: "column",
            alignSelf: { xs: 'stretch', md: 'center' },
            transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          component={motion.div}
          initial="initial"
          animate="animate"
          variants={prefersReducedMotion ? {} : fadeInVariant}
        >
          {/* Featured badge */}
          <Box sx={{
            position: 'absolute',
            right: 14,
            top: 14,
            zIndex: 11,
            px: 1.25,
            py: 0.5,
            borderRadius: 99,
            fontWeight: 800,
            fontSize: '0.75rem',
            background: professionalColors.accent,
            color: professionalColors.light,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            boxShadow: `0 8px 24px ${professionalColors.accent}1A`
          }}>
            <Star sx={{ fontSize: '0.8rem' }}/> Featured
          </Box>

          <Button
              onClick={() => setIsCardVisible(!isCardVisible)}
              sx={{
                width: "100%",
                justifyContent: "space-between",
                color: professionalColors.muted,
                textTransform: "none",
                fontWeight: "bold",
                mb: 2,
                display: { xs: 'flex', md: 'none' }
              }}
              endIcon={isCardVisible ? <ExpandMore /> : <ChevronRight />}
            >
              Explore Our Expertise
          </Button>
          
          <Box sx={{
            display: { xs: isCardVisible ? 'block' : 'none', md: 'block' }
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={prefersReducedMotion ? {} : fadeInVariant}
                style={{ width: '100%' }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  mb={1}
                  sx={{ 
                    fontFamily: 'Roboto, sans-serif',
                    color: professionalColors.light,
                    mt: { xs: 1, md: 0 }
                  }}
                >
                  {currentSlide.cardTitle}
                </Typography>

                <Typography
                  variant="body2"
                  fontWeight="bold"
                  sx={{ mb: 2, color: professionalColors.muted }}
                >
                  {currentSlide.cardDescription}
                </Typography>

                {/* Segmented control with improved transitions */}
                <Stack
                  direction="row"
                  spacing={0.8}
                  sx={{
                    p: 0.5,
                    bgcolor: professionalColors.subtleAccent,
                    borderRadius: "999px",
                    mb: 3,
                    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
                  }}
                >
                  {explorePlatforms.map((platform, index) => (
                    <Button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      sx={{
                        flex: 1,
                        borderRadius: "999px",
                        textTransform: "none",
                        color: activeTab === index ? professionalColors.light : professionalColors.muted,
                        background: activeTab === index ? professionalColors.accent : "transparent",
                        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                        fontWeight: 700,
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        "&:hover": {
                          background: activeTab === index ? professionalColors.accent : professionalColors.subtleAccent,
                          color: professionalColors.light
                        },
                      }}
                    >
                      {platform.name}
                    </Button>
                  ))}
                </Stack>
              </motion.div>
            </AnimatePresence>
          </Box>
          
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            mb={1.5}
            sx={{ fontFamily: 'Roboto, sans-serif', mt: { xs: 0, md: 2 } }}
          >
            Connect with us:
          </Typography>
          
          <Box
            sx={{
              mb: 3.5,
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 2,
              overflowX: 'auto',
              px: { xs: 0.5, md: 0 },
              '-webkit-overflow-scrolling': 'touch',
              scrollbarWidth: 'none', // For Firefox
              '::-webkit-scrollbar': {
                display: 'none', // For Chrome, Safari, etc.
              },
            }}
          >
            {socialPlatforms.map((platform, i) => (
              <Card
                key={`${platform.title}-${i}`}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    delay: i * 0.1,
                    duration: 0.5,
                    damping: 12,
                    stiffness: 200,
                  },
                }}
                whileHover={{
                  scale: 1.06,
                  transition: {
                    duration: 0.28,
                  },
                }}
                sx={{
                  minWidth: { xs: '110px', sm: '130px' },
                  width: { xs: '110px', sm: '130px' },
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 4,
                  bgcolor: professionalColors.subtleAccent,
                  cursor: "pointer",
                  border: `1.3px solid ${professionalColors.subtleAccent}`,
                  boxShadow: "0 10px 24px rgba(0,0,0,0.14)",
                  transition: "transform 0.25s ease, border-color 0.2s ease",
                  '&:focus, &:hover': { borderColor: professionalColors.accent },
                  
                }}
              >
                <CardContent sx={{ p: 1.5, textAlign: "center", position: 'relative', zIndex: 3 }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 68, sm: 80 },
                      borderRadius: 3,
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: platform.gradient,
                      boxShadow: "inset 0 0 10px rgba(0,0,0,0.2)"
                    }}
                  >
                    {platform.icon}
                  </Box>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{
                      mt: 1,
                      color: professionalColors.text,
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: { xs: '0.75rem', sm: '0.875rem' }
                    }}
                  >
                    {platform.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Typography
            variant="subtitle1"
            fontWeight="bold"
            mb={1.5}
            sx={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Need a Quick Boost?
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: "wrap", gap: 1 }}
          >
            <AnimatePresence mode="wait">
              <Stack
                key={slideIndex}
                direction="row"
                spacing={1}
                sx={{ flexWrap: "wrap", gap: 1 }}
                component={motion.div}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {currentSlide.cardServices.map((service, i) => (
                  <Button
                    key={i}
                    component={motion.button}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 10px 22px rgba(0, 0, 0, 0.18)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    startIcon={service.icon}
                    sx={{
                      p: "8px 14px",
                      borderRadius: 3,
                      bgcolor: professionalColors.subtleAccent,
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: professionalColors.light,
                      textTransform: "none",
                      fontWeight: 700,
                      transition: "all 0.22s",
                      fontFamily: 'Roboto, sans-serif',
                      "&:hover": {
                        backgroundColor: professionalColors.accent,
                        color: professionalColors.light,
                      },
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                    }}
                  >
                    {service.name}
                  </Button>
                ))}
              </Stack>
            </AnimatePresence>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default FullScreenHeroSection;
