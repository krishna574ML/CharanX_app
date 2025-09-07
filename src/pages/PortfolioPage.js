import React, { useState } from 'react';
import { 
    Container, 
    Typography, 
    Box, 
    Grid, 
    Card, 
    CardContent,
    CardMedia,
    Button,
    Stack,
    Chip,
    Tab,
    Tabs,
    Dialog,
    DialogContent,
    IconButton,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { 
    TrendingUp,
    Visibility,
    Launch,
    Close,
    ArrowForward
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeTab, setActiveTab] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = [
        "All",
        "Social Media",
        "Web Design", 
        "Performance Marketing",
        "Branding"
    ];

    const projects = [
        {
            id: 1,
            title: "TechStartup Social Media Campaign",
            category: "Social Media",
            client: "InnovateTech",
            description: "Complete social media transformation that increased engagement by 340% and grew followers from 5K to 50K in 6 months.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop",
            results: [
                { metric: "Engagement Rate", value: "+340%" },
                { metric: "Followers Growth", value: "5K → 50K" },
                { metric: "Lead Generation", value: "+280%" },
                { metric: "Brand Awareness", value: "+200%" }
            ],
            tags: ["Instagram", "LinkedIn", "Content Strategy", "Influencer Marketing"],
            duration: "6 months",
            services: ["Content Creation", "Community Management", "Paid Social"]
        },
        {
            id: 2,
            title: "E-commerce Performance Campaign",
            category: "Performance Marketing",
            client: "StyleHub Fashion",
            description: "Data-driven PPC campaigns that achieved 5.2x ROAS and increased online sales by 450% during Black Friday season.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
            results: [
                { metric: "ROAS", value: "5.2x" },
                { metric: "Sales Increase", value: "+450%" },
                { metric: "Cost Per Acquisition", value: "-60%" },
                { metric: "Conversion Rate", value: "+125%" }
            ],
            tags: ["Google Ads", "Facebook Ads", "Conversion Optimization", "Analytics"],
            duration: "4 months",
            services: ["PPC Management", "Landing Page Optimization", "Analytics Setup"]
        },
        {
            id: 3,
            title: "Restaurant Chain Website Redesign",
            category: "Web Design",
            client: "Bistro Deluxe",
            description: "Mobile-first website redesign with online ordering system that increased online orders by 300% and improved user experience.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
            results: [
                { metric: "Online Orders", value: "+300%" },
                { metric: "Page Load Speed", value: "+75%" },
                { metric: "Mobile Traffic", value: "+200%" },
                { metric: "User Engagement", value: "+180%" }
            ],
            tags: ["React", "Mobile-First", "E-commerce", "UX/UI Design"],
            duration: "3 months",
            services: ["Web Development", "UX/UI Design", "SEO Optimization"]
        },
        {
            id: 4,
            title: "Healthcare Brand Identity",
            category: "Branding",
            client: "MedCare Plus",
            description: "Complete brand transformation including logo design, brand guidelines, and marketing materials for a healthcare startup.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop",
            results: [
                { metric: "Brand Recognition", value: "+250%" },
                { metric: "Patient Inquiries", value: "+180%" },
                { metric: "Professional Trust", value: "+220%" },
                { metric: "Market Position", value: "Top 3" }
            ],
            tags: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Healthcare"],
            duration: "2 months",
            services: ["Brand Strategy", "Visual Identity", "Marketing Collateral"]
        },
        {
            id: 5,
            title: "SaaS Lead Generation Campaign",
            category: "Performance Marketing",
            client: "CloudFlow Solutions",
            description: "B2B lead generation campaign that generated 500+ qualified leads and increased demo requests by 400%.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
            results: [
                { metric: "Qualified Leads", value: "500+" },
                { metric: "Demo Requests", value: "+400%" },
                { metric: "Cost per Lead", value: "-45%" },
                { metric: "Sales Qualified Leads", value: "+320%" }
            ],
            tags: ["LinkedIn Ads", "Lead Generation", "B2B Marketing", "CRM Integration"],
            duration: "5 months",
            services: ["Paid Social", "Lead Nurturing", "Sales Funnel Optimization"]
        },
        {
            id: 6,
            title: "Fitness Brand Social Strategy",
            category: "Social Media",
            client: "FitLife Studios",
            description: "Comprehensive social media strategy that built a community of 100K+ fitness enthusiasts and increased class bookings by 250%.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
            results: [
                { metric: "Community Size", value: "100K+" },
                { metric: "Class Bookings", value: "+250%" },
                { metric: "User Generated Content", value: "+400%" },
                { metric: "Brand Engagement", value: "+300%" }
            ],
            tags: ["Instagram", "TikTok", "Community Building", "Fitness Industry"],
            duration: "8 months",
            services: ["Content Strategy", "Influencer Partnerships", "Community Management"]
        }
    ];

    const filteredProjects = activeTab === 0 
        ? projects 
        : projects.filter(project => project.category === categories[activeTab]);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const openProjectDialog = (project) => {
        setSelectedProject(project);
    };

    const closeProjectDialog = () => {
        setSelectedProject(null);
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
                        Our Portfolio
                    </Typography>
                    <Typography 
                        variant="h6" 
                        align="center" 
                        color="text.secondary" 
                        sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
                    >
                        Explore our success stories and see how we've helped businesses transform their digital presence and achieve remarkable results
                    </Typography>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                        <Tabs 
                            value={activeTab} 
                            onChange={handleTabChange}
                            variant={isMobile ? "scrollable" : "centered"}
                            scrollButtons="auto"
                            sx={{
                                '& .MuiTab-root': {
                                    color: 'text.secondary',
                                    fontWeight: 600,
                                    '&.Mui-selected': {
                                        color: 'primary.main',
                                    }
                                },
                                '& .MuiTabs-indicator': {
                                    backgroundColor: 'primary.main',
                                    height: 3,
                                }
                            }}
                        >
                            {categories.map((category, index) => (
                                <Tab key={index} label={category} />
                            ))}
                        </Tabs>
                    </Box>
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Grid container spacing={4}>
                            {filteredProjects.map((project, index) => (
                                <Grid item xs={12} md={6} lg={4} key={project.id}>
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
                                                overflow: 'hidden',
                                                boxShadow: 0,
                                                '&:hover': {
                                                    borderColor: 'primary.main',
                                                    boxShadow: 4,
                                                    transform: 'translateY(-2px)'
                                                },
                                            }}
                                            onClick={() => openProjectDialog(project)}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={project.image}
                                                alt={project.title}
                                                sx={{
                                                    transition: 'transform 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'scale(1.05)',
                                                    }
                                                }}
                                            />
                                            <CardContent sx={{ p: 3 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Chip 
                                                        label={project.category}
                                                        size="small" 
                                                        sx={{ 
                                bgcolor: 'primary.main', 
                                color: 'common.white',
                                                            fontWeight: 600
                                                        }} 
                                                    />
                                                    <Typography variant="caption" color="text.secondary">
                                                        {project.duration}
                                                    </Typography>
                                                </Box>

                                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                                                    {project.title}
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                                                    {project.description.substring(0, 120)}...
                                                </Typography>

                                                <Typography variant="subtitle2" color="primary.main" sx={{ mb: 2, fontWeight: 600 }}>
                                                    Client: {project.client}
                                                </Typography>

                                                <Grid container spacing={2} sx={{ mb: 2 }}>
                                                    {project.results.slice(0, 2).map((result, idx) => (
                                                        <Grid item xs={6} key={idx}>
                                                            <Box sx={{ textAlign: 'center' }}>
                                                                <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                                                                    {result.value}
                                                                </Typography>
                                                                <Typography variant="caption" color="text.secondary">
                                                                    {result.metric}
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    ))}
                                                </Grid>

                                                <Button
                                                    fullWidth
                                                    variant="outlined"
                                                    endIcon={<Visibility />}
                                                    sx={{
                                                        borderColor: 'primary.main',
                                                        color: 'primary.main',
                                                        '&:hover': {
                                                            borderColor: 'primary.main',
                                                            bgcolor: 'rgba(34, 197, 94, 0.08)',
                                                        },
                                                    }}
                                                >
                                                    View Case Study
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>

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
                            Ready to Be Our Next Success Story?
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                            Let's create something amazing together. Get in touch to discuss your project and see how we can help you achieve similar results.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForward />}
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
                            Start Your Project
                        </Button>
                    </Box>
                </motion.div>
            </Container>

            {/* Project Detail Dialog */}
            <Dialog 
                open={selectedProject !== null} 
                onClose={closeProjectDialog}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    sx: {
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                        maxHeight: '90vh'
                    }
                }}
            >
                {selectedProject && (
                    <DialogContent sx={{ p: 0 }}>
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={selectedProject.image}
                                alt={selectedProject.title}
                            />
                            <IconButton 
                                onClick={closeProjectDialog}
                                sx={{ 
                                    position: 'absolute',
                                    top: 16,
                                    right: 16,
                                    bgcolor: 'rgba(0,0,0,0.7)',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgba(0,0,0,0.9)',
                                    }
                                }}
                            >
                                <Close />
                            </IconButton>
                        </Box>

                        <Box sx={{ p: 4 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                <Box>
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                                        {selectedProject.title}
                                    </Typography>
                                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
                                        Client: {selectedProject.client}
                                    </Typography>
                                </Box>
                                <Chip 
                                    label={selectedProject.category}
                                    sx={{ 
                                        bgcolor: 'primary.main', 
                                        color: 'black',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        px: 2,
                                        py: 1
                                    }} 
                                />
                            </Box>

                            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
                                {selectedProject.description}
                            </Typography>

                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                        Key Results
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {selectedProject.results.map((result, index) => (
                                            <Grid item xs={6} key={index}>
                                                <Card sx={{ 
                                                    p: 2, 
                                                    textAlign: 'center',
                                                    bgcolor: 'background.default',
                                                    border: '1px solid',
                                                    borderColor: 'divider'
                                                }}>
                                                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                                                        {result.value}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {result.metric}
                                                    </Typography>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                        Services Provided
                                    </Typography>
                                    <Stack spacing={1} sx={{ mb: 3 }}>
                                        {selectedProject.services.map((service, index) => (
                                            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                                <TrendingUp sx={{ color: 'primary.main', mr: 1, fontSize: 20 }} />
                                                <Typography variant="body2">{service}</Typography>
                                            </Box>
                                        ))}
                                    </Stack>

                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                        Technologies & Tags
                                    </Typography>
                                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                                        {selectedProject.tags.map((tag, index) => (
                                            <Chip 
                                                key={index}
                                                label={tag} 
                                                variant="outlined"
                                                size="small"
                                                sx={{ 
                                                    borderColor: 'primary.main',
                                                    color: 'primary.main'
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </Grid>
                            </Grid>

                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
                                <Button
                                    variant="outlined"
                                    startIcon={<Launch />}
                                    sx={{
                                        borderColor: 'primary.main',
                                        color: 'primary.main',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            bgcolor: 'rgba(34, 197, 94, 0.08)',
                                        },
                                    }}
                                >
                                    View Live Project
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
                                        },
                                    }}
                                >
                                    Start Similar Project
                                </Button>
                            </Box>
                        </Box>
                    </DialogContent>
                )}
            </Dialog>
        </Box>
    );
};

export default PortfolioPage;