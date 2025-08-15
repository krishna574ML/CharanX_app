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
} from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// Helpers
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const lerp = (a, b, t) => a + (b - a) * t;

// Slides: per-slide styles, text, and animations
const heroSlides = [
  {
    headlineWords: "Grow your business with digital marketing!",
    text: "Unleash your brand's voice with data-driven content that resonates.",
    variant: "slideUp",
    bgImage:
      "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop')",
    gradientOverlay:
      "linear-gradient(120deg, rgba(0,0,0,0.65), rgba(22,12,4,0.55))",
    accent: "#FFD700",
    textGradient: "linear-gradient(45deg, #FFD700, #FFE680, #FFFFFF)",
    headlineFont: "'Playfair Display', serif",
    bodyFont: "'Poppins', sans-serif",
    cardBg: "rgba(255, 255, 255, 0.9)",
    cardAccent: "#FFD700",
    cardTitle: "Content Mastery",
    cardDescription:
      "Curate, create, and deploy powerful content across all channels to tell your story.",
    cardServices: [
      { name: "Content Strategy", icon: <AutoAwesome sx={{ fontSize: 16 }} /> },
      { name: "Copywriting", icon: <Edit sx={{ fontSize: 16 }} /> },
      { name: "Visuals & Design", icon: <CameraEnhance sx={{ fontSize: 16 }} /> },
    ],
  },
  {
    headlineWords: "Expand your reach with strategic campaigns!",
    text: "Reach the right people at the right time with precision-targeted campaigns.",
    variant: "fadeIn",
    bgImage:
      "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop')",
    gradientOverlay:
      "linear-gradient(120deg, rgba(9,12,24,0.65), rgba(0,0,0,0.65))",
    accent: "#7CFFCB",
    textGradient: "linear-gradient(45deg, #7CFFCB, #74F2CE, #E3FDFD)",
    headlineFont: "'Playfair Display', serif",
    bodyFont: "'Poppins', sans-serif",
    cardBg: "rgba(255, 255, 255, 0.9)",
    cardAccent: "#7CFFCB",
    cardTitle: "Performance Marketing",
    cardDescription:
      "Execute high-impact ad campaigns and optimize for maximum ROI and lead generation.",
    cardServices: [
      { name: "Paid Social", icon: <Campaign sx={{ fontSize: 16 }} /> },
      { name: "PPC Management", icon: <Search sx={{ fontSize: 16 }} /> },
      { name: "Audience Targeting", icon: <Group sx={{ fontSize: 16 }} /> },
    ],
  },
  {
    headlineWords: "Optimize your presence and drive results!",
    text: "Make smarter decisions with real-time analytics and actionable insights.",
    variant: "scaleIn",
    bgImage:
      "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop')",
    gradientOverlay:
      "linear-gradient(120deg, rgba(8,8,8,0.6), rgba(55,0,40,0.55))",
    accent: "#FF7BD5",
    textGradient: "linear-gradient(45deg, #FF7BD5, #FFB86C, #FFFFFF)",
    headlineFont: "'Playfair Display', serif",
    bodyFont: "'Poppins', sans-serif",
    cardBg: "rgba(255, 255, 255, 0.9)",
    cardAccent: "#FF7BD5",
    cardTitle: "Actionable Analytics",
    cardDescription:
      "Track key metrics, understand user behavior, and unlock new growth opportunities.",
    cardServices: [
      { name: "Data Analysis", icon: <PieChart sx={{ fontSize: 16 }} /> },
      { name: "Conversion Funnels", icon: <Search sx={{ fontSize: 16 }} /> },
      { name: "Reporting Dashboards", icon: <AutoAwesome sx={{ fontSize: 16 }} /> },
    ],
  },
  {
    headlineWords: "Innovate your online identity!",
    text: "Build a captivating online hub with custom web design and development.",
    variant: "rotateIn",
    bgImage:
      "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop')",
    gradientOverlay:
      "linear-gradient(120deg, rgba(0,0,0,0.55), rgba(5,40,70,0.55))",
    accent: "#90E0EF",
    textGradient: "linear-gradient(45deg, #90E0EF, #CAF0F8, #FFFFFF)",
    headlineFont: "'Playfair Display', serif",
    bodyFont: "'Poppins', sans-serif",
    cardBg: "rgba(255, 255, 255, 0.9)",
    cardAccent: "#90E0EF",
    cardTitle: "Web & UX/UI",
    cardDescription:
      "Craft stunning, high-performing websites that captivate your audience from the first click.",
    cardServices: [
      { name: "Web Development", icon: <Code sx={{ fontSize: 16 }} /> },
      { name: "UI/UX Design", icon: <Edit sx={{ fontSize: 16 }} /> },
      { name: "Website SEO", icon: <Search sx={{ fontSize: 16 }} /> },
    ],
  },
];

