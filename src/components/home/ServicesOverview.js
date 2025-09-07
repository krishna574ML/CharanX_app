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
    useTheme,
    Chip
} from '@mui/material';
import { 
    Campaign,
    TrendingUp,
    Web,
    Science,
    ContentCopy,
    Search,
    ArrowForward
} from '@mui/icons-material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const ServicesOverview = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -100]);

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
            title: "Digital Media Marketing",
            description: "Data-driven digital campaigns that deliver measurable ROI through PPC, display ads, and conversion optimization.",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            features: ["Google Ads", "Display Advertising", "Conversion Optimization"]
        },
        {
            icon: <Web sx={{ fontSize: 40 }} />,
            title: "Web Development",
            description: "Create stunning, mobile-responsive websites and web applications with modern design and cutting-edge functionality.",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            features: ["Custom Development", "Mobile-First Design", "E-commerce Solutions"]
        },
        {
            icon: <Science sx={{ fontSize: 40 }} />,
            title: "AI & Data Science",
            description: "Leverage artificial intelligence and data science to unlock insights, automate processes, and drive intelligent business decisions.",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            features: ["Machine Learning", "Data Analytics", "AI Automation"]
        }
    ];

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            rotateX: -15
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1]
            }
        })
    };

    const hoverVariants = {
        hover: {
            y: -12,
            rotateX: 5,
            rotateY: 5,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
    <Box id="services" sx={{ py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
            {/* Enhanced 3D Background */}
            <motion.div style={{ y }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.12) 0%, transparent 60%),
                        radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.08) 0%, transparent 60%),
                        linear-gradient(135deg, rgba(34, 197, 94, 0.02) 0%, transparent 50%)
                    `,
                    pointerEvents: 'none'
                }} />
            </motion.div>
            
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Enhanced Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
                    viewport={{ once: true }}
                >
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Chip 
                                label="Our Expertise" 
                                sx={{ 
                                    mb: 3,
                                    bgcolor: 'rgba(34, 197, 94, 0.1)',
                                    color: 'primary.main',
                                    fontWeight: 700,
                                    fontSize: '0.875rem',
                                    px: 2,
                                    py: 0.5
                                }} 
                            />
                        </motion.div>
                        
                        <Typography 
                            variant="h2" 
                            component="h2" 
                            gutterBottom
                            sx={{ 
                                fontWeight: 800,
                                mb: 3,
                                background: 'linear-gradient(90deg, #16a34a, #22c55e)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: { xs: '2rem', md: '3rem' }
                            }}
                        >
                            Transform Your Digital Presence
                        </Typography>
                        <Typography 
                            variant="h6" 
                            color="text.secondary" 
                            sx={{ 
                                maxWidth: 700, 
                                mx: 'auto',
                                lineHeight: 1.6,
                                fontSize: { xs: '1rem', md: '1.125rem' }
                            }}
                        >
                            Comprehensive digital marketing solutions designed to accelerate your business growth and maximize your online impact across all channels
                        </Typography>
                    </Box>
                </motion.div>

                {/* Enhanced Services Grid */}
                <Grid container spacing={{ xs: 3, md: 4 }}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <motion.div
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true }}
                                style={{ 
                                    height: '100%',
                                    perspective: '1000px'
                                }}
                            >
                                <Card 
                                    sx={{ 
                                        height: '100%',
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid',
                                        borderColor: 'rgba(34, 197, 94, 0.1)',
                                        transition: 'all 0.4s cubic-bezier(0.25, 0.25, 0, 1)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transformStyle: 'preserve-3d',
                                        '&:hover': {
                                            borderColor: 'primary.light',
                                            boxShadow: '0 20px 40px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.1)',
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: service.gradient,
                                            opacity: 0.8,
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: `linear-gradient(135deg, ${service.gradient.split('(')[1].split(')')[0]}20, transparent 60%)`,
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            pointerEvents: 'none',
                                        },
                                        '&:hover::after': {
                                            opacity: 1,
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
                                        {/* Enhanced Service Icon */}
                                        <motion.div
                                            whileHover={{ 
                                                scale: 1.1, 
                                                rotate: [0, -5, 5, 0],
                                                transition: { duration: 0.5 }
                                            }}
                                        >
                                            <Box sx={{ 
                                                width: { xs: 70, md: 80 }, 
                                                height: { xs: 70, md: 80 }, 
                                                borderRadius: 3, 
                                                background: service.gradient,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 3,
                                                color: 'white',
                                                position: 'relative',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    inset: -2,
                                                    background: service.gradient,
                                                    borderRadius: 'inherit',
                                                    filter: 'blur(8px)',
                                                    opacity: 0.3,
                                                    zIndex: -1,
                                                }
                                            }}>
                                                {service.icon}
                                            </Box>
                                        </motion.div>
                                        
                                        {/* Service Content */}
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
                                            {service.title}
                                        </Typography>
                                        
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, lineHeight: 1.7 }}>
                                            {service.description}
                                        </Typography>

                                        {/* Enhanced Features List */}
                                        <Stack spacing={1.5} sx={{ mb: 4 }}>
                                            {service.features.map((feature, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                                                    viewport={{ once: true }}
                                                >
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                        <Box sx={{
                                                            width: 8,
                                                            height: 8,
                                                            borderRadius: '50%',
                                                            background: service.gradient,
                                                            flexShrink: 0
                                                        }} />
                                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                                                            {feature}
                                                        </Typography>
                                                    </Box>
                                                </motion.div>
                                            ))}
                                        </Stack>

                                        {/* Enhanced Learn More Button */}
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                variant="outlined"
                                                endIcon={<ArrowForward />}
                                                component={RouterLink}
                                                to="/services"
                                                fullWidth
                                                sx={{
                                                    borderColor: 'primary.main',
                                                    color: 'primary.main',
                                                    py: 1.5,
                                                    mt: 'auto',
                                                    fontWeight: 600,
                                                    borderWidth: 2,
                                                    '&:hover': {
                                                        borderWidth: 2,
                                                        borderColor: 'primary.main',
                                                        bgcolor: 'rgba(34, 197, 94, 0.08)',
                                                        transform: 'translateX(4px)',
                                                    },
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                Learn More
                                            </Button>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Enhanced CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Box sx={{ 
                        textAlign: 'center', 
                        mt: { xs: 8, md: 12 }, 
                        p: { xs: 4, md: 6 },
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid',
                        borderColor: 'rgba(34, 197, 94, 0.2)',
                        borderRadius: 6,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
                            pointerEvents: 'none',
                        }
                    }}>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
                                Ready to Accelerate Your Growth?
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
                                Let's discuss your goals and create a customized digital marketing strategy that delivers measurable results for your business.
                            </Typography>
                            <Stack 
                                direction={{ xs: 'column', sm: 'row' }} 
                                spacing={2} 
                                justifyContent="center"
                                alignItems="center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        component={RouterLink}
                                        to="/contact"
                                        sx={{
                                            background: 'linear-gradient(45deg, #16a34a, #22c55e)',
                                            color: 'common.white',
                                            fontWeight: 700,
                                            py: 2,
                                            px: 5,
                                            fontSize: '1.1rem',
                                            boxShadow: '0 8px 20px rgba(34, 197, 94, 0.25)',
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 12px 30px rgba(34, 197, 94, 0.35)',
                                            },
                                        }}
                                    >
                                        Get Free Consultation
                                    </Button>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        component={RouterLink}
                                        to="/portfolio"
                                        sx={{
                                            borderColor: 'primary.main',
                                            color: 'primary.main',
                                            py: 2,
                                            px: 5,
                                            fontSize: '1.1rem',
                                            borderWidth: 2,
                                            fontWeight: 600,
                                            '&:hover': {
                                                borderWidth: 2,
                                                borderColor: 'primary.main',
                                                bgcolor: 'rgba(34, 197, 94, 0.08)',
                                                transform: 'translateY(-1px)',
                                            },
                                        }}
                                    >
                                        View Our Work
                                    </Button>
                                </motion.div>
                            </Stack>
                        </motion.div>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default ServicesOverview;
