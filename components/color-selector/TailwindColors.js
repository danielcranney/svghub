import { useContext } from "react";
import { ColorContext } from "../../pages/_app";

const TailwindColors = ({ colorCategory, colors }) => {
  const { state, dispatch } = useContext(ColorContext);

  return (
    <>
      {Object.entries(colors).map((color) => {
        const solidColor = color[0];
        {
          /* console.log(solidColor); */
        }
        const shades = color[1];
        {
          /* console.log(shades); */
        }
        return (
          <div
            className="flex flex-col items-center flex-grow mb-1 mr-1"
            key={`${colorCategory}-${solidColor}-${shades}`}
          >
            {Object.entries(shades).map((shade) => {
              return (
                <div
                  className="flex items-center py-1"
                  key={`${colorCategory}-${solidColor}-${shade[1].tailwind}`}
                >
                  <button
                    // Conditional
                    // If white is current color, and the button is white
                    // Dark border
                    // If white is NOT current color, but this button is white
                    // Light border
                    // If the conditions above are not met
                    // Add colorful border
                    aria-label="Colored Circle"
                    className={`self-center h-6 w-6 max-h-8 max-w-8 bg-${
                      shade[1].tailwind
                    } rounded-full 
                    ${
                      state[colorCategory].bgColor.toString() == "bg-white" &&
                      shade[1].tailwind == "white"
                        ? "border-white dark:border-slate-900 border-2 ring-2 ring-slate-400"
                        : state[colorCategory].bgColor.toString() !=
                            "bg-white" && shade[1].tailwind == "white"
                        ? "border-2 border-slate-200 dark:ring-2 dark:ring-white dark:border-white"
                        : state[colorCategory].bgColor.toString() ==
                            "gray-900" && shade[1].tailwind == "gray-900"
                        ? "border-white dark:border-slate-900 border-2 ring-2 ring-slate-900 dark:ring-slate-400"
                        : state[colorCategory].bgColor.toString() !=
                            "gray-900" && shade[1].tailwind == "gray-900"
                        ? "border-2 border-slate-900 dark:ring-2 dark:ring-slate-900 dark:border-slate-700"
                        : state[colorCategory].bgColor.toString() ==
                          shade[1].tailwind
                        ? `ring-2 border-2 border-white dark:border-slate-900 ${state[
                            colorCategory
                          ].ringColor.toString()}`
                        : "border-0 ring-0"
                    }
                    `}
                    onClick={() =>
                      dispatch({
                        type: "select-tailwind-color",
                        payload: {
                          colorType: [colorCategory],
                          color: [shade[1].tailwind],
                          hex: [shade[1].hex].toString(),
                          rgb: [shade[1].rgb].toString(),
                          hsl: [shade[1].hsl].toString(),
                        },
                      })
                    }
                  ></button>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default TailwindColors;
