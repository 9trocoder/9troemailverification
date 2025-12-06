import React from "react";

const iconStyle = {
  stroke: "#FF5252",
  strokeWidth: 2,
  width: "80px",
  height: "80px",
  margin: "20px auto",
  display: "block",
};

const keyframes = `
  @keyframes draw {
    from {
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const pathStyle = {
  strokeDasharray: 1000,
  strokeDashoffset: 0,
  animation: "draw 0.5s ease-out forwards",
};

const ErrorIcon = () => (
  <>
    <style>{keyframes}</style>
    <svg
      style={iconStyle}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 52 52'
    >
      <circle cx='26' cy='26' r='25' fill='none' stroke='#EEEEEE' />
      <path style={pathStyle} fill='none' d='M16 16 36 36 M36 16 16 36' />
    </svg>
  </>
);

export default ErrorIcon;
