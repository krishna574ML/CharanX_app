import React from 'react';
import { Container, Typography, Box, Card, CardContent, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const BlogPage = () => {
    const blogPosts = [
        {
            title: "5 Digital Marketing Trends That Will Dominate 2025",
            excerpt: "Stay ahead of the curve with these emerging digital marketing strategies that are reshaping the industry.",
            category: "Strategy",
            readTime: "5 min read",
            date: "Sep 5, 2025"
        },
        {
            title: "How AI is Revolutionizing Social Media Marketing",
            excerpt: "Discover how artificial intelligence is transforming content creation, audience targeting, and campaign optimization.",
            category: "Technology",
            readTime: "7 min read",
            date: "Sep 3, 2025"
        },
        {
            title: "Mobile-First Design: Beyond Responsive",
            excerpt: "Learn why mobile-first isn't just about responsive design and how to create truly mobile-optimized experiences.",
            category: "Design",
            readTime: "6 min read",
            date: "Sep 1, 2025"
        }
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
                        Marketing Insights
                    </Typography>
                    <Typography 
                        variant="h6" 
                        align="center" 
                        color="text.secondary" 
                        sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
                    >
                        Stay updated with the latest trends, strategies, and insights in digital marketing
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
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
                                        transition: 'all 0.25s ease',
                                        boxShadow: 0,
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            boxShadow: 4,
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Chip 
                                                label={post.category} 
                                                size="small" 
                                                sx={{ 
                            bgcolor: 'primary.main', 
                            color: 'common.white',
                                                    fontWeight: 600
                                                }} 
                                            />
                                            <Typography variant="caption" color="text.secondary">
                                                {post.date}
                                            </Typography>
                                        </Box>
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                                            {post.excerpt}
                                        </Typography>
                                        <Typography variant="caption" color="primary.main" sx={{ fontWeight: 500 }}>
                                            {post.readTime}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default BlogPage;