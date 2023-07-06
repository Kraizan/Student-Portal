import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import TextInputField from "../components/input_field";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const SignUpPage = () => {
  const colorTheme = useTheme().palette;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyles = {
    height: "50px",
    fontSize: "1.2rem",
    fontWeight: "500",
    color: isHovered ? colorTheme.primary.main : colorTheme.primary.dark,
    borderColor: colorTheme.primary.main,
    margin: "20px 0",
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let configAuth = {
      method: "post",
      mode: "cors",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email: email, password: password },
    };

    const response = await axios.request(configAuth).catch((error) => {
      console.log(error);
    });

    const userId = response.data._id;
    console.log(userId);

    let configStudent = {
      method: "post",
      mode: "cors",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/students/",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email: email, _id: userId },
    };
    console.log(configStudent.data._id);
    await axios
      .request(configStudent)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-signup.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "40%",
            textAlign: "center",
            marginTop: "4%",
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              margin: "3% auto",
              color: colorTheme.primary.main,
            }}
          >
            Create Your Account
          </div>
          <TextInputField
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={handleFullNameChange}
          />
          <TextInputField
            label="Email"
            type="email"
            placeholder="johndoe@email.com"
            value={email}
            onChange={handleEmailChange}
          />
          <TextInputField
            label="Password"
            type="password"
            placeholder="johndoe_00"
            value={password}
            onChange={handlePasswordChange}
          />
          <TextInputField
            label="Confirm Password"
            type="password"
            placeholder="johndoe_00"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <Button
            onSubmit={handleSubmit}
            variant="contained"
            color="btnColor"
            style={buttonStyles}
            fullWidth
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <div style={{ fontSize: "1.1rem", color: colorTheme.primary.main }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "cyan",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
