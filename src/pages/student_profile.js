import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import UserProfile from "../components/user_profile";

function StudentProfilePage() {
  return (
    <div>
      <Navbar />
      <UserProfile />
      <Footer />
    </div>
  );
}

export default StudentProfilePage;
