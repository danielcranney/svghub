import React, {
  useState,
  useContext,
  useEffect,
  Fragment,
  useRef,
} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { CoreContext } from "../../pages/_app";
import ColorBlock from "../color-selector/ColorBlock";
import { colorStore } from "../../pages/_app";
import ColorSelector from "../color-selector/ColorSelector";

const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { state, dispatch } = useContext(ColorContext);
  const { coreState, coreDispatch } = useContext(CoreContext);
  const colorBlockNode = useRef();
  const colorSelectorNode = useRef();

  const handleClickOutside = (e) => {
    if (
      colorBlockNode.current.contains(e.target) ||
      colorSelectorNode.current.contains(e.target)
    ) {
      // inside click
      // console.log("clicked inside");
      return;
    }
    // console.log("clicked outside", e.target);
    // outside click
    dispatch({
      type: ACTIONS.HEX_COLOR_SELECTION_COMPLETE,
    });
    if (typeof window !== "undefined") {
      //  Update localStorage with state, but with isEditing turned to false
      let str = JSON.stringify(state);
      let newStr = str.replace(/true/g, "false");
      let newObj = JSON.parse(newStr);
      localStorage.setItem("colorHubState", JSON.stringify(newObj));
    } else return;
  };

  useEffect(() => {
    if (
      state["brand"].isEditing ||
      state["darkest"].isEditing ||
      state["dark"].isEditing ||
      state["mid"].isEditing ||
      state["light"].isEditing ||
      state["lightest"].isEditing
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    if (!mounted) return;
  }, [state]);

  useEffect(() => {
    // If a localStorage object exists
    if (localStorage.getItem("colorHubState")) {
      // console.log(localStorage.getItem("colorHubState"));
      dispatch({
        type: ACTIONS.SET_DEFAULT_STATE,
      });
    } else {
      // console.log("localStorage is empty");
    }
    setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <aside
      className={`flow-root justify-center md:overflow-y-auto transition-all duration-150 ease-in-out z-30 absolute border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-tl-md rounded-tr-md md:rounded-tl-none md:rounded-tr-none border-t-2 border-l-2 border-r-2 md:border-t-0 md:border-l-0 md:border-r items-center md:items-start`}
    >
      <p
        className={`text-left mt-0 mb-0.5 md:mb-2 text-xs uppercase tracking-wider font-bold`}
      >
        Current Palette
      </p>

      {/* Color Titles */}
      <div
        className={`flex md:w-full flex-row md:flex-col ${
          coreState.themeBuilderMenu.visibility ? "gap-y-1" : "gap-y-0"
        }`}
      >
        {Object.entries(state).map((stateItem, index) => {
          return (
            <div key={stateItem[0]} ref={colorBlockNode}>
              <ColorBlock
                colorCategory={state[0]}
                colors={colorStore[stateItem[0]]}
                num={index}
              />
            </div>
          );
        })}
      </div>

      <p
        className={`text-left mt-6 md:mb-2 text-xs uppercase tracking-wider font-bold flex`}
      >
        More
      </p>
      <ul
        className={`hidden md:flex flex-col items-start w-full gap-x-3 gap-y-1 mb-auto`}
      >
        <li className="relative h-10 group w-full cursor-pointer inline-block">
          {/* <ToolTip toolTipContent={"Starter Kits"} /> */}

          <Link href="/starter-kits" className={`btn-sm gap-x-1`}>
            <span className={`flex`}>Starter Kits</span>
          </Link>
        </li>

        <li className="flex h-10 group w-full">
          <Link href="/contrast-checker" className={`btn-sm w-full gap-x-1 `}>
            <span className={`flex`}>Contrast Checker</span>
          </Link>
        </li>

        <li className="flex h-10 group w-full">
          <Link href="/blog" className={`btn-sm w-full gap-x-1`}>
            <span className={`flex`}>Blog</span>
          </Link>
        </li>

        <li className="flex h-10 group w-full">
          <Link href="/support" className={`btn-sm w-full gap-x-1`}>
            <span className={`flex`}>Support</span>
          </Link>
        </li>
      </ul>

      {/* Blog and Support section */}
      <article className="mt-5 hidden md:flex w-full gap-x-3 mx-auto items-end">
        <div className={`flex flex-col w-full mr-auto`}>
          <p className="flex flex-wrap text-xs tracking-wide font-bold text-slate-400 dark:text-white">
            &copy; {new Date().getFullYear()}&nbsp;
            <a href="http://www.colorhub.app" target="_blank" rel="noreferrer">
              ColorHub
            </a>
            &nbsp;&#183;&nbsp;All rights reserved
          </p>

          <div className="flex gap-x-1 self-start flex-wrap">
            <Link className="text-xs tracking-wide font-bold" href="/terms">
              Terms of Service
            </Link>
            <p className="flex text-sm text-center mx-auto">&nbsp;|&nbsp;</p>
            <Link className="text-xs tracking-wide font-bold" href="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
        <button
          onClick={() => {
            // coreDispatch({
            //   type: ACTIONS.TOGGLE_THEME_BUILDER_MENU,
            //   payload: { visibility: !coreState.themeBuilderMenu.visibility },
            // });
          }}
          className={`btn-sm btn-active p-0 h-9 w-9 shrink-0 self-end`}
        >
          <svg
            className={`w-4 h-4 transition-all duration-150 ease-in-out rotate-0`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            ></path>
          </svg>
        </button>
      </article>

      {Object.entries(state).map(([key, value], index) => {
        return (
          <div key={key + "key"}>
            {state[key].isEditing && (
              <ColorSelector
                colorCategory={key}
                colors={colorStore[key]}
                key={key}
                num={index}
                ref={colorSelectorNode}
              />
            )}
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
