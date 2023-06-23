import React from "react";

function LandingFeatures(props) {
  return (
    <div
      style={{
        width: "18%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "auto", textAlign: "center" }}>
        <img
          src={"/images/" + props.img}
          style={{
            width: "70%",
            borderRadius: "100px",
          }}
          alt={props.alt}
        ></img>
      </div>
      <div style={{ height: "100%", textAlign: "center" }}>{props.text}</div>
    </div>
  );
}

export default LandingFeatures;
