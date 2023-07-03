import { React } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LandingPage from "../components/landing";

function HomePage(props) {
  return (
    <div style={{ width: "100%" }}>
      <Navbar
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
      />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default HomePage;
