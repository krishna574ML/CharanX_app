import React from 'react';
import { Fab, Box, Tooltip } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '919677303310';
        const message = encodeURIComponent("Hi CharanX! I'm interested in your digital marketing services. Can we discuss my project?");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: { xs: 20, md: 30 },
                right: { xs: 20, md: 30 },
                zIndex: 1300,
            }}
        >
            <Tooltip 
                title="Chat with us on WhatsApp" 
                placement="left"
                arrow
            >
                <motion.div
                    initial={{ scale: 0, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 1,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Fab
                        color="primary"
                        aria-label="Chat on WhatsApp"
                        onClick={handleWhatsAppClick}
                        sx={{
                            background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                            width: { xs: 56, md: 64 },
                            height: { xs: 56, md: 64 },
                            boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                                boxShadow: '0 12px 40px rgba(37, 211, 102, 0.4)',
                            },
                            animation: 'whatsapp-pulse 2s infinite',
                            '@keyframes whatsapp-pulse': {
                                '0%': {
                                    boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3), 0 0 0 0 rgba(37, 211, 102, 0.7)'
                                },
                                '70%': {
                                    boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3), 0 0 0 10px rgba(37, 211, 102, 0)'
                                },
                                '100%': {
                                    boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3), 0 0 0 0 rgba(37, 211, 102, 0)'
                                }
                            }
                        }}
                    >
                        <WhatsApp 
                            sx={{ 
                                fontSize: { xs: 28, md: 32 }, 
                                color: 'white',
                            }} 
                        />
                    </Fab>
                </motion.div>
            </Tooltip>
        </Box>
    );
};

export default FloatingWhatsApp;
