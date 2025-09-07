import React, { useState } from 'react';
import { 
    Container, 
    Typography, 
    Box, 
    Grid, 
    Card, 
    CardContent,
    Button,
    Stack,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton
} from '@mui/material';
import { 
    Campaign,
    TrendingUp,
    Web,
    Analytics,
    ContentCopy,
    Search,
    CheckCircle,
    Close,
    ArrowForward
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            icon: <Campaign sx={{ fontSize: 40 }} />,
            title: "Social Media Marketing",
            shortDesc: "Amplify your brand across all social platforms with engaging content and strategic campaigns.",
            price: "Starting at $1,500/month",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            features: [
                "Content Strategy & Creation",
                "Community Management", 
                "Paid Social Advertising",
                "Influencer Partnerships",
                "Analytics & Reporting",
                "Brand Voice Development"
            ],
            platforms: ["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok"],
            deliverables: [
                "20-30 posts per month",
                "Daily community management",
                "Monthly strategy reports",
                "Ad campaign optimization"
            ]
        },
        {
            id: 2,
            icon: <TrendingUp sx={{ fontSize: 40 }} />,
            title: "Performance Marketing",
            shortDesc: "Data-driven campaigns that deliver measurable ROI through PPC, display ads, and conversion optimization.",
            price: "Starting at $2,000/month",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            features: [
                "Google Ads Management",
                "Facebook & Instagram Ads",
                "Landing Page Optimization",
                "Conversion Rate Optimization",
                "A/B Testing & Analytics",
                "Retargeting Campaigns"
            ],
            platforms: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Microsoft Ads"],
            deliverables: [
                "Campaign setup & optimization",
                "Weekly performance reports",
                "Monthly strategy reviews",
                "ROI tracking & analysis"
            ]
        },
        {
            id: 3,
            icon: <Web sx={{ fontSize: 40 }} />,
            title: "Web Design & Development",
            shortDesc: "Create stunning, mobile-responsive websites that convert visitors into customers.",
            price: "Starting at $5,000",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            features: [
                "Custom Website Design",
                "Mobile-First Development",
                "E-commerce Solutions",
                "SEO Optimization",
                "Performance Optimization",
                "CMS Integration"
            ],
            platforms: ["React", "WordPress", "Shopify", "Webflow"],
            deliverables: [
                "Fully responsive website",
                "SEO-optimized structure",
                "Admin training & support",
                "3 months free maintenance"
            ]
        },
        {
            id: 4,
            icon: <Analytics sx={{ fontSize: 40 }} />,
            title: "Analytics & Insights",
            shortDesc: "Transform data into actionable insights with comprehensive tracking and reporting solutions.",
            price: "Starting at $800/month",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            features: [
                "Google Analytics Setup",
                "Custom Dashboard Creation",
                "Performance Tracking",
                "User Behavior Analysis",
                "Conversion Funnel Analysis",
                "Monthly Insights Reports"
            ],
            platforms: ["Google Analytics", "Google Tag Manager", "Hotjar", "Mixpanel"],
            deliverables: [
                "Complete analytics setup",
                "Custom reporting dashboards",
                "Monthly insights reports",
                "Performance recommendations"
            ]
        },
        {
            id: 5,
            icon: <ContentCopy sx={{ fontSize: 40 }} />,
            title: "Content Strategy",
            shortDesc: "Develop compelling content that tells your brand story and drives engagement across all channels.",
            price: "Starting at $1,200/month",
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            features: [
                "Content Strategy Planning",
                "Blog Writing & SEO",
                "Video Content Creation",
                "Email Marketing Campaigns",
                "Brand Storytelling",
                "Content Calendar Management"
            ],
            platforms: ["WordPress", "Mailchimp", "Canva", "Adobe Creative Suite"],
            deliverables: [
                "Monthly content calendar",
                "8-12 blog posts per month",
                "Email campaign management",
                "Content performance reports"
            ]
        },
        {
            id: 6,
            icon: <Search sx={{ fontSize: 40 }} />,
            title: "SEO & Local Search",
            shortDesc: "Improve your search rankings and local visibility with comprehensive SEO strategies.",
            price: "Starting at $1,000/month",
            gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
            features: [
                "Technical SEO Audit",
                "Keyword Research & Strategy",
                "On-Page Optimization",
                "Local SEO & Google My Business",
                "Link Building Campaigns",
                "Monthly SEO Reports"
            ],
            platforms: ["Google Search Console", "SEMrush", "Ahrefs", "Moz"],
            deliverables: [
                "Complete SEO audit",
                "Keyword ranking improvements",
                "Monthly ranking reports",
                "Technical optimization"
            ]
        }
    ];

    const handleLearnMore = (service) => {
        setSelectedService(service);
    };

    const handleCloseDialog = () => {
        setSelectedService(null);
    };

    return (
        <Box sx={{ pt: 12, pb: 8, minHeight: '100vh' }}>
            <Container maxWidth="lg">
                {/* Hero Section */}
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
                        Our Services
                    </Typography>
                    <Typography 
                        variant="h6" 
                        align="center" 
                        color="text.secondary" 
                        sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
                    >
                        Comprehensive digital marketing solutions designed to grow your business and maximize your online presence
                    </Typography>
                </motion.div>

                {/* Services Grid */}
                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} md={6} lg={4} key={service.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <Card 
                                    sx={{ 
                                        height: '100%',
                                        bgcolor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s ease',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: 0,
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            boxShadow: 4,
                                            transform: 'translateY(-2px)'
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: service.gradient,
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ 
                                            width: 80, 
                                            height: 80, 
                                            borderRadius: 2, 
                                            background: service.gradient,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 2,
                                            color: 'white'
                                        }}>
                                            {service.icon}
                                        </Box>
                                        
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
                                            {service.title}
                                        </Typography>
                                        
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1, lineHeight: 1.6 }}>
                                            {service.shortDesc}
                                        </Typography>

                                        <Chip 
                                            label={service.price}
                                            sx={{ 
                                                bgcolor: 'primary.main', 
                                                color: 'common.white',
                                                fontWeight: 600,
                                                mb: 2,
                                                alignSelf: 'flex-start'
                                            }} 
                                        />

                                        <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                                            <Button
                                                variant="outlined"
                                                onClick={() => handleLearnMore(service)}
                                                sx={{
                                                    borderColor: 'primary.main',
                                                    color: 'primary.main',
                                                    '&:hover': {
                                                        borderColor: 'primary.main',
                                                        bgcolor: 'rgba(34, 197, 94, 0.08)',
                                                    },
                                                }}
                                            >
                                                Learn More
                                            </Button>
                                            <Button
                                                variant="contained"
                                                endIcon={<ArrowForward />}
                                                sx={{
                                                    background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)',
                                                    color: 'common.white',
                                                    fontWeight: 600,
                                                    '&:hover': {
                                                        background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)',
                                                        transform: 'translateY(-1px)',
                                                    },
                                                }}
                                            >
                                                Get Started
                                            </Button>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Box sx={{ 
                        textAlign: 'center', 
                        mt: 8, 
                        p: 6,
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 4
                    }}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                            Ready to Transform Your Digital Presence?
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                            Let's discuss your goals and create a customized strategy that drives real results for your business.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)',
                                color: 'common.white',
                                fontWeight: 600,
                                py: 2,
                                px: 6,
                                fontSize: '1.1rem',
                                '&:hover': {
                                    background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 20px rgba(22, 163, 74, 0.25)',
                                },
                            }}
                        >
                            Schedule Free Consultation
                        </Button>
                    </Box>
                </motion.div>
            </Container>

            {/* Service Detail Dialog */}
            <Dialog 
                open={selectedService !== null} 
                onClose={handleCloseDialog}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                    }
                }}
            >
                {selectedService && (
                    <>
                        <DialogTitle sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            background: selectedService.gradient,
                            color: 'white',
                            m: 0
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                {selectedService.icon}
                                <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                                    {selectedService.title}
                                </Typography>
                            </Box>
                            <IconButton 
                                onClick={handleCloseDialog}
                                sx={{ color: 'white' }}
                            >
                                <Close />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent sx={{ p: 4 }}>
                            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                                {selectedService.shortDesc}
                            </Typography>
                            
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                        What's Included:
                                    </Typography>
                                    <List>
                                        {selectedService.features.map((feature, index) => (
                                            <ListItem key={index} sx={{ py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <CheckCircle sx={{ color: 'primary.main', fontSize: 20 }} />
                                                </ListItemIcon>
                                                <ListItemText primary={feature} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                        Key Deliverables:
                                    </Typography>
                                    <List>
                                        {selectedService.deliverables.map((deliverable, index) => (
                                            <ListItem key={index} sx={{ py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <ArrowForward sx={{ color: 'primary.main', fontSize: 20 }} />
                                                </ListItemIcon>
                                                <ListItemText primary={deliverable} />
                                            </ListItem>
                                        ))}
                                    </List>
                                    
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
                                        Platforms & Tools:
                                    </Typography>
                                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                                        {selectedService.platforms.map((platform, index) => (
                                            <Chip 
                                                key={index}
                                                label={platform} 
                                                variant="outlined"
                                                sx={{ 
                                                    borderColor: 'primary.main',
                                                    color: 'primary.main'
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mr: 'auto' }}>
                                {selectedService.price}
                            </Typography>
                            <Button onClick={handleCloseDialog} sx={{ mr: 1 }}>
                                Close
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)',
                                    color: 'common.white',
                                    fontWeight: 600,
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)',
                                    },
                                }}
                            >
                                Get Started Now
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default ServicesPage;