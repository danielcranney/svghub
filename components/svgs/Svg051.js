import React from "react";

export const Svg051 = ({ state }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <circle cx="99.27" cy="190.88" r="71.71" fill={state.brand}></circle>
      <path
        fill={state.dark}
        d="M0 230.85L61.97 199.47 118.77 230.17 233.8 103.02 300 150 300 300 0 300 0 230.85z"
      ></path>
      <path
        fill={state.lightest}
        d="M233.8 103.02L300 300 300 150 233.8 103.02z"
        opacity="0.06"
      ></path>
      <path
        fill={state.lightest}
        d="M61.97 199.47L0 300 0 230.85 61.97 199.47z"
        opacity="0.1"
      ></path>
    </svg>
  );
};
