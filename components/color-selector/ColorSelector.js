import React, {
  useContext,
  useEffect,
  useState,
  forwardRef,
  useRef,
} from "react";
import { HexColorPicker } from "react-colorful";
// import hexRgb from "hex-rgb";

const ColorSelector = forwardRef((props, ref) => {
  const { colorCategory, colors, state, setState } = props;

  console.log("Inside the colorSelector there is: ", state);

  const [testColor, setTestColor] = useState(state[colorCategory]);
  const [inputColor, setInputColor] = useState(testColor);
  const [showSelector, setShowSelector] = useState("hexColorPicker");
  const [copying, setCopying] = useState(null);

  const copyToClipBoard = async (contentToCopy, copyType) => {
    try {
      await navigator.clipboard.writeText(contentToCopy);

      setCopying(copyType);
      setTimeout(() => {
        setCopying(null);
      }, 1000);
      return () => clearTimeout(timer);
    } catch (err) {
      setCopying(null);
    }
  };

  const handleSlideLeft = () => {
    document.getElementById("colorContent").scrollBy({
      top: 0,
      left: -150,
      behavior: "smooth",
    });
  };

  const handleSlideRight = () => {
    document.getElementById("colorContent").scrollBy({
      top: 0,
      left: +150,
      behavior: "smooth",
    });
  };

  var regex = /[0-9A-Fa-f]{6}/g;

  useEffect(() => {
    console.log(
      testColor,
      ": The test color has been updated, and the state will now be updated."
    );

    // let redColor = hexRgb(testColor).red;
    // let greenColor = hexRgb(testColor).green;
    // let blueColor = hexRgb(testColor).blue;

    // dispatch({
    //   type: ACTIONS.SELECT_HEX_COLOR,
    //   payload: {
    //     colorType: colorCategory,
    //     hex: testColor,
    //     rgb: `rgb(${redColor}, ${greenColor}, ${blueColor})`,
    //     hsl: `rgb(${redColor}, ${greenColor}, ${blueColor})`,
    //   },
    // });

    setState({
      ...state,
      [colorCategory]: testColor,
    });

    setInputColor(testColor);
  }, [testColor, colorCategory]);

  useEffect(() => {
    if (inputColor.match(regex)) {
      // console.log("BAZZZINGA!");
      // let redColor = hexRgb(inputColor).red;
      // let greenColor = hexRgb(inputColor).green;
      // let blueColor = hexRgb(inputColor).blue;
      // dispatch({
      //   type: ACTIONS.SELECT_HEX_COLOR,
      //   payload: {
      //     colorType: colorCategory,
      //     hex: inputColor,
      //     rgb: `rgb(${redColor}, ${greenColor}, ${blueColor})`,
      //     hsl: `rgb(${redColor}, ${greenColor}, ${blueColor})`,
      //   },
      // });
    } else {
      // console.log(inputColor, " is NOT valid");
      return;
    }
  }, [inputColor]);

  useEffect(() => {
    console.log("The state has been updated: ", state);
    localStorage.setItem("svghubState", JSON.stringify(state));
  }, [state[colorCategory]]);

  return (
    <article
      className="flex flex-col w-full relative z-50 bg-white rounded-lg"
      ref={ref}
    >
      <div className="flex mx-4 text-xs border border-light/30 dark:border-neutral-700 rounded-md overflow-hidden gap-x-px bg-light/30 dark:bg-neutral-700">
        <button
          className={`flex flex-1 justify-center pt-1.5 pb-1 px-1.5 uppercase font-medium tracking-wide border-b-2 ${
            showSelector === "hexColorPicker"
              ? `text-dark bg-white dark:bg-neutral-700 dark:text-white border-light/40 dark:border-neutral-500`
              : `border-light/10 bg-light/10 dark:bg-neutral-800 text-dark dark:text-neutral-400 dark:border-neutral-800`
          }`}
          onClick={() => setShowSelector("hexColorPicker")}
        >
          Hex
        </button>
        <button
          className={`flex flex-1 justify-center py-1.5 px-1.5 uppercase font-medium tracking-wide border-b-2 ${
            showSelector === "tailwindColorPicker"
              ? `text-dark bg-white dark:bg-neutral-700 dark:text-white border-light/40 dark:border-neutral-500`
              : `border-light/10 bg-light/10 dark:bg-neutral-800 text-dark dark:text-neutral-400 dark:border-neutral-800`
          }`}
          onClick={() => setShowSelector("tailwindColorPicker")}
        >
          Tailwind
        </button>
      </div>
      {showSelector === "hexColorPicker" ? (
        <div className="relative flex w-full pt-4 overflow-auto mb-4">
          <div className="flex flex-col items-stretch w-full gap-2">
            <HexColorPicker color={testColor} onChange={setTestColor} />
            <input
              maxLength="7"
              value={inputColor}
              className="py-2 px-3 text-sm text-mid uppercase font-bold text-center focus:outline-none focus:border-mid border border-light"
              onChange={(e) => {
                // console.log("E.target.value is ", e.target.value);
                setInputColor(e.target.value);
                setTestColor(
                  e.target.value.match(regex) ? e.target.value : testColor
                );
              }}
            />

            <div className="flex gap-x-1 w-full overflow-hidden rounded-md">
              <button
                className="dark:bg-neutral-700/10 dark:hover:bg-neutral-700/40 bg-light/10 hover:bg-light/10 btn-xs btn-transparent flex w-full p-2 items-center group gap-x-1.5"
                onClick={() => copyToClipBoard(state[colorCategory].hex, "hex")}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  ></path>
                </svg>
                <div className="flex flex-col items-start grow">
                  <p className="text-xs uppercase">Hex:</p>
                  <p className="text-xs font-medium uppercase">
                    {copying == "hex" ? "Copying..." : state[colorCategory].hex}
                  </p>
                </div>
              </button>
              <button
                className="dark:bg-neutral-700/10 dark:hover:bg-neutral-700/40 bg-light/10 hover:bg-light/10 btn-xs btn-transparent flex w-full p-2 items-center group gap-x-1.5"
                // onClick={() =>
                //   copyToClipBoard(state[colorCategory].rgb.substring(3), "rgb")
                // }
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  ></path>
                </svg>
                <div className="flex flex-col items-start grow">
                  <p className="text-xs uppercase">Rgb:</p>
                  <p className="text-xs font-medium uppercase">
                    {copying == "rgb" ? "Copying..." : state[colorCategory]}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="relative flex w-full p-4 overflow-auto"
            id="colorContent"
          >
            <TailwindColors colorCategory={colorCategory} colors={colors} />
          </div>
          <div className="z-40 flex items-center justify-end px-3 py-2 border-t border-light/30 dark:border-neutral-700">
            <span className="mr-2 text-xs text-slate-500">Scroll for more</span>
            <button
              aria-label="Slide Left"
              type="button"
              onClick={handleSlideLeft}
            >
              <svg
                className="w-5 h-5 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              aria-label="Slide Right"
              type="button"
              onClick={handleSlideRight}
            >
              <svg
                className="w-5 h-5 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </>
      )}
    </article>
  );
});

ColorSelector.displayName = "ColorSelector";

export default ColorSelector;
