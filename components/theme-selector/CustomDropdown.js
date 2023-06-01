import React, { useState } from "react";

const CustomDropdown = ({ options, state, setState }) => {
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

  return (
    <div className="custom-dropdown relative bg-light/50 border border-light rounded-md text-sm focus:outline-none focus:border-mid/50 flex items-center w-60 h-10 text-mid cursor-pointer">
      {/* {JSON.stringify(options)} */}
      <button
        className="dropdown-header relative w-full h-full flex items-center rounded-lg"
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <div className="dropdown-option px-2.5 py-2 flex items-start border-b border-light last:border-0 gap-y-0.5 w-full">
            <span className="text-xs uppercase font-medium flex flex-nowrap">
              {selectedOption.label.substring(0, 11)}
              {selectedOption.label.length > 11 ? "..." : ""}
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
          <span>Please select one</span>
        )}
      </button>
      {isOpen && (
        <div className="dropdown-options absolute top-12 bg-white border rounded-lg border-light w-full h-72 overflow-scroll shadow-lg shadow-dark/[15%]">
          {options.map((option, index) => (
            <button
              className="dropdown-option px-2.5 py-2 flex justify-start border-b border-light last:border-0 gap-y-0.5 w-full"
              key={option.value + index}
              onClick={() => handleOptionSelect(option)}
            >
              <span className="flex flex-nowrap text-left text-xs uppercase font-medium">
                {option.label.substring(0, 11)}
                {option.label.length > 11 ? "..." : ""}
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class={`w-3 h-3 icon icon-tabler icon-tabler-chevron-down ${
          isOpen ? "text-dark" : "text-mid"
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
    </div>
  );
};

export default CustomDropdown;
