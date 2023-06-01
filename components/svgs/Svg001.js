import React from "react";

export const Svg001 = ({ state }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <circle
        cx="159.09"
        cy="160.12"
        r="119.42"
        style={{ fill: state.brand }}
      />
      <circle
        cx="140.91"
        cy="139.88"
        r="119.42"
        style={{
          fill: "none",
          stroke: state.darkest,
          strokeMiterlimit: 10,
          strokeWidth: "3px",
        }}
      />
    </svg>
  );
};
