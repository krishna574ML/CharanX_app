import React from 'react';
import { 
    Container, 
    Typography, 
    Box, 
    Grid, 
    Card, 
    CardContent,
    Button,
    Stack,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { 
    Campaign,
    TrendingUp,
    Web,
    Analytics,
    ContentCopy,
    Search,
    ArrowForward
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const ServicesOverview = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const services = [
        {
            icon: <Campaign sx={{ fontSize: 40 }} />,
            title: "Social Media Marketing",
            description: "Build engaged communities and drive brand awareness through strategic social media campaigns across all platforms.",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            features: ["Content Strategy", "Community Management", "Paid Social Ads"]
        },
        {
            icon: <TrendingUp sx={{ fontSize: 40 }} />,
            title: "Performance Marketing",
            description: "Data-driven campaigns that deliver measurable ROI through PPC, display ads, and conversion optimization.",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            features: ["Google Ads", "Facebook Ads", "Conversion Optimization"]
        },
        {
            icon: <Web sx={{ fontSize: 40 }} />,
            title: "Web Design & Development",
            description: "Create stunning, mobile-responsive websites that convert visitors into customers with modern design and functionality.",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            features: ["Custom Design", "Mobile-First", "E-commerce Solutions"]
        },
        {
            icon: <Analytics sx={{ fontSize: 40 }} />,
            title: "Analytics & Insights",
            description: "Transform data into actionable insights with comprehensive tracking, reporting, and performance analysis.",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            features: ["Performance Tracking", "Custom Dashboards", "Insights Reports"]
        },
        {
            icon: <ContentCopy sx={{ fontSize: 40 }} />,
            title: "Content Strategy",
            description: "Develop compelling content that tells your brand story and drives engagement across all digital channels.",
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            features: ["Content Planning", "Blog Writing", "Video Content"]
        },
        {
            icon: <Search sx={{ fontSize: 40 }} />,
            title: "SEO & Local Search",
            description: "Improve your search rankings and local visibility with comprehensive SEO strategies and optimization.",
            gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
            features: ["Technical SEO", "Local SEO", "Link Building"]
        }
    ];

    return (
    <Box id="services" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
            {/* Background Elements */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />
            
            <Container maxWidth="lg" sx={{ position: 'relative' }}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Typography 
                        variant="h2" 
                        component="h2" 
                        align="center" 
                        gutterBottom
                        sx={{ 
                            fontWeight: 700,
                            mb: 2,
                            background: 'linear-gradient(90deg, #16a34a, #22c55e)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Our Expertise
                    </Typography>
                    <Typography 
                        variant="h6" 
                        align="center" 
                        color="text.secondary" 
                        sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
                    >
                        Comprehensive digital marketing solutions designed to accelerate your business growth and maximize your online impact
                    </Typography>
                </motion.div>

                {/* Services Grid */}
                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                style={{ height: '100%' }}
                            >
                                <Card 
                                    sx={{ 
                                        height: '100%',
                                        background: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:hover': {
                                            borderColor: 'primary.light',
                                            boxShadow: '0 10px 30px rgba(2, 6, 23, 0.08)',
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: service.gradient,
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        {/* Service Icon */}
                                        <Box sx={{ 
                                            width: 80, 
                                            height: 80, 
                                            borderRadius: 2, 
                                            background: service.gradient,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                            color: 'white'
                                        }}>
                                            {service.icon}
                                        </Box>
                                        
                                        {/* Service Title */}
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                                            {service.title}
                                        </Typography>
                                        
                                        {/* Service Description */}
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
                                            {service.description}
                                        </Typography>

                                        {/* Features List */}
                                        <Stack spacing={1} sx={{ mb: 3 }}>
                                            {service.features.map((feature, idx) => (
                                                <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Box sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: '50%',
                                                        bgcolor: 'primary.main',
                                                        mr: 1.5
                                                    }} />
                                                    <Typography variant="body2" color="text.secondary">
                                                        {feature}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Stack>

                                        {/* Learn More Button */}
                                        <Button
                                            variant="outlined"
                                            endIcon={<ArrowForward />}
                                            component={RouterLink}
                                            to="/services"
                                            sx={{
                                                borderColor: 'primary.main',
                                                color: 'primary.main',
                                                mt: 'auto',
                                                '&:hover': {
                                                    borderColor: 'primary.main',
                                                    bgcolor: 'rgba(34, 197, 94, 0.08)',
                                                    transform: 'translateX(4px)',
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Box sx={{ 
                        textAlign: 'center', 
                        mt: 8, 
                        p: { xs: 4, md: 6 },
                        background: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 4
                    }}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                            Ready to Accelerate Your Growth?
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                            Let's discuss your goals and create a customized digital marketing strategy that delivers real results.
                        </Typography>
                        <Stack 
                            direction={{ xs: 'column', sm: 'row' }} 
                            spacing={2} 
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Button
                                variant="contained"
                                size="large"
                                component={RouterLink}
                                to="/contact"
                                sx={{
                                    background: 'linear-gradient(45deg, #16a34a, #22c55e)',
                                    color: 'common.white',
                                    fontWeight: 600,
                                    py: 1.5,
                                    px: 4,
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 20px rgba(16, 185, 129, 0.25)',
                                    },
                                }}
                            >
                                Get Free Consultation
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                component={RouterLink}
                                to="/portfolio"
                                sx={{
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    py: 1.5,
                                    px: 4,
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        bgcolor: 'rgba(34, 197, 94, 0.08)',
                                    },
                                }}
                            >
                                View Our Work
                            </Button>
                        </Stack>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default ServicesOverview;
