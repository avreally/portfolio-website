import "./styles.css";
import React from "react";

const connectingLine = () => {
  return (
    <div className="lineContainer">
      <svg
        className="line neonlightBlue"
        viewBox="0 0 307 202"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="linePath"
          d="M3.39249 0.706358C15.4999 158 276.5 86 303.499 200.998"
          stroke="black"
        />
      </svg>
    </div>
  );
};

export default connectingLine;
