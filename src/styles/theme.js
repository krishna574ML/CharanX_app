import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const base = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4AF37', // Subtle Gold
    },
    background: {
      default: '#0A0A0A', // Onyx Black
      paper: '#121212',   // Slightly lighter black for cards/surfaces
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#BDBDBD',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, fontSize: '3.5rem', lineHeight: 1.04 },
    h2: { fontWeight: 700, fontSize: '2.4rem' },
    h3: { fontWeight: 700, fontSize: '1.6rem' },
    body1: { fontFamily: '"Inter", "Roboto", "sans-serif"', fontSize: '1rem', lineHeight: 1.6 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '999px',
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          // softer card elevation by default
          boxShadow: '0 8px 28px rgba(2,6,23,0.48)',
        },
      },
    },
  },
  // small set of custom shadows (used inline via sx if needed)
  shadows: [
    'none',
    '0 8px 24px rgba(2,6,23,0.48)',
    // rest will fall back to defaults as needed
  ],
});

const theme = responsiveFontSizes(base);

export default theme;