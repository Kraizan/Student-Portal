import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const ProfileForm = ({ student }) => {
  const colorTheme = useTheme().palette;
  const [formData, setFormData] = useState(student);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(
          `http://localhost:8000/api/students/${student._id}/replace`,
          formData
        )
        .then((res) => {
          if (res.data.profileImage) {
            localStorage.setItem("profile", res.data.profileImage);
          } else {
            localStorage.removeItem("profile");
          }
        });
      navigate("/student-profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card style={{ margin: "10px 0" }}>
      <CardHeader
        title={<div style={{ textAlign: "center" }}>Edit Account Details</div>}
      />
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ width: "45%" }}>
            <CardContent>
              <TextField
                name="fullName"
                label="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </CardContent>
            <CardContent>
              <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </CardContent>
            <CardContent>
              <TextField
                name="contact"
                label="Contact"
                value={formData.contact}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </CardContent>
            <CardContent>
              <TextField
                name="profileImage"
                label="Profile Image"
                value={formData.profileImage}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </CardContent>
          </div>
          <div style={{ width: "45%" }}>
            <CardContent>
              <TextField
                name="resume"
                label="Resume"
                value={formData.resume}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </CardContent>
            <CardContent>
              <TextField
                name="portfolioWebsite"
                label="Portfolio Website"
                value={formData.portfolioWebsite}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </CardContent>
            <CardContent>
              <TextField
                name="linkedIn"
                label="LinkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </CardContent>
            <CardContent>
              <TextField
                name="github"
                label="GitHub"
                value={formData.github}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </CardContent>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CardContent>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              style={{
                color: colorTheme.text.main,
                borderRadius: "50px",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Update
            </Button>
          </CardContent>
        </div>
      </form>
    </Card>
  );
};

export default ProfileForm;
