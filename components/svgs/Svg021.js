import React from "react";

export const Svg021 = ({ state }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 300 300"
    >
      <defs>
        <clipPath id="clippath">
          <path
            fill={state.lightest}
            d="M260 150c0 60.75-49.25 110-110 110V40c60.75 0 110 49.25 110 110z"
          ></path>
        </clipPath>
      </defs>
      <circle cx="150" cy="150" r="125" fill={state.brand}></circle>
      <path
        fill={state.lightest}
        d="M260 150c0 60.75-49.25 110-110 110V40c60.75 0 110 49.25 110 110z"
      ></path>
      <g fill={state.brand} clipPath="url(#clippath)">
        <path d="M94.15 52.03H266.51V67.03H94.15z"></path>
        <path d="M94.19 82.1H266.55V97.1H94.19z"></path>
        <path d="M94.19 112.11H266.55V127.11H94.19z"></path>
        <path d="M94.19 142.22H266.55V157.22H94.19z"></path>
        <path d="M94.19 172.26H266.55V187.26H94.19z"></path>
        <path d="M94.19 202.36H266.55V217.36H94.19z"></path>
        <path d="M94.19 232.41H266.55V247.41H94.19z"></path>
      </g>
    </svg>
  );
};
