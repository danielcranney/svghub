import React, { useEffect, useContext, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import ReactDOMServer from "react-dom/server";
import ClipboardJS from "clipboard";

import { Header } from "../components/structure/Header";
import { Footer } from "../components/structure/Footer";

import { Svg001 } from "../components/svgs/Svg001";
import { Svg002 } from "../components/svgs/Svg002";
import { Svg003 } from "../components/svgs/Svg003";
import { Svg004 } from "../components/svgs/Svg004";
import { Svg005 } from "../components/svgs/Svg005";
import { Svg006 } from "../components/svgs/Svg006";
import { Svg007 } from "../components/svgs/Svg007";
import { Svg008 } from "../components/svgs/Svg008";
import { Svg009 } from "../components/svgs/Svg009";
import { Svg010 } from "../components/svgs/Svg010";
import { Svg011 } from "../components/svgs/Svg011";
import { Svg012 } from "../components/svgs/Svg012";
import { Svg013 } from "../components/svgs/Svg013";
import { Svg014 } from "../components/svgs/Svg014";
import { Svg015 } from "../components/svgs/Svg015";
import { Svg016 } from "../components/svgs/Svg016";
import { Svg017 } from "../components/svgs/Svg017";
import { Svg018 } from "../components/svgs/Svg018";
import { Svg019 } from "../components/svgs/Svg019";
import { Svg021 } from "../components/svgs/Svg021";
import { Svg022 } from "../components/svgs/Svg022";
import { Svg023 } from "../components/svgs/Svg023";
import { Svg024 } from "../components/svgs/Svg024";
import { Svg025 } from "../components/svgs/Svg025";
import { Svg026 } from "../components/svgs/Svg026";
import { Svg027 } from "../components/svgs/Svg027";
import { Svg028 } from "../components/svgs/Svg028";
import { Svg029 } from "../components/svgs/Svg029";
import { Svg030 } from "../components/svgs/Svg030";
import { Svg031 } from "../components/svgs/Svg031";
import { Svg032 } from "../components/svgs/Svg032";
import { Svg033 } from "../components/svgs/Svg033";
import { Svg034 } from "../components/svgs/Svg034";
import { Svg035 } from "../components/svgs/Svg035";
import { Svg036 } from "../components/svgs/Svg036";
import { Svg037 } from "../components/svgs/Svg037";
import { Svg038 } from "../components/svgs/Svg038";
import { Svg039 } from "../components/svgs/Svg039";
import { Svg040 } from "../components/svgs/Svg040";
import { Svg041 } from "../components/svgs/Svg041";
import { Svg042 } from "../components/svgs/Svg042";
import { Svg043 } from "../components/svgs/Svg043";
import { Svg044 } from "../components/svgs/Svg044";
import { Svg045 } from "../components/svgs/Svg045";
import { Svg046 } from "../components/svgs/Svg046";
import { Svg047 } from "../components/svgs/Svg047";
import { Svg048 } from "../components/svgs/Svg048";
import { Svg049 } from "../components/svgs/Svg049";
import { Svg050 } from "../components/svgs/Svg050";
import { Svg051 } from "../components/svgs/Svg051";
import { Svg052 } from "../components/svgs/Svg052";
import { Svg053 } from "../components/svgs/Svg053";
import { Svg054 } from "../components/svgs/Svg054";
import { Svg055 } from "../components/svgs/Svg055";
import { Svg056 } from "../components/svgs/Svg056";
import { Svg057 } from "../components/svgs/Svg057";

import { Svg058 } from "../components/svgs/Svg058";
import { Svg059 } from "../components/svgs/Svg059";
import { Svg060 } from "../components/svgs/Svg060";
import { Svg061 } from "../components/svgs/Svg061";
import { Svg062 } from "../components/svgs/Svg062";
import { Svg063 } from "../components/svgs/Svg063";
import { Svg064 } from "../components/svgs/Svg064";
import ColorBlock from "../components/color-selector/ColorBlock";
import ColorSelector from "../components/color-selector/ColorSelector";
import CustomDropdown from "../components/theme-selector/CustomDropdown";

const fetcher = (url) => fetch(url).then((res) => res.json());

function handleDownloadSVG(component, filename) {
  // Render the React component into a string
  const svgString = ReactDOMServer.renderToString(component);

  // Create a Blob with the SVG code
  const svgBlob = new Blob([svgString], { type: "image/svg+xml" });

  // Create a download link
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(svgBlob);
  downloadLink.download = filename + ".svg";

  // Programmatically click the download link to trigger the download
  downloadLink.click();

  // Clean up by revoking the object URL
  URL.revokeObjectURL(downloadLink.href);
}

export default function Home() {
  const [state, setState] = useState({
    brand: "#833ab4",
    darkest: "#242424",
    dark: "#363636",
    mid: "#646464",
    light: "#e3e9f1",
    lightest: "#FFFFFF",
  });
  const [showingDropdown, setShowingDropdown] = useState("");
  const [showDownloadModal, setShowDownloadModal] = useState("");
  const [showCopyModal, setShowCopyModal] = useState("");
  const [mounted, setMounted] = useState(false);

  const [allPalettes, setAllPalettes] = useState(null);

  const { data: paletteData, error } = useSWR("/api/get-all-palettes", fetcher);

  const colorBlockNode = useRef();
  const colorSelectorNode = useRef();

  const handleClickOutside = (e) => {
    if (
      (colorBlockNode.current && colorBlockNode.current.contains(e.target)) ||
      (colorSelectorNode.current &&
        colorSelectorNode.current.contains(e.target))
    ) {
      // inside click
      console.log("clicked inside");
      return;
    }
    // console.log("clicked outside", e.target);
    setShowingDropdown("");
    // outside click
    // dispatch({
    //   type: ACTIONS.HEX_COLOR_SELECTION_COMPLETE,
    // });
    if (typeof window !== "undefined") {
      //  Update localStorage with state, but with isEditing turned to false
      let str = JSON.stringify(state);
      let newStr = str.replace(/true/g, "false");
      let newObj = JSON.parse(newStr);
      localStorage.setItem("colorHubState", JSON.stringify(newObj));
    } else return;
  };

  useEffect(() => {
    if (showingDropdown !== "") {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showingDropdown]);

  useEffect(() => {
    if (error) {
      // console.log(error);
    }
    if (paletteData) {
      const newPalettes = JSON.parse(paletteData);
      setAllPalettes(newPalettes);
    }
  }, [paletteData, error]);

  const svgData = [
    {
      title: "Elipse #001",
      filename: "elipse-001-svghub",
      component: <Svg001 state={state} />,
    },
    {
      title: "Elipse #002",
      filename: "elipse-002-svghub",
      component: <Svg002 state={state} />,
    },
    {
      title: "Elipse #003",
      filename: "elipse-004 svghub",
      component: <Svg003 state={state} />,
    },
    {
      title: "Elipse #004",
      filename: "elipse-004-svghub",
      component: <Svg004 state={state} />,
    },
    {
      title: "Elipse #005",
      filename: "elipse-005-svghub",
      component: <Svg005 state={state} />,
    },

    { title: "Elipse #006", component: <Svg006 state={state} /> },
    { title: "Elipse #007", component: <Svg007 state={state} /> },
    { title: "Elipse #008", component: <Svg008 state={state} /> },
    { title: "Elipse #009", component: <Svg009 state={state} /> },

    { title: "Elipse #010", component: <Svg010 state={state} /> },
    { title: "Elipse #011", component: <Svg011 state={state} /> },
    { title: "Elipse #012", component: <Svg012 state={state} /> },
    { title: "Elipse #013", component: <Svg013 state={state} /> },
    { title: "Elipse #014", component: <Svg014 state={state} /> },
    { title: "Elipse #015", component: <Svg015 state={state} /> },
    { title: "Elipse #016", component: <Svg016 state={state} /> },
    { title: "Elipse #017", component: <Svg017 state={state} /> },
    { title: "Elipse #018", component: <Svg018 state={state} /> },
    { title: "Elipse #019", component: <Svg019 state={state} /> },

    { title: "Elipse #021", component: <Svg021 state={state} /> },
    { title: "Elipse #022", component: <Svg022 state={state} /> },
    { title: "Elipse #023", component: <Svg023 state={state} /> },
    { title: "Elipse #024", component: <Svg024 state={state} /> },
    { title: "Elipse #025", component: <Svg025 state={state} /> },
    { title: "Elipse #026", component: <Svg026 state={state} /> },
    { title: "Elipse #027", component: <Svg027 state={state} /> },
    { title: "Elipse #028", component: <Svg028 state={state} /> },
    { title: "Elipse #029", component: <Svg029 state={state} /> },

    { title: "Elipse #030", component: <Svg030 state={state} /> },
    { title: "Elipse #031", component: <Svg031 state={state} /> },
    { title: "Elipse #032", component: <Svg032 state={state} /> },
    { title: "Elipse #033", component: <Svg033 state={state} /> },
    { title: "Elipse #034", component: <Svg034 state={state} /> },
    { title: "Elipse #035", component: <Svg035 state={state} /> },
    { title: "Elipse #036", component: <Svg036 state={state} /> },
    { title: "Elipse #037", component: <Svg037 state={state} /> },
    { title: "Elipse #038", component: <Svg038 state={state} /> },
    { title: "Elipse #039", component: <Svg039 state={state} /> },

    { title: "Elipse #040", component: <Svg040 state={state} /> },
    { title: "Elipse #041", component: <Svg041 state={state} /> },
    { title: "Elipse #042", component: <Svg042 state={state} /> },
    { title: "Elipse #043", component: <Svg043 state={state} /> },
    { title: "Elipse #044", component: <Svg044 state={state} /> },
    { title: "Elipse #045", component: <Svg045 state={state} /> },
    { title: "Elipse #046", component: <Svg046 state={state} /> },
    { title: "Elipse #047", component: <Svg047 state={state} /> },
    { title: "Elipse #048", component: <Svg048 state={state} /> },
    { title: "Elipse #049", component: <Svg049 state={state} /> },

    { title: "Elipse #050", component: <Svg050 state={state} /> },
    { title: "Elipse #051", component: <Svg051 state={state} /> },
    { title: "Elipse #052", component: <Svg052 state={state} /> },
    { title: "Elipse #053", component: <Svg053 state={state} /> },
    { title: "Elipse #054", component: <Svg054 state={state} /> },
    { title: "Elipse #055", component: <Svg055 state={state} /> },
    { title: "Elipse #056", component: <Svg056 state={state} /> },
    { title: "Elipse #057", component: <Svg057 state={state} /> },
    { title: "Elipse #058", component: <Svg058 state={state} /> },
    { title: "Elipse #059", component: <Svg059 state={state} /> },

    { title: "Elipse #060", component: <Svg060 state={state} /> },
    { title: "Elipse #061", component: <Svg061 state={state} /> },
    { title: "Elipse #062", component: <Svg062 state={state} /> },
    { title: "Elipse #063", component: <Svg063 state={state} /> },
    { title: "Elipse #064", component: <Svg064 state={state} /> },
  ];

  const SvgComponent = ({ svgContent }) => {
    useEffect(() => {
      // Initialize clipboard.js for the button inside this SVG component
      const clipboard = new ClipboardJS(".copy-button");

      // Destroy the clipboard instance when the component unmounts
      return () => {
        clipboard.destroy();
      };
    }, []);

    const handleCopyClick = (event) => {
      const svgContent =
        event.target.parentElement.parentElement.parentElement.querySelector(
          "svg"
        ).outerHTML;
      // Copy the SVG content to the clipboard
      navigator.clipboard.writeText(svgContent);

      setShowCopyModal(true);
    };

    return (
      <>
        {svgContent}
        <div className="hidden group-hover:flex absolute h-full w-full bg-darkest/20 items-center justify-center rounded-lg cursor-pointer">
          <button
            className="flex bg-white rounded-lg text-sm uppercase font-medium text-mid px-1.5 py-1 shadow-lg shadow-darkest/20"
            onClick={handleCopyClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-brand icon icon-tabler icon-tabler-copy"
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
              <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
              <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
            </svg>
          </button>
        </div>
      </>
    );
  };

  const SvgContainer = () => {
    return (
      <>
        {svgData.map((item, index) => (
          <div key={item + index} className="svg-item-box box relative gap-y-1">
            <div className="flex w-full h-full group relative">
              <SvgComponent key={index} svgContent={item.component} />
            </div>
            <div className="flex items-center pt-4 border-t border-light">
              <p className="text-xs">{item.title}</p>
              <button
                className="btn-xs bg-brand/10 ml-auto text-brand hover:text-darkest group"
                onClick={() => {
                  handleDownloadSVG(item.component, item.filename);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-brand group-hover:text-darkest icon icon-tabler icon-tabler-download"
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
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 11l5 5l5 -5"></path>
                  <path d="M12 4l0 12"></path>
                </svg>
                SVG
              </button>
            </div>
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !allPalettes) return;

  return (
    <div id="site-wrapper">
      <Head>
        <title>svghub</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className="container mx-auto z-20 w-full">
        <section id="landing-page">
          <section className="hero">
            <h1>Spice up your designs with simple SVGs</h1>
            <p className="text-xl text-dark/70">
              Our library has over 60 custom color SVG ornaments, scribbles and
              shapes.
            </p>
            <div className="flex items-center gap-x-2">
              <button className="btn-lg btn-brand">
                See Illustrations
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
              {/* <button className="btn-lg btn-white">
              See Icons
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button> */}
            </div>
          </section>
        </section>

        <section className="flex flex-col w-full pb-20 relative">
          <article className="hidden w-full h-full bg-darkest/30 fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-50 shadow-xl shadow-darkest/30 items-center justify-center">
            <div className="bg-white rounded-xl p-8 w-3/5 flex items-center justify-center gap-x-10">
              <div className="flex w-2/5">
                <h3>Copied to Clipboard!</h3>
              </div>
              <div className="w-3/5 h-96 bg-light flex overflow-hidden relative">
                <div className="absolute -top-12 left-10 scale-[170%] rotate-6 w-full h-full overflow-hidden">
                  <Svg057 state={state} />
                </div>
              </div>
            </div>
          </article>

          <aside className="sticky top-0 pt-4 h-[5.625rem] backdrop-blur-xl w-[calc(92%)] mx-auto z-40">
            <div className="box px-5 py-3 flex-row gap-4 bg-white items-center w-full overflow-visible shadow-lg shadow-darkest/[15%]">
              {/* <div className="absolute top-0 w-full h-12 backdrop-blur-sm"></div> */}
              <article className="flex flex-row items-center gap-3 justify-start grow">
                <p className="flex font-semibold text-dark opacity-80 uppercase tracking-wider text-xs">
                  Search
                </p>
                <div className="flex flex-col h-10 overflow-hidden w-44">
                  <input
                    type="text"
                    // value={query}
                    // onChange={handleInputChange}
                    className="bg-light/50 border border-light rounded-md text-sm focus:outline-none focus:border-mid/50 flex w-full px-2 text-mid"
                    placeholder="Type to search"
                  />
                </div>
              </article>

              <article className="ml-3 flex flex-row items-center gap-3 h-full justify-start grow">
                <p className="flex font-semibold text-dark opacity-80 uppercase tracking-wider text-xs">
                  Theme
                </p>
                {/* <select
                  name="palette"
                  id="paletteSelect"
                  onChange={(e) => {
                    let infoData = JSON.parse(e.target.value);
                    console.log(infoData);
                    setState({
                      brand: infoData.brand.hex,
                      darkest: infoData.darkest.hex,
                      dark: infoData.dark.hex,
                      mid: infoData.mid.hex,
                      light: infoData.light.hex,
                      lightest: infoData.lightest.hex,
                    });
                  }}
                  className={`bg-light/50 border border-light rounded-md text-sm focus:outline-none focus:border-mid/50 flex w-48 h-10 text-mid px-2`}
                >
                  <option
                    className="w-full"
                    value="Please select one"
                    defaultValue
                  >
                    Please select one
                  </option>
                  {allPalettes.map((item, index) => {
                    return (
                      <option
                        value={JSON.stringify(item)}
                        className="w-full flex"
                        key={item.paletteName}
                      >
                        {item.paletteName}
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ background: item.brand.hex }}
                        ></div>
                      </option>
                    );
                  })}
                </select> */}

                <CustomDropdown
                  state={state}
                  setState={setState}
                  options={allPalettes.map((item) => ({
                    label: item.paletteName,
                    value: JSON.stringify(item),
                  }))}
                />
              </article>

              <article className="buttons-wrapper flex gap-x-3 items-center justify-end grow">
                <p className="flex font-semibold text-dark opacity-80 uppercase tracking-wider text-xs">
                  Current Palette
                </p>
                <div className="flex relative gap-x-1">
                  {/* One */}
                  <article className="flex" ref={colorBlockNode}>
                    <ColorBlock
                      colorCategory={"brand"}
                      state={state}
                      showingDropdown={showingDropdown}
                      setShowingDropdown={setShowingDropdown}
                    />
                  </article>
                  {showingDropdown == "brand" ? (
                    <div className="absolute top-[4.5rem] left-0 w-56 bg-white p-3 rounded-lg shadow-lg shadow-darkest/[15%]">
                      <ColorSelector
                        colorCategory={"brand"}
                        state={state}
                        setState={setState}
                        key={"brand"}
                        ref={colorSelectorNode}
                      />
                    </div>
                  ) : null}

                  {/* Two */}
                  <article className="flex">
                    <ColorBlock
                      colorCategory={"darkest"}
                      state={state}
                      showingDropdown={showingDropdown}
                      setShowingDropdown={setShowingDropdown}
                    />
                    {showingDropdown == "darkest" ? (
                      <div className="absolute top-[4.5rem] left-0 w-56 bg-white p-3 rounded-lg shadow-lg shadow-darkest/[15%]">
                        <ColorSelector
                          colorCategory={"darkest"}
                          state={state}
                          setState={setState}
                          key={"darkest"}
                          ref={colorSelectorNode}
                        />
                      </div>
                    ) : null}
                  </article>

                  {/* Three */}
                  <article className="flex">
                    <ColorBlock
                      colorCategory={"dark"}
                      state={state}
                      showingDropdown={showingDropdown}
                      setShowingDropdown={setShowingDropdown}
                    />
                    {showingDropdown == "dark" ? (
                      <div className="absolute top-[4.5rem] left-0 w-56 bg-white p-3 rounded-lg shadow-lg shadow-darkest/[15%]">
                        <ColorSelector
                          colorCategory={"dark"}
                          state={state}
                          setState={setState}
                          key={"dark"}
                          ref={colorSelectorNode}
                        />
                      </div>
                    ) : null}
                  </article>

                  {/* Four */}
                  <article className="flex">
                    <ColorBlock
                      colorCategory={"mid"}
                      state={state}
                      showingDropdown={showingDropdown}
                      setShowingDropdown={setShowingDropdown}
                    />
                    {showingDropdown == "mid" ? (
                      <div className="absolute top-[4.5rem] left-0 w-56 bg-white p-3 rounded-lg shadow-lg shadow-darkest/[15%]">
                        <ColorSelector
                          colorCategory={"mid"}
                          colors={null}
                          state={state}
                          setState={setState}
                          key={"mid"}
                          num={null}
                          ref={colorSelectorNode}
                        />
                      </div>
                    ) : null}
                  </article>

                  {/* Five */}
                  <article className="flex">
                    <ColorBlock
                      colorCategory={"light"}
                      state={state}
                      showingDropdown={showingDropdown}
                      setShowingDropdown={setShowingDropdown}
                    />
                    {showingDropdown == "light" ? (
                      <div className="absolute top-[4.5rem] left-0 w-56 bg-white p-3 rounded-lg shadow-lg shadow-darkest/[15%]">
                        <ColorSelector
                          colorCategory={"light"}
                          colors={null}
                          state={state}
                          setState={setState}
                          key={"light"}
                          num={null}
                          ref={colorSelectorNode}
                        />
                      </div>
                    ) : null}
                  </article>

                  {/* Six */}
                  <article className="flex">
                    <ColorBlock
                      colorCategory={"lightest"}
                      state={state}
                      showingDropdown={showingDropdown}
                      setShowingDropdown={setShowingDropdown}
                    />
                    {showingDropdown == "lightest" ? (
                      <div className="absolute top-[4.5rem] left-0 w-56 bg-white p-3 rounded-lg shadow-lg shadow-darkest/[15%]">
                        <ColorSelector
                          colorCategory={"lightest"}
                          colors={null}
                          state={state}
                          setState={setState}
                          key={"lightest"}
                          num={null}
                          ref={colorSelectorNode}
                        />
                      </div>
                    ) : null}
                  </article>
                </div>
              </article>

              {/* <article className="grid grid-cols-6 ml-auto relative">
              <ColorBlock
                colorCategory={"darkest"}
                colors={null}
                num={null}
                state={state}
              />

              <ColorBlock
                colorCategory={"dark"}
                colors={null}
                num={null}
                state={state}
              />

              <ColorBlock
                colorCategory={"mid"}
                colors={null}
                num={null}
                state={state}
              />

              <ColorBlock
                colorCategory={"light"}
                colors={null}
                num={null}
                state={state}
              />

              <ColorBlock
                colorCategory={"lightest"}
                colors={null}
                num={null}
                state={state}
              />
            </article> */}
            </div>
          </aside>

          <div className="content w-[calc(88%)] mt-2 mx-auto">
            <div className="flex flex-col mt-8">
              {/* Scollbar */}
              <div className="grid grid-cols-5 gap-4">{SvgContainer()}</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div id="gradient-bg"></div>
    </div>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <LandingLayout>{page}</LandingLayout>;
// };
