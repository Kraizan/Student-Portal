import { ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/home";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
