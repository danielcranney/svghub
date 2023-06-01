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
      brand: infoData.brand,
      darkest: infoData.darkest,
      dark: infoData.dark,
      mid: infoData.mid,
      light: infoData.light,
      lightest: infoData.lightest,
    });
  };

  return (
    <div className="custom-dropdown relative bg-light/50 border border-light rounded-md text-sm focus:outline-none focus:border-mid/50 flex w-48 h-10 text-mid px-2">
      <div
        className="dropdown-header relative bg-white"
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <>
            <span>{selectedOption.label}</span>
            <div className="color-indicators">
              <div
                className="color-indicator w-8 h-8 flex"
                style={{ backgroundColor: selectedOption.brand }}
              ></div>
            </div>
          </>
        ) : (
          <span>Please select one</span>
        )}
      </div>
      {isOpen && (
        <div className="dropdown-options absolute top-10 bg-white">
          {options.map((option, index) => (
            <div
              className="dropdown-option"
              key={option.value + index}
              onClick={() => handleOptionSelect(option)}
            >
              <span>{option.label}</span>
              <div className="color-indicators flex gap-x-1">
                <div
                  className="color-indicator w-8 h-8 flex"
                  style={{ backgroundColor: option.brand }}
                ></div>
                <div
                  className="color-indicator w-8 h-8 flex"
                  style={{ backgroundColor: option.darkest }}
                ></div>
                <div
                  className="color-indicator w-8 h-8 flex"
                  style={{ backgroundColor: option.dark }}
                ></div>
                <div
                  className="color-indicator w-8 h-8 flex"
                  style={{ backgroundColor: option.mid }}
                ></div>
                <div
                  className="color-indicator w-8 h-8 flex"
                  style={{ backgroundColor: option.light }}
                ></div>
                <div
                  className="color-indicator w-8 h-8 flex"
                  style={{ backgroundColor: option.lightest }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
