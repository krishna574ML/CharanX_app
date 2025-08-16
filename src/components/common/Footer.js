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
                {/* client logos row */}
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
                    {['AC','BN','CZ','DX','EN'].map((label,i) => (
                        <Box key={i} sx={{
                            width: 44, height: 44, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.06)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'text.secondary'
                        }}>{label}</Box>
                    ))}
                </Box>

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