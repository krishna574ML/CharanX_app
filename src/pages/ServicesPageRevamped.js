import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    Button,
    Stack,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Paper,
    useTheme,
    useMediaQuery,
    Breadcrumbs,
    Link,
    Avatar,
    Divider
} from '@mui/material';
import {
    Campaign,
    TrendingUp,
    Web,
    Analytics,
    CheckCircle,
    Close,
    ArrowForward,
    Star,
    Speed,
    SupportAgent,
    Verified,
    WorkspacePremium,
    AutoAwesome,
    Insights,
    ShoppingCart,
    Brush,
    Code,
    WhatsApp,
    Rocket,
    Timeline,
    EmojiEvents,
    TrendingUpOutlined,
    DesignServices,
    DataObject
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const ServicesPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const serviceCategories = [
        { 
            id: 'all', 
            label: 'All Services', 
            icon: <WorkspacePremium />,
            color: '#6366f1'
        },
        { 
            id: 'marketing', 
            label: 'Digital Marketing', 
            icon: <Campaign />,
            color: '#f59e0b'
        },
        { 
            id: 'development', 
            label: 'Development', 
            icon: <Code />,
            color: '#10b981'
        },
        { 
            id: 'design', 
            label: 'Design & Creative', 
            icon: <Brush />,
            color: '#ec4899'
        },
        { 
            id: 'analytics', 
            label: 'Analytics & Growth', 
            icon: <Analytics />,
            color: '#8b5cf6'
        }
    ];

    const services = [
        {
            id: 1,
            category: 'marketing',
            icon: <Campaign sx={{ fontSize: 48 }} />,
            title: "Social Media Marketing",
            subtitle: "Complete Social Media Transformation",
            shortDesc: "Amplify your brand across all social platforms with engaging content and strategic campaigns that drive real results.",
            price: "₹15,000",
            period: "/month",
            originalPrice: "₹25,000",
            discount: "40% OFF",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            badge: "Most Popular",
            badgeColor: "#f59e0b",
            features: [
                "20-30 Premium Content Posts Monthly",
                "Advanced Community Management",
                "Paid Social Advertising Campaigns",
                "Influencer Partnership Program",
                "Real-time Analytics & Reporting",
                "Brand Voice Development",
                "24/7 Social Media Monitoring",
                "Crisis Management Support"
            ],
            platforms: ["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok", "YouTube"],
            deliverables: [
                "Professional content calendar with 20-30 posts",
                "Daily engagement & community management",
                "Weekly performance analytics reports",
                "Monthly strategy optimization sessions",
                "Custom branded content templates",
                "Comprehensive competitor analysis"
            ],
            processSteps: [
                "Brand Analysis & Market Research",
                "Content Strategy Development",
                "Creative Content Production",
                "Platform Optimization & Scheduling",
                "Community Engagement Management",
                "Performance Analytics & Optimization"
            ],
            timeline: "Results visible within 30-60 days"
        },
        {
            id: 2,
            category: 'marketing',
            icon: <TrendingUp sx={{ fontSize: 48 }} />,
            title: "Performance Marketing",
            subtitle: "ROI-Focused Advertising Campaigns",
            shortDesc: "Data-driven advertising with proven ROI through strategic PPC, display ads, and conversion optimization.",
            price: "₹18,000",
            period: "/month",
            originalPrice: "₹30,000",
            discount: "40% OFF",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            badge: "High ROI",
            badgeColor: "#ef4444",
            features: [
                "Google Ads Management & Optimization",
                "Meta Ads (Facebook & Instagram)",
                "Advanced Landing Page Optimization",
                "Conversion Rate Optimization (CRO)",
                "Real-time Performance Tracking",
                "Retargeting & Remarketing Campaigns",
                "E-commerce Shopping Ads",
                "YouTube & Video Advertising"
            ],
            platforms: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Microsoft Ads", "YouTube Ads"],
            deliverables: [
                "Campaign setup & daily optimization",
                "Weekly performance reports with insights",
                "Monthly ROI analysis & recommendations",
                "A/B testing for ad creatives",
                "Custom landing pages for campaigns",
                "Competitor advertising analysis"
            ],
            processSteps: [
                "Market Research & Competitor Analysis",
                "Campaign Strategy Development",
                "Creative Assets Development",
                "Campaign Launch & Optimization",
                "Performance Monitoring & Scaling",
                "ROI Analysis & Strategic Refinement"
            ],
            timeline: "ROI improvements within 2-4 weeks"
        },
        {
            id: 3,
            category: 'development',
            icon: <Web sx={{ fontSize: 48 }} />,
            title: "Web Design & Development",
            subtitle: "Premium Websites That Convert",
            shortDesc: "Create stunning, high-performance websites that not only look amazing but convert visitors into loyal customers.",
            price: "₹35,000",
            period: "/project",
            originalPrice: "₹60,000",
            discount: "42% OFF",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            badge: "Best Value",
            badgeColor: "#10b981",
            features: [
                "Custom Responsive Website Design",
                "Mobile-First Development",
                "E-commerce Solutions Integration",
                "Advanced SEO Optimization",
                "Page Speed Optimization (90+ scores)",
                "CMS Integration & Training",
                "SSL Certificate & Security Setup",
                "Analytics & Tracking Setup"
            ],
            platforms: ["React", "Next.js", "WordPress", "Shopify", "Webflow", "Node.js"],
            deliverables: [
                "Fully responsive website (all devices)",
                "Content management system access",
                "SEO-optimized pages & structure",
                "Contact forms & lead capture",
                "Google Analytics integration",
                "6 months free maintenance"
            ],
            processSteps: [
                "Requirements Gathering & Planning",
                "UI/UX Design & Prototyping",
                "Development & Implementation",
                "Testing & Quality Assurance",
                "Launch & Deployment",
                "Training & Ongoing Support"
            ],
            timeline: "2-8 weeks based on complexity"
        },
        {
            id: 4,
            category: 'design',
            icon: <Brush sx={{ fontSize: 48 }} />,
            title: "Brand Identity & Design",
            subtitle: "Complete Visual Brand Transformation",
            shortDesc: "Comprehensive branding solutions that make your business stand out with professional identity and marketing materials.",
            price: "₹20,000",
            period: "/project",
            originalPrice: "₹35,000",
            discount: "43% OFF",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            badge: "Creative",
            badgeColor: "#ec4899",
            features: [
                "Logo Design & Brand Mark Creation",
                "Complete Brand Guidelines",
                "Business Stationery Design",
                "Social Media Visual Templates",
                "Website UI/UX Design",
                "Marketing Collateral Design",
                "Packaging Design Solutions",
                "Brand Style Guide Documentation"
            ],
            platforms: ["Adobe Creative Suite", "Figma", "Sketch", "Canva Pro"],
            deliverables: [
                "3-5 unique logo concepts with revisions",
                "Comprehensive brand guidelines",
                "Business card & stationery designs",
                "Social media template collection",
                "Email signature templates",
                "Complete brand asset library"
            ],
            processSteps: [
                "Brand Discovery & Research",
                "Concept Development & Sketching",
                "Design Creation & Refinement",
                "Brand Guidelines Development",
                "Asset Creation & Delivery",
                "Implementation Support & Training"
            ],
            timeline: "3-5 weeks for complete brand package"
        },
        {
            id: 5,
            category: 'analytics',
            icon: <Analytics sx={{ fontSize: 48 }} />,
            title: "Analytics & Business Intelligence",
            subtitle: "Data-Driven Decision Making",
            shortDesc: "Advanced analytics setup and comprehensive reporting to track performance and make informed strategic decisions.",
            price: "₹12,000",
            period: "/month",
            originalPrice: "₹20,000",
            discount: "40% OFF",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            badge: "Growth",
            badgeColor: "#8b5cf6",
            features: [
                "Google Analytics 4 Setup & Config",
                "Custom Dashboard Development",
                "E-commerce Tracking Implementation",
                "Goal & Conversion Optimization",
                "Monthly Performance Reports",
                "Competitor Analysis & Insights",
                "ROI & ROAS Tracking",
                "Data Visualization & Insights"
            ],
            platforms: ["Google Analytics", "Google Data Studio", "Google Tag Manager", "Facebook Analytics"],
            deliverables: [
                "Complete analytics setup across platforms",
                "Custom performance dashboards",
                "Monthly detailed performance reports",
                "Actionable insights & recommendations",
                "Team training sessions",
                "Ongoing optimization guidance"
            ],
            processSteps: [
                "Current Analytics Audit",
                "Tracking Strategy Development",
                "Implementation & Configuration",
                "Testing & Data Validation",
                "Dashboard Creation & Setup",
                "Training & Knowledge Transfer"
            ],
            timeline: "1-3 weeks for complete setup"
        },
        {
            id: 6,
            category: 'development',
            icon: <ShoppingCart sx={{ fontSize: 48 }} />,
            title: "E-commerce Solutions",
            subtitle: "Complete Online Store Development",
            shortDesc: "Full-featured e-commerce platforms with seamless user experience and powerful backend management systems.",
            price: "₹45,000",
            period: "/project",
            originalPrice: "₹80,000",
            discount: "44% OFF",
            gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
            badge: "Enterprise",
            badgeColor: "#059669",
            features: [
                "Custom E-commerce Development",
                "Payment Gateway Integration",
                "Advanced Inventory Management",
                "Order Tracking & Management",
                "Customer Account Portal",
                "Mobile App Development",
                "Multi-vendor Marketplace",
                "SEO & Performance Optimization"
            ],
            platforms: ["Shopify", "WooCommerce", "Magento", "Custom React/Node.js"],
            deliverables: [
                "Fully functional e-commerce platform",
                "Admin panel for complete management",
                "Mobile-responsive design",
                "Secure payment processing",
                "Email automation systems",
                "12 months support & maintenance"
            ],
            processSteps: [
                "Business Requirements Analysis",
                "Platform Selection & Architecture",
                "Custom Development & Integration",
                "Payment & Shipping Setup",
                "Testing & Quality Assurance",
                "Launch & Ongoing Support"
            ],
            timeline: "6-12 weeks based on features"
        }
    ];

    const stats = [
        { icon: <EmojiEvents />, number: "200+", label: "Projects Delivered", color: "#f59e0b" },
        { icon: <TrendingUpOutlined />, number: "300%", label: "Average ROI", color: "#10b981" },
        { icon: <Speed />, number: "24/7", label: "Support Available", color: "#6366f1" },
        { icon: <Verified />, number: "100%", label: "Client Satisfaction", color: "#ec4899" }
    ];

    const whyChooseUs = [
        {
            icon: <Rocket />,
            title: "Proven Results",
            description: "Track record of delivering measurable growth and ROI for businesses across industries."
        },
        {
            icon: <Timeline />,
            title: "Data-Driven Approach",
            description: "Every strategy backed by comprehensive analytics and market research insights."
        },
        {
            icon: <SupportAgent />,
            title: "24/7 Expert Support",
            description: "Dedicated account managers and round-the-clock support for all your needs."
        },
        {
            icon: <AutoAwesome />,
            title: "Cutting-Edge Technology",
            description: "Latest tools and technologies to keep you ahead of the competition."
        }
    ];

    const filteredServices = activeCategory === 'all'
        ? services
        : services.filter(service => service.category === activeCategory);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const handleGetQuote = (service) => {
        navigate('/contact', { state: { selectedService: service.title } });
    };

    const handleCloseDialog = () => {
        setSelectedService(null);
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            background: 'linear-gradient(180deg, rgba(99,102,241,0.03) 0%, rgba(16,185,129,0.02) 50%, rgba(255,255,255,1) 100%)',
            pt: { xs: 10, md: 12 },
            pb: 8
        }}>
            <Container maxWidth="xl">
                {/* Breadcrumbs */}
                <Box sx={{ mb: 4 }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link component={RouterLink} to="/" color="inherit" sx={{ textDecoration: 'none' }}>
                            Home
                        </Link>
                        <Typography color="text.primary" fontWeight="600">Services</Typography>
                    </Breadcrumbs>
                </Box>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                fontWeight: 900,
                                fontSize: { xs: '2.5rem', md: '4.5rem' },
                                mb: 3,
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #16a34a 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 4px 20px rgba(22,163,74,0.1)',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            Premium Digital Solutions
                        </Typography>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{
                                mb: 6,
                                maxWidth: 900,
                                mx: 'auto',
                                fontWeight: 400,
                                lineHeight: 1.6,
                                fontSize: { xs: '1.1rem', md: '1.3rem' }
                            }}
                        >
                            Transform your business with our comprehensive suite of digital marketing services.
                            Designed to deliver measurable results and premium experiences that drive growth.
                        </Typography>

                        {/* Stats Section */}
                        <Grid container spacing={4} sx={{ mb: 8, justifyContent: 'center' }}>
                            {stats.map((stat, index) => (
                                <Grid item xs={6} md={3} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                textAlign: 'center',
                                                background: 'rgba(255,255,255,0.8)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                borderRadius: 3,
                                                transition: 'transform 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)'
                                                }
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    mx: 'auto',
                                                    mb: 2,
                                                    background: stat.color,
                                                    color: 'white'
                                                }}
                                            >
                                                {stat.icon}
                                            </Avatar>
                                            <Typography variant="h3" fontWeight="900" sx={{ color: stat.color, mb: 1 }}>
                                                {stat.number}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" fontWeight="600">
                                                {stat.label}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Box sx={{ mb: 8, display: 'flex', justifyContent: 'center' }}>
                        <Paper
                            elevation={8}
                            sx={{
                                p: 1.5,
                                background: 'rgba(255,255,255,0.95)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                borderRadius: 8,
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 1,
                                justifyContent: 'center',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}
                        >
                            {serviceCategories.map((category) => (
                                <Button
                                    key={category.id}
                                    variant={activeCategory === category.id ? 'contained' : 'text'}
                                    onClick={() => handleCategoryChange(category.id)}
                                    startIcon={category.icon}
                                    sx={{
                                        borderRadius: 6,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 700,
                                        textTransform: 'none',
                                        fontSize: '0.95rem',
                                        color: activeCategory === category.id ? 'white' : 'text.primary',
                                        background: activeCategory === category.id
                                            ? `linear-gradient(135deg, ${category.color} 0%, ${category.color}cc 100%)`
                                            : 'transparent',
                                        '&:hover': {
                                            background: activeCategory === category.id
                                                ? `linear-gradient(135deg, ${category.color} 0%, ${category.color}aa 100%)`
                                                : `rgba(${category.color.slice(1).match(/.{1,2}/g).map(oct => parseInt(oct, 16)).join(',')}, 0.1)`
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {category.label}
                                </Button>
                            ))}
                        </Paper>
                    </Box>
                </motion.div>

                {/* Services Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Grid container spacing={4} sx={{ mb: 8 }}>
                            {filteredServices.map((service, index) => (
                                <Grid item xs={12} md={6} lg={4} key={service.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        style={{ height: '100%' }}
                                    >
                                        <Card
                                            sx={{
                                                height: '100%',
                                                background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255,255,255,0.3)',
                                                borderRadius: 4,
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                                                    transform: 'translateY(-5px)'
                                                }
                                            }}
                                            onClick={() => handleServiceClick(service)}
                                        >
                                            {/* Badge */}
                                            {service.badge && (
                                                <Chip
                                                    label={service.badge}
                                                    size="small"
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 16,
                                                        right: 16,
                                                        zIndex: 2,
                                                        background: service.badgeColor,
                                                        color: 'white',
                                                        fontWeight: 700,
                                                        fontSize: '0.75rem'
                                                    }}
                                                />
                                            )}

                                            {/* Gradient Overlay */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: 120,
                                                    background: service.gradient,
                                                    opacity: 0.8,
                                                    zIndex: 0
                                                }}
                                            />

                                            <CardContent sx={{ p: 3, position: 'relative', zIndex: 1 }}>
                                                {/* Icon */}
                                                <Avatar
                                                    sx={{
                                                        width: 80,
                                                        height: 80,
                                                        mb: 3,
                                                        background: 'rgba(255,255,255,0.9)',
                                                        color: '#333',
                                                        boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                                                    }}
                                                >
                                                    {service.icon}
                                                </Avatar>

                                                {/* Content */}
                                                <Typography variant="h5" fontWeight="800" sx={{ mb: 1, color: '#1a1a1a' }}>
                                                    {service.title}
                                                </Typography>
                                                <Typography variant="subtitle1" sx={{ mb: 2, color: '#666', fontWeight: 600 }}>
                                                    {service.subtitle}
                                                </Typography>
                                                <Typography variant="body2" sx={{ mb: 3, color: '#777', lineHeight: 1.6 }}>
                                                    {service.shortDesc}
                                                </Typography>

                                                {/* Pricing */}
                                                <Box sx={{ mb: 3 }}>
                                                    <Stack direction="row" alignItems="baseline" spacing={1}>
                                                        <Typography variant="h4" fontWeight="900" color="primary.main">
                                                            {service.price}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {service.period}
                                                        </Typography>
                                                    </Stack>
                                                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                textDecoration: 'line-through',
                                                                color: 'text.disabled'
                                                            }}
                                                        >
                                                            {service.originalPrice}
                                                        </Typography>
                                                        <Chip
                                                            label={service.discount}
                                                            size="small"
                                                            color="error"
                                                            sx={{ fontWeight: 700 }}
                                                        />
                                                    </Stack>
                                                </Box>

                                                {/* Features Preview */}
                                                <Box sx={{ mb: 3 }}>
                                                    {service.features.slice(0, 3).map((feature, idx) => (
                                                        <Stack key={idx} direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                                                            <CheckCircle sx={{ fontSize: 16, color: 'success.main' }} />
                                                            <Typography variant="body2" color="text.secondary">
                                                                {feature}
                                                            </Typography>
                                                        </Stack>
                                                    ))}
                                                    <Typography variant="body2" color="primary.main" fontWeight="600">
                                                        +{service.features.length - 3} more features
                                                    </Typography>
                                                </Box>

                                                {/* CTA Button */}
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    size="large"
                                                    endIcon={<ArrowForward />}
                                                    sx={{
                                                        background: service.gradient,
                                                        color: 'white',
                                                        fontWeight: 700,
                                                        py: 1.5,
                                                        borderRadius: 3,
                                                        '&:hover': {
                                                            background: service.gradient,
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                                                        },
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleGetQuote(service);
                                                    }}
                                                >
                                                    Get Started Now
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Box sx={{ mb: 8 }}>
                        <Typography
                            variant="h3"
                            fontWeight="800"
                            textAlign="center"
                            sx={{
                                mb: 2,
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            Why Choose CharanX?
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            textAlign="center"
                            sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
                        >
                            We combine expertise, innovation, and dedication to deliver exceptional results for your business.
                        </Typography>

                        <Grid container spacing={4}>
                            {whyChooseUs.map((item, index) => (
                                <Grid item xs={12} md={6} lg={3} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 4,
                                                textAlign: 'center',
                                                background: 'rgba(255,255,255,0.8)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255,255,255,0.3)',
                                                borderRadius: 4,
                                                height: '100%',
                                                transition: 'transform 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)'
                                                }
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    width: 70,
                                                    height: 70,
                                                    mx: 'auto',
                                                    mb: 3,
                                                    background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                                                    color: 'white'
                                                }}
                                            >
                                                {item.icon}
                                            </Avatar>
                                            <Typography variant="h6" fontWeight="700" sx={{ mb: 2 }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                                {item.description}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 4, md: 8 },
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            borderRadius: 6,
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Typography variant="h3" fontWeight="800" sx={{ mb: 2 }}>
                            Ready to Transform Your Business?
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
                            Let's discuss your project and create exceptional results together. 
                            Get a free consultation and strategy session.
                        </Typography>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={3}
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => navigate('/contact')}
                                sx={{
                                    bgcolor: 'white',
                                    color: 'primary.main',
                                    fontWeight: 700,
                                    px: 6,
                                    py: 2,
                                    borderRadius: 3,
                                    '&:hover': {
                                        bgcolor: 'rgba(255,255,255,0.9)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Start Your Project
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                endIcon={<WhatsApp />}
                                component="a"
                                href="https://wa.me/919677303310"
                                target="_blank"
                                sx={{
                                    borderColor: 'white',
                                    color: 'white',
                                    fontWeight: 700,
                                    px: 6,
                                    py: 2,
                                    borderRadius: 3,
                                    '&:hover': {
                                        borderColor: 'white',
                                        bgcolor: 'rgba(255,255,255,0.1)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                WhatsApp Us
                            </Button>
                        </Stack>
                    </Paper>
                </motion.div>
            </Container>

            {/* Service Detail Dialog */}
            <Dialog
                open={selectedService !== null}
                onClose={handleCloseDialog}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                        backdropFilter: 'blur(20px)'
                    }
                }}
            >
                {selectedService && (
                    <>
                        <DialogTitle sx={{ p: 4, pb: 2 }}>
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Box>
                                    <Typography variant="h4" fontWeight="800" gutterBottom>
                                        {selectedService.title}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {selectedService.subtitle}
                                    </Typography>
                                </Box>
                                <IconButton onClick={handleCloseDialog} size="large">
                                    <Close />
                                </IconButton>
                            </Stack>
                        </DialogTitle>
                        <DialogContent sx={{ p: 4 }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                                        What's Included:
                                    </Typography>
                                    <List dense>
                                        {selectedService.features.map((feature, index) => (
                                            <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <CheckCircle sx={{ color: 'success.main', fontSize: 20 }} />
                                                </ListItemIcon>
                                                <ListItemText primary={feature} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                                        Key Deliverables:
                                    </Typography>
                                    <List dense>
                                        {selectedService.deliverables.map((deliverable, index) => (
                                            <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <ArrowForward sx={{ color: 'primary.main', fontSize: 20 }} />
                                                </ListItemIcon>
                                                <ListItemText primary={deliverable} />
                                            </ListItem>
                                        ))}
                                    </List>

                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mt: 3 }}>
                                        Platforms & Tools:
                                    </Typography>
                                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                                        {selectedService.platforms.map((platform, index) => (
                                            <Chip
                                                key={index}
                                                label={platform}
                                                variant="outlined"
                                                sx={{ fontWeight: 600 }}
                                            />
                                        ))}
                                    </Stack>

                                    <Box sx={{ mt: 3, p: 3, bgcolor: 'primary.50', borderRadius: 2 }}>
                                        <Typography variant="subtitle2" color="primary.main" fontWeight="700">
                                            Timeline: {selectedService.timeline}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions sx={{ p: 4, justifyContent: 'space-between' }}>
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                                    {selectedService.price}
                                    <Typography component="span" variant="body2" color="text.secondary">
                                        {selectedService.period}
                                    </Typography>
                                </Typography>
                                <Typography variant="body2" color="text.disabled" sx={{ textDecoration: 'line-through' }}>
                                    {selectedService.originalPrice}
                                </Typography>
                            </Box>
                            <Stack direction="row" spacing={2}>
                                <Button onClick={handleCloseDialog} size="large">
                                    Close
                                </Button>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => handleGetQuote(selectedService)}
                                    sx={{
                                        background: selectedService.gradient,
                                        color: 'white',
                                        fontWeight: 700,
                                        px: 4,
                                        '&:hover': {
                                            background: selectedService.gradient,
                                            transform: 'translateY(-2px)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Get Started Now
                                </Button>
                            </Stack>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default ServicesPage;
