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
    Stack
} from '@mui/material';
import { 
    Campaign,
    TrendingUp,
    Web,
    Science,
    ArrowForward,
    CheckCircle
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const ServicesOverview = () => {
    const navigate = useNavigate();

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'marketing', label: 'Marketing' },
        { id: 'development', label: 'Development' },
        { id: 'data-ai', label: 'Data & AI' }
    ];

    const [filter, setFilter] = useState('all');

    const services = [
        {
            icon: <Campaign sx={{ fontSize: 40, color: 'white' }} />,
            title: "Social Media Marketing",
            description: "Build engaged communities and drive brand awareness through strategic social media campaigns across all platforms.",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            category: 'marketing',
            bullets: [
                'Content strategy & creative',
                'Community growth & engagement',
                'Paid social optimization'
            ]
        },
        {
            icon: <TrendingUp sx={{ fontSize: 40, color: 'white' }} />,
            title: "Performance Marketing",
            description: "Data-driven digital campaigns that deliver measurable ROI through PPC, display ads, and conversion optimization.",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            category: 'marketing',
            bullets: [
                'Google & Meta ads',
                'CRO & landing pages',
                'ROAS-focused reporting'
            ]
        },
        {
            icon: <Web sx={{ fontSize: 40, color: 'white' }} />,
            title: "Web Development",
            description: "Create stunning, mobile-responsive websites with modern design and cutting-edge functionality.",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            category: 'development',
            bullets: [
                'Responsive, fast, secure',
                'SEO-friendly builds',
                'E-commerce ready'
            ]
        },
        {
            icon: <Science sx={{ fontSize: 40, color: 'white' }} />,
            title: "AI & Data Science",
            description: "Leverage AI and data science to unlock insights, automate processes, and drive intelligent business decisions.",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            category: 'data-ai',
            bullets: [
                'Analytics & dashboards',
                'Predictive insights',
                'Process automation'
            ]
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1]
            }
        })
    };

    return (
        <Box id="services" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
             <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)
                `,
                pointerEvents: 'none'
            }} />

            {/* Floating decorative orbs */}
            <Box sx={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                '@keyframes float1': {
                    '0%,100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-18px)' }
                },
                '@keyframes float2': {
                    '0%,100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(14px)' }
                }
            }}>
                <Box sx={{
                    position: 'absolute', width: 180, height: 180, borderRadius: '50%',
                    top: { xs: 120, md: 60 }, left: -70,
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.25), rgba(16,185,129,0.15))',
                    filter: 'blur(10px)', animation: 'float1 14s ease-in-out infinite'
                }} />
                <Box sx={{
                    position: 'absolute', width: 220, height: 220, borderRadius: '50%',
                    bottom: -60, right: -60,
                    background: 'linear-gradient(135deg, rgba(22,163,74,0.20), rgba(52,211,153,0.12))',
                    filter: 'blur(14px)', animation: 'float2 16s ease-in-out infinite'
                }} />
            </Box>
            
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                        <Chip 
                            label="Our Expertise" 
                            sx={{ 
                                mb: 2,
                                bgcolor: 'rgba(34, 197, 94, 0.1)',
                                color: 'primary.main',
                                fontWeight: 700
                            }} 
                        />
                        <Typography 
                            variant="h2" 
                            component="h2" 
                            sx={{ 
                                fontWeight: 800,
                                mb: 2,
                                background: 'linear-gradient(90deg, #16a34a, #22c55e)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Transform Your Digital Presence
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
                            Comprehensive solutions designed to accelerate growth and maximize your online impact.
                        </Typography>
                    </Box>
                </motion.div>

                {/* Category filter chips */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                        {categories.map(c => (
                            <Chip
                                key={c.id}
                                label={c.label}
                                clickable
                                onClick={() => setFilter(c.id)}
                                sx={{
                                    fontWeight: 700,
                                    bgcolor: filter === c.id ? 'primary.main' : 'rgba(22,163,74,0.08)',
                                    color: filter === c.id ? 'white' : 'primary.main',
                                    '&:hover': { bgcolor: filter === c.id ? 'primary.dark' : 'rgba(22,163,74,0.14)' }
                                }}
                            />
                        ))}
                    </Stack>
                </Box>

                <Grid container spacing={4}>
                    {(filter === 'all' ? services : services.filter(s => s.category === filter)).map((service, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <motion.div
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ y: -8 }}
                                style={{ height: '100%' }}
                            >
                                <Card
                                    component={RouterLink}
                                    to="/services"
                                    aria-label={`${service.title} – Learn more`}
                                    sx={{ 
                                        textDecoration: 'none',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        p: { xs: 2.5, sm: 3 },
                                        position: 'relative',
                                        border: '1px solid transparent',
                                        borderRadius: 5,
                                        background: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)) padding-box, ${service.gradient} border-box`,
                                        backdropFilter: 'blur(10px)',
                                        transition: 'transform 0.25s ease, box-shadow 0.35s ease',
                                        boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            boxShadow: '0 24px 48px rgba(22,163,74,0.18)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1, p: 0, display: 'flex', flexDirection: 'column' }}>
                                        {/* Header row: icon + badge */}
                                        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                                            <Box sx={{ 
                                                width: 64, 
                                                height: 64, 
                                                borderRadius: '50%', 
                                                background: service.gradient,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 12px 28px rgba(22,163,74,0.25)'
                                            }}>
                                                {service.icon}
                                            </Box>
                                            {(index === 0 || index === 1) && (
                                                <Chip size="small" label={index === 0 ? 'Featured' : 'Popular'} sx={{
                                                    bgcolor: 'rgba(22,163,74,0.1)', color: 'primary.main', fontWeight: 700
                                                }} />
                                            )}
                                        </Stack>

                                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, letterSpacing: '-0.01em' }}>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                                            {service.description}
                                        </Typography>

                                        {/* Quick highlights */}
                                        <Stack spacing={0.75} sx={{ mb: 2.5 }}>
                                            {service.bullets.map((b, i) => (
                                                <Stack key={i} direction="row" spacing={1} alignItems="center">
                                                    <CheckCircle sx={{ fontSize: 18, color: 'primary.main' }} />
                                                    <Typography variant="body2" color="text.secondary">{b}</Typography>
                                                </Stack>
                                            ))}
                                        </Stack>

                                        {/* Link-like action without nested anchor */}
                                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 'auto' }}>
                                            <Button
                                                component="span"
                                                endIcon={<ArrowForward />}
                                                sx={{ 
                                                    alignSelf: 'flex-start',
                                                    fontWeight: 700,
                                                    px: 0,
                                                    minWidth: 0,
                                                    color: 'primary.main',
                                                    '& .MuiButton-endIcon': { transition: 'transform 0.25s ease' },
                                                    '&:hover .MuiButton-endIcon': { transform: 'translateX(4px)' }
                                                }}
                                            >
                                                Learn More
                                            </Button>
                                            <Button
                                                component="span"
                                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate('/contact', { state: { selectedService: service.title } }); }}
                                                sx={{ fontWeight: 700, color: 'text.primary', textDecoration: 'underline' }}
                                            >
                                                Get Quote
                                            </Button>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* CTA banner */}
            <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Box sx={{
                        p: { xs: 3, md: 5 },
                        borderRadius: 4,
                        textAlign: 'center',
                        color: 'white',
                        background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                        boxShadow: '0 20px 40px rgba(22,163,74,0.25)'
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                            Ready to Elevate Your Digital Presence?
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.95, mb: 3 }}>
                            Explore our full suite of services or talk to our team for a free strategy session.
                        </Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                            <Button
                                component={RouterLink}
                                to="/services"
                                variant="contained"
                                sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 800, px: 3, '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
                                endIcon={<ArrowForward />}
                            >
                                Explore Services
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/contact"
                                variant="outlined"
                                sx={{ borderColor: 'white', color: 'white', fontWeight: 800, px: 3, '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.12)' } }}
                                endIcon={<ArrowForward />}
                            >
                                Free Strategy Call
                            </Button>
                        </Stack>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default ServicesOverview;
