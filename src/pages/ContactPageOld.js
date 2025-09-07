import React, { useState, useEffect } from 'react';
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
    Alert,
    Paper,
    Divider,
    Avatar,
    useTheme,
    useMediaQuery,
    Fab,
    Breadcrumbs,
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TextareaAutosize,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import { 
    Email, 
    LocationOn, 
    Send,
    WhatsApp,
    Schedule,
    Business,
    Person,
    Message,
    CheckCircle,
    ExpandMore,
    CalendarToday,
    AccessTime,
    Star,
    Support,
    QuestionAnswer,
    TrendingUp,
    Web,
    Campaign,
    Analytics,
    Brush,
    Speed,
    Security,
    Verified,
    AutoAwesome,
    Close,
    Launch,
    ArrowForward
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';

const ContactPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: location.state?.selectedService || '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        preferredContact: 'email'
    });
    
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [showConsultationDialog, setShowConsultationDialog] = useState(false);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

    const services = [
        'Social Media Marketing',
        'Performance Marketing',
        'Web Design & Development',
        'Brand Identity & Design',
        'Analytics & Business Intelligence',
        'E-commerce Solutions',
        'SEO & Content Strategy',
        'Complete Digital Transformation'
    ];

    const projectTypes = [
        'New Business Launch',
        'Business Growth & Scaling',
        'Brand Refresh/Redesign',
        'Website Development',
        'Marketing Campaign',
        'Ongoing Digital Support',
        'Consultation & Strategy',
        'Other'
    ];

    const budgetRanges = [
        '₹25,000 - ₹50,000',
        '₹50,000 - ₹1,00,000',
        '₹1,00,000 - ₹2,50,000',
        '₹2,50,000 - ₹5,00,000',
        '₹5,00,000+',
        'Custom Quote Required'
    ];

    const timelineOptions = [
        'Urgent (1-2 weeks)',
        'Fast Track (2-4 weeks)',
        'Standard (1-2 months)',
        'Flexible (2-3 months)',
        'Long-term (3+ months)'
    ];

    const timeSlots = [
        '9:00 AM - 10:00 AM',
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '2:00 PM - 3:00 PM',
        '3:00 PM - 4:00 PM',
        '4:00 PM - 5:00 PM'
    ];

    const contactInfo = [
        {
            icon: <WhatsApp />,
            title: "WhatsApp", 
            details: "+91 9677303310",
            subtitle: "24/7 Quick Response",
            action: "https://wa.me/919677303310?text=Hi%20CharanX!%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Can%20we%20discuss%20my%20project?",
            color: "#25d366"
        },
        {
            icon: <Email />,
            title: "Email Us",
            details: "info@charanx.com",
            subtitle: "Response within 2 hours",
            action: "mailto:info@charanx.com",
            color: "#3b82f6"
        },
        {
            icon: <Schedule />,
            title: "Book a Call",
            details: "Free Strategy Session",
            subtitle: "30-minute expert consultation",
            action: "consultation",
            color: "#8b5cf6"
        }
    ];



    const faqs = [
        {
            question: "How quickly can you start my project?",
            answer: "We can typically start within 24-48 hours of project confirmation. For urgent projects, we offer same-day start options with our priority service."
        },
        {
            question: "What's included in your pricing?",
            answer: "Our pricing includes strategy development, execution, ongoing optimization, regular reporting, and dedicated account management. No hidden fees, everything is transparent."
        },
        {
            question: "Do you work with small businesses?",
            answer: "Absolutely! We work with businesses of all sizes, from startups to large enterprises. We have specialized packages designed for small businesses and startups."
        },
        {
            question: "Can I see examples of your work?",
            answer: "Yes! We'd be happy to share relevant examples of our work during our consultation call. Contact us to see case studies specific to your industry."
        },
        {
            question: "What if I'm not satisfied with the results?",
            answer: "We offer a satisfaction guarantee. If you're not happy with our work in the first 30 days, we'll revise it until you're satisfied or provide a full refund."
        }
    ];

    const steps = [
        {
            label: 'Basic Information',
            description: 'Tell us about yourself and your business'
        },
        {
            label: 'Project Details',
            description: 'Share your project requirements and goals'
        },
        {
            label: 'Budget & Timeline',
            description: 'Help us understand your budget and timeline'
        },
        {
            label: 'Final Details',
            description: 'Any additional information or specific requirements'
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({ 
                name: '', 
                email: '', 
                company: '', 
                phone: '',
                service: '', 
                projectType: '',
                budget: '',
                timeline: '',
                message: '',
                preferredContact: 'email'
            });
            setActiveStep(0);
        }, 2000);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleConsultationBooking = () => {
        setShowConsultationDialog(true);
    };

    const handleTimeSlotSelect = (timeSlot) => {
        setSelectedTimeSlot(timeSlot);
        setShowConsultationDialog(false);
        setShowSuccess(true);
        // Here you would typically integrate with a calendar booking system
    };

    const isStepValid = (step) => {
        switch (step) {
            case 0:
                return formData.name && formData.email && formData.company;
            case 1:
                return formData.service && formData.projectType;
            case 2:
                return formData.budget && formData.timeline;
            case 3:
                return true; // Message is optional
            default:
                return false;
        }
    };

    return (
        <Box sx={{ 
            pt: 12, 
            pb: 8, 
            minHeight: '100vh',
            background: 'linear-gradient(180deg, rgba(22,163,74,0.02) 0%, rgba(255,255,255,1) 100%)'
        }}>
            <Container maxWidth="xl">
                {/* Breadcrumbs */}
                <Box sx={{ mb: 4 }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link component={RouterLink} to="/" color="inherit">
                            Home
                        </Link>
                        <Typography color="text.primary" fontWeight="600">Contact</Typography>
                    </Breadcrumbs>
                </Box>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography 
                            variant="h1" 
                            component="h1" 
                            sx={{ 
                                fontWeight: 800,
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                mb: 3,
                                background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #4ade80 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 4px 20px rgba(22,163,74,0.1)'
                            }}
                        >
                            Let's Create Something Amazing
                        </Typography>
                        <Typography 
                            variant="h5" 
                            color="text.secondary" 
                            sx={{ 
                                mb: 4, 
                                maxWidth: 800, 
                                mx: 'auto', 
                                fontWeight: 400,
                                lineHeight: 1.6
                            }}
                        >
                            Ready to transform your digital presence? Get in touch and let's discuss your next big project. 
                            Our expert team is here to turn your vision into reality.
                        </Typography>
                        
                        {/* Quick Stats */}
                        <Grid container spacing={4} sx={{ mt: 4, mb: 6 }}>
                            {whyChooseUs.map((item, index) => (
                                <Grid item xs={6} md={3} key={index}>
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Paper 
                                            elevation={0}
                                            sx={{ 
                                                p: 3, 
                                                textAlign: 'center',
                                                background: 'rgba(255,255,255,0.8)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(22,163,74,0.1)',
                                                borderRadius: 3,
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    boxShadow: '0 10px 30px rgba(22,163,74,0.1)'
                                                }
                                            }}
                                        >
                                            <Box sx={{ color: 'primary.main', mb: 1 }}>
                                                {item.icon}
                                            </Box>
                                            <Typography variant="h6" fontWeight="700" color="primary.main">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </motion.div>

                <Grid container spacing={6}>
                    {/* Contact Methods */}
                    <Grid item xs={12} lg={4}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Typography variant="h4" fontWeight="700" sx={{ mb: 4 }}>
                                Get In Touch
                            </Typography>
                            
                            <Stack spacing={3} sx={{ mb: 4 }}>
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <Card
                                            sx={{
                                                p: 3,
                                                background: 'rgba(255,255,255,0.9)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(22,163,74,0.1)',
                                                borderRadius: 3,
                                                cursor: info.action !== 'consultation' ? 'pointer' : 'default',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    borderColor: info.color,
                                                    boxShadow: `0 10px 30px ${info.color}20`
                                                }
                                            }}
                                            onClick={() => {
                                                if (info.action === 'consultation') {
                                                    handleConsultationBooking();
                                                } else if (info.action.startsWith('http')) {
                                                    window.open(info.action, '_blank');
                                                } else if (info.action.startsWith('tel') || info.action.startsWith('mailto')) {
                                                    window.location.href = info.action;
                                                }
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Avatar
                                                    sx={{
                                                        bgcolor: info.color,
                                                        color: 'white',
                                                        mr: 2,
                                                        width: 50,
                                                        height: 50
                                                    }}
                                                >
                                                    {info.icon}
                                                </Avatar>
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography variant="h6" fontWeight="600">
                                                        {info.title}
                                                    </Typography>
                                                    <Typography variant="body1" color="primary.main" fontWeight="600">
                                                        {info.details}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {info.subtitle}
                                                    </Typography>
                                                </Box>
                                                <ArrowForward sx={{ color: 'text.secondary' }} />
                                            </Box>
                                        </Card>
                                    </motion.div>
                                ))}
                            </Stack>

                            {/* Quick Contact Buttons */}
                            <Stack spacing={2}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<WhatsApp />}
                                    component="a"
                                    href="https://wa.me/919677303310?text=Hi%20CharanX!%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Can%20we%20discuss%20my%20project?"
                                    target="_blank"
                                    sx={{
                                        background: '#25d366',
                                        fontWeight: 700,
                                        py: 1.5,
                                        '&:hover': {
                                            background: '#22c55e',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    WhatsApp Now
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    component="a"
                                    href="tel:+919677303310"
                                    sx={{
                                        borderColor: 'primary.main',
                                        color: 'primary.main',
                                        fontWeight: 700,
                                        py: 1.5,
                                        '&:hover': {
                                            borderColor: 'primary.dark',
                                            backgroundColor: 'rgba(22,163,74,0.08)',
                                            transform: 'translateY(-2px)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Call Now
                                </Button>
                            </Stack>
                        </motion.div>
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12} lg={8}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    background: 'rgba(255,255,255,0.9)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(22,163,74,0.1)',
                                    borderRadius: 4
                                }}
                            >
                                <Typography variant="h4" fontWeight="700" sx={{ mb: 2 }}>
                                    Start Your Project
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                                    Fill out the form below and we'll get back to you within 2 hours with a custom proposal.
                                </Typography>

                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps.map((step, index) => (
                                        <Step key={step.label}>
                                            <StepLabel>
                                                <Typography variant="h6" fontWeight="600">
                                                    {step.label}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {step.description}
                                                </Typography>
                                            </StepLabel>
                                            <StepContent>
                                                <Box component="form" sx={{ mt: 2, mb: 2 }}>
                                                    {/* Step 0: Basic Information */}
                                                    {index === 0 && (
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={6}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Full Name *"
                                                                    name="name"
                                                                    value={formData.name}
                                                                    onChange={handleInputChange}
                                                                    variant="outlined"
                                                                    required
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} sm={6}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Email Address *"
                                                                    name="email"
                                                                    type="email"
                                                                    value={formData.email}
                                                                    onChange={handleInputChange}
                                                                    variant="outlined"
                                                                    required
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} sm={6}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Company Name *"
                                                                    name="company"
                                                                    value={formData.company}
                                                                    onChange={handleInputChange}
                                                                    variant="outlined"
                                                                    required
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} sm={6}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Phone Number"
                                                                    name="phone"
                                                                    value={formData.phone}
                                                                    onChange={handleInputChange}
                                                                    variant="outlined"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    )}

                                                    {/* Step 1: Project Details */}
                                                    {index === 1 && (
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12}>
                                                                <FormControl fullWidth required>
                                                                    <InputLabel>Service Needed</InputLabel>
                                                                    <Select
                                                                        name="service"
                                                                        value={formData.service}
                                                                        onChange={handleInputChange}
                                                                        label="Service Needed"
                                                                    >
                                                                        {services.map((service) => (
                                                                            <MenuItem key={service} value={service}>
                                                                                {service}
                                                                            </MenuItem>
                                                                        ))}
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <FormControl fullWidth required>
                                                                    <InputLabel>Project Type</InputLabel>
                                                                    <Select
                                                                        name="projectType"
                                                                        value={formData.projectType}
                                                                        onChange={handleInputChange}
                                                                        label="Project Type"
                                                                    >
                                                                        {projectTypes.map((type) => (
                                                                            <MenuItem key={type} value={type}>
                                                                                {type}
                                                                            </MenuItem>
                                                                        ))}
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                        </Grid>
                                                    )}

                                                    {/* Step 2: Budget & Timeline */}
                                                    {index === 2 && (
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={6}>
                                                                <FormControl fullWidth required>
                                                                    <InputLabel>Budget Range</InputLabel>
                                                                    <Select
                                                                        name="budget"
                                                                        value={formData.budget}
                                                                        onChange={handleInputChange}
                                                                        label="Budget Range"
                                                                    >
                                                                        {budgetRanges.map((range) => (
                                                                            <MenuItem key={range} value={range}>
                                                                                {range}
                                                                            </MenuItem>
                                                                        ))}
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                            <Grid item xs={12} sm={6}>
                                                                <FormControl fullWidth required>
                                                                    <InputLabel>Preferred Timeline</InputLabel>
                                                                    <Select
                                                                        name="timeline"
                                                                        value={formData.timeline}
                                                                        onChange={handleInputChange}
                                                                        label="Preferred Timeline"
                                                                    >
                                                                        {timelineOptions.map((option) => (
                                                                            <MenuItem key={option} value={option}>
                                                                                {option}
                                                                            </MenuItem>
                                                                        ))}
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                        </Grid>
                                                    )}

                                                    {/* Step 3: Final Details */}
                                                    {index === 3 && (
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Project Details & Requirements"
                                                                    name="message"
                                                                    value={formData.message}
                                                                    onChange={handleInputChange}
                                                                    variant="outlined"
                                                                    multiline
                                                                    rows={4}
                                                                    placeholder="Tell us more about your project goals, target audience, specific requirements, or any questions you have..."
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <FormControl fullWidth>
                                                                    <InputLabel>Preferred Contact Method</InputLabel>
                                                                    <Select
                                                                        name="preferredContact"
                                                                        value={formData.preferredContact}
                                                                        onChange={handleInputChange}
                                                                        label="Preferred Contact Method"
                                                                    >
                                                                        <MenuItem value="email">Email</MenuItem>
                                                                        <MenuItem value="phone">Phone Call</MenuItem>
                                                                        <MenuItem value="whatsapp">WhatsApp</MenuItem>
                                                                        <MenuItem value="consultation">Free Consultation Call</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                        </Grid>
                                                    )}

                                                    <Box sx={{ mt: 3 }}>
                                                        <Button
                                                            disabled={!isStepValid(index) || isSubmitting}
                                                            onClick={index === steps.length - 1 ? handleSubmit : handleNext}
                                                            variant="contained"
                                                            endIcon={index === steps.length - 1 ? <Send /> : <ArrowForward />}
                                                            sx={{
                                                                mr: 1,
                                                                background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                                                                fontWeight: 700,
                                                                '&:hover': {
                                                                    background: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)'
                                                                }
                                                            }}
                                                        >
                                                            {isSubmitting ? 'Submitting...' : (index === steps.length - 1 ? 'Send Message' : 'Continue')}
                                                        </Button>
                                                        {index > 0 && (
                                                            <Button
                                                                onClick={handleBack}
                                                                variant="outlined"
                                                                sx={{ ml: 1 }}
                                                            >
                                                                Back
                                                            </Button>
                                                        )}
                                                    </Box>
                                                </Box>
                                            </StepContent>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Box sx={{ mt: 12, mb: 8 }}>
                        <Typography 
                            variant="h3" 
                            align="center" 
                            fontWeight="700" 
                            sx={{ 
                                mb: 6,
                                background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            Frequently Asked Questions
                        </Typography>
                        
                        <Grid container justifyContent="center">
                            <Grid item xs={12} lg={8}>
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Accordion
                                            sx={{
                                                mb: 2,
                                                background: 'rgba(255,255,255,0.9)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(22,163,74,0.1)',
                                                borderRadius: 3,
                                                '&:before': { display: 'none' },
                                                '&.Mui-expanded': {
                                                    borderColor: 'primary.main'
                                                }
                                            }}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMore />}
                                                sx={{ p: 3 }}
                                            >
                                                <Typography variant="h6" fontWeight="600">
                                                    {faq.question}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ px: 3, pb: 3 }}>
                                                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                                    {faq.answer}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </motion.div>
                                ))}
                            </Grid>
                        </Grid>
                    </Box>
                </motion.div>

                {/* Emergency Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Paper 
                        elevation={0}
                        sx={{ 
                            p: 6,
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                            color: 'white',
                            borderRadius: 4
                        }}
                    >
                        <Typography variant="h4" fontWeight="700" sx={{ mb: 2 }}>
                            Need Immediate Assistance?
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            For urgent projects or immediate support, reach out to us directly.
                        </Typography>
                        <Stack 
                            direction={{ xs: 'column', sm: 'row' }} 
                            spacing={2} 
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                size="large"
                                component="a"
                                href="tel:+919677303310"
                                sx={{
                                    bgcolor: 'white',
                                    color: 'primary.main',
                                    fontWeight: 700,
                                    px: 4,
                                    '&:hover': {
                                        bgcolor: 'rgba(255,255,255,0.9)'
                                    }
                                }}
                            >
                                Call: +91 9677303310
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<WhatsApp />}
                                component="a"
                                href="https://wa.me/919677303310?text=Hi%20CharanX!%20I%20need%20immediate%20assistance%20with%20my%20project.%20Can%20someone%20help%20me%20right%20now?"
                                target="_blank"
                                sx={{
                                    borderColor: 'white',
                                    color: 'white',
                                    fontWeight: 700,
                                    px: 4,
                                    '&:hover': {
                                        borderColor: 'white',
                                        bgcolor: 'rgba(255,255,255,0.1)'
                                    }
                                }}
                            >
                                WhatsApp: +91 9677303310
                            </Button>
                        </Stack>
                    </Paper>
                </motion.div>
            </Container>

            {/* Floating WhatsApp Button */}
            <Fab
                color="success"
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    background: '#25d366',
                    '&:hover': {
                        background: '#22c55e'
                    }
                }}
                component="a"
                href="https://wa.me/919677303310?text=Hi%20CharanX!%20I%20found%20your%20contact%20page%20and%20I'm%20interested%20in%20your%20services.%20Can%20we%20chat?"
                target="_blank"
            >
                <WhatsApp />
            </Fab>

            {/* Consultation Booking Dialog */}
            <Dialog
                open={showConsultationDialog}
                onClose={() => setShowConsultationDialog(false)}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: { borderRadius: 4 }
                }}
            >
                <DialogTitle sx={{ pb: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h5" fontWeight="700">
                            Book Free Consultation
                        </Typography>
                        <IconButton onClick={() => setShowConsultationDialog(false)}>
                            <Close />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent sx={{ pt: 2 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Schedule a 30-minute strategy call with our experts. Choose your preferred time slot:
                    </Typography>
                    
                    <Grid container spacing={2}>
                        {timeSlots.map((slot) => (
                            <Grid item xs={12} sm={6} key={slot}>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        p: 2,
                                        justifyContent: 'flex-start',
                                        borderColor: 'rgba(22,163,74,0.3)',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            backgroundColor: 'rgba(22,163,74,0.05)'
                                        }
                                    }}
                                    onClick={() => handleTimeSlotSelect(slot)}
                                >
                                    <AccessTime sx={{ mr: 1, fontSize: 20 }} />
                                    {slot}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(22,163,74,0.05)', borderRadius: 2 }}>
                        <Typography variant="body2" fontWeight="600" sx={{ mb: 1 }}>
                            What to expect:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            • Free 30-minute strategy session<br/>
                            • Custom recommendations for your business<br/>
                            • No obligation, just valuable insights<br/>
                            • Direct access to our senior consultants
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>

            {/* Success Snackbar */}
            <Snackbar 
                open={showSuccess} 
                autoHideDuration={6000} 
                onClose={() => setShowSuccess(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    onClose={() => setShowSuccess(false)} 
                    severity="success"
                    variant="filled"
                    sx={{ 
                        background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                        fontWeight: 600
                    }}
                >
                    {selectedTimeSlot 
                        ? `Consultation booked for ${selectedTimeSlot}! We'll send you a confirmation email shortly.`
                        : "Thank you for your message! We'll get back to you within 2 hours."
                    }
                </Alert>
            </Snackbar>

            {/* Enhanced Floating WhatsApp Button */}
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    zIndex: 1000
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 1
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Fab
                        sx={{
                            width: 60,
                            height: 60,
                            background: 'linear-gradient(135deg, #25d366 0%, #22c55e 100%)',
                            color: 'white',
                            boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #22c55e 0%, #20b15a 100%)',
                                boxShadow: '0 12px 40px rgba(37, 211, 102, 0.6)',
                                transform: 'translateY(-2px)'
                            },
                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #25d366 0%, #22c55e 100%)',
                                animation: 'pulse 2s infinite',
                                opacity: 0.7,
                                zIndex: -1
                            },
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '@keyframes pulse': {
                                '0%': {
                                    transform: 'scale(1)',
                                    opacity: 0.7
                                },
                                '50%': {
                                    transform: 'scale(1.2)',
                                    opacity: 0.4
                                },
                                '100%': {
                                    transform: 'scale(1.4)',
                                    opacity: 0
                                }
                            }
                        }}
                        component="a"
                        href="https://wa.me/919677303310?text=Hi%20CharanX!%20I%20found%20your%20contact%20page%20and%20I'm%20interested%20in%20your%20services.%20Can%20we%20chat?"
                        target="_blank"
                        aria-label="Chat on WhatsApp"
                    >
                        <WhatsApp sx={{ fontSize: 28 }} />
                    </Fab>
                </motion.div>
                
                {/* WhatsApp Tooltip */}
                <Box
                    sx={{
                        position: 'absolute',
                        right: '100%',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        mr: 2,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        '&:hover': { opacity: 1 },
                        ':hover ~ &': { opacity: 1 }
                    }}
                    className="whatsapp-tooltip"
                >
                    <Paper
                        elevation={8}
                        sx={{
                            p: 2,
                            background: 'rgba(0,0,0,0.8)',
                            color: 'white',
                            borderRadius: 2,
                            whiteSpace: 'nowrap',
                            backdropFilter: 'blur(10px)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                left: '100%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                border: '6px solid transparent',
                                borderLeftColor: 'rgba(0,0,0,0.8)'
                            }
                        }}
                    >
                        💬 Chat with us on WhatsApp
                    </Paper>
                </Box>
            </Box>

            {/* WhatsApp Chat Widget - Alternative floating widget */}
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 100,
                    right: 24,
                    zIndex: 999
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    <Paper
                        elevation={8}
                        sx={{
                            p: 2,
                            background: 'linear-gradient(135deg, #25d366 0%, #22c55e 100%)',
                            color: 'white',
                            borderRadius: 3,
                            maxWidth: 280,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 12px 40px rgba(37, 211, 102, 0.4)'
                            }
                        }}
                        component="a"
                        href="https://wa.me/919677303310?text=Hi%20CharanX!%20I%20saw%20your%20website%20and%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Can%20we%20discuss%20my%20requirements?"
                        target="_blank"
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Avatar
                                sx={{
                                    width: 40,
                                    height: 40,
                                    mr: 2,
                                    background: 'rgba(255,255,255,0.2)'
                                }}
                            >
                                <WhatsApp />
                            </Avatar>
                            <Box>
                                <Typography variant="body2" fontWeight="600">
                                    CharanX Support
                                </Typography>
                                <Typography variant="caption" sx={{ opacity: 0.9 }}>
                                    Online now
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="body2" sx={{ opacity: 0.95, lineHeight: 1.4 }}>
                            Hi! 👋 How can we help you today?
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, fontSize: '0.75rem' }}>
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    backgroundColor: '#4ade80',
                                    mr: 1,
                                    animation: 'blink 1.5s infinite'
                                }}
                            />
                            Typically replies in minutes
                        </Box>
                    </Paper>
                </motion.div>
            </Box>
        </Box>
    );
};

export default ContactPage;
