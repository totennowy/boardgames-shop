import Layout from '@layout/Layout';
import Home from '@pages/home/Home';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { APIProvider } from '@contexts/APIContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <APIProvider>
          <Layout>
            <Home />
          </Layout>
        </APIProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
