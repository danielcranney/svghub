import React from "react";

export const CurrentThemeSwatch = ({
  brand,
  darkest,
  dark,
  mid,
  light,
  lightest,
  handlePaletteSwitch,
}) => {
  return (
    <div
      className="swatch-container"
      onClick={() => {
        handlePaletteSwitch(brand, darkest, dark, mid, light, lightest);
      }}
    >
      <div
        style={{
          background: brand,
        }}
      ></div>
      <div
        style={{
          background: darkest,
        }}
      ></div>
      <div
        style={{
          background: dark,
        }}
      ></div>
      <div
        style={{
          background: mid,
        }}
      ></div>
      <div
        style={{
          background: light,
        }}
      ></div>
      <div
        style={{
          background: lightest,
        }}
      ></div>
    </div>
  );
};
