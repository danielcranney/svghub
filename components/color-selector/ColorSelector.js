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

  // console.log("Inside the colorSelector there is: ", state);

  const [testColor, setTestColor] = useState(state[colorCategory]);
  const [inputColor, setInputColor] = useState(testColor);
  const [copying, setCopying] = useState(false);

  const copyToClipBoard = async (contentToCopy, copyType) => {
    try {
      await navigator.clipboard.writeText(contentToCopy);

      setCopying(copyType);
      setTimeout(() => {
        setCopying(false);
      }, 1000);
      return () => clearTimeout(timer);
    } catch (err) {
      setCopying(false);
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

  // useEffect(() => {
  //   console.log("The state has been updated: ", state);
  //   localStorage.setItem("svghubState", JSON.stringify(state));
  // }, [state[colorCategory]]);

  return (
    <article
      className="flex flex-col w-full relative z-50 rounded-lg"
      ref={ref}
    >
      <div className="relative flex w-full overflow-auto mb-4">
        <div className="flex flex-col items-stretch w-full gap-2">
          <HexColorPicker color={testColor} onChange={setTestColor} />
          <div className="flex items-center gap-x-1.5 w-full">
            <input
              maxLength="7"
              value={inputColor}
              className="relative bg-light/50 dark:bg-lightest/5 border border-light rounded-md text-xs focus:outline-none focus:border-mid/50 dark:border-dark flex items-center text-center h-8 text-dark dark:text-lightest font-medium tracking-wide w-40 uppercase"
              onChange={(e) => {
                // console.log("E.target.value is ", e.target.value);
                setInputColor(e.target.value);
                setTestColor(
                  e.target.value.match(regex) ? e.target.value : testColor
                );
              }}
            />{" "}
            <button
              className="flex w-8 h-8 dark:bg-lightest/5 dark:hover:bg-lightest/10 bg-[#000000]/5 text-dark rounded-lg items-center justify-center group gap-x-1.5 dark:text-lightest"
              onClick={() => copyToClipBoard(inputColor.toUpperCase(), "hex")}
            >
              {!copying ? (
                <svg
                  className="w-5 h-5 shrink-0 flex"
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
              ) : (
                <svg
                  className="w-4"
                  width="120"
                  height="30"
                  viewBox="0 0 120 30"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={state.dark}
                >
                  <circle cx="15" cy="15" r="15">
                    <animate
                      attributeName="r"
                      from="15"
                      to="15"
                      begin="0s"
                      dur="0.8s"
                      values="15;9;15"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      from="1"
                      to="1"
                      begin="0s"
                      dur="0.8s"
                      values="1;.5;1"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                    <animate
                      attributeName="r"
                      from="9"
                      to="9"
                      begin="0s"
                      dur="0.8s"
                      values="9;15;9"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      from="0.5"
                      to="0.5"
                      begin="0s"
                      dur="0.8s"
                      values=".5;1;.5"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="105" cy="15" r="15">
                    <animate
                      attributeName="r"
                      from="15"
                      to="15"
                      begin="0s"
                      dur="0.8s"
                      values="15;9;15"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      from="1"
                      to="1"
                      begin="0s"
                      dur="0.8s"
                      values="1;.5;1"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
});

ColorSelector.displayName = "ColorSelector";

export default ColorSelector;
