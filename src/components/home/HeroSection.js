import React from 'react';
import { Box, Typography, Button, Stack, Chip, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
        color: 'text.primary',
        overflow: 'hidden',
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 12 },
      }}
    >
      {/* Decorative blobs */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Box sx={{
          position: 'absolute',
          width: 420,
          height: 420,
          filter: 'blur(80px)',
          borderRadius: '50%',
          background: 'radial-gradient(closest-side, rgba(34, 197, 94, 0.35), rgba(34, 197, 94, 0))',
          top: -80,
          right: { xs: -120, md: -60 },
        }} />
        <Box sx={{
          position: 'absolute',
          width: 360,
          height: 360,
          filter: 'blur(70px)',
          borderRadius: '50%',
          background: 'radial-gradient(closest-side, rgba(16, 185, 129, 0.28), rgba(16, 185, 129, 0))',
          bottom: -120,
          left: { xs: -140, md: -60 },
        }} />
      </Box>

      <Box sx={{ px: { xs: 2.5, sm: 3, md: 6 }, maxWidth: 1200, mx: 'auto' }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'flex-start' },
            textAlign: { xs: 'left', md: 'left' },
            gap: 2,
          }}
        >
          <Chip label="Social-first Growth Agency" color="success" variant="outlined" sx={{
            borderColor: 'primary.light', color: 'primary.dark', bgcolor: 'primary.light',
            fontWeight: 700,
          }} />

          <Typography component="h1" variant={isMobile ? 'h3' : 'h1'} sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
            Build a brand people love on social media
            <Box component="span" sx={{
              background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              ml: 1,
            }}>faster</Box>
          </Typography>

          <Typography variant={isMobile ? 'body1' : 'h6'} sx={{ color: 'text.secondary', maxWidth: 720 }}>
            We craft scroll-stopping content, run performance ads, and turn followers into customers. Mobile-first. Data-backed.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 1 }}>
            <Button size="large" variant="contained" color="primary" sx={{ px: 3.5 }}>
              Get a free strategy
            </Button>
            <Button size="large" variant="outlined" color="primary" sx={{ px: 3.5 }} href="#services">
              See our work
            </Button>
          </Stack>

          <Stack direction="row" spacing={3} sx={{ mt: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Trusted by startups and creators</Typography>
            <Stack direction="row" spacing={2}>
              {['Instagram', 'YouTube', 'Facebook'].map((t) => (
                <Box key={t} sx={{ fontSize: 12, color: 'text.secondary' }}>• {t}</Box>
              ))}
            </Stack>
          </Stack>
        </MotionBox>

        {/* Quick stats cards */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mt: { xs: 5, md: 8 } }}>
          {[
            { k: '+320%', v: 'Avg. reach growth' },
            { k: '7.8x', v: 'ROAS on paid' },
            { k: '24 hrs', v: 'Proposal turnaround' },
          ].map((item) => (
            <MotionBox
              key={item.v}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              sx={{
                flex: 1,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                p: 2.5,
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.dark' }}>{item.k}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.v}</Typography>
            </MotionBox>
          ))}
        </Stack>
      </Box>

      {/* Hidden build timestamp for quick verification on the live site */}
      <Box aria-hidden sx={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}>
        <Typography component="span" variant="caption">{BUILD_TIMESTAMP}</Typography>
      </Box>
    </Box>
  );
};

// Add BUILD_TIMESTAMP so the identifier is defined for ESLint/builds.
// Use a build-time env var when provided, otherwise fall back to a runtime ISO timestamp.
const BUILD_TIMESTAMP = process.env.REACT_APP_BUILD_TIMESTAMP || new Date().toISOString();

export default HeroSection;

