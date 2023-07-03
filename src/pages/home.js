import { React } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LandingPage from "../components/landing";

function HomePage({ isLoggedIn }) {
  return (
    <div style={{ width: "100%" }}>
      <Navbar isLoggedIn={isLoggedIn} />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default HomePage;
