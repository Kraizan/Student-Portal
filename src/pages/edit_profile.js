import React, { useEffect, useState } from "react";
import ProfileForm from "../components/profile_form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function EditProfilePage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("user");
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/students/${id}`
          );
          const data = response.data;
          setData(data);

          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <Navbar />
          <ProfileForm student={data} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default EditProfilePage;
