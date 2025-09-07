import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Light, modern theme with white background and light green accents
let base = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#16a34a', // emerald-600
      light: '#86efac',
      dark: '#166534',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#22c55e', // emerald-500
      light: '#a7f3d0',
      dark: '#15803d',
      contrastText: '#0f172a',
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc', // slate-50
    },
    text: {
      primary: '#0f172a', // slate-900
      secondary: '#334155', // slate-700
    },
    divider: 'rgba(15, 23, 42, 0.08)'
  },
  typography: {
    fontFamily: ['Inter', 'Poppins', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,0.86)',
          backdropFilter: 'blur(10px)',
          color: '#0f172a',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

const theme = responsiveFontSizes(base);
export default theme;