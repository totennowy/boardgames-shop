import Layout from '@layout/Layout';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { APIProvider } from '@contexts/APIContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageHome from '@pages/home/pageHome';
import PageProduct from '@pages/product/pageProduct';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <APIProvider>
          <Layout>
            <Router>
              <Routes>
                <Route path="/" element={<PageHome />} />
                <Route
                  path="/product/:productId/:productName"
                  element={<PageProduct />}
                />
              </Routes>
            </Router>
          </Layout>
        </APIProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
