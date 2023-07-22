import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import LandingPage from "./pages/landing";
import HomePage from "./pages/home";
import StudentProfilePage from "./pages/student_profile";
import FacultyProfilePage from "./pages/faculty_profile";
import EditProfileFaculty from "./pages/edit_profile_faculty";
import EditProfileStudent from "./pages/edit_profile_student";

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
            path="/faculty-profile"
            element={<FacultyProfilePage />}
          ></Route>
          <Route
            exact
            path="/edit-student-profile"
            element={<EditProfileStudent />}
          ></Route>
          <Route
            exact
            path="/edit-faculty-profile"
            element={<EditProfileFaculty />}
          ></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
