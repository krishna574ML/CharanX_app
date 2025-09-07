import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const PoweredByFooter = () => {
  return (
    <Box
      sx={{
        mt: 'auto',
        py: 2,
        bgcolor: 'rgba(15, 23, 42, 0.8)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: { xs: '0.75rem', md: '0.875rem' },
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
                fontSize: { xs: '0.8rem', md: '0.9rem' }
              }}
            >
              CharanX
            </Box>
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PoweredByFooter;
