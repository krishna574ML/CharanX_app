import React, { useState, useEffect } from 'react';
import { Fab, useTheme, useMediaQuery } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopLeftSide = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            // Show button when user scrolls down 300px
            setShowScrollTop(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {showScrollTop && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 30 
                    }}
                    style={{
                        position: 'fixed',
                        bottom: isMobile ? 30 : 30,
                        left: isMobile ? 20 : 30, // Position on LEFT side to completely avoid WhatsApp
                        zIndex: 1299,
                    }}
                >
                    <motion.div
                        whileHover={{ 
                            scale: 1.1,
                            boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)'
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Fab
                            color="primary"
                            aria-label="scroll to top"
                            onClick={scrollToTop}
                            sx={{
                                background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                                color: 'white',
                                width: isMobile ? 48 : 56,
                                height: isMobile ? 48 : 56,
                                boxShadow: '0 4px 20px rgba(34, 197, 94, 0.25)',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                                    boxShadow: '0 6px 25px rgba(34, 197, 94, 0.35)',
                                },
                                '&:active': {
                                    transform: 'scale(0.95)',
                                },
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(10px)',
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    inset: -2,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #22c55e, #4ade80, #16a34a)',
                                    zIndex: -1,
                                    opacity: 0.3,
                                    filter: 'blur(6px)',
                                    transition: 'opacity 0.3s ease',
                                },
                                '&:hover::before': {
                                    opacity: 0.5,
                                }
                            }}
                        >
                            <motion.div
                                animate={{ y: [0, -4, 0] }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }}
                            >
                                <KeyboardArrowUp sx={{ fontSize: isMobile ? 24 : 28 }} />
                            </motion.div>
                        </Fab>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopLeftSide;
