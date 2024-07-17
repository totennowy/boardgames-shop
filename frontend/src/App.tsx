import Layout from '@layout/Layout';
import Home from '@pages/home/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Layout>
          <Home />
        </Layout>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
