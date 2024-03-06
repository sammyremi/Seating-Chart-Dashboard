import React from "react";
import img404 from "../../images/err.png";
const Error = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <img src={img404} alt="GIF Image" />
    </div>
  );
};

export default Error;
