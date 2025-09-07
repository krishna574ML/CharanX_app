import React, { useState, useEffect } from 'react';
import { 
    Container, 
    Typography, 
    Box, 
    Grid, 
    Card, 
    CardContent,
    CardMedia,
    Button,
    Stack,
    Chip,
    Tab,
    Tabs,
    Dialog,
    DialogContent,
    IconButton,
    useMediaQuery,
    useTheme,
    Paper,
    Avatar,
    Divider,
    Breadcrumbs,
    Link,
    Fab,
    Badge,
    Zoom,
    Slide,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import { 
    TrendingUp,
    Visibility,
    Launch,
    Close,
    ArrowForward,
    FilterList,
    Search,
    Star,
    CalendarToday,
    Business,
    Speed,
    MonetizationOn,
    People,
    ExpandMore,
    PlayArrow,
    GetApp,
    Share,
    Favorite,
    BookmarkBorder,
    Language,
    Phone,
    WhatsApp,
    Instagram,
    Facebook,
    LinkedIn,
    CampaignOutlined,
    BarChart,
    Web,
    Brush,
    Analytics,
    ShoppingCart
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const PortfolioPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeTab, setActiveTab] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const [filterCategory, setFilterCategory] = useState('all');
    const [viewMode, setViewMode] = useState('grid');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', label: 'All Projects', count: 12, icon: <Business /> },
        { id: 'social-media', label: 'Social Media', count: 4, icon: <CampaignOutlined /> },
        { id: 'web-design', label: 'Web Design', count: 3, icon: <Web /> },
        { id: 'performance-marketing', label: 'Performance Marketing', count: 3, icon: <BarChart /> },
        { id: 'branding', label: 'Branding & Design', count: 2, icon: <Brush /> }
    ];

    const projects = [
        {
            id: 1,
            title: "TechStartup Social Media Transformation",
            category: "social-media",
            categoryLabel: "Social Media Marketing",
            client: "InnovateTech Solutions",
            description: "Complete social media transformation that increased engagement by 340% and grew followers from 5K to 50K in 6 months through strategic content creation and community building.",
            fullDescription: "This comprehensive social media transformation project involved a complete overhaul of the client's digital presence across multiple platforms. We developed a cohesive brand voice, created engaging visual content, and implemented data-driven strategies that resulted in unprecedented growth.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
            ],
            results: [
                { metric: "Engagement Rate", value: "+340%", description: "From 2.1% to 9.2% average engagement" },
                { metric: "Followers Growth", value: "5K → 50K", description: "900% increase in 6 months" },
                { metric: "Lead Generation", value: "+280%", description: "From 50 to 190 leads per month" },
                { metric: "Brand Awareness", value: "+200%", description: "Significant increase in brand mentions" }
            ],
            tags: ["Instagram", "LinkedIn", "Content Strategy", "Influencer Marketing", "Community Management"],
            duration: "6 months",
            timeline: "March 2024 - August 2024",
            services: ["Content Creation", "Community Management", "Paid Social", "Influencer Outreach"],
            technologies: ["Meta Business Suite", "Hootsuite", "Canva Pro", "Analytics Tools"],
            budget: "₹2,50,000",
            teamSize: "5 specialists",
            rating: 4.9,
            testimonial: {
                text: "CharanX transformed our social media presence completely. The results exceeded our expectations and the team was incredibly professional throughout the process.",
                author: "Sarah Johnson",
                position: "Marketing Director, InnovateTech"
            },
            liveUrl: "https://instagram.com/innovatetech",
            caseStudyUrl: "/case-studies/techstartup-social-media"
        },
        {
            id: 2,
            title: "E-commerce Performance Campaign Excellence",
            category: "performance-marketing",
            categoryLabel: "Performance Marketing",
            client: "StyleHub Fashion",
            description: "Data-driven PPC campaigns that achieved 5.2x ROAS and increased online sales by 450% during Black Friday season with strategic ad optimization.",
            fullDescription: "An intensive performance marketing campaign focused on maximizing return on ad spend through advanced targeting, creative optimization, and strategic bidding. The campaign leveraged multiple platforms and advanced analytics to drive exceptional results.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&auto=format&fit=crop"
            ],
            results: [
                { metric: "ROAS", value: "5.2x", description: "Return on advertising spend" },
                { metric: "Sales Increase", value: "+450%", description: "Compared to previous year" },
                { metric: "Cost Per Acquisition", value: "-60%", description: "Significant reduction in CAC" },
                { metric: "Conversion Rate", value: "+125%", description: "From 2.1% to 4.7%" }
            ],
            tags: ["Google Ads", "Facebook Ads", "Conversion Optimization", "Analytics", "A/B Testing"],
            duration: "4 months",
            timeline: "September 2024 - December 2024",
            services: ["PPC Management", "Landing Page Optimization", "Analytics Setup", "Creative Strategy"],
            technologies: ["Google Ads", "Facebook Business Manager", "Google Analytics", "Hotjar"],
            budget: "₹5,00,000",
            teamSize: "4 specialists",
            rating: 4.8,
            testimonial: {
                text: "The performance marketing results were beyond our wildest dreams. CharanX delivered exceptional ROI and helped us scale our business significantly.",
                author: "Michael Chen",
                position: "CEO, StyleHub Fashion"
            },
            liveUrl: "https://stylehubfashion.com",
            caseStudyUrl: "/case-studies/stylehub-performance-marketing"
        },
        {
            id: 3,
            title: "Restaurant Chain Website Revolution",
            category: "web-design",
            categoryLabel: "Web Design & Development",
            client: "Bistro Deluxe",
            description: "Mobile-first website redesign with online ordering system that increased online orders by 300% and improved user experience dramatically.",
            fullDescription: "A complete website overhaul focusing on mobile-first design principles, user experience optimization, and seamless online ordering integration. The project included custom development, payment gateway integration, and comprehensive SEO optimization.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&auto=format&fit=crop"
            ],
            results: [
                { metric: "Online Orders", value: "+300%", description: "Significant increase in digital orders" },
                { metric: "Page Load Speed", value: "+75%", description: "Improved from 5.2s to 1.3s" },
                { metric: "Mobile Traffic", value: "+200%", description: "Mobile-optimized experience" },
                { metric: "User Engagement", value: "+180%", description: "Time on site and interactions" }
            ],
            tags: ["React", "Mobile-First", "E-commerce", "UX/UI Design", "Payment Integration"],
            duration: "3 months",
            timeline: "June 2024 - August 2024",
            services: ["Web Development", "UX/UI Design", "SEO Optimization", "Payment Integration"],
            technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Google Analytics"],
            budget: "₹3,50,000",
            teamSize: "6 specialists",
            rating: 4.9,
            testimonial: {
                text: "Our new website has transformed our business. Online orders have skyrocketed and customers love the new experience.",
                author: "Maria Rodriguez",
                position: "Owner, Bistro Deluxe"
            },
            liveUrl: "https://bistrodeluxe.com",
            caseStudyUrl: "/case-studies/bistro-deluxe-website"
        },
        {
            id: 4,
            title: "Healthcare Brand Identity Revolution",
            category: "branding",
            categoryLabel: "Branding & Design",
            client: "MedCare Plus",
            description: "Complete brand identity overhaul including logo design, brand guidelines, and marketing materials that established trust and professionalism.",
            fullDescription: "A comprehensive rebranding project that repositioned the healthcare provider as a premium, trustworthy service. The project included extensive research, brand strategy development, visual identity creation, and implementation across all touchpoints.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop"
            ],
            results: [
                { metric: "Brand Recognition", value: "+250%", description: "Measured brand recall improvement" },
                { metric: "Patient Trust", value: "+180%", description: "Based on patient surveys" },
                { metric: "Professional Perception", value: "+200%", description: "Industry peer recognition" },
                { metric: "Digital Engagement", value: "+160%", description: "Across all digital channels" }
            ],
            tags: ["Brand Identity", "Logo Design", "Brand Guidelines", "Healthcare", "Trust Building"],
            duration: "2 months",
            timeline: "April 2024 - May 2024",
            services: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Marketing Collateral"],
            technologies: ["Adobe Creative Suite", "Figma", "Brand Management Tools"],
            budget: "₹1,80,000",
            teamSize: "4 specialists",
            rating: 4.8,
            testimonial: {
                text: "The new brand identity has transformed how patients perceive our practice. We look and feel much more professional and trustworthy.",
                author: "Dr. Robert Kim",
                position: "Medical Director, MedCare Plus"
            },
            liveUrl: "https://medcareplus.com",
            caseStudyUrl: "/case-studies/medcare-plus-branding"
        },
        {
            id: 5,
            title: "SaaS Platform Analytics Dashboard",
            category: "web-design",
            categoryLabel: "Web Application",
            client: "DataFlow Analytics",
            description: "Complex analytics dashboard with real-time data visualization that improved user engagement by 180% and reduced churn by 45%.",
            fullDescription: "A sophisticated web application featuring real-time analytics, interactive data visualizations, and intuitive user experience design. The project required complex backend integration and advanced frontend development.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop"
            ],
            results: [
                { metric: "User Engagement", value: "+180%", description: "Time spent on platform" },
                { metric: "Churn Reduction", value: "-45%", description: "Customer retention improvement" },
                { metric: "Feature Adoption", value: "+220%", description: "New feature usage" },
                { metric: "User Satisfaction", value: "4.7/5", description: "Based on user feedback" }
            ],
            tags: ["React", "Data Visualization", "Real-time Analytics", "SaaS", "Dashboard Design"],
            duration: "5 months",
            timeline: "January 2024 - May 2024",
            services: ["Web Development", "UI/UX Design", "Data Integration", "Performance Optimization"],
            technologies: ["React", "D3.js", "Node.js", "WebSocket", "MongoDB"],
            budget: "₹6,50,000",
            teamSize: "7 specialists",
            rating: 4.9,
            testimonial: {
                text: "The new dashboard has completely changed how our users interact with our platform. It's intuitive, powerful, and beautiful.",
                author: "Alex Thompson",
                position: "Product Manager, DataFlow Analytics"
            },
            liveUrl: "https://app.dataflowanalytics.com",
            caseStudyUrl: "/case-studies/dataflow-analytics-dashboard"
        },
        {
            id: 6,
            title: "Luxury Real Estate Social Strategy",
            category: "social-media",
            categoryLabel: "Social Media Marketing",
            client: "Elite Properties",
            description: "Premium social media strategy for luxury real estate that generated 150+ qualified leads and increased brand prestige significantly.",
            fullDescription: "A sophisticated social media marketing campaign targeting high-net-worth individuals interested in luxury real estate. The strategy focused on premium content creation, targeted advertising, and building an exclusive community.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop"
            ],
            results: [
                { metric: "Qualified Leads", value: "150+", description: "High-value prospect inquiries" },
                { metric: "Engagement Rate", value: "+280%", description: "Premium audience engagement" },
                { metric: "Brand Prestige", value: "+200%", description: "Luxury brand positioning" },
                { metric: "Property Views", value: "+350%", description: "Virtual tour completions" }
            ],
            tags: ["Luxury Marketing", "Real Estate", "Instagram", "Facebook", "Video Content"],
            duration: "8 months",
            timeline: "May 2024 - December 2024",
            services: ["Social Media Strategy", "Content Creation", "Paid Advertising", "Community Management"],
            technologies: ["Meta Business Suite", "Professional Photography", "Video Production"],
            budget: "₹4,20,000",
            teamSize: "5 specialists",
            rating: 4.8,
            testimonial: {
                text: "CharanX helped us establish a premium brand presence that attracts serious luxury property buyers.",
                author: "Victoria Sterling",
                position: "Director, Elite Properties"
            },
            liveUrl: "https://instagram.com/eliteproperties",
            caseStudyUrl: "/case-studies/elite-properties-social"
        }
    ];

    const stats = [
        { number: '50+', label: 'Completed Projects', icon: <Business /> },
        { number: '98%', label: 'Client Satisfaction', icon: <Star /> },
        { number: '300%', label: 'Average Growth', icon: <TrendingUp /> },
        { number: '24/7', label: 'Support Available', icon: <Speed /> }
    ];

    const filteredProjects = projects.filter(project => {
        const categoryMatch = filterCategory === 'all' || project.category === filterCategory;
        const searchMatch = searchTerm === '' || 
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return categoryMatch && searchMatch;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseDialog = () => {
        setSelectedProject(null);
    };

    const handleCategoryChange = (category) => {
        setFilterCategory(category);
    };

    const handleGetQuote = () => {
        navigate('/contact', { state: { selectedService: 'Portfolio Consultation' } });
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
                        <Typography color="text.primary" fontWeight="600">Portfolio</Typography>
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
                            Our Success Stories
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
                            Explore our portfolio of transformative digital marketing campaigns and 
                            web development projects that have driven exceptional results for our clients.
                        </Typography>
                        
                        {/* Stats Row */}
                        <Grid container spacing={4} sx={{ mt: 4, mb: 6 }}>
                            {stats.map((stat, index) => (
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
                                                borderRadius: 3,
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    boxShadow: '0 10px 30px rgba(22,163,74,0.1)'
                                                }
                                            }}
                                        >
                                            <Box sx={{ color: 'primary.main', mb: 1 }}>
                                                {stat.icon}
                                            </Box>
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

                {/* Filter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Paper 
                        elevation={0}
                        sx={{ 
                            p: 3, 
                            mb: 6,
                            background: 'rgba(255,255,255,0.9)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(22,163,74,0.1)',
                            borderRadius: 4
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: 'center' }}>
                            {/* Category Filter */}
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
                                    Filter by Category:
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {categories.map((category) => (
                                        <Chip
                                            key={category.id}
                                            icon={category.icon}
                                            label={`${category.label} (${category.count})`}
                                            onClick={() => handleCategoryChange(category.id)}
                                            variant={filterCategory === category.id ? 'filled' : 'outlined'}
                                            color={filterCategory === category.id ? 'primary' : 'default'}
                                            sx={{
                                                fontWeight: 600,
                                                '&:hover': {
                                                    backgroundColor: filterCategory === category.id 
                                                        ? 'primary.dark' 
                                                        : 'rgba(22,163,74,0.08)'
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            
                            {/* View Mode Toggle */}
                            <Box>
                                <Button
                                    variant={viewMode === 'grid' ? 'contained' : 'outlined'}
                                    onClick={() => setViewMode('grid')}
                                    sx={{ mr: 1 }}
                                >
                                    Grid View
                                </Button>
                                <Button
                                    variant={viewMode === 'list' ? 'contained' : 'outlined'}
                                    onClick={() => setViewMode('list')}
                                >
                                    List View
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </motion.div>

                {/* Projects Grid/List */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${filterCategory}-${viewMode}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Grid container spacing={4} sx={{ mb: 8 }}>
                            {filteredProjects.map((project, index) => (
                                <Grid 
                                    item 
                                    xs={12} 
                                    md={viewMode === 'grid' ? 6 : 12} 
                                    lg={viewMode === 'grid' ? 4 : 12} 
                                    key={project.id}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
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
                                                    '& .project-image': {
                                                        transform: 'scale(1.05)'
                                                    },
                                                    '& .project-overlay': {
                                                        opacity: 1
                                                    }
                                                }
                                            }}
                                            onClick={() => handleProjectClick(project)}
                                        >
                                            {/* Project Image */}
                                            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                                <CardMedia
                                                    component="img"
                                                    height={viewMode === 'grid' ? 200 : 300}
                                                    image={project.image}
                                                    alt={project.title}
                                                    className="project-image"
                                                    sx={{ 
                                                        transition: 'transform 0.4s ease',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                
                                                {/* Overlay */}
                                                <Box
                                                    className="project-overlay"
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'linear-gradient(135deg, rgba(22,163,74,0.8) 0%, rgba(34,197,94,0.8) 100%)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        opacity: 0,
                                                        transition: 'opacity 0.3s ease'
                                                    }}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        endIcon={<Visibility />}
                                                        sx={{
                                                            bgcolor: 'white',
                                                            color: 'primary.main',
                                                            fontWeight: 700,
                                                            '&:hover': {
                                                                bgcolor: 'rgba(255,255,255,0.9)'
                                                            }
                                                        }}
                                                    >
                                                        View Details
                                                    </Button>
                                                </Box>

                                                {/* Category Badge */}
                                                <Chip
                                                    label={project.categoryLabel}
                                                    size="small"
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 12,
                                                        left: 12,
                                                        background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                                                        color: 'white',
                                                        fontWeight: 600
                                                    }}
                                                />

                                                {/* Rating Badge */}
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 12,
                                                        right: 12,
                                                        background: 'rgba(0,0,0,0.7)',
                                                        color: 'white',
                                                        px: 1.5,
                                                        py: 0.5,
                                                        borderRadius: 2,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 0.5
                                                    }}
                                                >
                                                    <Star sx={{ fontSize: 16, color: '#fbbf24' }} />
                                                    <Typography variant="caption" fontWeight="600">
                                                        {project.rating}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <CardContent sx={{ p: 3 }}>
                                                <Typography 
                                                    variant="h6" 
                                                    fontWeight="700" 
                                                    sx={{ mb: 1, lineHeight: 1.3 }}
                                                >
                                                    {project.title}
                                                </Typography>
                                                
                                                <Typography 
                                                    variant="body2" 
                                                    color="primary.main" 
                                                    fontWeight="600"
                                                    sx={{ mb: 2 }}
                                                >
                                                    {project.client}
                                                </Typography>

                                                <Typography 
                                                    variant="body2" 
                                                    color="text.secondary" 
                                                    sx={{ mb: 3, lineHeight: 1.6 }}
                                                >
                                                    {project.description}
                                                </Typography>

                                                {/* Key Results */}
                                                <Grid container spacing={2} sx={{ mb: 3 }}>
                                                    {project.results.slice(0, 2).map((result, idx) => (
                                                        <Grid item xs={6} key={idx}>
                                                            <Box sx={{ textAlign: 'center', p: 1.5, bgcolor: 'rgba(22,163,74,0.05)', borderRadius: 2 }}>
                                                                <Typography variant="h6" color="primary.main" fontWeight="700">
                                                                    {result.value}
                                                                </Typography>
                                                                <Typography variant="caption" color="text.secondary">
                                                                    {result.metric}
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    ))}
                                                </Grid>

                                                {/* Tags */}
                                                <Box sx={{ mb: 3 }}>
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                        {project.tags.slice(0, 3).map((tag, idx) => (
                                                            <Chip
                                                                key={idx}
                                                                label={tag}
                                                                size="small"
                                                                variant="outlined"
                                                                sx={{ 
                                                                    fontSize: '0.7rem',
                                                                    height: 24,
                                                                    borderColor: 'rgba(22,163,74,0.3)',
                                                                    color: 'text.secondary'
                                                                }}
                                                            />
                                                        ))}
                                                        {project.tags.length > 3 && (
                                                            <Chip
                                                                label={`+${project.tags.length - 3}`}
                                                                size="small"
                                                                sx={{ 
                                                                    fontSize: '0.7rem',
                                                                    height: 24,
                                                                    bgcolor: 'primary.main',
                                                                    color: 'white'
                                                                }}
                                                            />
                                                        )}
                                                    </Box>
                                                </Box>

                                                {/* Project Info */}
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <CalendarToday sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                                                        <Typography variant="caption" color="text.secondary">
                                                            {project.duration}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <People sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                                                        <Typography variant="caption" color="text.secondary">
                                                            {project.teamSize}
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                {/* Action Buttons */}
                                                <Stack spacing={2}>
                                                    <Button
                                                        variant="contained"
                                                        endIcon={<ArrowForward />}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleProjectClick(project);
                                                        }}
                                                        sx={{
                                                            background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)'
                                                            }
                                                        }}
                                                    >
                                                        View Case Study
                                                    </Button>
                                                    {project.liveUrl && (
                                                        <Button
                                                            variant="outlined"
                                                            endIcon={<Launch />}
                                                            component="a"
                                                            href={project.liveUrl}
                                                            target="_blank"
                                                            onClick={(e) => e.stopPropagation()}
                                                            sx={{
                                                                borderColor: 'primary.main',
                                                                color: 'primary.main',
                                                                '&:hover': {
                                                                    borderColor: 'primary.dark',
                                                                    backgroundColor: 'rgba(22,163,74,0.08)'
                                                                }
                                                            }}
                                                        >
                                                            View Live Site
                                                        </Button>
                                                    )}
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>

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
                            Ready to Create Your Success Story?
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            Let's discuss your project and create exceptional results together.
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
                                onClick={handleGetQuote}
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

            {/* Floating Action Button */}
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
                onClick={handleGetQuote}
            >
                <Phone />
            </Fab>

            {/* Project Detail Modal */}
            <Dialog
                open={selectedProject !== null}
                onClose={handleCloseDialog}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        maxHeight: '95vh'
                    }
                }}
            >
                {selectedProject && (
                    <>
                        {/* Project Header */}
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height={300}
                                image={selectedProject.image}
                                alt={selectedProject.title}
                                sx={{ objectFit: 'cover' }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(135deg, rgba(22,163,74,0.8) 0%, rgba(34,197,94,0.8) 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}
                            >
                                <Box sx={{ textAlign: 'center', p: 4 }}>
                                    <Chip
                                        label={selectedProject.categoryLabel}
                                        sx={{
                                            mb: 2,
                                            bgcolor: 'rgba(255,255,255,0.2)',
                                            color: 'white',
                                            fontWeight: 600
                                        }}
                                    />
                                    <Typography variant="h3" fontWeight="700" sx={{ mb: 2 }}>
                                        {selectedProject.title}
                                    </Typography>
                                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
                                        {selectedProject.client}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Star sx={{ color: '#fbbf24', mr: 0.5 }} />
                                        <Typography variant="h6" fontWeight="600">
                                            {selectedProject.rating} Rating
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <IconButton
                                onClick={handleCloseDialog}
                                sx={{ 
                                    position: 'absolute', 
                                    right: 16, 
                                    top: 16,
                                    color: 'white',
                                    bgcolor: 'rgba(0,0,0,0.3)',
                                    '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
                                }}
                            >
                                <Close />
                            </IconButton>
                        </Box>
                        
                        <DialogContent sx={{ p: 4 }}>
                            {/* Project Overview */}
                            <Typography variant="h5" fontWeight="600" sx={{ mb: 3 }}>
                                Project Overview
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
                                {selectedProject.fullDescription}
                            </Typography>

                            {/* Key Results */}
                            <Typography variant="h5" fontWeight="600" sx={{ mb: 3 }}>
                                Key Results
                            </Typography>
                            <Grid container spacing={3} sx={{ mb: 4 }}>
                                {selectedProject.results.map((result, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <Paper 
                                            elevation={0}
                                            sx={{ 
                                                p: 3, 
                                                textAlign: 'center',
                                                bgcolor: 'rgba(22,163,74,0.05)',
                                                borderRadius: 3,
                                                border: '1px solid rgba(22,163,74,0.1)'
                                            }}
                                        >
                                            <Typography variant="h4" color="primary.main" fontWeight="700">
                                                {result.value}
                                            </Typography>
                                            <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
                                                {result.metric}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {result.description}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Project Details */}
                            <Grid container spacing={4} sx={{ mb: 4 }}>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 3 }}>
                                        <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
                                            Project Information
                                        </Typography>
                                        <Stack spacing={2}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="body2" color="text.secondary">Timeline:</Typography>
                                                <Typography variant="body2" fontWeight="600">{selectedProject.timeline}</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="body2" color="text.secondary">Duration:</Typography>
                                                <Typography variant="body2" fontWeight="600">{selectedProject.duration}</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="body2" color="text.secondary">Team Size:</Typography>
                                                <Typography variant="body2" fontWeight="600">{selectedProject.teamSize}</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="body2" color="text.secondary">Budget:</Typography>
                                                <Typography variant="body2" fontWeight="600">{selectedProject.budget}</Typography>
                                            </Box>
                                        </Stack>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 3 }}>
                                        <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
                                            Services Provided
                                        </Typography>
                                        <Grid container spacing={1}>
                                            {selectedProject.services.map((service, index) => (
                                                <Grid item xs={12} key={index}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                        <CheckCircle sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                                                        <Typography variant="body2">{service}</Typography>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>

                            {/* Technologies Used */}
                            <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
                                Technologies & Tools
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                                {selectedProject.technologies.map((tech, index) => (
                                    <Chip
                                        key={index}
                                        label={tech}
                                        variant="outlined"
                                        sx={{ 
                                            borderColor: 'primary.main',
                                            color: 'primary.main',
                                            fontWeight: 600
                                        }}
                                    />
                                ))}
                            </Box>

                            {/* Client Testimonial */}
                            <Paper 
                                elevation={0}
                                sx={{ 
                                    p: 4, 
                                    bgcolor: 'rgba(22,163,74,0.05)', 
                                    borderRadius: 3,
                                    border: '1px solid rgba(22,163,74,0.1)'
                                }}
                            >
                                <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
                                    Client Testimonial
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', lineHeight: 1.7 }}>
                                    "{selectedProject.testimonial.text}"
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                                        {selectedProject.testimonial.author.charAt(0)}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="body1" fontWeight="600">
                                            {selectedProject.testimonial.author}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {selectedProject.testimonial.position}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </DialogContent>

                        {/* Action Buttons */}
                        <Box sx={{ p: 4, pt: 0 }}>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                {selectedProject.liveUrl && (
                                    <Button
                                        variant="outlined"
                                        endIcon={<Launch />}
                                        component="a"
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        sx={{
                                            borderColor: 'primary.main',
                                            color: 'primary.main',
                                            '&:hover': {
                                                borderColor: 'primary.dark',
                                                backgroundColor: 'rgba(22,163,74,0.08)'
                                            }
                                        }}
                                    >
                                        View Live Project
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    endIcon={<ArrowForward />}
                                    onClick={() => {
                                        handleCloseDialog();
                                        handleGetQuote();
                                    }}
                                    sx={{
                                        background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)'
                                        }
                                    }}
                                >
                                    Start Similar Project
                                </Button>
                            </Stack>
                        </Box>
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default PortfolioPage;
