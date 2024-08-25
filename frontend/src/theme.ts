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
    fontFamily: 'Lora, Tahoma, sans-serif',
  },
});

export default theme;
