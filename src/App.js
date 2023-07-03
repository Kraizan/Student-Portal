import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Make API call to check if user is logged in
    fetch("/auth/isLoggedIn")
      .then((res) => res.json())
      .then((data) => {
        setIsLoggedIn(data.isLoggedIn);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage isLoggedIn={isLoggedIn} />}
          ></Route>
          <Route exact path="/signup" element={<SignUpPage />}></Route>
          <Route
            exact
            path="/login"
            element={
              <LoginPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          ></Route>
          <Route
            exact
            path="/home"
            element={<HomePage isLoggedIn={isLoggedIn} />}
          ></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
