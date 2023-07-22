import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import UserProfile from "../components/faculty_profile/user_profile";

function FacultyProfilePage() {
  return (
    <div>
      <Navbar />
      <UserProfile />
      <Footer />
    </div>
  );
}

export default FacultyProfilePage;
