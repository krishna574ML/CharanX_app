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
    Divider,
    Avatar,
    useTheme,
    useMediaQuery,
    Fab,
    Collapse,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    Breadcrumbs,
    Link
} from '@mui/material';
import { 
    Campaign,
    TrendingUp,
    Web,
    Analytics,
    ContentCopy,
    Search,
    CheckCircle,
    Close,
    ArrowForward,
    Star,
    AccessTime,
    People,
    TrendingUpSharp,
    ExpandMore,
    PlayArrow,
    Speed,
    Security,
    Support24,
    Verified,
    WorkspacePremium,
    AutoAwesome,
    Insights,
    ShoppingCart,
    Brush,
    Code,
    CampaignOutlined,
    BarChart,
    GetApp,
    Phone,
    WhatsApp,
    Business,
    Group,
    LocationOn,
    Schedule,
    MonetizationOn,
    Assignment
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const ServicesPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [selectedService, setSelectedService] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredCard, setHoveredCard] = useState(null);
    const [showPricing, setShowPricing] = useState(false);

    const serviceCategories = [
        { id: 'all', label: 'All Services', icon: <WorkspacePremium /> },
        { id: 'marketing', label: 'Digital Marketing', icon: <Campaign /> },
        { id: 'development', label: 'Development', icon: <Code /> },
        { id: 'design', label: 'Design & Creative', icon: <Brush /> },
        { id: 'analytics', label: 'Analytics & Insights', icon: <Analytics /> }
    ];

    const services = [
        {
            id: 1,
            category: 'marketing',
            icon: <Campaign sx={{ fontSize: 40 }} />,
            title: "Social Media Marketing",
            subtitle: "Complete Social Media Transformation",
            shortDesc: "Amplify your brand across all social platforms with engaging content and strategic campaigns that drive real results.",
            price: "Starting at ₹15,000/month",
            originalPrice: "₹25,000/month",
            discount: "40% OFF",
            rating: 4.9,
            reviews: 127,
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            features: [
                "Content Strategy & Creation (20-30 posts/month)",
                "Community Management & Engagement", 
                "Paid Social Advertising (Facebook, Instagram, LinkedIn)",
                "Influencer Partnerships & Collaborations",
                "Advanced Analytics & Monthly Reports",
                "Brand Voice Development & Guidelines",
                "24/7 Social Media Monitoring",
                "Crisis Management & Reputation Control"
            ],
            platforms: ["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok", "YouTube"],
            deliverables: [
                "20-30 professional posts per month",
                "Daily community management (responding to comments/DMs)",
                "Weekly performance analytics reports",
                "Monthly strategy optimization sessions",
                "Branded content templates & graphics",
                "Competitor analysis reports"
            ],
            processSteps: [
                "Brand Analysis & Competitor Research",
                "Content Strategy Development",
                "Creative Content Production",
                "Platform Optimization & Posting",
                "Community Engagement & Management",
                "Performance Tracking & Reporting"
            ],
            timeline: "Results visible in 30-60 days",
            caseStudy: {
                client: "TechStartup Inc.",
                results: ["340% increase in engagement", "5K to 50K followers in 6 months", "280% boost in lead generation"]
            }
        },
        {
            id: 2,
            category: 'marketing',
            icon: <TrendingUp sx={{ fontSize: 40 }} />,
            title: "Performance Marketing",
            subtitle: "Data-Driven ROI-Focused Campaigns",
            shortDesc: "Scientific approach to digital advertising with measurable ROI through PPC, display ads, and conversion optimization.",
            price: "Starting at ₹15,000/month",
            originalPrice: "₹25,000/month",
            discount: "40% OFF",
            rating: 4.8,
            reviews: 98,
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            features: [
                "Google Ads Management & Optimization",
                "Facebook & Instagram Ads (Meta Business)",
                "Landing Page A/B Testing & Optimization",
                "Advanced Conversion Rate Optimization",
                "Real-time Analytics & Performance Tracking",
                "Retargeting & Remarketing Campaigns",
                "Shopping Ads for E-commerce",
                "Video Advertising & YouTube Ads"
            ],
            platforms: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Microsoft Ads", "YouTube Ads"],
            deliverables: [
                "Campaign setup & daily optimization",
                "Weekly performance reports with insights",
                "Monthly strategy reviews & recommendations",
                "ROI tracking & ROAS analysis",
                "Custom landing pages for campaigns",
                "Competitor ad analysis"
            ],
            processSteps: [
                "Market Research & Competitor Analysis",
                "Campaign Strategy & Setup",
                "Creative Development & Testing", 
                "Launch & Real-time Optimization",
                "Performance Monitoring & Scaling",
                "ROI Analysis & Strategic Refinement"
            ],
            timeline: "ROI improvements within 2-4 weeks",
            caseStudy: {
                client: "E-commerce Fashion Brand",
                results: ["5.2x ROAS achieved", "450% sales increase", "60% reduction in CAC"]
            }
        },
        {
            id: 3,
            category: 'development',
            icon: <Web sx={{ fontSize: 40 }} />,
            title: "Web Design & Development",
            subtitle: "Premium Websites That Convert",
            shortDesc: "Create stunning, mobile-responsive websites that not only look amazing but convert visitors into loyal customers.",
            price: "Starting at ₹25,000",
            originalPrice: "₹45,000",
            discount: "44% OFF",
            rating: 4.9,
            reviews: 156,
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            features: [
                "Custom Responsive Website Design",
                "Mobile-First Development Approach",
                "E-commerce Solutions (Shopify, WooCommerce)",
                "Advanced SEO Optimization",
                "Page Speed Optimization (90+ scores)",
                "CMS Integration (WordPress, Webflow)",
                "SSL Certificate & Security Setup",
                "Google Analytics & Search Console Setup"
            ],
            platforms: ["React", "Next.js", "WordPress", "Shopify", "Webflow", "Node.js"],
            deliverables: [
                "Fully responsive website (desktop, tablet, mobile)",
                "Admin dashboard for content management",
                "SEO-optimized pages with meta tags",
                "Contact forms with email integration",
                "Google Analytics setup & training",
                "3 months free maintenance & support"
            ],
            processSteps: [
                "Requirements Analysis & Planning",
                "UI/UX Design & Prototyping",
                "Development & Coding",
                "Testing & Quality Assurance",
                "Launch & Deployment",
                "Training & Ongoing Support"
            ],
            timeline: "2-6 weeks depending on complexity",
            caseStudy: {
                client: "Restaurant Chain",
                results: ["300% increase in online orders", "75% faster loading speed", "200% mobile traffic boost"]
            }
        },
        {
            id: 4,
            category: 'design',
            icon: <Brush sx={{ fontSize: 40 }} />,
            title: "Brand Identity & Design",
            subtitle: "Complete Visual Brand Transformation",
            shortDesc: "Comprehensive branding solutions including logo design, brand guidelines, and marketing materials that make you stand out.",
            price: "Starting at ₹12,000",
            originalPrice: "₹20,000",
            discount: "40% OFF",
            rating: 4.8,
            reviews: 89,
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            features: [
                "Logo Design & Brand Mark Creation",
                "Complete Brand Guidelines Development",
                "Business Card & Stationery Design",
                "Social Media Templates & Graphics",
                "Website UI/UX Design",
                "Marketing Collateral Design",
                "Packaging Design (if applicable)",
                "Brand Style Guide Documentation"
            ],
            platforms: ["Adobe Creative Suite", "Figma", "Sketch", "Canva Pro"],
            deliverables: [
                "3-5 logo concepts with revisions",
                "Brand guidelines document (colors, fonts, usage)",
                "Business card & letterhead designs",
                "Social media template pack (10+ designs)",
                "Email signature template",
                "Brand asset library with source files"
            ],
            processSteps: [
                "Brand Discovery & Research",
                "Concept Development & Sketching",
                "Design Creation & Refinement",
                "Brand Guidelines Documentation",
                "Asset Creation & Delivery",
                "Implementation Support"
            ],
            timeline: "2-4 weeks for complete brand package",
            caseStudy: {
                client: "Healthcare Startup",
                results: ["200% brand recognition increase", "Professional market positioning", "Cohesive brand experience"]
            }
        },
        {
            id: 5,
            category: 'analytics',
            icon: <Analytics sx={{ fontSize: 40 }} />,
            title: "Analytics & Business Intelligence",
            subtitle: "Data-Driven Decision Making",
            shortDesc: "Advanced analytics setup and reporting to track your business performance and make informed strategic decisions.",
            price: "Starting at ₹10,000/month",
            originalPrice: "₹18,000/month",
            discount: "44% OFF",
            rating: 4.7,
            reviews: 67,
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            features: [
                "Google Analytics 4 Setup & Configuration",
                "Custom Dashboard Creation",
                "E-commerce Tracking Implementation",
                "Goal & Conversion Tracking Setup",
                "Monthly Performance Reports",
                "Competitor Analysis & Insights",
                "ROI & ROAS Tracking",
                "Data Visualization & Insights"
            ],
            platforms: ["Google Analytics", "Google Data Studio", "Google Tag Manager", "Facebook Analytics"],
            deliverables: [
                "Complete analytics setup across all platforms",
                "Custom dashboards for key metrics",
                "Monthly detailed performance reports",
                "Actionable insights and recommendations",
                "Training sessions for your team",
                "Ongoing optimization recommendations"
            ],
            processSteps: [
                "Current Analytics Audit",
                "Tracking Strategy Development",
                "Implementation & Configuration",
                "Testing & Validation",
                "Dashboard Creation",
                "Training & Handover"
            ],
            timeline: "1-2 weeks for complete setup",
            caseStudy: {
                client: "SaaS Platform",
                results: ["Complete visibility into user journey", "30% improvement in conversion rates", "Data-driven growth strategy"]
            }
        },
        {
            id: 6,
            category: 'development',
            icon: <ShoppingCart sx={{ fontSize: 40 }} />,
            title: "E-commerce Solutions",
            subtitle: "Complete Online Store Development",
            shortDesc: "Full-featured e-commerce platforms that drive sales with seamless user experience and powerful backend management.",
            price: "Starting at ₹35,000",
            originalPrice: "₹60,000",
            discount: "42% OFF",
            rating: 4.9,
            reviews: 124,
            gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
            features: [
                "Custom E-commerce Website Development",
                "Payment Gateway Integration (Razorpay, PayPal)",
                "Inventory Management System",
                "Order Management & Tracking",
                "Customer Account Management",
                "Mobile App Development (Optional)",
                "Multi-vendor Marketplace Setup",
                "SEO & Performance Optimization"
            ],
            platforms: ["Shopify", "WooCommerce", "Magento", "Custom React/Node.js"],
            deliverables: [
                "Fully functional e-commerce website",
                "Admin panel for order & inventory management",
                "Mobile-responsive design",
                "Payment gateway integration",
                "Email automation setup",
                "6 months free support & maintenance"
            ],
            processSteps: [
                "Business Requirements Analysis",
                "Platform Selection & Setup",
                "Custom Design & Development",
                "Payment & Shipping Integration",
                "Testing & Quality Assurance",
                "Launch & Ongoing Support"
            ],
            timeline: "4-8 weeks depending on features",
            caseStudy: {
                client: "Fashion Retailer",
                results: ["500% online sales increase", "Automated order processing", "Mobile-first shopping experience"]
            }
        }
    ];

    const whyChooseUs = [
        {
            icon: <Verified />,
            title: "Proven Track Record",
            description: "500+ successful projects with measurable results"
        },
        {
            icon: <Speed />,
            title: "Fast Delivery",
            description: "Quick turnaround without compromising quality"
        },
        {
            icon: <Support24 />,
            title: "24/7 Support",
            description: "Round-the-clock support for all your needs"
        },
        {
            icon: <AutoAwesome />,
            title: "Premium Quality",
            description: "High-end solutions that exceed expectations"
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
            pt: 12, 
            pb: 8, 
            minHeight: '100vh',
            background: 'linear-gradient(180deg, rgba(22,163,74,0.02) 0%, rgba(255,255,255,1) 100%)'
        }}>
            <Container maxWidth="xl">
                {/* Breadcrumbs */}
                <Box sx={{ mb: 4 }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link component={RouterLink} to="/" color="inherit">
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
                                fontWeight: 800,
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                mb: 3,
                                background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #4ade80 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 4px 20px rgba(22,163,74,0.1)'
                            }}
                        >
                            Premium Digital Solutions
                        </Typography>
                        <Typography 
                            variant="h5" 
                            color="text.secondary" 
                            sx={{ 
                                mb: 4, 
                                maxWidth: 800, 
                                mx: 'auto', 
                                fontWeight: 400,
                                lineHeight: 1.6
                            }}
                        >
                            Transform your business with our comprehensive suite of digital marketing services. 
                            Designed to deliver measurable results and premium experiences.
                        </Typography>
                        
                        {/* Stats Row */}
                        <Grid container spacing={4} sx={{ mt: 4, mb: 6 }}>
                            {[
                                { number: '500+', label: 'Projects Completed' },
                                { number: '98%', label: 'Client Satisfaction' },
                                { number: '24/7', label: 'Support Available' },
                                { number: '50+', label: 'Team Experts' }
                            ].map((stat, index) => (
                                <Grid item xs={6} md={3} key={index}>
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Paper 
                                            elevation={0}
                                            sx={{ 
                                                p: 3, 
                                                textAlign: 'center',
                                                background: 'rgba(255,255,255,0.8)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(22,163,74,0.1)',
                                                borderRadius: 3
                                            }}
                                        >
                                            <Typography variant="h4" fontWeight="800" color="primary.main">
                                                {stat.number}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {stat.label}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </motion.div>

                {/* Service Categories Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
                        <Paper 
                            elevation={0}
                            sx={{ 
                                p: 1, 
                                background: 'rgba(255,255,255,0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(22,163,74,0.1)',
                                borderRadius: 6,
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 1
                            }}
                        >
                            {serviceCategories.map((category) => (
                                <Button
                                    key={category.id}
                                    variant={activeCategory === category.id ? 'contained' : 'text'}
                                    onClick={() => handleCategoryChange(category.id)}
                                    startIcon={category.icon}
                                    sx={{
                                        borderRadius: 5,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        color: activeCategory === category.id ? 'white' : 'text.primary',
                                        background: activeCategory === category.id 
                                            ? 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)'
                                            : 'transparent',
                                        '&:hover': {
                                            background: activeCategory === category.id 
                                                ? 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)'
                                                : 'rgba(22,163,74,0.08)'
                                        }
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
                                        onHoverStart={() => setHoveredCard(service.id)}
                                        onHoverEnd={() => setHoveredCard(null)}
                                        whileHover={{ y: -10 }}
                                        style={{ height: '100%' }}
                                    >
                                        <Card 
                                            sx={{ 
                                                height: '100%',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                background: 'rgba(255,255,255,0.95)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(22,163,74,0.1)',
                                                borderRadius: 4,
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    borderColor: 'primary.main',
                                                    boxShadow: '0 20px 40px rgba(22,163,74,0.15)',
                                                    '& .service-header': {
                                                        background: service.gradient
                                                    },
                                                    '& .service-icon': {
                                                        color: 'white',
                                                        transform: 'scale(1.1) rotate(5deg)'
                                                    },
                                                    '& .service-title': {
                                                        color: 'white'
                                                    },
                                                    '& .service-subtitle': {
                                                        color: 'rgba(255,255,255,0.9)'
                                                    }
                                                }
                                            }}
                                            onClick={() => handleServiceClick(service)}
                                        >
                                            {/* Discount Badge */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 16,
                                                    right: 16,
                                                    zIndex: 2,
                                                    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                                    color: 'white',
                                                    px: 2,
                                                    py: 0.5,
                                                    borderRadius: 2,
                                                    fontSize: '0.75rem',
                                                    fontWeight: 700
                                                }}
                                            >
                                                {service.discount}
                                            </Box>

                                            {/* Service Header */}
                                            <Box 
                                                className="service-header"
                                                sx={{ 
                                                    p: 3,
                                                    background: 'rgba(22,163,74,0.05)',
                                                    transition: 'all 0.4s ease',
                                                    position: 'relative'
                                                }}
                                            >
                                                <Box className="service-icon" sx={{ 
                                                    color: 'primary.main', 
                                                    mb: 2,
                                                    transition: 'all 0.3s ease'
                                                }}>
                                                    {service.icon}
                                                </Box>
                                                <Typography 
                                                    variant="h5" 
                                                    className="service-title"
                                                    sx={{ 
                                                        fontWeight: 700, 
                                                        mb: 1,
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {service.title}
                                                </Typography>
                                                <Typography 
                                                    variant="body2" 
                                                    className="service-subtitle"
                                                    sx={{ 
                                                        color: 'text.secondary',
                                                        fontWeight: 500,
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {service.subtitle}
                                                </Typography>
                                            </Box>

                                            <CardContent sx={{ p: 3, pt: 2 }}>
                                                {/* Rating */}
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                                        <Star sx={{ color: '#fbbf24', fontSize: 18, mr: 0.5 }} />
                                                        <Typography variant="body2" fontWeight="600">
                                                            {service.rating}
                                                        </Typography>
                                                    </Box>
                                                    <Typography variant="body2" color="text.secondary">
                                                        ({service.reviews} reviews)
                                                    </Typography>
                                                </Box>

                                                <Typography 
                                                    variant="body2" 
                                                    color="text.secondary" 
                                                    sx={{ mb: 3, lineHeight: 1.6 }}
                                                >
                                                    {service.shortDesc}
                                                </Typography>

                                                {/* Key Features Preview */}
                                                <Box sx={{ mb: 3 }}>
                                                    {service.features.slice(0, 3).map((feature, idx) => (
                                                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                            <CheckCircle sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                                                            <Typography variant="body2" color="text.secondary">
                                                                {feature}
                                                            </Typography>
                                                        </Box>
                                                    ))}
                                                    <Typography variant="body2" color="primary.main" fontWeight="600">
                                                        +{service.features.length - 3} more features
                                                    </Typography>
                                                </Box>

                                                {/* Pricing */}
                                                <Box sx={{ mb: 3 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                                                        <Typography 
                                                            variant="h6" 
                                                            color="primary.main" 
                                                            fontWeight="700"
                                                        >
                                                            {service.price}
                                                        </Typography>
                                                        <Typography 
                                                            variant="body2" 
                                                            color="text.secondary"
                                                            sx={{ textDecoration: 'line-through', ml: 1 }}
                                                        >
                                                            {service.originalPrice}
                                                        </Typography>
                                                    </Box>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {service.timeline}
                                                    </Typography>
                                                </Box>

                                                {/* Action Buttons */}
                                                <Stack spacing={2}>
                                                    <Button
                                                        variant="contained"
                                                        endIcon={<ArrowForward />}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleGetQuote(service);
                                                        }}
                                                        sx={{
                                                            background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)'
                                                            }
                                                        }}
                                                    >
                                                        Get Quote
                                                    </Button>
                                                    <Button
                                                        variant="outlined"
                                                        endIcon={<Insights />}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleServiceClick(service);
                                                        }}
                                                        sx={{
                                                            borderColor: 'primary.main',
                                                            color: 'primary.main',
                                                            '&:hover': {
                                                                borderColor: 'primary.dark',
                                                                backgroundColor: 'rgba(22,163,74,0.08)'
                                                            }
                                                        }}
                                                    >
                                                        View Details
                                                    </Button>
                                                </Stack>
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
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Box sx={{ mb: 8 }}>
                        <Typography 
                            variant="h3" 
                            align="center" 
                            fontWeight="700" 
                            sx={{ 
                                mb: 6,
                                background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            Why Choose CharanX?
                        </Typography>
                        <Grid container spacing={4}>
                            {whyChooseUs.map((item, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <Paper 
                                            elevation={0}
                                            sx={{ 
                                                p: 4, 
                                                textAlign: 'center',
                                                background: 'rgba(255,255,255,0.8)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(22,163,74,0.1)',
                                                borderRadius: 3,
                                                height: '100%',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    borderColor: 'primary.main',
                                                    boxShadow: '0 10px 30px rgba(22,163,74,0.1)'
                                                }
                                            }}
                                        >
                                            <Box sx={{ 
                                                color: 'primary.main', 
                                                mb: 2,
                                                '& svg': { fontSize: 40 }
                                            }}>
                                                {item.icon}
                                            </Box>
                                            <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
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
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Paper 
                        elevation={0}
                        sx={{ 
                            p: 6,
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                            color: 'white',
                            borderRadius: 4
                        }}
                    >
                        <Typography variant="h4" fontWeight="700" sx={{ mb: 2 }}>
                            Ready to Transform Your Business?
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            Let's discuss your project and create a custom solution that drives results.
                        </Typography>
                        <Stack 
                            direction={{ xs: 'column', sm: 'row' }} 
                            spacing={2} 
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<Phone />}
                                onClick={() => navigate('/contact')}
                                sx={{
                                    bgcolor: 'white',
                                    color: 'primary.main',
                                    fontWeight: 700,
                                    px: 4,
                                    '&:hover': {
                                        bgcolor: 'rgba(255,255,255,0.9)'
                                    }
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
                                    px: 4,
                                    '&:hover': {
                                        borderColor: 'white',
                                        bgcolor: 'rgba(255,255,255,0.1)'
                                    }
                                }}
                            >
                                WhatsApp Us
                            </Button>
                        </Stack>
                    </Paper>
                </motion.div>
            </Container>

            {/* Floating Action Button for Quick Contact */}
            <Fab
                color="primary"
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)'
                    }
                }}
                onClick={() => navigate('/contact')}
            >
                <Phone />
            </Fab>

            {/* Service Detail Modal */}
            <Dialog
                open={selectedService !== null}
                onClose={handleCloseDialog}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        maxHeight: '90vh'
                    }
                }}
            >
                {selectedService && (
                    <>
                        <DialogTitle sx={{ 
                            p: 0, 
                            position: 'relative',
                            background: selectedService.gradient,
                            color: 'white'
                        }}>
                            <Box sx={{ p: 3 }}>
                                <IconButton
                                    onClick={handleCloseDialog}
                                    sx={{ 
                                        position: 'absolute', 
                                        right: 8, 
                                        top: 8,
                                        color: 'white'
                                    }}
                                >
                                    <Close />
                                </IconButton>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Box sx={{ mr: 2, '& svg': { fontSize: 48 } }}>
                                        {selectedService.icon}
                                    </Box>
                                    <Box>
                                        <Typography variant="h4" fontWeight="700">
                                            {selectedService.title}
                                        </Typography>
                                        <Typography variant="h6" sx={{ opacity: 0.9 }}>
                                            {selectedService.subtitle}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Star sx={{ color: '#fbbf24', mr: 0.5 }} />
                                    <Typography variant="body1" fontWeight="600" sx={{ mr: 2 }}>
                                        {selectedService.rating}
                                    </Typography>
                                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                        ({selectedService.reviews} reviews)
                                    </Typography>
                                </Box>
                            </Box>
                        </DialogTitle>
                        
                        <DialogContent sx={{ p: 4 }}>
                            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
                                {selectedService.shortDesc}
                            </Typography>

                            {/* Pricing Section */}
                            <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: 'rgba(22,163,74,0.05)', borderRadius: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                                    <Box>
                                        <Typography variant="h5" color="primary.main" fontWeight="700">
                                            {selectedService.price}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            color="text.secondary"
                                            sx={{ textDecoration: 'line-through' }}
                                        >
                                            {selectedService.originalPrice}
                                        </Typography>
                                    </Box>
                                    <Chip 
                                        label={selectedService.discount} 
                                        color="error" 
                                        sx={{ fontWeight: 700 }}
                                    />
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    {selectedService.timeline}
                                </Typography>
                            </Paper>

                            {/* Features */}
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
                                    What's Included:
                                </Typography>
                                <Grid container spacing={1}>
                                    {selectedService.features.map((feature, index) => (
                                        <Grid item xs={12} key={index}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                                                <CheckCircle sx={{ fontSize: 20, color: 'primary.main', mr: 1.5, mt: 0.5 }} />
                                                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                                    {feature}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            {/* Process Steps */}
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>
                                    Our Process:
                                </Typography>
                                <Timeline position="left">
                                    {selectedService.processSteps.map((step, index) => (
                                        <TimelineItem key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot color="primary" />
                                                {index < selectedService.processSteps.length - 1 && <TimelineConnector />}
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant="body2" fontWeight="600">
                                                    Step {index + 1}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {step}
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))}
                                </Timeline>
                            </Box>

                            {/* Case Study */}
                            <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 3 }}>
                                <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
                                    Success Story: {selectedService.caseStudy.client}
                                </Typography>
                                <Grid container spacing={2}>
                                    {selectedService.caseStudy.results.map((result, index) => (
                                        <Grid item xs={12} sm={4} key={index}>
                                            <Box sx={{ textAlign: 'center', p: 2 }}>
                                                <Typography variant="h6" color="primary.main" fontWeight="700">
                                                    {result.split(' ')[0]}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {result.substring(result.indexOf(' ') + 1)}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </DialogContent>

                        <DialogActions sx={{ p: 4, pt: 0 }}>
                            <Button
                                variant="outlined"
                                onClick={handleCloseDialog}
                                sx={{ mr: 2 }}
                            >
                                Close
                            </Button>
                            <Button
                                variant="contained"
                                endIcon={<ArrowForward />}
                                onClick={() => {
                                    handleCloseDialog();
                                    handleGetQuote(selectedService);
                                }}
                                sx={{
                                    background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)'
                                    }
                                }}
                            >
                                Get Quote Now
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default ServicesPage;
