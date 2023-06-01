import React from "react";

export const Svg004 = ({ state }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <circle cx="93.15" cy="104.37" r="83.92" fill={state.brand}></circle>
      <circle cx="248.81" cy="82.03" r="41.96" fill={state.darkest}></circle>
      <circle cx="196" cy="226.73" r="52.82" fill={state.mid}></circle>
      <circle cx="47.8" cy="226.73" r="20.64" fill={state.dark}></circle>
    </svg>
  );
};
