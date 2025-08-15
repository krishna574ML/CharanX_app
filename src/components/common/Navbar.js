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
    ListItemText,
    useTheme,
    useMediaQuery
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

    return (
        <>
            <AppBar 
                position="fixed" 
                elevation={scrolled ? 24 : 0}
                sx={{
                    background: scrolled 
                        ? 'rgba(10, 10, 10, 0.85)'
                        : 'rgba(10, 10, 10, 0.45)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid',
                    borderColor: scrolled 
                        ? 'rgba(255,255,255,0.1)'
                        : 'transparent',
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
                            color: 'primary.main',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                            letterSpacing: '-0.02em',
                        }}
                    >
                        charanX
                    </Typography>
                    
                    {isMobile ? (
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{
                                color: 'white',
                                bgcolor: 'rgba(255,255,255,0.05)',
                                '&:hover': {
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                },
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
                                        color: 'white',
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
                                    background: 'linear-gradient(45deg, #D4AF37, #FFD700)',
                                    fontWeight: 600,
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #FFD700, #D4AF37)',
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
                                    },
                                }}
                            >
                                Book Consultation
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
                        width: 280,
                        bgcolor: 'rgba(10, 10, 10, 0.95)',
                        backdropFilter: 'blur(10px)',
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
                        color: 'primary.main',
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
                                        color: 'white',
                                        borderRadius: 2,
                                        bgcolor: location.pathname === link.path 
                                            ? 'rgba(255,255,255,0.1)'
                                            : 'transparent',
                                        '&:hover': {
                                            bgcolor: 'rgba(255,255,255,0.05)',
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
                            background: 'linear-gradient(45deg, #D4AF37, #FFD700)',
                            fontWeight: 600,
                            '&:hover': {
                                background: 'linear-gradient(45deg, #FFD700, #D4AF37)',
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