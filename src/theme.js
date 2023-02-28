import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '70px',
      fontStyle: 'Bold',
      lineHeight: '104px',
    },
    h2: {
      fontSize: '40px',
      lineHeight: '59px',
      fontWeight: '400',
      textTransform: 'none',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: '700px',
      textTransform: 'none',
      lineHeight: '1.7rem',
      marginBottom: '5px'
    },
    h4: {
      fontSize: '1rem',
      fontWeight: '400px',
      textTransform: 'none',
      color: 'black'
    },
    h5: {
      fontSize: '0.9rem',
      fontWeight: '400',
      color: '#afabaa',
      textTransform: 'none',
      lineHeight: '1.375rem'
    },
    h6: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontSize: '16px',
          lineHeight: '24px',
          textDecoration: 'none',
          borderRadius: '0px',
          color: '#0C0C0C',
        },
      },
    },
  }
});

export default theme;
