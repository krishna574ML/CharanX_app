import React, { useEffect } from 'react';
import { 
    Container, 
    Typography, 
    Box, 
    Grid, 
    Button,
    Stack,
    Paper,
    useTheme,
    useMediaQuery,
    Fab,
    Breadcrumbs,
    Link
} from '@mui/material';
import { 
    WhatsApp
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const ServicesPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const serviceCategories = [];
    const services = [];
    const whyChooseUs = [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    </Box>
                </motion.div>

                {/* Services Grid */}
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    <Grid item xs={12}>
                        <Typography variant="h5" align="center" color="text.secondary">
                            Services content will be added here
                        </Typography>
                    </Grid>
                </Grid>

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
                <WhatsApp />
            </Fab>
        </Box>
    );
};

export default ServicesPage;
