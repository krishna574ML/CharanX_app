import React from 'react';
import { 
    Box, 
    Container, 
    Typography, 
    Link, 
    Grid, 
    Stack, 
    IconButton,
    Divider,
    TextField,
    Button
} from '@mui/material';
import { 
    ArrowUpward,
    Facebook,
    Instagram,
    LinkedIn,
    Twitter
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = {
        services: [
            { name: 'Social Media', path: '/services' },
            { name: 'Performance Marketing', path: '/services' },
            { name: 'Web Development', path: '/services' },
            { name: 'Brand Design', path: '/services' }
        ],
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Contact', path: '/contact' }
        ]
    };
    
    const socialLinks = [
        { icon: <Facebook />, href: 'https://facebook.com', 'aria-label': 'Facebook' },
        { icon: <Instagram />, href: 'https://instagram.com', 'aria-label': 'Instagram' },
        { icon: <LinkedIn />, href: 'https://linkedin.com', 'aria-label': 'LinkedIn' },
        { icon: <Twitter />, href: 'https://twitter.com', 'aria-label': 'Twitter' }
    ];

    return (
        <Box
            component="footer"
            sx={{
                background: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative' }}>
                <Box sx={{ py: { xs: 6, md: 8 } }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    fontWeight: 800,
                                    mb: 2,
                                    background: 'linear-gradient(90deg, #16a34a, #22c55e)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                charanX
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                                A premier digital marketing agency dedicated to transforming brands with data-driven strategies and creative solutions.
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                {socialLinks.map((social, index) => (
                                    <motion.div key={index} whileHover={{ y: -3 }}>
                                        <IconButton component="a" href={social.href} aria-label={social['aria-label']} target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                                            {social.icon}
                                        </IconButton>
                                    </motion.div>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={6} sm={3} md={2}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>Services</Typography>
                            <Stack spacing={1.5}>
                                {footerLinks.services.map((link) => (
                                    <Link key={link.name} component={RouterLink} to={link.path} variant="body2" sx={{ textDecoration: 'none', color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                                        {link.name}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={6} sm={3} md={2}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>Company</Typography>
                            <Stack spacing={1.5}>
                                {footerLinks.company.map((link) => (
                                    <Link key={link.name} component={RouterLink} to={link.path} variant="body2" sx={{ textDecoration: 'none', color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                                        {link.name}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                                Subscribe to our Newsletter
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Get the latest marketing insights and updates directly in your inbox.
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder="Your email address"
                                    fullWidth
                                />
                                <Button variant="contained" color="primary" sx={{ whiteSpace: 'nowrap' }}>
                                    Subscribe
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

                <Divider />

                <Box sx={{ py: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} CharanX. All Rights Reserved.
                    </Typography>
                    <Stack direction="row" spacing={3}>
                        <Link component={RouterLink} to="/privacy" variant="body2" sx={{ textDecoration: 'none', color: 'text.secondary', '&:hover': { color: 'primary.main' }}}>Privacy Policy</Link>
                        <Link component={RouterLink} to="/terms" variant="body2" sx={{ textDecoration: 'none', color: 'text.secondary', '&:hover': { color: 'primary.main' }}}>Terms of Service</Link>
                    </Stack>
                </Box>
            </Container>
            
            {/* Powered by CharanX Section */}
            <Box
                sx={{
                    mt: 3,
                    py: 2,
                    bgcolor: 'rgba(0, 0, 0, 0.3)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
            >
                <Container maxWidth="xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: 'center',
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontSize: { xs: '0.75rem', md: '0.8rem' },
                                fontWeight: 500,
                                letterSpacing: '0.02em'
                            }}
                        >
                            Built and Powered by{' '}
                            <Box
                                component="span"
                                sx={{
                                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontWeight: 700,
                                    fontSize: { xs: '0.8rem', md: '0.85rem' }
                                }}
                            >
                                CharanX
                            </Box>
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

             <IconButton
                onClick={scrollToTop}
                aria-label="Back to top"
                sx={{
                    position: 'absolute',
                    bottom: 24,
                    right: 24,
                    bgcolor: 'primary.main',
                    color: 'common.white',
                    '&:hover': { bgcolor: 'primary.dark' }
                }}
            >
                <ArrowUpward />
            </IconButton>
        </Box>
    );
};

export default Footer;
 
