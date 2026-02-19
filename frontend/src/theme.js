import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
  primary: { main: "#fc8383" },
  secondary: { main: "#9f4e4e" },
  background: { default: "#FFF1F2" },
  text: {
    primary: "#9f4e4e",
    secondary: "#9f4e4e",
  },
},

  typography: {
    fontFamily: "'Montserrat', 'Open Sans', sans-serif",
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
