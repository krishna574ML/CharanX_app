import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    Stack,
    alpha,
    Container,
} from '@mui/material';
import { 
    Menu as MenuIcon, 
    Close as CloseIcon,
    ArrowForward,
    Phone,
    Email
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
];

const NavbarRevamped = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setDrawerOpen(false);
    }, [location]);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    background: scrolled 
                        ? alpha('#ffffff', 0.95)
                        : alpha('#f8fffe', 0.85),
                    backdropFilter: 'blur(20px) saturate(180%)',
                    borderBottom: '1px solid',
                    borderColor: scrolled 
                        ? alpha('#10b981', 0.15)
                        : alpha('#10b981', 0.08),
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: scrolled 
                        ? `0 4px 24px ${alpha('#10b981', 0.08)}`
                        : 'none',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar 
                        sx={{ 
                            justifyContent: 'space-between',
                            py: { xs: 1.5, md: 2 },
                            px: { xs: 0, sm: 2 },
                        }}
                    >
                        {/* Logo */}
                        <MotionBox
                            component={RouterLink}
                            to="/"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                textDecoration: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            {/* Logo Icon */}
                            <Box
                                sx={{
                                    width: { xs: 44, md: 52 },
                                    height: { xs: 44, md: 52 },
                                    borderRadius: 3,
                                    background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: `0 8px 24px ${alpha('#10b981', 0.35)}`,
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: -2,
                                        borderRadius: 3.5,
                                        background: 'linear-gradient(135deg, #10b981, #14b8a6)',
                                        filter: 'blur(8px)',
                                        opacity: 0.6,
                                        zIndex: -1,
                                    }
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: 'white',
                                        fontWeight: 900,
                                        fontSize: { xs: '1.125rem', md: '1.375rem' },
                                        textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                                    }}
                                >
                                    C
                                </Typography>
                            </Box>

                            {/* Brand Name */}
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 900,
                                        fontSize: { xs: '1.5rem', md: '1.875rem' },
                                        letterSpacing: '-0.03em',
                                        background: 'linear-gradient(135deg, #065f46 0%, #10b981 50%, #14b8a6 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        lineHeight: 1,
                                    }}
                                >
                                    CharanX
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: '0.625rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Digital Agency
                                </Typography>
                            </Box>
                        </MotionBox>

                        {/* Desktop Navigation */}
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            sx={{ display: { xs: 'none', md: 'flex' } }}
                        >
                            {navLinks.map((link) => (
                                <Button
                                    key={link.path}
                                    component={RouterLink}
                                    to={link.path}
                                    sx={{
                                        px: 3,
                                        py: 1,
                                        fontWeight: 700,
                                        fontSize: '0.9375rem',
                                        color: location.pathname === link.path 
                                            ? 'primary.main'
                                            : 'text.primary',
                                        position: 'relative',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            color: 'primary.main',
                                            background: alpha('#10b981', 0.06),
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 4,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: location.pathname === link.path ? '70%' : '0%',
                                            height: 3,
                                            borderRadius: 2,
                                            background: 'linear-gradient(90deg, #10b981, #14b8a6)',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover::after': {
                                            width: '70%',
                                        },
                                    }}
                                >
                                    {link.title}
                                </Button>
                            ))}

                            {/* CTA Button */}
                            <MotionButton
                                component={RouterLink}
                                to="/contact"
                                variant="contained"
                                endIcon={<ArrowForward />}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                sx={{
                                    ml: 2,
                                    px: 3,
                                    py: 1.25,
                                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                    borderRadius: 3,
                                    fontWeight: 700,
                                    fontSize: '0.9375rem',
                                    boxShadow: `0 8px 24px ${alpha('#10b981', 0.3)}`,
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                                        boxShadow: `0 12px 32px ${alpha('#10b981', 0.4)}`,
                                    },
                                }}
                            >
                                Get Started
                            </MotionButton>
                        </Stack>

                        {/* Mobile Menu Button */}
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                color: 'primary.main',
                                background: alpha('#10b981', 0.1),
                                '&:hover': {
                                    background: alpha('#10b981', 0.2),
                                },
                            }}
                        >
                            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        width: { xs: '100%', sm: 360 },
                        background: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)',
                        backgroundImage: `
                            radial-gradient(circle at 2px 2px, ${alpha('#10b981', 0.08)} 1px, transparent 0)
                        `,
                        backgroundSize: '48px 48px',
                    },
                }}
            >
                <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Mobile Header */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
                        <Typography 
                            variant="h5" 
                            sx={{ 
                                fontWeight: 900,
                                background: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Menu
                        </Typography>
                        <IconButton 
                            onClick={handleDrawerToggle}
                            sx={{ 
                                color: 'primary.main',
                                background: alpha('#ffffff', 0.7),
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Stack>

                    {/* Mobile Navigation Links */}
                    <List sx={{ flexGrow: 1 }}>
                        <AnimatePresence>
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <ListItem sx={{ px: 0, mb: 1 }}>
                                        <Button
                                            component={RouterLink}
                                            to={link.path}
                                            fullWidth
                                            onClick={handleDrawerToggle}
                                            sx={{
                                                py: 2,
                                                px: 3,
                                                justifyContent: 'flex-start',
                                                fontSize: '1.125rem',
                                                fontWeight: 700,
                                                color: location.pathname === link.path 
                                                    ? '#ffffff'
                                                    : 'text.primary',
                                                background: location.pathname === link.path
                                                    ? 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)'
                                                    : alpha('#ffffff', 0.5),
                                                backdropFilter: 'blur(10px)',
                                                borderRadius: 3,
                                                border: '1px solid',
                                                borderColor: location.pathname === link.path
                                                    ? 'transparent'
                                                    : alpha('#10b981', 0.2),
                                                '&:hover': {
                                                    background: location.pathname === link.path
                                                        ? 'linear-gradient(135deg, #059669 0%, #0d9488 100%)'
                                                        : alpha('#10b981', 0.1),
                                                },
                                            }}
                                        >
                                            {link.title}
                                        </Button>
                                    </ListItem>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </List>

                    {/* Mobile CTA Section */}
                    <Box sx={{ mt: 'auto' }}>
                        <Button
                            component={RouterLink}
                            to="/contact"
                            variant="contained"
                            fullWidth
                            endIcon={<ArrowForward />}
                            onClick={handleDrawerToggle}
                            sx={{
                                py: 2,
                                mb: 3,
                                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                borderRadius: 3,
                                fontWeight: 700,
                                fontSize: '1.0625rem',
                                boxShadow: `0 12px 32px ${alpha('#10b981', 0.35)}`,
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                                },
                            }}
                        >
                            Get Started Today
                        </Button>

                        {/* Contact Info */}
                        <Stack spacing={1.5}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Phone sx={{ color: 'primary.main', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                    +91 XXX XXX XXXX
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Email sx={{ color: 'primary.main', fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                    hello@charanx.com
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default NavbarRevamped;
