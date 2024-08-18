import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          outline: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Oswald, sans-serif',
  },
});

export default theme;
