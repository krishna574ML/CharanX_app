import React, { useState } from 'react';
import { 
    Container, 
    Typography, 
    Box, 
    Grid, 
    TextField, 
    Button, 
    Card, 
    CardContent,
    Stack,
    IconButton,
    Snackbar,
    Alert
} from '@mui/material';
import { 
    Phone, 
    Email, 
    LocationOn, 
    Send,
    Facebook,
    Instagram,
    LinkedIn,
    Twitter
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setShowSuccess(true);
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <Phone />,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            subtitle: "Mon-Fri 9AM-6PM EST"
        },
        {
            icon: <Email />,
            title: "Email Us", 
            details: "hello@charanx.com",
            subtitle: "We'll respond within 24hrs"
        },
        {
            icon: <LocationOn />,
            title: "Visit Us",
            details: "123 Digital Ave, Suite 100",
            subtitle: "New York, NY 10001"
        }
    ];

    const socialLinks = [
        { icon: <Facebook />, url: "https://facebook.com/charanx", color: "#4267B2" },
        { icon: <Instagram />, url: "https://instagram.com/charanx", color: "#E1306C" },
        { icon: <LinkedIn />, url: "https://linkedin.com/company/charanx", color: "#0077B5" },
        { icon: <Twitter />, url: "https://twitter.com/charanx", color: "#1DA1F2" }
    ];

    return (
        <Box sx={{ pt: 12, pb: 8, minHeight: '100vh' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
            <Typography 
                        variant="h2" 
                        component="h1" 
                        align="center" 
                        gutterBottom
                        sx={{ 
                            fontWeight: 700,
                            mb: 2,
                background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Let's Start Something Amazing
                    </Typography>
                    <Typography 
                        variant="h6" 
                        align="center" 
                        color="text.secondary" 
                        sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
                    >
                        Ready to transform your digital presence? Get in touch and let's discuss your next big project.
                    </Typography>
                </motion.div>

                <Grid container spacing={6}>
                    {/* Contact Form */}
                    <Grid item xs={12} lg={8}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card sx={{ 
                                bgcolor: 'background.paper',
                                border: '1px solid',
                                borderColor: 'divider',
                                boxShadow: 0
                            }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                                        Send us a message
                                    </Typography>
                                    <Box component="form" onSubmit={handleSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Your Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': { borderColor: 'divider' },
                                                            '&:hover fieldset': { borderColor: 'primary.main' },
                                                        },
                                                        '& .MuiInputLabel-root': { color: 'text.secondary' },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Email Address"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': { borderColor: 'divider' },
                                                            '&:hover fieldset': { borderColor: 'primary.main' },
                                                        },
                                                        '& .MuiInputLabel-root': { color: 'text.secondary' },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Company Name"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': { borderColor: 'divider' },
                                                            '&:hover fieldset': { borderColor: 'primary.main' },
                                                        },
                                                        '& .MuiInputLabel-root': { color: 'text.secondary' },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Service Interest"
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleInputChange}
                                                    variant="outlined"
                                                    placeholder="e.g., Social Media, PPC, Web Design"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': { borderColor: 'divider' },
                                                            '&:hover fieldset': { borderColor: 'primary.main' },
                                                        },
                                                        '& .MuiInputLabel-root': { color: 'text.secondary' },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Tell us about your project"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    multiline
                                                    rows={4}
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': { borderColor: 'divider' },
                                                            '&:hover fieldset': { borderColor: 'primary.main' },
                                                        },
                                                        '& .MuiInputLabel-root': { color: 'text.secondary' },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    size="large"
                                                    endIcon={<Send />}
                                                    sx={{
                                                        background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)',
                                                        color: 'common.white',
                                                        fontWeight: 600,
                                                        py: 1.5,
                                                        px: 4,
                                                        '&:hover': {
                                                            background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 8px 20px rgba(22, 163, 74, 0.25)',
                                                        },
                                                    }}
                                                >
                                                    Send Message
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} lg={4}>
                        <Stack spacing={3}>
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                >
                                    <Card sx={{ 
                                        bgcolor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        boxShadow: 0
                                    }}>
                                        <CardContent sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <Box sx={{ 
                                                    p: 1, 
                                                    borderRadius: 2, 
                                                    bgcolor: 'primary.main',
                                                    color: 'common.white',
                                                    mr: 2 
                                                }}>
                                                    {info.icon}
                                                </Box>
                                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                    {info.title}
                                                </Typography>
                                            </Box>
                                            <Typography variant="body1" sx={{ mb: 0.5 }}>
                                                {info.details}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {info.subtitle}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <Card sx={{ 
                                    bgcolor: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    boxShadow: 0
                                }}>
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                            Follow Us
                                        </Typography>
                                        <Stack direction="row" spacing={1}>
                                            {socialLinks.map((social, index) => (
                                                <IconButton
                                                    key={index}
                                                    sx={{
                                                        bgcolor: social.color,
                                                        color: 'white',
                                                        '&:hover': {
                                                            bgcolor: social.color,
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: `0 4px 12px ${social.color}55`,
                                                        },
                                                    }}
                                                    onClick={() => window.open(social.url, '_blank')}
                                                >
                                                    {social.icon}
                                                </IconButton>
                                            ))}
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            <Snackbar 
                open={showSuccess} 
                autoHideDuration={6000} 
                onClose={() => setShowSuccess(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Message sent successfully! We'll get back to you soon.
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactPage;