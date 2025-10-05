import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Ultra-modern mobile-first theme with enhanced emerald gradient palette
let base = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#10b981', // emerald-500 - more vibrant
      light: '#34d399', // emerald-400
      dark: '#059669', // emerald-600
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#14b8a6', // teal-500 - complementary color
      light: '#5eead4', // teal-300
      dark: '#0d9488', // teal-600
      contrastText: '#ffffff',
    },
    accent: {
      main: '#8b5cf6', // violet-500
      light: '#a78bfa', // violet-400
      dark: '#7c3aed', // violet-600
    },
    background: {
      default: '#f8fffe', // ultra-light mint
      paper: '#ffffff',
      gradient: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #d1fae5 100%)',
    },
    text: {
      primary: '#0f172a', // slate-900
      secondary: '#475569', // slate-600
      tertiary: '#64748b', // slate-500
    },
    divider: 'rgba(16, 185, 129, 0.12)',
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    info: {
      main: '#06b6d4', // cyan-500
      light: '#22d3ee',
      dark: '#0891b2',
    }
  },
  typography: {
    fontFamily: [
      'Plus Jakarta Sans',
      'Inter', 
      'SF Pro Display',
      'Poppins', 
      '-apple-system', 
      'BlinkMacSystemFont',
      'Segoe UI', 
      'Roboto', 
      'sans-serif'
    ].join(','),
    h1: { 
      fontWeight: 900, 
      letterSpacing: '-0.04em',
      fontSize: '3.5rem',
      lineHeight: 1.1,
    },
    h2: { 
      fontWeight: 800, 
      letterSpacing: '-0.03em',
      fontSize: '2.75rem',
      lineHeight: 1.2,
    },
    h3: { 
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '2.125rem',
    },
    h4: { 
      fontWeight: 700,
      letterSpacing: '-0.01em',
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.375rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.7,
    },
    button: { 
      textTransform: 'none', 
      fontWeight: 700,
      fontSize: '0.9375rem',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(16, 185, 129, 0.05)',
    '0 4px 8px rgba(16, 185, 129, 0.08)',
    '0 8px 16px rgba(16, 185, 129, 0.1)',
    '0 12px 24px rgba(16, 185, 129, 0.12)',
    '0 16px 32px rgba(16, 185, 129, 0.14)',
    '0 20px 40px rgba(16, 185, 129, 0.16)',
    '0 24px 48px rgba(16, 185, 129, 0.18)',
    '0 28px 56px rgba(16, 185, 129, 0.2)',
    '0 32px 64px rgba(16, 185, 129, 0.22)',
    '0 36px 72px rgba(16, 185, 129, 0.24)',
    '0 40px 80px rgba(16, 185, 129, 0.26)',
    '0 44px 88px rgba(16, 185, 129, 0.28)',
    '0 48px 96px rgba(16, 185, 129, 0.3)',
    '0 52px 104px rgba(16, 185, 129, 0.32)',
    '0 56px 112px rgba(16, 185, 129, 0.34)',
    '0 60px 120px rgba(16, 185, 129, 0.36)',
    '0 64px 128px rgba(16, 185, 129, 0.38)',
    '0 68px 136px rgba(16, 185, 129, 0.4)',
    '0 72px 144px rgba(16, 185, 129, 0.42)',
    '0 76px 152px rgba(16, 185, 129, 0.44)',
    '0 80px 160px rgba(16, 185, 129, 0.46)',
    '0 84px 168px rgba(16, 185, 129, 0.48)',
    '0 88px 176px rgba(16, 185, 129, 0.5)',
    '0 92px 184px rgba(16, 185, 129, 0.52)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          overflowX: 'hidden',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(248, 255, 254, 0.88)',
          backdropFilter: 'blur(20px) saturate(180%)',
          color: '#0f172a',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 20,
        },
        elevation1: {
          boxShadow: '0 4px 20px rgba(16, 185, 129, 0.08)',
        },
        elevation2: {
          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.12)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 32px',
          fontSize: '0.9375rem',
          fontWeight: 700,
          textTransform: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 32px rgba(16, 185, 129, 0.25)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: '#10b981',
          '&:hover': {
            borderWidth: 2,
            borderColor: '#059669',
            background: 'rgba(16, 185, 129, 0.04)',
          },
        },
        sizeSmall: {
          padding: '8px 20px',
          fontSize: '0.875rem',
        },
        sizeLarge: {
          padding: '16px 48px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 20px 60px rgba(16, 185, 129, 0.18)',
            transform: 'translateY(-8px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
          fontSize: '0.875rem',
        },
        filled: {
          background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
          color: '#065f46',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.3s ease',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#10b981',
              },
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#10b981',
                borderWidth: 2,
              },
            },
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          '@media (min-width: 600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

const theme = responsiveFontSizes(base, {
  factor: 3.5, // More aggressive scaling for better mobile experience
});

export default theme;