import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Stack,
    Paper,
    Avatar,
    useTheme,
    useMediaQuery,
    Breadcrumbs,
    Link,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Snackbar,
    Alert,
    Chip,
    IconButton
} from '@mui/material';
import {
    Email,
    WhatsApp,
    Schedule,
    Send,
    ArrowForward,
    Person,
    Business,
    Message,
    CheckCircle,
    LocationOn,
    AccessTime,
    Phone,
    Close
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate, Link as RouterLink, useLocation } from 'react-router-dom';

const ContactPageRevamped = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        service: '',
        message: ''
    });
    
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const services = [
        'Social Media Marketing',
        'Performance Marketing', 
        'Web Design & Development',
        'Brand Identity & Design',
        'Analytics & Business Intelligence',
        'E-commerce Solutions',
        'Other'
    ];

    const contactMethods = [
        {
            icon: <WhatsApp sx={{ fontSize: 32 }} />,
            title: 'WhatsApp',
            subtitle: '+91 9677303310',
            description: 'Quick response within minutes',
            action: () => window.open('https://wa.me/919677303310', '_blank'),
            color: '#25D366',
            gradient: 'linear-gradient(135deg, #25D366 0%, #22C55E 100%)'
        },
        {
            icon: <Email sx={{ fontSize: 32 }} />,
            title: 'Email Us',
            subtitle: 'info@charanx.com',
            description: 'Detailed project discussions',
            action: () => window.open('mailto:info@charanx.com', '_blank'),
            color: '#3B82F6',
            gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)'
        },
        {
            icon: <Schedule sx={{ fontSize: 32 }} />,
            title: 'Book a Call',
            subtitle: 'Free Strategy Session',
            description: 'Personalized consultation',
            action: () => window.open('https://calendly.com/charanx', '_blank'),
            color: '#8B5CF6',
            gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        // Check if we came from a service selection
        if (location.state?.selectedService) {
            setFormData(prev => ({
                ...prev,
                service: location.state.selectedService
            }));
        }
    }, [location]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.fullName || !formData.email || !formData.message) {
            setSnackbar({
                open: true,
                message: 'Please fill in all required fields',
                severity: 'error'
            });
            return;
        }

        // Format WhatsApp message
        const whatsappMessage = `info! I'm interested in your services.

Name: ${formData.fullName}
Email: ${formData.email}
Service: ${formData.service || 'General Inquiry'}
Message: ${formData.message}

Please get back to me within 2 hours as mentioned.`;

        const whatsappUrl = `https://wa.me/919677303310?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');

        setSnackbar({
            open: true,
            message: 'Message sent! We\'ll get back to you within 2 hours.',
            severity: 'success'
        });

        // Reset form
        setFormData({
            fullName: '',
            email: '',
            service: '',
            message: ''
        });
    };

    const handleCloseSnackbar = () => {
        setSnackbar(prev => ({ ...prev, open: false }));
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
                        <Typography color="text.primary" fontWeight="600">Contact</Typography>
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
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                mb: 3,
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #16a34a 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 4px 20px rgba(22,163,74,0.1)',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            Start Your Project
                        </Typography>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{
                                mb: 6,
                                maxWidth: 600,
                                mx: 'auto',
                                fontWeight: 400,
                                lineHeight: 1.6,
                                fontSize: { xs: '1.1rem', md: '1.2rem' }
                            }}
                        >
                            Fill out the form and we'll get back to you within 2 hours.
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={6}>
                    {/* Contact Form */}
                    <Grid item xs={12} lg={8}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 4, md: 6 },
                                    background: 'rgba(255,255,255,0.9)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    borderRadius: 4,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            >
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={4}>
                                        {/* Name and Email Row */}
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="Full Name"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Full Name * *"
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: 3,
                                                        background: 'rgba(255,255,255,0.8)',
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main'
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Email Address * *"
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: 3,
                                                        background: 'rgba(255,255,255,0.8)',
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main'
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>

                                        {/* Service Selection */}
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth>
                                                <InputLabel>Service Interested In</InputLabel>
                                                <Select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleInputChange}
                                                    label="Service Interested In"
                                                    sx={{
                                                        borderRadius: 3,
                                                        background: 'rgba(255,255,255,0.8)'
                                                    }}
                                                >
                                                    {services.map((service) => (
                                                        <MenuItem key={service} value={service}>
                                                            {service}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        {/* Message */}
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Your Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                multiline
                                                rows={6}
                                                placeholder="Tell us about your project requirements..."
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: 3,
                                                        background: 'rgba(255,255,255,0.8)',
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main'
                                                        }
                                                    }
                                                }}
                                            />
                                        </Grid>

                                        {/* Submit Button */}
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                endIcon={<Send />}
                                                sx={{
                                                    background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                                                    color: 'white',
                                                    fontWeight: 700,
                                                    py: 2,
                                                    px: 6,
                                                    borderRadius: 3,
                                                    fontSize: '1.1rem',
                                                    '&:hover': {
                                                        background: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: '0 10px 25px rgba(34,197,94,0.3)'
                                                    },
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* Contact Methods */}
                    <Grid item xs={12} lg={4}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Typography
                                variant="h4"
                                fontWeight="800"
                                sx={{ mb: 4, color: '#1a1a1a' }}
                            >
                                Get In Touch
                            </Typography>

                            <Stack spacing={3}>
                                {contactMethods.map((method, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <Paper
                                            elevation={0}
                                            onClick={method.action}
                                            sx={{
                                                p: 3,
                                                background: 'rgba(255,255,255,0.9)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255,255,255,0.3)',
                                                borderRadius: 3,
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                                    borderColor: method.color
                                                }
                                            }}
                                        >
                                            <Stack direction="row" alignItems="center" spacing={2}>
                                                <Avatar
                                                    sx={{
                                                        width: 60,
                                                        height: 60,
                                                        background: method.gradient,
                                                        color: 'white'
                                                    }}
                                                >
                                                    {method.icon}
                                                </Avatar>
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography variant="h6" fontWeight="700" sx={{ mb: 0.5 }}>
                                                        {method.title}
                                                    </Typography>
                                                    <Typography 
                                                        variant="body1" 
                                                        sx={{ 
                                                            color: method.color, 
                                                            fontWeight: 600,
                                                            mb: 0.5
                                                        }}
                                                    >
                                                        {method.subtitle}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {method.description}
                                                    </Typography>
                                                </Box>
                                                <ArrowForward sx={{ color: method.color }} />
                                            </Stack>
                                        </Paper>
                                    </motion.div>
                                ))}
                            </Stack>

                            {/* Quick Info */}
                            <Paper
                                elevation={0}
                                sx={{
                                    mt: 4,
                                    p: 4,
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    borderRadius: 3
                                }}
                            >
                                <Typography variant="h6" fontWeight="700" sx={{ mb: 2 }}>
                                    Why Choose CharanX?
                                </Typography>
                                <Stack spacing={2}>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <CheckCircle sx={{ fontSize: 20 }} />
                                        <Typography variant="body2">Response within 2 hours</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <CheckCircle sx={{ fontSize: 20 }} />
                                        <Typography variant="body2">Free consultation & strategy</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <CheckCircle sx={{ fontSize: 20 }} />
                                        <Typography variant="body2">Proven track record</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <CheckCircle sx={{ fontSize: 20 }} />
                                        <Typography variant="body2">Transparent pricing</Typography>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            {/* Snackbar for notifications */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    onClose={handleCloseSnackbar} 
                    severity={snackbar.severity}
                    sx={{ 
                        width: '100%',
                        borderRadius: 2,
                        fontWeight: 600
                    }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactPageRevamped;
