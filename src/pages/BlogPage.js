import React from 'react';
import { Container, Typography, Box, Card, CardContent, Chip, Grid, CardMedia, Button, Stack, TextField, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Search } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const BlogPage = () => {
    const blogPosts = [
        {
            title: "5 Digital Marketing Trends That Will Dominate 2025",
            excerpt: "Stay ahead of the curve with these emerging digital marketing strategies that are reshaping the industry.",
            category: "Strategy",
            readTime: "5 min read",
            date: "Sep 5, 2025",
            image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&auto=format&fit=crop"
        },
        {
            title: "How AI is Revolutionizing Social Media Marketing",
            excerpt: "Discover how artificial intelligence is transforming content creation, audience targeting, and campaign optimization.",
            category: "Technology",
            readTime: "7 min read",
            date: "Sep 3, 2025",
            image: "https://images.unsplash.com/photo-1620712943543-bcc46223242f?w=800&auto=format&fit=crop"
        },
        {
            title: "Mobile-First Design: Beyond Responsive",
            excerpt: "Learn why mobile-first isn't just about responsive design and how to create truly mobile-optimized experiences.",
            category: "Design",
            readTime: "6 min read",
            date: "Sep 1, 2025",
            image: "https://images.unsplash.com/photo-1559028006-44d08a9a3b61?w=800&auto=format&fit=crop"
        },
        {
            title: "The Ultimate Guide to SEO in 2025",
            excerpt: "Master the latest SEO techniques to rank higher on Google and drive organic traffic to your website.",
            category: "SEO",
            readTime: "10 min read",
            date: "Aug 28, 2025",
            image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&auto=format&fit=crop"
        },
        {
            title: "Content Marketing That Converts: A Step-by-Step Guide",
            excerpt: "Learn how to create compelling content that not only engages your audience but also drives conversions.",
            category: "Content",
            readTime: "8 min read",
            date: "Aug 25, 2025",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop"
        },
        {
            title: "Unlocking the Power of Performance Marketing",
            excerpt: "A deep dive into performance marketing strategies that maximize ROI and fuel business growth.",
            category: "Marketing",
            readTime: "6 min read",
            date: "Aug 22, 2025",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop"
        }
    ];

    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1);

    return (
        <Box sx={{ pb: 8, minHeight: '100vh', background: 'linear-gradient(180deg, rgba(22,163,74,0.02) 0%, rgba(255,255,255,1) 100%)' }}>
            <Container maxWidth="lg">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <Box textAlign="center" sx={{ mb: 6 }}>
                        <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Marketing Insights
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                            Stay updated with the latest trends, strategies, and insights in the world of digital marketing.
                        </Typography>
                    </Box>
                </motion.div>

                {/* Featured Post */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <Card sx={{ display: { xs: 'none', md: 'flex' }, mb: 8, borderRadius: 4, background: 'background.paper' }}>
                        <CardMedia component="img" sx={{ width: '50%', objectFit: 'cover' }} image={featuredPost.image} alt={featuredPost.title} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                            <CardContent sx={{ flex: '1 0 auto', p: 4 }}>
                                <Chip label={featuredPost.category} size="small" sx={{ bgcolor: 'primary.main', color: 'common.white', fontWeight: 600, mb: 2 }} />
                                <Typography component="div" variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                                    {featuredPost.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" paragraph>
                                    {featuredPost.excerpt}
                                </Typography>
                                <Button component={RouterLink} to="#" endIcon={<ArrowForward />}>
                                    Read More
                                </Button>
                            </CardContent>
                        </Box>
                    </Card>
                </motion.div>

                {/* Search and Filter */}
                 <Stack direction={{xs: 'column', sm: 'row'}} spacing={2} sx={{mb: 4}} justifyContent="space-between" alignItems="center">
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>Recent Posts</Typography>
                    <TextField
                        variant="outlined"
                        placeholder="Search articles..."
                        size="small"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                            ),
                        }}
                    />
                </Stack>

                <Grid container spacing={4}>
                    {recentPosts.map((post, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} style={{height: '100%'}}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, background: 'background.paper', border: '1px solid', borderColor: 'divider', transition: 'all 0.3s ease', '&:hover': { borderColor: 'primary.main' }}}>
                                    <CardMedia component="img" height="200" image={post.image} alt={post.title} />
                                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Chip label={post.category} size="small" sx={{ bgcolor: 'primary.light', color: 'primary.dark', fontWeight: 600 }} />
                                            <Typography variant="caption" color="text.secondary">{post.date}</Typography>
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 600, flexGrow: 1 }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
                                            {post.excerpt}
                                        </Typography>
                                        <Button component={RouterLink} to="#" endIcon={<ArrowForward />} sx={{alignSelf: 'flex-start', mt: 'auto'}}>
                                            Read More
                                        </Button>
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
