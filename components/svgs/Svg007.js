import React from "react";

export const Svg007 = ({ state }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 300 300"
    >
      <rect
        width="157.42"
        height="157.42"
        x="125.36"
        y="121.07"
        fill={state.brand}
        rx="20"
        ry="20"
      ></rect>
      <rect
        width="83.59"
        height="83.59"
        x="21.68"
        y="17.39"
        fill={state.mid}
        opacity="0.25"
        rx="10"
        ry="10"
      ></rect>
      <rect
        width="140.6"
        height="140.6"
        x="63.47"
        y="59.19"
        fill={state.dark}
        opacity="0.5"
        rx="15"
        ry="15"
      ></rect>
    </svg>
  );
};
