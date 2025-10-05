import React, { useState } from 'react';
import { 
    Container, 
    Typography, 
    Box, 
    Grid, 
    Card, 
    CardContent,
    Button,
    Chip,
    Stack,
    alpha,
    IconButton
} from '@mui/material';
import { 
    Campaign,
    TrendingUp,
    Web,
    Science,
    ArrowForward,
    CheckCircle,
    Insights,
    ShoppingCart,
    DesignServices,
    AutoAwesome
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const ServicesOverviewRevamped = () => {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            icon: <Campaign sx={{ fontSize: 48 }} />,
            title: "Social Media Marketing",
            shortDesc: "Build engaged communities",
            description: "Build engaged communities and drive brand awareness through strategic social media campaigns across all major platforms.",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: '#667eea',
            features: [
                'Content Strategy & Creative',
                'Community Growth',
                'Paid Social Optimization',
                'Influencer Partnerships'
            ],
            metrics: { label: 'Avg. Engagement', value: '+285%' }
        },
        {
            icon: <TrendingUp sx={{ fontSize: 48 }} />,
            title: "Performance Marketing",
            shortDesc: "Data-driven campaigns",
            description: "Data-driven digital campaigns that deliver measurable ROI through PPC, display ads, and conversion optimization.",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: '#f093fb',
            features: [
                'Google & Meta Ads',
                'CRO & Landing Pages',
                'ROAS-Focused Reporting',
                'A/B Testing & Optimization'
            ],
            metrics: { label: 'Avg. ROAS', value: '5.2X' }
        },
        {
            icon: <Web sx={{ fontSize: 48 }} />,
            title: "Web Development",
            shortDesc: "Stunning mobile-first sites",
            description: "Create stunning, mobile-responsive websites with modern design, lightning-fast performance, and cutting-edge functionality.",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            color: '#4facfe',
            features: [
                'Responsive Design',
                'Lightning Fast',
                'SEO-Friendly Builds',
                'E-commerce Ready'
            ],
            metrics: { label: 'Avg. Load Time', value: '<1.5s' }
        },
        {
            icon: <Science sx={{ fontSize: 48 }} />,
            title: "AI & Data Science",
            shortDesc: "Intelligent automation",
            description: "Leverage AI and data science to unlock insights, automate processes, and drive intelligent business decisions.",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            color: '#fa709a',
            features: [
                'Analytics & Dashboards',
                'Predictive Insights',
                'Process Automation',
                'ML Model Development'
            ],
            metrics: { label: 'Time Saved', value: '60%' }
        },
        {
            icon: <ShoppingCart sx={{ fontSize: 48 }} />,
            title: "E-Commerce Solutions",
            shortDesc: "Complete online stores",
            description: "End-to-end e-commerce solutions from storefront design to payment integration and inventory management.",
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            color: '#a8edea',
            features: [
                'Shopify & WooCommerce',
                'Payment Gateway Integration',
                'Inventory Management',
                'Multi-channel Selling'
            ],
            metrics: { label: 'Sales Increase', value: '+178%' }
        },
        {
            icon: <DesignServices sx={{ fontSize: 48 }} />,
            title: "Brand & Design",
            shortDesc: "Memorable brand identity",
            description: "Create memorable brand identities with logo design, brand guidelines, and cohesive visual storytelling.",
            gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
            color: '#ffecd2',
            features: [
                'Logo & Brand Identity',
                'Brand Guidelines',
                'Marketing Collateral',
                'UI/UX Design'
            ],
            metrics: { label: 'Brand Recognition', value: '+240%' }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.25, 0, 1]
            }
        }
    };

    return (
        <Box 
            id="services" 
            sx={{ 
                py: { xs: 10, md: 16 }, 
                background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 50%, #ffffff 100%)',
                position: 'relative', 
                overflow: 'hidden' 
            }}
        >
            {/* Background Decorations */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 15% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 85% 80%, rgba(20, 184, 166, 0.08) 0%, transparent 50%)
                `,
                pointerEvents: 'none'
            }} />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}
                >
                    <Chip 
                        icon={<AutoAwesome />}
                        label="Our Expertise" 
                        sx={{ 
                            mb: 3,
                            background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                            color: '#065f46',
                            fontWeight: 700,
                            fontSize: '0.9375rem',
                            px: 2,
                            py: 2.5,
                            height: 'auto',
                            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)',
                        }} 
                    />
                    <Typography 
                        variant="h2" 
                        component="h2" 
                        sx={{ 
                            fontWeight: 900,
                            mb: 3,
                            fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
                            letterSpacing: '-0.03em',
                            background: 'linear-gradient(135deg, #065f46 0%, #10b981 50%, #14b8a6 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Transform Your Digital Presence
                    </Typography>
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            color: 'text.secondary',
                            maxWidth: 700,
                            mx: 'auto',
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            fontWeight: 500,
                            lineHeight: 1.7,
                        }}
                    >
                        Comprehensive solutions designed to accelerate growth and maximize your online impact
                    </Typography>
                </MotionBox>

                {/* Services Grid */}
                <MotionBox
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Grid container spacing={{ xs: 3, md: 4 }}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} lg={4} key={index}>
                                <MotionCard
                                    variants={cardVariants}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    onClick={() => navigate('/services')}
                                    sx={{ 
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        border: '2px solid transparent',
                                        borderRadius: 5,
                                        background: '#ffffff',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        overflow: 'hidden',
                                        '&:hover': {
                                            transform: 'translateY(-12px)',
                                            boxShadow: '0 24px 60px rgba(16, 185, 129, 0.25)',
                                            borderColor: service.color,
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: 6,
                                            background: service.gradient,
                                            transition: 'height 0.4s ease',
                                        },
                                        '&:hover::before': {
                                            height: '100%',
                                            opacity: 0.05,
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        {/* Icon and Metric Badge */}
                                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
                                            <Box 
                                                sx={{ 
                                                    width: 72, 
                                                    height: 72, 
                                                    borderRadius: 4, 
                                                    background: hoveredCard === index ? service.gradient : alpha(service.color, 0.1),
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: hoveredCard === index ? '#ffffff' : service.color,
                                                    transition: 'all 0.4s ease',
                                                    boxShadow: hoveredCard === index ? `0 12px 32px ${alpha(service.color, 0.4)}` : 'none',
                                                }}
                                            >
                                                {service.icon}
                                            </Box>
                                            <Chip 
                                                label={service.metrics.value}
                                                size="small"
                                                sx={{
                                                    background: alpha(service.color, 0.1),
                                                    color: service.color,
                                                    fontWeight: 700,
                                                    fontSize: '0.8125rem',
                                                    border: `1px solid ${alpha(service.color, 0.2)}`,
                                                }}
                                            />
                                        </Stack>

                                        {/* Title and Description */}
                                        <Typography 
                                            variant="h5" 
                                            sx={{ 
                                                fontWeight: 800, 
                                                mb: 1.5,
                                                fontSize: { xs: '1.25rem', md: '1.5rem' },
                                                letterSpacing: '-0.01em',
                                                color: 'text.primary',
                                            }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            sx={{ 
                                                color: 'text.secondary', 
                                                mb: 3,
                                                lineHeight: 1.8,
                                                fontSize: '0.9375rem',
                                            }}
                                        >
                                            {service.description}
                                        </Typography>

                                        {/* Features List */}
                                        <Stack spacing={1.5} sx={{ mb: 3 }}>
                                            {service.features.map((feature, i) => (
                                                <Stack key={i} direction="row" spacing={1.5} alignItems="center">
                                                    <CheckCircle 
                                                        sx={{ 
                                                            fontSize: 18, 
                                                            color: service.color,
                                                            flexShrink: 0,
                                                        }} 
                                                    />
                                                    <Typography 
                                                        variant="body2" 
                                                        sx={{ 
                                                            color: 'text.secondary',
                                                            fontWeight: 500,
                                                            fontSize: '0.875rem',
                                                        }}
                                                    >
                                                        {feature}
                                                    </Typography>
                                                </Stack>
                                            ))}
                                        </Stack>

                                        {/* CTA Button */}
                                        <Box sx={{ mt: 'auto' }}>
                                            <Button
                                                endIcon={<ArrowForward />}
                                                fullWidth
                                                sx={{ 
                                                    fontWeight: 700,
                                                    color: service.color,
                                                    borderColor: alpha(service.color, 0.3),
                                                    background: alpha(service.color, 0.05),
                                                    py: 1.5,
                                                    borderRadius: 3,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        background: service.gradient,
                                                        color: '#ffffff',
                                                        borderColor: 'transparent',
                                                        transform: 'translateX(4px)',
                                                    },
                                                    '& .MuiButton-endIcon': { 
                                                        transition: 'transform 0.3s ease' 
                                                    },
                                                    '&:hover .MuiButton-endIcon': { 
                                                        transform: 'translateX(4px)' 
                                                    }
                                                }}
                                            >
                                                Learn More
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </MotionCard>
                            </Grid>
                        ))}
                    </Grid>
                </MotionBox>

                {/* Bottom CTA */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    sx={{ 
                        mt: { xs: 6, md: 10 },
                        textAlign: 'center',
                        p: { xs: 4, md: 6 },
                        borderRadius: 6,
                        background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `
                                radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
                            `,
                        }}
                    />
                    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography 
                            variant="h3" 
                            sx={{ 
                                fontWeight: 800, 
                                color: 'white', 
                                mb: 2,
                                fontSize: { xs: '1.75rem', md: '2.5rem' },
                            }}
                        >
                            Ready to Elevate Your Business?
                        </Typography>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                color: alpha('#ffffff', 0.9), 
                                mb: 4,
                                fontWeight: 500,
                            }}
                        >
                            Let's discuss how we can help you achieve your digital goals
                        </Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForward />}
                                onClick={() => navigate('/contact')}
                                sx={{
                                    background: '#ffffff',
                                    color: '#10b981',
                                    px: 4,
                                    py: 1.75,
                                    fontWeight: 700,
                                    fontSize: '1.0625rem',
                                    '&:hover': {
                                        background: alpha('#ffffff', 0.95),
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                Get Started Today
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => navigate('/services')}
                                sx={{
                                    borderColor: '#ffffff',
                                    color: '#ffffff',
                                    borderWidth: 2,
                                    px: 4,
                                    py: 1.75,
                                    fontWeight: 700,
                                    fontSize: '1.0625rem',
                                    '&:hover': {
                                        borderWidth: 2,
                                        background: alpha('#ffffff', 0.15),
                                        borderColor: '#ffffff',
                                    },
                                }}
                            >
                                View All Services
                            </Button>
                        </Stack>
                    </Container>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default ServicesOverviewRevamped;
