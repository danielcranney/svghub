import React from "react";

export const Svg016 = ({ state }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path
        fill={state.dark}
        d="M150 280.22H19.78V150c0 71.91 58.3 130.22 130.22 130.22z"
      ></path>
      <path
        fill={state.mid}
        d="M19.78 150V19.78H150C78.09 19.78 19.78 78.08 19.78 150z"
      ></path>
      <path
        fill={state.darkest}
        d="M280.22 19.78V150c0-71.91-58.3-130.22-130.22-130.22h130.22z"
      ></path>
      <path
        fill={state.brand}
        d="M280.22 150v130.22H150c71.91 0 130.22-58.3 130.22-130.22z"
      ></path>
    </svg>
  );
};
