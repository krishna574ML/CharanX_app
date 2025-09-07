import React, { useState, useEffect } from 'react';
import { 
    Container, 
    Typography, 
    Box, 
    Card, 
    CardContent,
    Avatar,
    Stack,
    Rating,
    useMediaQuery,
    useTheme,
    IconButton
} from '@mui/material';
import { 
    FormatQuote,
    ArrowBackIos,
    ArrowForwardIos,
    Star
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "CEO, TechStartup Inc.",
            company: "TechStartup Inc.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&auto=format&fit=crop&crop=face",
            rating: 5,
            text: "CharanX transformed our social media presence completely. In just 6 months, we went from 5K to 50K followers and saw a 340% increase in engagement. Their strategic approach and creative content really set them apart.",
            results: "340% engagement increase",
            industry: "Technology"
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "Marketing Director",
            company: "StyleHub Fashion",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&crop=face",
            rating: 5,
            text: "The ROI from our PPC campaigns with CharanX has been incredible. We achieved 5.2x ROAS during our Black Friday campaign and increased our online sales by 450%. Their data-driven approach delivers real results.",
            results: "5.2x ROAS achieved",
            industry: "E-commerce"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            position: "Owner",
            company: "Bistro Deluxe",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&crop=face",
            rating: 5,
            text: "Our new website from CharanX is absolutely stunning and has increased our online orders by 300%. The mobile-first design and user experience they created has been a game-changer for our restaurant chain.",
            results: "300% online order increase",
            industry: "Restaurant"
        },
        {
            id: 4,
            name: "David Park",
            position: "Founder",
            company: "FitLife Studios",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&crop=face",
            rating: 5,
            text: "CharanX helped us build a community of over 100K fitness enthusiasts and increased our class bookings by 250%. Their understanding of the fitness industry and social media strategy is unmatched.",
            results: "100K+ community built",
            industry: "Fitness"
        },
        {
            id: 5,
            name: "Lisa Thompson",
            position: "CMO",
            company: "CloudFlow Solutions",
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&auto=format&fit=crop&crop=face",
            rating: 5,
            text: "Working with CharanX on our B2B lead generation was phenomenal. They generated over 500 qualified leads and increased our demo requests by 400%. Their expertise in B2B marketing is outstanding.",
            results: "500+ qualified leads",
            industry: "SaaS"
        },
        {
            id: 6,
            name: "Robert Kim",
            position: "CEO",
            company: "MedCare Plus",
            avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&auto=format&fit=crop&crop=face",
            rating: 5,
            text: "The complete brand transformation by CharanX elevated our healthcare startup to a top 3 market position. Their understanding of healthcare marketing and professional approach was exactly what we needed.",
            results: "Top 3 market position",
            industry: "Healthcare"
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);

        return () => clearInterval(timer);
    }, [testimonials.length]);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
    <Box sx={{ py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
            {/* Background Elements */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(34, 197, 94, 0.12) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
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
                        Client Success Stories
                    </Typography>
                    <Typography 
                        variant="h6" 
                        align="center" 
                        color="text.secondary" 
                        sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
                    >
                        Don't just take our word for it. See what our clients say about the results we've delivered for their businesses.
                    </Typography>
                </motion.div>

                {/* Main Testimonial Display */}
                <Box sx={{ 
                    position: 'relative',
                    maxWidth: 900,
                    mx: 'auto',
                    mb: 6
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card sx={{ 
                                background: 'background.paper',
                                border: '1px solid',
                                borderColor: 'divider',
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    background: 'linear-gradient(90deg, #16a34a, #22c55e)',
                                }
                            }}>
                                <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                                    {/* Quote Icon */}
                                    <Box sx={{ 
                                        display: 'flex', 
                                        justifyContent: 'center', 
                                        mb: 3 
                                    }}>
                                        <FormatQuote sx={{ fontSize: 60, color: 'primary.main', opacity: 0.7 }} />
                                    </Box>

                                    {/* Testimonial Text */}
                                    <Typography 
                                        variant="h6" 
                                        align="center" 
                                        sx={{ 
                                            mb: 4, 
                                            fontStyle: 'italic',
                                            lineHeight: 1.6,
                                            color: 'text.primary',
                                            fontSize: { xs: '1.1rem', md: '1.25rem' }
                                        }}
                                    >
                                        "{currentTestimonial.text}"
                                    </Typography>

                                    {/* Rating */}
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                                        <Rating 
                                            value={currentTestimonial.rating} 
                                            readOnly 
                                            size="large"
                                            sx={{
                                                '& .MuiRating-iconFilled': {
                                                    color: 'primary.main',
                                                }
                                            }}
                                        />
                                    </Box>

                                    {/* Client Info */}
                                    <Stack 
                                        direction={{ xs: 'column', sm: 'row' }}
                                        alignItems="center" 
                                        justifyContent="center"
                                        spacing={3}
                                    >
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <Avatar 
                                                src={currentTestimonial.avatar}
                                                sx={{ 
                                                    width: 60, 
                                                    height: 60,
                                                    border: '3px solid',
                                                    borderColor: 'primary.main'
                                                }}
                                            />
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                    {currentTestimonial.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {currentTestimonial.position}
                                                </Typography>
                                                <Typography variant="body2" color="primary.main" sx={{ fontWeight: 600 }}>
                                                    {currentTestimonial.company}
                                                </Typography>
                                            </Box>
                                        </Stack>

                                        {/* Results Badge */}
                                        <Box sx={{
                                            p: 2,
                                            borderRadius: 2,
                                            background: 'rgba(212, 175, 55, 0.1)',
                                            border: '1px solid rgba(212, 175, 55, 0.3)',
                                            textAlign: 'center'
                                        }}>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                                Key Result
                                            </Typography>
                                            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                                                {currentTestimonial.results}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <IconButton
                        onClick={goToPrevious}
                        sx={{
                            position: 'absolute',
                            left: { xs: -20, md: -60 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            bgcolor: 'rgba(2, 6, 23, 0.04)',
                            border: '1px solid',
                            borderColor: 'divider',
                            color: 'text.primary',
                            '&:hover': {
                                bgcolor: 'rgba(34, 197, 94, 0.1)',
                                borderColor: 'primary.light',
                            },
                            display: { xs: 'none', sm: 'flex' }
                        }}
                    >
                        <ArrowBackIos />
                    </IconButton>

                    <IconButton
                        onClick={goToNext}
                        sx={{
                            position: 'absolute',
                            right: { xs: -20, md: -60 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            bgcolor: 'rgba(2, 6, 23, 0.04)',
                            border: '1px solid',
                            borderColor: 'divider',
                            color: 'text.primary',
                            '&:hover': {
                                bgcolor: 'rgba(34, 197, 94, 0.1)',
                                borderColor: 'primary.light',
                            },
                            display: { xs: 'none', sm: 'flex' }
                        }}
                    >
                        <ArrowForwardIos />
                    </IconButton>
                </Box>

                {/* Testimonial Indicators */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 6 }}>
                    {testimonials.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            sx={{
                                width: index === currentIndex ? 32 : 12,
                                height: 12,
                                borderRadius: 6,
                                bgcolor: index === currentIndex ? 'primary.main' : 'rgba(2,6,23,0.1)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    bgcolor: index === currentIndex ? 'primary.main' : 'rgba(2,6,23,0.2)',
                                }
                            }}
                        />
                    ))}
                </Box>

                {/* Stats Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Box sx={{ 
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                        gap: 3,
                        mt: 6
                    }}>
                        {[
                            { number: '150+', label: 'Happy Clients' },
                            { number: '500+', label: 'Projects Completed' },
                            { number: '300%', label: 'Average Growth' },
                            { number: '5★', label: 'Client Rating' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Box sx={{ 
                                    textAlign: 'center',
                                    p: 3,
                                    background: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 3,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        borderColor: 'primary.light',
                                    }
                                }}>
                                    <Typography variant="h3" sx={{ 
                                        fontWeight: 800, 
                                        color: 'primary.main',
                                        mb: 1
                                    }}>
                                        {stat.number}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Testimonials;
