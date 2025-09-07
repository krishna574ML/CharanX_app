import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import {
  Forum,
  Verified,
  DesignServices,
  RocketLaunch,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <Forum sx={{ fontSize: 34 }} />,
    title: 'Connect & Understand the Idea',
    description:
      "We start with a discovery call to learn your goals, audience, and constraints so we can align on what success looks like.",
    color: '#22c55e',
  },
  {
    icon: <Verified sx={{ fontSize: 34 }} />,
    title: 'Provide a Proven Solution',
    description:
      'We propose an evidence-backed plan using approaches that have worked for similar brands—clear scope, timeline, and KPIs.',
    color: '#16a34a',
  },
  {
    icon: <DesignServices sx={{ fontSize: 34 }} />,
    title: 'Design, Build & Iterate',
    description:
      'We design experiences and ship in small iterations, validating quickly with real feedback and data.',
    color: '#10b981',
  },
  {
    icon: <RocketLaunch sx={{ fontSize: 34 }} />,
    title: 'Launch, Measure & Optimize',
    description:
      'Go live with confidence. We monitor performance, report transparently, and optimize for continuous growth.',
    color: '#059669',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.25, 0, 1] },
  }),
};

const ProcessSection = () => {
  return (
    <Box id="process" sx={{ py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
      {/* Soft radial background to match the design language */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(1000px 400px at 20% 10%, rgba(34,197,94,.10) 0%, rgba(34,197,94,0) 60%),\
             radial-gradient(900px 360px at 80% 90%, rgba(16,185,129,.08) 0%, rgba(16,185,129,0) 60%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Chip
              label="How We Work"
              sx={{
                mb: 2,
                bgcolor: 'rgba(34, 197, 94, 0.10)',
                color: 'primary.main',
                fontWeight: 700,
              }}
            />
          </motion.div>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(90deg,#16a34a,#22c55e)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.9rem', md: '2.6rem' },
            }}
          >
            A clear, modern process from idea to impact
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760, mx: 'auto', mt: 2 }}>
            Four focused steps that make it easy to see how we turn vision into measurable results.
          </Typography>
        </Box>

        {/* Connecting timeline line for desktop */}
        <Box sx={{ position: 'relative', mb: { xs: 0, md: 2 } }}>
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: 48,
              left: 0,
              right: 0,
              height: 4,
              background: 'linear-gradient(90deg, rgba(34,197,94,.25), rgba(34,197,94,.05))',
              borderRadius: 4,
            }}
          />
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {steps.map((step, i) => (
            <Grid item xs={12} sm={6} md={3} key={step.title}>
              <motion.div
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(248,250,252,0.96))',
                    border: '1px solid',
                    borderColor: 'rgba(34,197,94,.15)',
                    backdropFilter: 'blur(10px)',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${step.color}, rgba(34,197,94,.6))`,
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 2,
                          display: 'grid',
                          placeItems: 'center',
                          color: 'white',
                          background: `linear-gradient(135deg, ${step.color}, rgba(34,197,94,.85))`,
                          boxShadow: '0 10px 20px rgba(34,197,94,.20)',
                        }}
                      >
                        {step.icon}
                      </Box>
                      <Typography
                        variant="overline"
                        sx={{ color: 'text.secondary', letterSpacing: 1, fontWeight: 700 }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </Typography>
                    </Stack>

                    <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {step.description}
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

export default ProcessSection;
