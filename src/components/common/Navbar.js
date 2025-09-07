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
    useTheme,
    useMediaQuery,
    Badge,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Phone } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Blog', path: '/blog' },
];

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawerVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    };

    const menuItemVariants = {
        closed: { x: 20, opacity: 0 },
        open: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1 + 0.2
            }
        })
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={scrolled ? 8 : 0}
                sx={{
                    zIndex: 1400,
                    background: scrolled 
                        ? 'rgba(255,255,255,0.95)' 
                        : 'rgba(255,255,255,0.85)',
                    color: 'text.primary',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid',
                    borderColor: scrolled ? 'rgba(15,23,42,0.12)' : 'rgba(15,23,42,0.06)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <Toolbar sx={{ 
                    justifyContent: 'space-between', 
                    py: { xs: 1, md: 1.5 },
                    px: { xs: 2, md: 4 },
                }}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Typography
                            variant="h6"
                            component={RouterLink}
                            to="/"
                            sx={{
                                color: 'text.primary',
                                textDecoration: 'none',
                                fontWeight: 800,
                                fontSize: { xs: '1.5rem', md: '1.75rem' },
                                letterSpacing: '-0.02em',
                                background: 'linear-gradient(90deg, #16a34a, #22c55e)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            charanX
                        </Typography>
                    </motion.div>
                    
                    {isMobile ? (
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                        >
                            <IconButton
                                onClick={handleDrawerToggle}
                                sx={{
                                    color: 'text.primary',
                                    bgcolor: 'rgba(34, 197, 94, 0.1)',
                                    '&:hover': { 
                                        bgcolor: 'rgba(34, 197, 94, 0.2)',
                                        transform: 'scale(1.05)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        </motion.div>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.title}
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Button 
                                        component={RouterLink} 
                                        to={link.path}
                                        sx={{
                                            color: 'text.primary',
                                            mx: 1,
                                            fontSize: '0.95rem',
                                            fontWeight: 600,
                                            position: 'relative',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                width: location.pathname === link.path ? '100%' : '0%',
                                                height: '3px',
                                                bottom: -2,
                                                left: 0,
                                                bgcolor: 'primary.main',
                                                borderRadius: '2px',
                                                transition: 'width 0.3s ease',
                                            },
                                            '&:hover::after': {
                                                width: '100%',
                                            },
                                        }}
                                    >
                                        {link.title}
                                    </Button>
                                </motion.div>
                            ))}
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    component={RouterLink} 
                                    to="/contact"
                                    startIcon={<Phone sx={{ fontSize: 18 }} />}
                                    sx={{
                                        ml: 2,
                                        px: 4,
                                        py: 1.2,
                                        borderRadius: '999px',
                                        background: 'linear-gradient(45deg, #16a34a, #22c55e)',
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 12px rgba(34, 197, 94, 0.25)',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                                            boxShadow: '0 6px 20px rgba(34, 197, 94, 0.35)',
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: -100,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                            transition: 'left 0.5s ease',
                                        },
                                        '&:hover::before': {
                                            left: '100%',
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <span>Get Quote</span>
                                        <Badge 
                                            badgeContent="Free" 
                                            sx={{ 
                                                '& .MuiBadge-badge': { 
                                                    fontSize: '0.7rem',
                                                    fontWeight: 700,
                                                    bgcolor: '#fbbf24',
                                                    color: '#000',
                                                    minWidth: 'auto',
                                                    height: 16,
                                                    borderRadius: 1
                                                } 
                                            }}
                                        />
                                    </Box>
                                </Button>
                            </motion.div>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Enhanced Mobile Drawer */}
            <AnimatePresence>
                {drawerOpen && (
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': {
                                width: 320,
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.95) 100%)',
                                backdropFilter: 'blur(20px)',
                                color: 'text.primary',
                                border: 'none',
                                boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                            },
                        }}
                    >
                        <motion.div
                            variants={drawerVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <Box sx={{ 
                                p: 4,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Typography variant="h5" sx={{ 
                                        mb: 5,
                                        color: 'text.primary',
                                        fontWeight: 800,
                                        fontSize: '1.75rem',
                                        background: 'linear-gradient(90deg, #16a34a, #22c55e)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>
                                        charanX
                                    </Typography>
                                </motion.div>
                                
                                <List sx={{ flex: 1 }}>
                                    {navLinks.map((link, index) => (
                                        <ListItem 
                                            key={link.title}
                                            disablePadding
                                            sx={{ mb: 1 }}
                                        >
                                            <motion.div
                                                variants={menuItemVariants}
                                                initial="closed"
                                                animate="open"
                                                custom={index}
                                                style={{ width: '100%' }}
                                            >
                                                <Button
                                                    fullWidth
                                                    component={RouterLink}
                                                    to={link.path}
                                                    onClick={handleDrawerToggle}
                                                    sx={{
                                                        py: 2,
                                                        justifyContent: 'flex-start',
                                                        color: 'text.primary',
                                                        borderRadius: 3,
                                                        fontSize: '1.1rem',
                                                        fontWeight: 600,
                                                        bgcolor: location.pathname === link.path
                                                            ? 'rgba(34, 197, 94, 0.1)'
                                                            : 'transparent',
                                                        borderLeft: location.pathname === link.path
                                                            ? '4px solid'
                                                            : '4px solid transparent',
                                                        borderColor: 'primary.main',
                                                        '&:hover': {
                                                            bgcolor: 'rgba(34, 197, 94, 0.08)',
                                                            transform: 'translateX(8px)',
                                                        },
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {link.title}
                                                </Button>
                                            </motion.div>
                                        </ListItem>
                                    ))}
                                </List>
                                
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <Button 
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        component={RouterLink}
                                        to="/contact"
                                        onClick={handleDrawerToggle}
                                        startIcon={<Phone />}
                                        sx={{
                                            py: 2,
                                            borderRadius: '999px',
                                            background: 'linear-gradient(45deg, #16a34a, #22c55e)',
                                            fontWeight: 700,
                                            fontSize: '1.1rem',
                                            boxShadow: '0 8px 20px rgba(34, 197, 94, 0.25)',
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                                                boxShadow: '0 12px 30px rgba(34, 197, 94, 0.35)',
                                                transform: 'translateY(-2px)',
                                            },
                                        }}
                                    >
                                        Get Free Quote
                                    </Button>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Drawer>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;