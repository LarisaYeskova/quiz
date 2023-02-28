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
      textTransform: 'none'
    },
    h6: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18px',
    },
  },
});

export default theme;
