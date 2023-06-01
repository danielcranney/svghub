import React from "react";

export const Svg022 = ({ state }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path
        fill={state.brand}
        d="M150 120.26L27.79 97.76 33.23 68.25 150 89.75 266.77 68.25 272.21 97.76 150 120.26z"
      ></path>
      <path
        fill={state.dark}
        d="M150 176.25L27.79 153.75 33.23 124.25 150 145.75 266.77 124.25 272.21 153.75 150 176.25z"
      ></path>
      <path
        fill={state.mid}
        d="M150 232.25L27.79 209.75 33.23 180.24 150 201.74 266.77 180.24 272.21 209.75 150 232.25z"
      ></path>
    </svg>
  );
};