// Update explore platforms to match slides
const explorePlatforms = [
  { 
    name: "Content", 
    colors: { 
      activeBg: "linear-gradient(45deg, #FFD700, #DAA520)", 
      activeText: "#111" 
    } 
  },
  { 
    name: "Campaigns", 
    colors: { 
      activeBg: "linear-gradient(45deg, #7CFFCB, #74F2CE)", 
      activeText: "#111" 
    } 
  },
  { 
    name: "Analytics", 
    colors: { 
      activeBg: "linear-gradient(45deg, #FF7BD5, #FFB86C)", 
      activeText: "#111" 
    } 
  },
  { 
    name: "Web Dev", 
    colors: { 
      activeBg: "linear-gradient(45deg, #90E0EF, #CAF0F8)", 
      activeText: "#111" 
    } 
  },
];

// Social
const socialPlatforms = [
  {
    icon: <InstagramIcon sx={{ fontSize: "3rem", color: "#000" }} />,
    title: "Instagram",
    gradient:
      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  },
  {
    icon: <YouTubeIcon sx={{ fontSize: "3rem", color: "#000" }} />,
    title: "YouTube",
    gradient: "linear-gradient(45deg,#FF0000, #C40000)",
  },
  {
    icon: <FacebookIcon sx={{ fontSize: "3rem", color: "#000" }} />,
    title: "Facebook",
    gradient: "linear-gradient(45deg,#4267B2, #3b5998)",
  },
];

// Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Headline flip-up
const headlineContainerVariants = {
  visible: { transition: { staggerChildren: 0.09 } },
};
const wordContainerVariants = {
  visible: { transition: { staggerChildren: 0.025 } },
};
const characterVariants = {
  hidden: { y: "100%", rotateX: -90, opacity: 0 },
  visible: {
    y: "0%",
    rotateX: 0,
    opacity: 1,
    transition: { type: "spring", damping: 16, stiffness: 260 },
  },
};

