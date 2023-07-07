import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import EditProfilePage from "./pages/edit_profile";
import StudentProfilePage from "./pages/student_profile";
import LandingPage from "./pages/landing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/signup" element={<SignUpPage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/home" element={<HomePage />}></Route>
          <Route
            exact
            path="/student-profile"
            element={<StudentProfilePage />}
          ></Route>
          <Route
            exact
            path="/edit-profile"
            element={<EditProfilePage />}
          ></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
