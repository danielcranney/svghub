import React, { useState } from "react";
import { useTheme } from "next-themes";

const CustomDropdown = ({ options, state, setState }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  console.log(options);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    const infoData = JSON.parse(option.value);
    setState({
      brand: infoData.brand.hex,
      darkest: infoData.darkest.hex,
      dark: infoData.dark.hex,
      mid: infoData.mid.hex,
      light: infoData.light.hex,
      lightest: infoData.lightest.hex,
    });
  };

  function hexToRgb(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }

  return (
    <div
      style={{
        background:
          theme == "light"
            ? `rgba(${hexToRgb(state.light)}, 0.50)`
            : `rgba(${hexToRgb(state.dark)}, 0.20)`,
        borderColor:
          theme == "light"
            ? `rgba(${hexToRgb(state.light)}, 1)`
            : `rgba(${hexToRgb(state.light)}, 0.15)`,
      }}
      className="custom-dropdown relative border rounded-md text-sm focus:outline-none focus:border-mid/50 flex items-center grow h-10 cursor-pointer"
    >
      {/* {JSON.stringify(options)} */}
      <button
        className="dropdown-header relative w-full h-full flex items-center rounded-lg"
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <div className="dropdown-option px-2.5 py-2 flex items-start border-b-0 border-light last:border-0 gap-y-0.5 w-full">
            <span className="text-sm font-medium flex whitespace-nowrap grow text-dark dark:text-light">
              {selectedOption.label.substring(0, 30)}
              {selectedOption.label.length > 30 ? "..." : ""}
            </span>
            <div className="color-indicators flex gap-x-1 items-center ml-auto my-auto">
              <div
                className="color-indicator w-3.5 h-3.5 flex rounded-lg"
                style={{
                  backgroundColor: JSON.parse(selectedOption.value).brand.hex,
                }}
              ></div>
              <div
                className="color-indicator w-3.5 h-3.5 flex rounded-lg"
                style={{
                  backgroundColor: JSON.parse(selectedOption.value).darkest.hex,
                }}
              ></div>
              <div
                className="color-indicator w-3.5 h-3.5 flex rounded-lg"
                style={{
                  backgroundColor: JSON.parse(selectedOption.value).dark.hex,
                }}
              ></div>
              <div
                className="color-indicator w-3.5 h-3.5 flex rounded-lg"
                style={{
                  backgroundColor: JSON.parse(selectedOption.value).mid.hex,
                }}
              ></div>
              <div
                className="color-indicator w-3.5 h-3.5 flex rounded-lg"
                style={{
                  backgroundColor: JSON.parse(selectedOption.value).light.hex,
                }}
              ></div>
              <div
                className="color-indicator w-3.5 h-3.5 flex rounded-lg border-mid/20 border"
                style={{
                  backgroundColor: JSON.parse(selectedOption.value).lightest
                    .hex,
                }}
              ></div>
            </div>
          </div>
        ) : (
          <span className="px-2.5">Please select one</span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={`ml-auto mr-2 w-3 h-3 icon icon-tabler icon-tabler-chevron-down ${
            isOpen ? "text-dark dark:text-light" : "text-dark dark:text-light"
          }`}
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 9l6 6l6 -6"></path>
        </svg>
      </button>
      {isOpen && (
        <div
          style={{
            background:
              theme == "light"
                ? `${state.lightest}`
                : `rgba(${hexToRgb(state.dark)}, 1)`,
            borderColor:
              theme == "light"
                ? `rgba(${hexToRgb(state.light)}, 1)`
                : `rgba(${hexToRgb(state.light)}, 0.15)`,
          }}
          className="dropdown-options absolute top-12 border rounded-lg w-full h-72 overflow-scroll shadow-lg shadow-dark/[15%]"
        >
          {options.map((option, index) => (
            <button
              style={{
                borderColor:
                  theme == "light"
                    ? `rgba(${hexToRgb(state.light)}, 1)`
                    : `rgba(${hexToRgb(state.light)}, 0.15)`,
              }}
              className="dropdown-option px-2.5 py-2 flex justify-start border-b last:border-0 gap-y-0.5 w-full text-dark dark:text-white"
              key={option.value + index}
              onClick={() => handleOptionSelect(option)}
            >
              <span className="flex flex-nowrap text-left text-sm font-medium">
                {option.label.substring(0, 30)}
                {option.label.length > 30 ? "..." : ""}
              </span>
              <div className="color-indicators flex gap-x-1 ml-auto">
                <div
                  className="color-indicator w-3.5 h-3.5 flex rounded-lg"
                  style={{
                    backgroundColor: JSON.parse(option.value).brand.hex,
                  }}
                ></div>
                <div
                  className="color-indicator w-3.5 h-3.5 flex rounded-lg"
                  style={{
                    backgroundColor: JSON.parse(option.value).darkest.hex,
                  }}
                ></div>
                <div
                  className="color-indicator w-3.5 h-3.5 flex rounded-lg"
                  style={{
                    backgroundColor: JSON.parse(option.value).dark.hex,
                  }}
                ></div>
                <div
                  className="color-indicator w-3.5 h-3.5 flex rounded-lg"
                  style={{
                    backgroundColor: JSON.parse(option.value).mid.hex,
                  }}
                ></div>
                <div
                  className="color-indicator w-3.5 h-3.5 flex rounded-lg"
                  style={{
                    backgroundColor: JSON.parse(option.value).light.hex,
                  }}
                ></div>
                <div
                  className="color-indicator w-3.5 h-3.5 flex rounded-lg border border-light"
                  style={{
                    backgroundColor: JSON.parse(option.value).lightest.hex,
                  }}
                ></div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
