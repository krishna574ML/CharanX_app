import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box 
            component="footer" 
            sx={{ 
                py: 3, 
                px: 2, 
                mt: 'auto', 
                backgroundColor: 'background.paper',
                borderTop: '1px solid #333'
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    {'© '}
                    {new Date().getFullYear()}
                    {' '}
                    <Link color="inherit" href="https://charanx.com/">
                        charanX.com
                    </Link>
                    . All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;