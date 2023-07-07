import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ExploreSection from "../components/explore";

function HomePage() {
  return (
    <div>
      <Navbar />
      <ExploreSection />
      <Footer />
    </div>
  );
}

export default HomePage;
