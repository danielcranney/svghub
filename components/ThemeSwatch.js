import React from "react";

export const ThemeSwatch = ({
  brand,
  darkest,
  dark,
  mid,
  light,
  lightest,
  handlePaletteSwitch,
}) => {
  return (
    <div className="swatch-container">
      <input
        type="radio"
        id="palette"
        name="fav_language"
        value="palette"
        className="w-6 h-6 my-auto mx-2"
        onClick={() => {
          handlePaletteSwitch(brand, darkest, dark, mid, light, lightest);
        }}
      />
      <label labelFor="palette" className="w-full h-10">
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
      </label>
    </div>
  );
};
