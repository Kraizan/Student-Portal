import React, { useState } from "react";
import UserProfileDetails from "./my_profile/user_profile_details";
import UserProfileWorks from "./my_profile/user_profile_works";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserProfile() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      console.log(user);
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/students?email=${user}`
          );
          const data = response.data[0];
          console.log(data);
          setData(data);

          data.workingExperience.sort(function (a, b) {
            return new Date(b.from) - new Date(a.from);
          });
          data.projects.sort(function (a, b) {
            return new Date(b.startedOn) - new Date(a.startedOn);
          });
          data.researchPapers.sort(function (a, b) {
            return new Date(b.publishedOn) - new Date(a.publishedOn);
          });

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
        <div>loading..</div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <UserProfileDetails tempData={data} setData={setData} />
          <div style={{ width: "10px" }}></div>
          <UserProfileWorks tempData={data} setData={setData} />
        </div>
      )}
    </div>
  );
}

export default UserProfile;
