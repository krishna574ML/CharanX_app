import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4AF37', // Subtle Gold
    },
    background: {
      default: '#0A0A0A', // Onyx Black
      paper: '#1A1A1A',   // Slightly lighter black for cards/surfaces
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#BDBDBD',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: '3.5rem' },
    h2: { fontWeight: 600, fontSize: '2.5rem' },
    body1: { fontFamily: '"Inter", "Roboto", "sans-serif"', fontSize: '1rem', lineHeight: 1.6 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 20px',
        },
      },
    },
  },
});

export default theme;