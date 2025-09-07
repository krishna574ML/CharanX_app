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
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Blog', path: '/blog' },
];

const Navbar = () => {
    const theme = useTheme();
    // use 'sm' as mobile threshold for tighter mobile UX parity with hero
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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

    return (
        <>
                        <AppBar
                            position="fixed"
                            elevation={scrolled ? 8 : 0}
                            sx={{
                                zIndex: 1400,
                                background: 'rgba(255,255,255,0.86)',
                                color: 'text.primary',
                                backdropFilter: 'blur(10px)',
                                borderBottom: '1px solid',
                                borderColor: scrolled ? 'rgba(15,23,42,0.08)' : 'transparent',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        >
                <Toolbar sx={{ 
                    justifyContent: 'space-between', 
                    py: { xs: 1, md: 1.5 },
                    px: { xs: 2, md: 4 },
                }}>
                                        <Typography
                                            variant="h6"
                                            component={RouterLink}
                                            to="/"
                                            sx={{
                                                color: 'text.primary',
                                                textDecoration: 'none',
                                                fontWeight: 'bold',
                                                fontSize: { xs: '1.375rem', md: '1.5rem' },
                                                letterSpacing: '-0.02em',
                                            }}
                                        >
                        charanX
                    </Typography>
                    
                    {isMobile ? (
                                                <IconButton
                                                    onClick={handleDrawerToggle}
                                                    sx={{
                                                        color: 'text.primary',
                                                        '&:hover': { bgcolor: 'rgba(2, 6, 23, 0.04)' },
                                                    }}
                                                >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {navLinks.map((link) => (
                                <Button 
                                    key={link.title} 
                                    component={RouterLink} 
                                    to={link.path}
                                    sx={{
                                                                                color: 'text.primary',
                                        mx: 1,
                                        fontSize: '0.95rem',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                                                                        width: location.pathname === link.path ? '100%' : '0%',
                                            height: '2px',
                                            bottom: -2,
                                            left: 0,
                                                                                        bgcolor: 'primary.main',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover::after': {
                                            width: '100%',
                                        },
                                    }}
                                >
                                    {link.title}
                                </Button>
                            ))}
                            <Button 
                                variant="contained" 
                                                                color="primary"
                                component={RouterLink} 
                                to="/contact"
                                sx={{
                                    ml: 2,
                                    px: 3,
                                    py: 1,
                                    borderRadius: '999px',
                                                                        background: 'linear-gradient(45deg, #16a34a, #22c55e)',
                                    fontWeight: 600,
                                    position: 'relative',
                                    '&:hover': {
                                                                                background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                                        transform: 'translateY(-1px)',
                                                                                boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                                    },
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <span>Book Consultation</span>
                                                                        <Box component="span" sx={{ ml: 0.5, display: { xs: 'none', sm: 'inline-flex' }, fontSize: 12, fontWeight: 700 }}>NEW</Box>
                                </Box>
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer with updated styling */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    '& .MuiDrawer-paper': {
                                        width: 300,
                                        bgcolor: 'rgba(255,255,255,0.98)',
                                        color: 'text.primary',
                                        backdropFilter: 'blur(8px)',
                                    },
                                }}
            >
                <Box onClick={handleDrawerToggle} sx={{ 
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Typography variant="h6" sx={{ 
                        mb: 4,
                                                color: 'text.primary',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                    }}>
                        charanX
                    </Typography>
                    <List sx={{ flex: 1 }}>
                        {navLinks.map((link) => (
                            <ListItem 
                                key={link.title}
                                disablePadding
                                sx={{ mb: 1 }}
                            >
                                <Button
                                    fullWidth
                                    component={RouterLink}
                                    to={link.path}
                                    onClick={handleDrawerToggle}
                                    sx={{
                                                                            py: 1.5,
                                                                            justifyContent: 'flex-start',
                                                                            color: 'text.primary',
                                                                            borderRadius: 2,
                                                                            bgcolor:
                                                                                location.pathname === link.path
                                                                                    ? 'rgba(2, 6, 23, 0.04)'
                                                                                    : 'transparent',
                                                                            '&:hover': {
                                                                                bgcolor: 'rgba(2, 6, 23, 0.06)',
                                                                            },
                                    }}
                                >
                                    {link.title}
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                    <Button 
                        fullWidth
                        variant="contained"
                        color="primary"
                        component={RouterLink}
                        to="/contact"
                        onClick={handleDrawerToggle}
                        sx={{
                                                    py: 1.5,
                                                    borderRadius: '999px',
                                                    background: 'linear-gradient(45deg, #16a34a, #22c55e)',
                                                    fontWeight: 600,
                                                    '&:hover': {
                                                        background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                                                    },
                        }}
                    >
                        Book Consultation
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;