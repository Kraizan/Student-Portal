import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserProfileDetails from "./user_profile_details";
import UserProfileWorks from "./user_profile_works";

function UserProfile() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const setSortedData = (data) => {
    if (data.workingExperience)
      data.workingExperience.sort(function (a, b) {
        return new Date(a.from) - new Date(b.from);
      });
    if (data.projects)
      data.projects.sort(function (a, b) {
        return new Date(a.startedOn) - new Date(b.startedOn);
      });
    if (data.researchPapers)
      data.researchPapers.sort(function (a, b) {
        return new Date(a.publishedOn) - new Date(b.publishedOn);
      });
    setData(data);
    localStorage.setItem("profile", data.profileImage);
  };

  useEffect(() => {
    const id = localStorage.getItem("user");
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/faculties/faculty/${id}`
          );
          const data = response.data;
          setSortedData(data);
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
      <div>
        {loading ? (
          <div>loading..</div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
          >
            <UserProfileDetails tempData={data} setData={setSortedData} />
            <div style={{ width: "10px" }}></div>
            <UserProfileWorks tempData={data} setData={setSortedData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
