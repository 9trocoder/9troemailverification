import React from "react";

const spinnerStyle = {
  border: "4px solid rgba(0, 0, 0, 0.1)",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  borderLeftColor: "#7b5fff",
  animation: "spin 1s ease infinite",
  margin: "20px auto",
};

const Spinner = () => <div style={spinnerStyle}></div>;

export default Spinner;
