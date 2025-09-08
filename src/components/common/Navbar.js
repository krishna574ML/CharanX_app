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
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
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
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <AppBar
                    position="fixed"
                    elevation={scrolled ? 12 : 0}
                    sx={{
                        zIndex: 1400,
                        background: scrolled 
                            ? 'rgba(255,255,255,0.98)' 
                            : 'rgba(255,255,255,0.85)',
                        color: 'text.primary',
                        backdropFilter: 'blur(25px)',
                        borderBottom: '1px solid',
                        borderColor: scrolled ? 'rgba(15,23,42,0.15)' : 'rgba(15,23,42,0.08)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '100%',
                            background: scrolled 
                                ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.02) 0%, rgba(16, 185, 129, 0.02) 100%)'
                                : 'transparent',
                            transition: 'all 0.4s ease',
                            zIndex: -1
                        }
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
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box
                            component={RouterLink}
                            to="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                gap: 1,
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    transition: 'transform 0.2s ease'
                                }
                            }}
                        >
                            {/* Enhanced Logo with Icon */}
                            <Box
                                sx={{
                                    width: { xs: 40, md: 48 },
                                    height: { xs: 40, md: 48 },
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #4ade80 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 8px 24px rgba(34, 197, 94, 0.3)',
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: -2,
                                        borderRadius: '14px',
                                        background: 'linear-gradient(135deg, #22c55e, #4ade80, #16a34a)',
                                        zIndex: -1,
                                        opacity: 0.7,
                                        filter: 'blur(8px)'
                                    }
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: 'white',
                                        fontWeight: 900,
                                        fontSize: { xs: '1rem', md: '1.2rem' },
                                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    C
                                </Typography>
                            </Box>
                            
                            
                                                        <Box>
                                                            <Typography
                                                                variant="h6"
                                                                sx={{
                                                                    color: 'text.primary',
                                                                    fontWeight: 900,
                                                                    fontSize: { xs: '1.4rem', md: '1.8rem' },
                                                                    letterSpacing: '-0.03em',
                                                                    background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #059669 100%)',
                                                                    backgroundClip: 'text',
                                                                    WebkitBackgroundClip: 'text',
                                                                    WebkitTextFillColor: 'transparent',
                                                                    lineHeight: 1,
                                                                    position: 'relative',
                                                                    '&::after': {
                                                                        content: '""',
                                                                        position: 'absolute',
                                                                        bottom: -2,
                                                                        left: 0,
                                                                        width: '100%',
                                                                        height: 2,
                                                                        background: 'linear-gradient(90deg, #22c55e, transparent)',
                                                                        borderRadius: 1,
                                                                        opacity: 0,
                                                                        transition: 'opacity 0.3s ease'
                                                                    },
                                                                    '&:hover::after': {
                                                                        opacity: 1
                                                                    }
                                                                }}
                                                            >
                                                                charan<span style={{ color: '#22c55e', textShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}>X</span>
                                                            </Typography>
                                                            <Typography
                                                                variant="caption"
                                                                sx={{
                                                                    color: 'text.secondary',
                                                                    fontSize: '0.65rem',
                                                                    fontWeight: 600,
                                                                    letterSpacing: '0.05em',
                                                                    textTransform: 'uppercase',
                                                                    opacity: 0.8,
                                                                    display: { xs: 'none', md: 'block' }
                                                                }}
                                                            >
                                                                Guntur • Vijayawada
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </motion.div>
                                                
                                                {isMobile ? (
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        {/* Mobile CTA Button - Compact */}
                                                        <motion.div
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Button 
                                                                variant="contained" 
                                                                color="primary"
                                                                component={RouterLink} 
                                                                to="/contact"
                                                                size="small"
                                                                sx={{
                                                                    px: 2.5,
                                                                    py: 0.8,
                                                                    borderRadius: '20px',
                                                                    background: 'linear-gradient(45deg, #16a34a, #22c55e)',
                                                                    fontWeight: 600,
                                                                    fontSize: '0.8rem',
                                                                    boxShadow: '0 3px 10px rgba(34, 197, 94, 0.25)',
                                                                    '&:hover': {
                                                                        background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                                                                        boxShadow: '0 4px 15px rgba(34, 197, 94, 0.35)',
                                                                    },
                                                                }}
                                                            >
                                                                Quote
                                                            </Button>
                                                        </motion.div>
                                                        
                                                        {/* Enhanced Mobile Menu Button */}
                                                        <motion.div
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <IconButton
                                                                onClick={handleDrawerToggle}
                                                                sx={{
                                                                    color: 'text.primary',
                                                                    bgcolor: 'rgba(34, 197, 94, 0.1)',
                                                                    width: 44,
                                                                    height: 44,
                                                                    '&:hover': { 
                                                                        bgcolor: 'rgba(34, 197, 94, 0.2)',
                                                                        transform: 'scale(1.05)'
                                                                    },
                                                                    transition: 'all 0.3s ease',
                                                                    border: '1px solid rgba(34, 197, 94, 0.2)',
                                                                }}
                                                            >
                                                                <motion.div
                                                                    animate={{ rotate: drawerOpen ? 90 : 0 }}
                                                                    transition={{ duration: 0.3 }}
                                                                >
                                                                    {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                                                                </motion.div>
                                                            </IconButton>
                                                        </motion.div>
                                                    </Box>
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
                                                                </Box>
                                                            </Button>
                                                        </motion.div>
                                                    </Box>
                                                )}
                                            </Toolbar>
                                        </AppBar>
                                        </motion.div>

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

                                {/* Mobile Contact Info */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <Box sx={{ 
                                        mt: 4, 
                                        pt: 3, 
                                        borderTop: '1px solid rgba(34, 197, 94, 0.2)',
                                        textAlign: 'center'
                                    }}>
                                        <Typography variant="body2" sx={{ 
                                            color: 'text.secondary',
                                            fontSize: '0.85rem',
                                            mb: 1
                                        }}>
                                            📍 Guntur • Vijayawada
                                        </Typography>
                                        <Typography variant="body2" sx={{ 
                                            color: 'text.secondary',
                                            fontSize: '0.85rem',
                                            mb: 2
                                        }}>
                                            📱 +91 96773 03310
                                        </Typography>
                                        <Typography variant="caption" sx={{ 
                                            color: 'primary.main',
                                            fontSize: '0.75rem',
                                            fontWeight: 600
                                        }}>
                                            ✨ Digital Growth Agency
                                        </Typography>
                                    </Box>
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