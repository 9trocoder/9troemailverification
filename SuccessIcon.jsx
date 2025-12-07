import React from "react";

const iconStyle = {
  stroke: "#06C755",
  strokeWidth: 2,
  width: "80px",
  height: "80px",
  margin: "20px auto",
  display: "block",
};

const pathStyle = {
  strokeDasharray: 1000,
  strokeDashoffset: 0,
  animation: "draw 1s ease-out forwards",
};

const SuccessIcon = () => (
  <svg style={iconStyle} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
    <circle cx='26' cy='26' r='25' fill='none' stroke='#EEEEEE' />
    <path style={pathStyle} fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8' />
  </svg>
);

export default SuccessIcon;
