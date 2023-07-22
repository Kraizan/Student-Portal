import { React } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LandingBanner from "../components/landing_page/landing_banner";

function LandingPage() {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <LandingBanner />
      <Footer />
    </div>
  );
}

export default LandingPage;
