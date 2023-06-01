import React from "react";

export const Svg050 = ({ state }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path
        fill={state.light}
        d="M34.15 41.6H265.84999999999997V255.26999999999998H34.15z"
      ></path>
      <path
        fill={state.mid}
        opacity="0.2"
        d="M265.85 41.6L34.15 41.6 34.15 136.43"
      ></path>
      <path
        fill={state.brand}
        d="M0 230.85L61.97 199.47 118.77 230.17 233.8 103.02 300 150 300 300 0 300 0 230.85z"
      ></path>
      <path
        fill={state.lightest}
        d="M233.8 103.02L300 300 300 150 233.8 103.02z"
        opacity="0.15"
      ></path>
      <path
        fill={state.lightest}
        d="M61.97 199.47L0 300 0 230.85 61.97 199.47z"
        opacity="0.15"
      ></path>
    </svg>
  );
};
