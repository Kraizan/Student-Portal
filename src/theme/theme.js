import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5f5f5",
      dark: "#404040", // White color
    },
    secondary: {
      main: "#404040", // Purple color
      dark: "#f5f5f5",
    },
    btnColor: {
      main: "#f5f5f5",
      dark: "#24a0ed",
    },
    btnColor2: {
      main: "#24a0ed",
      dark: "#0065a4",
    },
    btnGreen: {
      main: "#00b518",
      dark: "#009113",
    },
    text: {
      main: "#f5f5f5",
      dark: "#404040",
    },
  },
});

export default theme;
