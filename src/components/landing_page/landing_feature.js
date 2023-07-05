import { useTheme } from "@emotion/react";
import React from "react";

function LandingFeature(props) {
  const colorTheme = useTheme().palette;
  return (
    <div
      style={{
        width: "17%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        color: colorTheme.primary.main,
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
      <div style={{ marginTop: "5px", height: "50px", textAlign: "center" }}>
        {props.text}
      </div>
    </div>
  );
}

export default LandingFeature;
