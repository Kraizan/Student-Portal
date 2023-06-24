import React, { useState } from "react";
import Button from "@mui/material/Button";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import TextInputField from "../components/input_field";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const LoginPage = () => {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
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
            }}
          >
            Log Back In
          </div>
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
            Login
          </Button>
          <div style={{ fontSize: "1.1rem" }}>
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{
                color: "cyan",
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
