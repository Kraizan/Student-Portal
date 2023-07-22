import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import TextInputField from "../components/input_field";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { MenuItem, TextField } from "@mui/material";

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
    color: isHovered ? colorTheme.text.main : colorTheme.text.dark,
    borderColor: colorTheme.text.main,
    margin: "20px 0",
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log(fullName, email, password, selectedOption);
    event.preventDefault();

    let configAuth = {
      method: "post",
      mode: "cors",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email: email, password: password, type: selectedOption },
    };

    const response = await axios.request(configAuth).catch((error) => {
      console.log(error);
    });

    const userId = response.data._id;

    let URL = "http://localhost:8000/api/";
    const type = selectedOption === "student" ? "students" : "faculties";
    URL += type;
    let config = {
      method: "post",
      mode: "cors",
      maxBodyLength: Infinity,
      url: URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: { _id: userId, fullName: fullName, email: email },
    };
    await axios
      .request(config)
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
            marginTop: "2%",
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              margin: "2% auto",
              color: colorTheme.text.main,
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
          <TextField
            id="select"
            label="Profile type *"
            variant="filled"
            value={selectedOption}
            onChange={handleOptionChange}
            select
            fullWidth
            SelectProps={{
              style: { color: colorTheme.text.main }, // Apply custom styling for white color
            }}
            InputLabelProps={{
              style: { color: colorTheme.text.main }, // Apply custom styling for white color
            }}
            style={{
              textAlign: "left",
              color: colorTheme.text.main,
              marginTop: "20px",
              border: "1px solid lightgrey",
            }}
          >
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="faculty">Faculty</MenuItem>
          </TextField>
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
          <div style={{ fontSize: "1.1rem", color: colorTheme.text.main }}>
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