// Update the dynamic text variants for smoother animations
const dynamicTextVariants = {
  slideUp: {
    initial: { y: 30, opacity: 0, filter: "blur(8px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      y: -30,
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
  fadeIn: {
    initial: { opacity: 0, scale: 0.98, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      scale: 1.02,
      filter: "blur(10px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
  scaleIn: {
    initial: { scale: 0.94, opacity: 0, filter: "blur(6px)" },
    animate: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      scale: 0.96,
      opacity: 0,
      filter: "blur(6px)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  },
  rotateIn: {
    initial: { rotateX: 80, opacity: 0, filter: "blur(8px)", y: 50 },
    animate: {
      rotateX: 0,
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      rotateX: -40,
      opacity: 0,
      filter: "blur(8px)",
      y: -30,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

// CTA
const ActionButton = ({ children, ...props }) => (
  <Button
    component={motion.button}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    }}
    whileTap={{ scale: 0.98 }}
    variant="contained"
    sx={{
      background: "linear-gradient(45deg, #FFD700, #DAA520)",
      borderRadius: "999px",
      px: { xs: 3, sm: 4 },
      py: { xs: 1.1, sm: 1.4 },
      fontSize: { xs: "0.95rem", sm: "1rem" },
      fontWeight: 700,
      letterSpacing: 0.4,
      boxShadow: "0 14px 40px rgba(255, 215, 0, 0.22)",
      "&:hover": {
        background: "linear-gradient(45deg, #DAA520, #FFD700)",
        transform: "translateY(-2px)",
        boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)",
      },
      color: "#111",
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const prefersReducedMotion = useReducedMotion();

  const [activeTab, setActiveTab] = useState(0);
  const [isServicesExpanded, setIsServicesExpanded] = useState(!isMobile);

  // Carousel state (autoplay only)
  const [slideIndex, setSlideIndex] = useState(0);
  const autoSlideMs = 8000;

  // Progress bar
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);

  // Parallax background (on device tilt / mouse move)
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const parallaxTarget = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Update the useEffect to include slideIndex
  useEffect(() => {
    if (activeTab !== slideIndex) {
      setSlideIndex(activeTab);
      progressRef.current = 0;
      setProgress(0);
    }
  }, [activeTab, slideIndex]); // Add slideIndex to dependencies

  // Sync tab changes with slide changes
  useEffect(() => {
    setActiveTab(slideIndex);
  }, [slideIndex]);

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
        setActiveTab(nextIndex); // Update both states together
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
  }, [slideIndex]); // Only depend on slideIndex

  // Parallax handlers (mouse + device orientation)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1..1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      parallaxTarget.current = { x, y };
    };

    const onLeave = () => {
      parallaxTarget.current = { x: 0, y: 0 };
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    let raf;
    const animate = () => {
      setParallax((p) => {
        const nx = lerp(p.x, parallaxTarget.current.x, 0.06);
        const ny = lerp(p.y, parallaxTarget.current.y, 0.06);
        return Math.abs(nx - p.x) < 0.001 && Math.abs(ny - p.y) < 0.001
          ? p
          : { x: nx, y: ny };
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Device tilt parallax (mobile)
  useEffect(() => {
    const onTilt = (e) => {
      const gamma = clamp(e.gamma || 0, -30, 30) / 30; // left-right
      const beta = clamp(e.beta || 0, -30, 30) / 30; // front-back
      parallaxTarget.current = { x: gamma, y: beta };
    };
    window.addEventListener("deviceorientation", onTilt, true);
    return () => window.removeEventListener("deviceorientation", onTilt, true);
  }, []);

  // Active slide
  const currentSlide = heroSlides[slideIndex];

  // Safe variant pick
  const selectedVariant =
    dynamicTextVariants[currentSlide.variant] || dynamicTextVariants.slideUp;

  // Smaller heading on very small phones
  const headingVariant = isMobile ? "h4" : "h1";

  // New: Headline words split and prepared for animation
  const headlineWords = useMemo(
    () => currentSlide.headlineWords.split(" "),
    [currentSlide.headlineWords]
  );

  return (
    <Box
      ref={containerRef}
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        color: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundImage: `${currentSlide.gradientOverlay}, ${currentSlide.bgImage}`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        transform: `translate3d(${parallax.x * 8}px, ${parallax.y * 6}px, 0)`,
        transition: "all 1.8s cubic-bezier(0.22, 1, 0.36, 1)", // Smoother transition
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.2)",
          opacity: 0.4,
          transition: "opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "&:hover::before": {
          opacity: 0.3,
        },
        // Respect prefers-reduced-motion for accessibility
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
          animation: "none",
        },
      }}
    >
      {/* Soft lighting and vignette */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1200px 600px at 85% -20%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(800px 460px at 10% 110%, rgba(255,255,255,0.06), transparent 60%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35))",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "stretch",
          p: { xs: 3, sm: 4, md: 8, lg: 10 },
          gap: { xs: 3, md: 6 },
          minHeight: "100vh",
          zIndex: 3,
        }}
      >
        {/* Left: Headline + Dynamic Text + CTA */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            flex: { xs: "1 1 auto", md: 2 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pr: { xs: 0, md: 4 },
            maxWidth: { xs: "100%", md: "58vw" },
          }}
        >
          <Typography
            component={motion.h1}
            variants={headlineContainerVariants}
            initial="hidden"
            animate="visible"
            variant={headingVariant}
            fontWeight={800}
            gutterBottom
            sx={{
              letterSpacing: { xs: "-0.01em", md: "-0.02em" },
              textShadow: "0 4px 30px rgba(0,0,0,0.6)",
              fontFamily: currentSlide.headlineFont,
              lineHeight: 1.1,
            }}
          >
            {headlineWords.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                variants={wordContainerVariants}
                style={{
                  display: "inline-block",
                  marginRight: "0.25em",
                  whiteSpace: "nowrap",
                }}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={characterVariants}
                    style={{
                      display: "inline-block",
                      color:
                        word.toLowerCase() === "digital" ||
                        word.toLowerCase() === "marketing!"
                          ? currentSlide.accent
                          : "inherit",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </Typography>

          {/* Dynamic subtext + crossfade per slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={
                prefersReducedMotion
                  ? dynamicTextVariants.fadeIn
                  : selectedVariant
              }
              style={{ position: "relative", minHeight: "2rem" }}
            >
              <Typography
                component="p"
                variant={isMobile ? "body1" : "h5"}
                sx={{
                  maxWidth: 680,
                  background: currentSlide.textGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  fontFamily: currentSlide.bodyFont,
                  fontWeight: 600,
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
            sx={{ mt: { xs: 2.5, md: 3.5 }, alignItems: "center" }}
          >
            <ActionButton>Get Started</ActionButton>

            {/* Slim progress bar */}
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
                  bgcolor: currentSlide.accent,
                  transition: "width 120ms linear",
                }}
              />
            </Box>
          </Stack>
        </Box>

        {/* Right: Card with Explore, Marquee, Services */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "46%" },
            mt: { xs: 1, md: 0 },
            p: { xs: 2.2, sm: 2.8, md: 4 },
            borderRadius: "22px",
            background: currentSlide.cardBg,
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(200,200,255,0.16)",
            boxShadow: "0 28px 64px rgba(0,0,0,0.35)",
            color: "#111",
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          component={motion.div}
          variants={containerVariants}
        >
          {isMobile && (
            <Button
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              sx={{
                width: "100%",
                justifyContent: "space-between",
                color: "#111",
                textTransform: "none",
                fontWeight: "bold",
                mb: 2,
              }}
              endIcon={isServicesExpanded ? <ExpandMore /> : <ChevronRight />}
            >
              Explore Platforms
            </Button>
          )}

          {/* Right box content with improved transitions */}
          {(!isMobile || isServicesExpanded) && (
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                variants={{
                  initial: { 
                    opacity: 0,
                    y: 20,
                    transition: { duration: 0.3 }
                  },
                  animate: { 
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                  },
                  exit: { 
                    opacity: 0,
                    y: -20,
                    transition: { duration: 0.3 }
                  }
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ width: '100%' }}
              >
                {!isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      mb={3}
                      sx={{ 
                        fontFamily: "'Poppins', sans-serif",
                        color: "rgba(0,0,0,0.87)" 
                      }}
                    >
                      {currentSlide.cardTitle}
                    </Typography>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{ mb: 2, color: "rgba(0,0,0,0.6)" }}
                  >
                    {currentSlide.cardDescription}
                  </Typography>

                  {/* Segmented control with improved transitions */}
                  <Stack
                    direction="row"
                    spacing={0.8}
                    sx={{
                      p: 0.5,
                      bgcolor: "rgba(0,0,0,0.06)",
                      borderRadius: "999px",
                      mb: 3.5,
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
                          color: activeTab === index ? platform.colors.activeText : "#111",
                          background: activeTab === index ? platform.colors.activeBg : "transparent",
                          transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                          fontWeight: 700,
                          fontSize: { xs: "0.85rem", sm: "0.9rem" },
                          "&:hover": {
                            background: activeTab === index 
                              ? platform.colors.activeBg 
                              : "rgba(0,0,0,0.08)",
                          },
                        }}
                      >
                        {platform.name}
                      </Button>
                    ))}
                  </Stack>
                </motion.div>

                {/* Marquee */}
                <Box
                  sx={{
                    mb: 3.5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
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
                        scale: 1.05,
                        rotateY: 12,
                        transition: {
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                      sx={{
                        width: { xs: '90px', sm: '120px' },
                        borderRadius: 4,
                        bgcolor: "rgba(0,0,0,0.04)",
                        cursor: "pointer",
                        border: "1.3px solid rgba(0,0,0,0.18)",
                        boxShadow: "0 10px 24px rgba(0,0,0,0.14)",
                        transition: "transform 0.3s ease, border-color 0.3s ease",
                        "&:hover": {
                          borderColor: currentSlide.cardAccent,
                          boxShadow: `0 16px 32px rgba(0,0,0,0.2), 0 0 0 2px ${currentSlide.cardAccent}40`,
                        },
                      }}
                    >
                      <CardContent sx={{ p: 1.5, textAlign: "center" }}>
                        <Box
                          sx={{
                            width: "100%",
                            height: { xs: 80, sm: 100 },
                            borderRadius: 3,
                            mb: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: platform.gradient,
                          }}
                        >
                          {platform.icon}
                        </Box>
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          sx={{
                            mt: 1,
                            color: "#111",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '0.8rem', sm: '0.875rem' }
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
                  sx={{ fontFamily: "'Poppins', sans-serif" }}
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
                      key={slideIndex} // Animate the whole stack on slide change
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
                            bgcolor: "rgba(0,0,0,0.06)",
                            border: "1px solid rgba(0,0,0,0.18)",
                            color: "rgba(0,0,0,0.9)",
                            textTransform: "none",
                            fontWeight: 700,
                            transition: "all 0.22s",
                            fontFamily: "'Poppins', sans-serif",
                            "&:hover": {
                              backgroundColor: currentSlide.cardAccent,
                              color: "#111",
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
              </motion.div>
            </AnimatePresence>
          )}

          {/* Mobile quick toggle */}
          {isMobile && !isServicesExpanded && (
            <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 99 }}>
              <IconButton
                onClick={() => setIsServicesExpanded(true)}
                sx={{
                  width: "56px",
                  height: "56px",
                  background: "linear-gradient(45deg, #FFD700, #DAA520)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #DAA520, #FFD700)",
                  },
                }}
              >
                <Search sx={{ color: "#111" }} />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FullScreenHeroSection;