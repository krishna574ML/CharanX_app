import React, { useState, useEffect } from 'react';
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
    Dialog,
    DialogContent,
    IconButton,
    Paper,
    Avatar,
    Breadcrumbs,
    Link,
} from '@mui/material';
import { 
    Visibility,
    Launch,
    Close,
    ArrowForward,
    Star,
    Business,
    CheckCircle,
    WhatsApp,
    CampaignOutlined,
    BarChart,
    Web,
    Brush
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const PortfolioPage = () => {
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState(null);
    const [filterCategory, setFilterCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Projects', icon: <Business /> },
        { id: 'social-media', label: 'Social Media', icon: <CampaignOutlined /> },
        { id: 'web-design', label: 'Web Design', icon: <Web /> },
        { id: 'performance-marketing', label: 'Performance', icon: <BarChart /> },
        { id: 'branding', label: 'Branding', icon: <Brush /> }
    ];

    const projects = [
        {
            id: 1,
            title: "InnovateTech Social Transformation",
            category: "social-media",
            categoryLabel: "Social Media Marketing",
            client: "InnovateTech Solutions",
            description: "A complete social media overhaul that grew followers from 5K to 50K in 6 months and boosted engagement by 340%.",
            fullDescription: "This comprehensive social media transformation project involved a complete overhaul of the client's digital presence. We developed a cohesive brand voice, created engaging visual content, and implemented data-driven strategies that resulted in unprecedented growth.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop",
            results: [
                { metric: "Engagement Rate", value: "+340%", description: "From 2.1% to 9.2% average" },
                { metric: "Follower Growth", value: "5K → 50K", description: "900% increase in 6 months" },
                { metric: "Lead Generation", value: "+280%", description: "From 50 to 190 leads/month" },
            ],
            tags: ["Instagram", "LinkedIn", "Content Strategy"],
            duration: "6 months",
            timeline: "Mar 2024 - Aug 2024",
            services: ["Content Creation", "Community Management", "Paid Social"],
            rating: 4.9,
            testimonial: {
                text: "CharanX transformed our social media presence. The results exceeded our expectations and the team was incredibly professional.",
                author: "Sarah Johnson",
                position: "Marketing Director, InnovateTech"
            },
            liveUrl: "#"
        },
        {
            id: 2,
            title: "StyleHub E-commerce Campaign",
            category: "performance-marketing",
            categoryLabel: "Performance Marketing",
            client: "StyleHub Fashion",
            description: "Data-driven PPC campaigns that achieved a 5.2x ROAS and increased online sales by 450% during the Black Friday season.",
            fullDescription: "An intensive performance marketing campaign focused on maximizing return on ad spend through advanced targeting, creative optimization, and strategic bidding, leveraging multiple platforms and advanced analytics to drive exceptional results.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
            results: [
                { metric: "ROAS", value: "5.2x", description: "Return on ad spend" },
                { metric: "Sales Increase", value: "+450%", description: "Compared to previous year" },
                { metric: "CPA Reduction", value: "-60%", description: "Significant reduction in CAC" },
            ],
            tags: ["Google Ads", "Facebook Ads", "CRO"],
            duration: "4 months",
            timeline: "Sep 2024 - Dec 2024",
            services: ["PPC Management", "Landing Page Optimization", "Analytics"],
            rating: 4.8,
            testimonial: {
                text: "The performance marketing results were beyond our wildest dreams. CharanX delivered exceptional ROI and helped us scale significantly.",
                author: "Michael Chen",
                position: "CEO, StyleHub Fashion"
            },
            liveUrl: "#"
        },
        {
            id: 3,
            title: "Bistro Deluxe Website Revolution",
            category: "web-design",
            categoryLabel: "Web Design & Development",
            client: "Bistro Deluxe",
            description: "A mobile-first website redesign with an online ordering system that increased online orders by 300%.",
            fullDescription: "A complete website overhaul focusing on mobile-first design, UX optimization, and seamless online ordering integration. The project included custom development, payment gateway integration, and comprehensive SEO optimization.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
            results: [
                { metric: "Online Orders", value: "+300%", description: "Increase in digital orders" },
                { metric: "Load Speed", value: "Under 1.5s", description: "Improved from 5.2s" },
                { metric: "Mobile Traffic", value: "+200%", description: "Mobile-optimized experience" },
            ],
            tags: ["React", "Mobile-First", "E-commerce"],
            duration: "3 months",
            timeline: "Jun 2024 - Aug 2024",
            services: ["Web Development", "UX/UI Design", "SEO"],
            rating: 4.9,
            testimonial: {
                text: "Our new website transformed our business. Online orders have skyrocketed and customers love the new experience.",
                author: "Maria Rodriguez",
                position: "Owner, Bistro Deluxe"
            },
            liveUrl: "#"
        },
        {
            id: 4,
            title: "MedCare Plus Brand Identity",
            category: "branding",
            categoryLabel: "Branding & Design",
            client: "MedCare Plus",
            description: "A complete brand identity overhaul including logo, brand guidelines, and marketing materials that established trust.",
            fullDescription: "A comprehensive rebranding project that repositioned the healthcare provider as a premium, trustworthy service. The project included extensive research, brand strategy development, and visual identity creation.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
            results: [
                { metric: "Brand Recognition", value: "+250%", description: "Measured brand recall" },
                { metric: "Patient Trust", value: "+180%", description: "Based on patient surveys" },
                { metric: "Digital Engagement", value: "+160%", description: "Across all digital channels" }
            ],
            tags: ["Brand Identity", "Logo Design", "Healthcare"],
            duration: "2 months",
            timeline: "Apr 2024 - May 2024",
            services: ["Brand Strategy", "Logo Design", "Marketing Collateral"],
            rating: 4.8,
            testimonial: {
                text: "The new brand identity has transformed how patients perceive our practice. We look and feel much more professional.",
                author: "Dr. Robert Kim",
                position: "Medical Director, MedCare Plus"
            },
            liveUrl: "#"
        },
    ];
    
    const filteredProjects = filterCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === filterCategory);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <Box sx={{ pb: 8, background: 'linear-gradient(180deg, rgba(22,163,74,0.02) 0%, rgba(255,255,255,1) 100%)' }}>
            <Container maxWidth="xl">
                <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
                    <Link component={RouterLink} to="/" color="inherit" sx={{textDecoration: 'none'}}>Home</Link>
                    <Typography color="text.primary" fontWeight="600">Portfolio</Typography>
                </Breadcrumbs>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography variant="h1" sx={{ fontWeight: 800, mb: 3, background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Our Success Stories
                        </Typography>
                        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
                            Explore our portfolio of transformative digital marketing campaigns and web development projects that have driven exceptional results for our clients.
                        </Typography>
                    </Box>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
                         <Paper elevation={0} sx={{ p: 1, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(22,163,74,0.1)', borderRadius: 99, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {categories.map((category) => (
                                <Button key={category.id} variant={filterCategory === category.id ? 'contained' : 'text'} onClick={() => setFilterCategory(category.id)} startIcon={category.icon} sx={{ borderRadius: 99, px: 3, py: 1.5, fontWeight: 600, textTransform: 'none', color: filterCategory === category.id ? 'white' : 'text.primary', background: filterCategory === category.id ? 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)' : 'transparent', '&:hover': { background: filterCategory === category.id ? 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)' : 'rgba(22,163,74,0.08)' } }}>
                                    {category.label}
                                </Button>
                            ))}
                        </Paper>
                    </Box>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div key={filterCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                        <Grid container spacing={4} sx={{ mb: 8 }}>
                            {filteredProjects.map((project, index) => (
                                <Grid item xs={12} md={6} key={project.id}>
                                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10 }} style={{ height: '100%' }}>
                                        <Card sx={{ height: '100%', position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', border: '1px solid rgba(22,163,74,0.1)', borderRadius: 4, cursor: 'pointer', '&:hover': { borderColor: 'primary.main', boxShadow: '0 20px 40px rgba(22,163,74,0.15)', '& .project-image': { transform: 'scale(1.05)' }, '& .project-overlay': { opacity: 1 } }}} onClick={() => setSelectedProject(project)}>
                                            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                                <CardMedia component="img" height="300" image={project.image} alt={project.title} className="project-image" sx={{ transition: 'transform 0.4s ease', objectFit: 'cover' }} />
                                                <Box className="project-overlay" sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(22,163,74,0.8) 0%, rgba(34,197,94,0.8) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease' }}>
                                                    <Button variant="contained" endIcon={<Visibility />} sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 700, '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}>View Details</Button>
                                                </Box>
                                                <Chip label={project.categoryLabel} size="small" sx={{ position: 'absolute', top: 12, left: 12, background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', color: 'white', fontWeight: 600 }}/>
                                                <Box sx={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.7)', color: 'white', px: 1.5, py: 0.5, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 0.5 }}><Star sx={{ fontSize: 16, color: '#fbbf24' }} /><Typography variant="caption" fontWeight="600">{project.rating}</Typography></Box>
                                            </Box>
                                            <CardContent sx={{ p: 3 }}>
                                                <Typography variant="h5" fontWeight="700" sx={{ mb: 1, lineHeight: 1.3 }}>{project.title}</Typography>
                                                <Typography variant="body1" color="primary.main" fontWeight="600" sx={{ mb: 2 }}>{project.client}</Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>{project.description}</Typography>
                                                <Stack direction="row" spacing={1} sx={{mb: 2, flexWrap: 'wrap', gap: 1}}>
                                                    {project.tags.map(tag => <Chip key={tag} label={tag} variant="outlined" size="small" />)}
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                    <Paper elevation={0} sx={{ p: {xs: 3, md: 6}, textAlign: 'center', background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', color: 'white', borderRadius: 4 }}>
                        <Typography variant="h4" fontWeight="700" sx={{ mb: 2 }}>Ready to Create Your Success Story?</Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>Let's discuss your project and create exceptional results together.</Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                            <Button variant="contained" size="large" onClick={() => navigate('/contact')} sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 700, px: 4, '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}>Start Your Project</Button>
                            <Button variant="outlined" size="large" endIcon={<WhatsApp />} component="a" href="https://wa.me/919677303310" target="_blank" sx={{ borderColor: 'white', color: 'white', fontWeight: 700, px: 4, '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>WhatsApp Us</Button>
                        </Stack>
                    </Paper>
                </motion.div>
            </Container>

            <Dialog open={selectedProject !== null} onClose={() => setSelectedProject(null)} maxWidth="lg" fullWidth PaperProps={{ sx: { borderRadius: 4, maxHeight: '95vh' } }}>
                {selectedProject && (
                    <>
                        <DialogContent sx={{ p: 0, position: 'relative' }}>
                            <IconButton onClick={() => setSelectedProject(null)} sx={{ position: 'absolute', right: 16, top: 16, zIndex: 10, color: 'white', bgcolor: 'rgba(0,0,0,0.4)', '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' } }}><Close /></IconButton>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="350" image={selectedProject.image} alt={selectedProject.title} sx={{ objectFit: 'cover' }} />
                                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 70%)' }} />
                                <Box sx={{ position: 'absolute', bottom: 0, p: 4, color: 'white', width: '100%' }}>
                                    <Chip label={selectedProject.categoryLabel} sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }}/>
                                    <Typography variant="h3" fontWeight="700">{selectedProject.title}</Typography>
                                    <Typography variant="h6" sx={{ opacity: 0.9 }}>{selectedProject.client}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{p:4}}>
                                <Typography variant="h5" fontWeight="600" sx={{ mb: 2 }}>Project Overview</Typography>
                                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>{selectedProject.fullDescription}</Typography>
                                <Typography variant="h5" fontWeight="600" sx={{ mb: 3 }}>Key Results</Typography>
                                <Grid container spacing={3} sx={{ mb: 4 }}>
                                    {selectedProject.results.map((result, index) => (
                                        <Grid item xs={12} sm={4} key={index}>
                                            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'rgba(22,163,74,0.05)', borderRadius: 3, border: '1px solid rgba(22,163,74,0.1)' }}>
                                                <Typography variant="h4" color="primary.main" fontWeight="700">{result.value}</Typography>
                                                <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>{result.metric}</Typography>
                                                <Typography variant="body2" color="text.secondary">{result.description}</Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>Services Provided</Typography>
                                        {selectedProject.services.map((service, i) => <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}><CheckCircle sx={{ fontSize: 20, color: 'primary.main', mr: 1 }} /><Typography>{service}</Typography></Box>)}
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                         <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>Project Information</Typography>
                                         <Stack spacing={1}><Typography><strong>Timeline:</strong> {selectedProject.timeline}</Typography><Typography><strong>Duration:</strong> {selectedProject.duration}</Typography></Stack>
                                    </Grid>
                                </Grid>
                                <Paper elevation={0} sx={{ mt: 4, p: 4, bgcolor: 'background.paper', borderRadius: 3 }}>
                                    <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>Client Testimonial</Typography>
                                    <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>"{selectedProject.testimonial.text}"</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}><Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{selectedProject.testimonial.author.charAt(0)}</Avatar><Box><Typography fontWeight="600">{selectedProject.testimonial.author}</Typography><Typography color="text.secondary" variant="body2">{selectedProject.testimonial.position}</Typography></Box></Box>
                                </Paper>
                            </Box>
                        </DialogContent>
                        <Box sx={{ p: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                             <Button variant="outlined" endIcon={<Launch />} component="a" href={selectedProject.liveUrl} target="_blank">View Live Site</Button>
                             <Button variant="contained" endIcon={<ArrowForward />} onClick={() => { setSelectedProject(null); navigate('/contact'); }}>Start Similar Project</Button>
                        </Box>
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default PortfolioPage;
 
