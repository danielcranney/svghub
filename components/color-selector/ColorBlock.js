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
  }, [state]);

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
          className={`rounded-lg border-2 flex transition-all duration-150 ease-in-out overflow-hidden
          `}
        >
          <div
            style={{
              backgroundColor: state[colorCategory],
            }}
            className={`flex items-center w-8 h-8 justify-center box-border transition-all duration-150 ease-in-out overflow-hidden`}
          ></div>
        </div>
        {/* <p className={`mb-0 text-sm font-semibold menu-item mr-auto`}>
          {colorCategory[0].toUpperCase() + colorCategory.substring(1)}
        </p>

        <p
          className={`mb-0 text-left text-xs font-semibold tracking-wide dark:text-white uppercase`}
        >
          {state[colorCategory]}
        </p> */}
      </button>
    </div>
  );
};

export default ColorBlock;
