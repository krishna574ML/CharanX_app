import React, { useState, useEffect } from 'react';
import { 
    Container, 
    Typography, 
    Box, 
    Grid, 
    TextField, 
    Button, 
    Paper,
    Stack,
    Snackbar,
    Alert,
    Avatar,
    Breadcrumbs,
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    MenuItem,
    FormControl,
    InputLabel,
    Select
} from '@mui/material';
import { 
    Email, 
    WhatsApp,
    Schedule,
    Send,
    ExpandMore,
    ArrowForward
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const ContactPage = () => {
    const location = useLocation();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: location.state?.selectedService || '',
        message: ''
    });
    
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({ name: '', email: '', service: '', message: '' });
        }, 1500);
    };

    const contactInfo = [
        { icon: <WhatsApp />, title: "WhatsApp", details: "+91 9677303310", action: "https://wa.me/9677303310", color: "#25d366" },
        { icon: <Email />, title: "Email Us", details: "info@charanx.com", action: "mailto:info@charanx.com", color: "#3b82f6" },
        { icon: <Schedule />, title: "Book a Call", details: "Free Strategy Session", action: "/contact", color: "#8b5cf6" }
    ];

    const faqs = [
        { q: "How quickly can you start my project?", a: "We typically start within 24-48 hours of project confirmation. For urgent projects, we offer same-day start options." },
        { q: "What's included in your pricing?", a: "Our pricing includes strategy, execution, optimization, reporting, and dedicated account management. No hidden fees." },
        { q: "Do you work with small businesses?", a: "Absolutely! We work with businesses of all sizes and have specialized packages designed for startups and small businesses." },
    ];

    return (
        <Box sx={{ pb: 8, background: 'linear-gradient(180deg, rgba(22,163,74,0.02) 0%, rgba(255,255,255,1) 100%)' }}>
            <Container maxWidth="xl">
                <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
                    <Link component={RouterLink} to="/" color="inherit" sx={{textDecoration: 'none'}}>Home</Link>
                    <Typography color="text.primary" fontWeight="600">Contact</Typography>
                </Breadcrumbs>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography variant="h1" sx={{ fontWeight: 800, mb: 3, background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Let's Create Something Amazing
                        </Typography>
                        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
                            Ready to transform your digital presence? Get in touch and let's discuss your next big project. Our expert team is here to turn your vision into reality.
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={6}>
                    <Grid item xs={12} lg={5}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <Typography variant="h4" fontWeight="700" sx={{ mb: 3 }}>Get In Touch</Typography>
                            <Stack spacing={3}>
                                {contactInfo.map((info, index) => (
                                    <motion.div key={index} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                                        <Paper component="a" href={info.action} target={info.action.startsWith('http') ? '_blank' : '_self'} sx={{ p: 2.5, display: 'flex', alignItems: 'center', textDecoration: 'none', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(22,163,74,0.1)', borderRadius: 3, '&:hover': { borderColor: info.color, boxShadow: `0 10px 30px ${info.color}20` }}}>
                                            <Avatar sx={{ bgcolor: info.color, color: 'white', mr: 2, width: 50, height: 50 }}>{info.icon}</Avatar>
                                            <Box>
                                                <Typography variant="h6" fontWeight="600">{info.title}</Typography>
                                                <Typography variant="body1" color="primary.main" fontWeight="600">{info.details}</Typography>
                                            </Box>
                                            <ArrowForward sx={{ color: 'text.secondary', ml: 'auto' }} />
                                        </Paper>
                                    </motion.div>
                                ))}
                            </Stack>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} lg={7}>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                            <Paper elevation={0} sx={{ p: {xs: 3, md: 5}, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(22,163,74,0.1)', borderRadius: 4 }}>
                                <Typography variant="h4" fontWeight="700" sx={{ mb: 1 }}>Start Your Project</Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>Fill out the form and we'll get back to you within 2 hours.</Typography>
                                <Box component="form" onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}><TextField fullWidth label="Full Name *" name="name" value={formData.name} onChange={handleInputChange} required /></Grid>
                                        <Grid item xs={12} sm={6}><TextField fullWidth label="Email Address *" name="email" type="email" value={formData.email} onChange={handleInputChange} required /></Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel>Service of Interest</InputLabel>
                                                <Select name="service" value={formData.service} label="Service of Interest" onChange={handleInputChange}>
                                                    {['Social Media', 'Performance Marketing', 'Web Development', 'Brand Design', 'Other'].map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}><TextField fullWidth label="Your Message" name="message" value={formData.message} onChange={handleInputChange} multiline rows={4} /></Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" size="large" endIcon={<Send />} disabled={isSubmitting} sx={{ width: '100%', py: 1.5, background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', fontWeight: 700, '&:hover': { background: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)' } }}>
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                    <Box sx={{ mt: 12, mb: 8 }}>
                        <Typography variant="h3" align="center" fontWeight="700" sx={{ mb: 6, background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Frequently Asked Questions
                        </Typography>
                        <Grid container justifyContent="center"><Grid item xs={12} lg={8}>
                            {faqs.map((faq, i) => (
                                <Accordion key={i} sx={{ mb: 2, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(22,163,74,0.1)', borderRadius: 3, '&:before': { display: 'none' }, '&.Mui-expanded': { borderColor: 'primary.main' }}}>
                                    <AccordionSummary expandIcon={<ExpandMore />} sx={{ p: 3 }}><Typography variant="h6" fontWeight="600">{faq.q}</Typography></AccordionSummary>
                                    <AccordionDetails sx={{ px: 3, pb: 3 }}><Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>{faq.a}</Typography></AccordionDetails>
                                </Accordion>
                            ))}
                        </Grid></Grid>
                    </Box>
                </motion.div>
            </Container>

            <Snackbar open={showSuccess} autoHideDuration={6000} onClose={() => setShowSuccess(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={() => setShowSuccess(false)} severity="success" variant="filled" sx={{ background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', fontWeight: 600 }}>
                    Thank you for your message! We'll get back to you within 2 hours.
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactPage;
 
