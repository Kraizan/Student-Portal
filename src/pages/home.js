import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import LandingPage from "../components/landing";

function HomePage() {
  return (
    <div style={{ width: "100%" }}>
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default HomePage;