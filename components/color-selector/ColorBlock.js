import React, { useContext, useEffect, useRef, useState } from "react";

const ColorBlock = ({
  state,
  colorCategory,
  setShowingDropdown,
  showingDropdown,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <div className={`flex-col group w-auto flex items-center`}>
      <button
        onClick={() => {
          if (showingDropdown == colorCategory) {
            setShowingDropdown("");
          } else {
            setShowingDropdown(colorCategory);
          }
        }}
        className={`btn-sm px-0 flex w-full normal-case`}
      >
        <div
          className={`rounded-lg border-2 dark:border-transparent flex transition-all duration-150 ease-in-out overflow-hidden
          `}
        >
          <div
            style={{
              backgroundColor: state[colorCategory],
            }}
            className={`flex items-center w-5 h-5 lg:w-8 lg:h-8 justify-center box-border transition-all duration-150 ease-in-out overflow-hidden`}
          ></div>
        </div>
      </button>
    </div>
  );
};

export default ColorBlock;
