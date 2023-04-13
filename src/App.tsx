import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Dashboard from './Dashboard';
import './App.css';

function App() {

  const customTheme = extendTheme({
    components: {
      Progress: {
        baseStyle: {
          filledTrack: {
            bg: 'white'
          }
        }
      }
    }
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Box background={'white'}>
        <Dashboard />
      </Box>

    </ChakraProvider >
  );
}

export default App;
