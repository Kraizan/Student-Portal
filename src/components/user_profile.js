import React, { useState } from "react";
import data from "../data/tempData";
import UserProfileDetails from "./user_profile_details";
import UserProfileWorks from "./user_profile_works";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const [loading, setLoading] = useState(true);
  const [tempData, setTempData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setTempData(data);
      console.log(user);
    } else {
      navigate("/login");
    }
    setLoading(false);
  }, [tempData]);

  return (
    <div>
      {loading ? (
        <div>loading..</div>
      ) : (
        <div style={{ display: "flex" }}>
          <UserProfileDetails tempData={tempData} />
          <UserProfileWorks tempData={tempData} />
        </div>
      )}
    </div>
  );
}

export default UserProfile;
