import React from "react";

export const Svg035 = ({ state }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path
        fill={state.darkest}
        d="M33.06 154.22V37.28c32.29 0 58.47 26.18 58.47 58.48s-26.18 58.47-58.47 58.47z"
      ></path>
      <path
        fill={state.dark}
        d="M150 37.28v116.95c-32.29 0-58.47-26.18-58.47-58.48S117.71 37.28 150 37.28z"
      ></path>
      <path
        fill={state.light}
        d="M150 37.28h116.95c0 32.29-26.18 58.47-58.48 58.47S150 69.57 150 37.28z"
      ></path>
      <path
        fill={state.brand}
        d="M33.05 154.22h233.89c0 64.58-52.36 116.94-116.95 116.94S33.05 218.8 33.05 154.22z"
      ></path>
      <path
        fill={state.mid}
        d="M150 95.75h116.94c0 32.29-26.18 58.47-58.47 58.47S150 128.04 150 95.75z"
      ></path>
    </svg>
  );
};
