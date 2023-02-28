import { Box, ThemeProvider } from '@mui/material';
import './App.css';
import Main from './components/Main';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#fff9f9' }} className="App">
        <Main />
      </Box>
    </ThemeProvider>
  );
}

export default App;

