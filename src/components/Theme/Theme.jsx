import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const Theme = createTheme({
  palette: {
    primary: {
      light: 'hsl(0, 0%, 96%)', // A50
      main: 'hsl(0, 0%, 80%)', // Primary
      dark: 'hsla(0, 0%, 40%)', // A700
    },
    secondary: {
      light: 'hsla(210,68%,60%,1)', // Secondary
      main: 'hsla(210,68%,37%,1)', // Secondary
      dark: 'hsla(210,68%,22%,1)', // Secondary
    },
  },
});

export default Theme;
