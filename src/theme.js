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
      fontWeight: '700',
      textTransform: 'none',
      lineHeight: '1.7rem',
      marginBottom: '5px'
    },
    h4: {
      fontSize: '1rem',
      fontWeight: '500',
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
      fontSize: '1rem',
      fontWeight: '400',
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.73)'
    },
    h7: {
      fontSize: '0.8rem',
      fontWeight: '400',
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.5)'
    }
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
