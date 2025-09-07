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
    useMediaQuery,
    useTheme
} from '@mui/material';
import { 
    Email,
    Phone,
    LocationOn,
    ArrowUpward
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = {
        services: [
            { name: 'Social Media Marketing', path: '/services' },
            { name: 'Performance Marketing', path: '/services' },
            { name: 'Web Design & Development', path: '/services' },
            { name: 'Analytics & Insights', path: '/services' },
            { name: 'Content Strategy', path: '/services' },
            { name: 'SEO & Local Search', path: '/services' }
        ],
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Our Portfolio', path: '/portfolio' },
            { name: 'Case Studies', path: '/portfolio' },
            { name: 'Blog', path: '/blog' },
            { name: 'Careers', path: '/careers' },
            { name: 'Contact', path: '/contact' }
        ],
        legal: [
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Terms of Service', path: '/terms' },
            { name: 'Cookie Policy', path: '/cookies' },
            { name: 'GDPR Compliance', path: '/gdpr' }
        ]
    };

    const contactInfo = [
        { icon: <Email />, text: 'info@charanx.com', href: 'mailto:info@charanx.com' },
        { icon: <Phone />, text: '+91 9677303310, 7075012122', href: 'tel:+919677303310' },
        { icon: <LocationOn />, text: 'Guntur brodipet 2/14', href: null }
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
            {/* Background Elements */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative' }}>
                {/* Main Footer Content */}
                <Box sx={{ py: { xs: 4, md: 6 } }}>
                    <Grid container spacing={4}>
                        {/* Company Info */}
                        <Grid item xs={12} md={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Typography 
                                    variant="h4" 
                                    component={RouterLink} 
                                    to="/" 
                                    sx={{ 
                                        color: 'text.primary',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        mb: 2,
                                        display: 'block'
                                    }}
                                >
                                    CharanX
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                                    Premier digital marketing agency specializing in social media management, 
                                    performance marketing, and web design. Transform your brand's online presence 
                                    with our data-driven solutions.
                                </Typography>

                                {/* Contact Info */}
                                <Stack spacing={1.5}>
                                    {contactInfo.map((item, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box sx={{ color: 'primary.main', display: 'flex' }}>
                                                {item.icon}
                                            </Box>
                                            {item.href ? (
                                                <Link 
                                                    href={item.href} 
                                                    color="text.secondary" 
                                                    sx={{ 
                                                        textDecoration: 'none',
                                                        '&:hover': { color: 'primary.main' },
                                                        transition: 'color 0.3s ease'
                                                    }}
                                                >
                                                    {item.text}
                                                </Link>
                                            ) : (
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.text}
                                                </Typography>
                                            )}
                                        </Box>
                                    ))}
                                </Stack>
                            </motion.div>
                        </Grid>

                        {/* Services Links */}
                        <Grid item xs={12} sm={6} md={2}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                                    Services
                                </Typography>
                                <Stack spacing={1}>
                                    {footerLinks.services.map((link, index) => (
                                        <Link
                                            key={index}
                                            component={RouterLink}
                                            to={link.path}
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{
                                                textDecoration: 'none',
                                                '&:hover': { 
                                                    color: 'primary.main',
                                                    transform: 'translateX(4px)'
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </Stack>
                            </motion.div>
                        </Grid>

                        {/* Company Links */}
                        <Grid item xs={12} sm={6} md={2}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                                    Company
                                </Typography>
                                <Stack spacing={1}>
                                    {footerLinks.company.map((link, index) => (
                                        <Link
                                            key={index}
                                            component={RouterLink}
                                            to={link.path}
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{
                                                textDecoration: 'none',
                                                '&:hover': { 
                                                    color: 'primary.main',
                                                    transform: 'translateX(4px)'
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </Stack>
                            </motion.div>
                        </Grid>

                        {/* Newsletter & Social */}
                        <Grid item xs={12} md={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                                    Get In Touch
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                    Ready to transform your digital presence? Contact us today for a 
                                    personalized consultation and let's discuss your growth strategy.
                                </Typography>

                                {/* Back to Top Button */}
                                <IconButton
                                    onClick={scrollToTop}
                                    aria-label="Back to top"
                                    sx={{
                                        bgcolor: 'primary.main',
                                        color: 'common.white',
                                        '&:hover': {
                                            bgcolor: 'primary.light',
                                            transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <ArrowUpward />
                                </IconButton>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Box>

                <Divider sx={{ borderColor: 'divider' }} />

                {/* Bottom Footer */}
                <Box sx={{ 
                    py: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        © {new Date().getFullYear()} CharanX Digital Marketing Agency. All rights reserved.
                    </Typography>

                    {/* Legal Links */}
                    <Stack 
                        direction={{ xs: 'column', sm: 'row' }} 
                        spacing={{ xs: 1, sm: 3 }}
                        sx={{ textAlign: { xs: 'center', md: 'right' } }}
                    >
                        {footerLinks.legal.map((link, index) => (
                            <Link
                                key={index}
                                component={RouterLink}
                                to={link.path}
                                color="text.secondary"
                                variant="body2"
                                sx={{
                                    textDecoration: 'none',
                                    '&:hover': { color: 'primary.main' },
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;