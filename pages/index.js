import React, { useEffect, useContext, useRef, useState } from "react";

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
import { Svg065 } from "../components/svgs/Svg065";
import { Svg066 } from "../components/svgs/Svg066";
import { Svg067 } from "../components/svgs/Svg067";
import { Svg068 } from "../components/svgs/Svg068";
import { Svg069 } from "../components/svgs/Svg069";
import { Svg070 } from "../components/svgs/Svg070";
import { Svg071 } from "../components/svgs/Svg071";
import { Svg072 } from "../components/svgs/Svg072";
import { Svg073 } from "../components/svgs/Svg073";
import { Svg074 } from "../components/svgs/Svg074";
import { Svg075 } from "../components/svgs/Svg075";
import { Svg076 } from "../components/svgs/Svg076";
import { Svg077 } from "../components/svgs/Svg077";
import { Svg078 } from "../components/svgs/Svg078";
import { Svg079 } from "../components/svgs/Svg079";
import { Svg080 } from "../components/svgs/Svg080";
import { Svg081 } from "../components/svgs/Svg081";
import { Svg082 } from "../components/svgs/Svg082";
import { Svg083 } from "../components/svgs/Svg083";
import { Svg084 } from "../components/svgs/Svg084";
import { Svg085 } from "../components/svgs/Svg085";
import { Svg086 } from "../components/svgs/Svg086";
import { Svg087 } from "../components/svgs/Svg087";
import { Svg088 } from "../components/svgs/Svg088";
import { Svg089 } from "../components/svgs/Svg089";
import { Svg090 } from "../components/svgs/Svg090";
import { Svg091 } from "../components/svgs/Svg091";
import { Svg092 } from "../components/svgs/Svg092";
import { Svg093 } from "../components/svgs/Svg093";
import { Svg094 } from "../components/svgs/Svg094";
import { Svg095 } from "../components/svgs/Svg095";
import { Svg096 } from "../components/svgs/Svg096";
import { Svg097 } from "../components/svgs/Svg097";
import { Svg098 } from "../components/svgs/Svg098";
import { Svg099 } from "../components/svgs/Svg099";
import { Svg100 } from "../components/svgs/Svg100";
import { Svg101 } from "../components/svgs/Svg101";
import { Svg102 } from "../components/svgs/Svg102";
import { Svg103 } from "../components/svgs/Svg103";
import { Svg104 } from "../components/svgs/Svg104";
import { Svg105 } from "../components/svgs/Svg105";

import { Svg106 } from "../components/svgs/Svg106";
import { Svg107 } from "../components/svgs/Svg107";
import { Svg108 } from "../components/svgs/Svg108";
import { Svg109 } from "../components/svgs/Svg109";

import { Svg110 } from "../components/svgs/Svg110";
import { Svg111 } from "../components/svgs/Svg111";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import ReactDOMServer from "react-dom/server";
import ClipboardJS from "clipboard";
import { useTheme } from "next-themes";

import { Header } from "../components/structure/Header";
import { Footer } from "../components/structure/Footer";

import ColorBlock from "../components/color-selector/ColorBlock";
import ColorSelector from "../components/color-selector/ColorSelector";
import CustomDropdown from "../components/theme-selector/CustomDropdown";
import SquiggleLink from "../components/SquiggleLink";

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
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [state, setState] = useState({
    brand: "#77CBB9",
    darkest: "#252634",
    dark: "#4e4f66",
    mid: "#A5A6BC",
    light: "#d6d6e9",
    lightest: "#FFFFFF",
  });

  const SVG_DATA = [
    {
      title: "001",
      filename: "svghub-001",
      component: <Svg001 state={state} />,
      category: ["shapes"],
    },
    {
      title: "002",
      filename: "svghub-002",
      component: <Svg002 state={state} />,
      category: ["shapes"],
    },
    {
      title: "003",
      filename: "svghub-003",
      component: <Svg003 state={state} />,
      category: ["shapes"],
    },
    {
      title: "004",
      filename: "svghub-004",
      component: <Svg004 state={state} />,
      category: ["shapes"],
    },
    {
      title: "005",
      filename: "svghub-005",
      component: <Svg005 state={state} />,
      category: ["shapes"],
    },

    {
      title: "006",
      filename: "svghub-006",
      component: <Svg006 state={state} />,
      category: ["shapes", "scribbles"],
    },
    {
      title: "007",
      filename: "svghub-007",
      component: <Svg007 state={state} />,
      category: ["shapes"],
    },
    {
      title: "008",
      filename: "svghub-008",
      component: <Svg008 state={state} />,
      category: ["shapes", "scribbles"],
    },
    {
      title: "009",
      filename: "svghub-009",
      component: <Svg009 state={state} />,
      category: ["scribbles", "borders"],
    },
    {
      title: "010",
      filename: "svghub-010",
      component: <Svg010 state={state} />,
      category: ["scribbles"],
    },
    {
      title: "011",
      filename: "svghub-011",
      component: <Svg011 state={state} />,
      category: ["shapes"],
    },
    {
      title: "012",
      filename: "svghub-012",
      component: <Svg012 state={state} />,
      category: ["scribbles"],
    },
    {
      title: "013",
      filename: "svg-hub-013",
      component: <Svg013 state={state} />,
      category: ["shapes"],
    },
    {
      title: "014",
      filename: "svg-hub-014",
      component: <Svg014 state={state} />,
      category: ["shapes"],
    },
    {
      title: "015",
      filename: "svg-hub-015",
      component: <Svg015 state={state} />,
      category: ["shapes"],
    },
    {
      title: "016",
      filename: "svg-hub-016",
      component: <Svg016 state={state} />,
      category: ["shapes"],
    },
    {
      title: "017",
      filename: "svg-hub-017",
      component: <Svg017 state={state} />,
      category: ["shapes"],
    },
    {
      title: "018",
      filename: "svg-hub-018",
      component: <Svg018 state={state} />,
      category: ["shapes"],
    },
    {
      title: "019",
      filename: "svg-hub-019",
      component: <Svg019 state={state} />,
      category: ["shapes"],
    },

    {
      title: "021",
      filename: "svg-hub-021",
      component: <Svg021 state={state} />,
      category: ["arrows"],
    },
    {
      title: "022",
      filename: "svg-hub-022",
      component: <Svg022 state={state} />,
      category: ["lines"],
    },
    {
      title: "023",
      filename: "svg-hub-023",
      component: <Svg023 state={state} />,
      category: ["lines"],
    },
    {
      title: "024",
      filename: "svg-hub-024",
      component: <Svg024 state={state} />,
      category: ["lines"],
    },
    {
      title: "025",
      filename: "svg-hub-025",
      component: <Svg025 state={state} />,
      category: ["lines"],
    },
    {
      title: "026",
      filename: "svg-hub-026",
      component: <Svg026 state={state} />,
      category: ["lines"],
    },
    {
      title: "027",
      filename: "svg-hub-027",
      component: <Svg027 state={state} />,
      category: ["lines"],
    },
    {
      title: "028",
      filename: "svg-hub-028",
      component: <Svg028 state={state} />,
      category: ["lines"],
    },
    {
      title: "029",
      filename: "svg-hub-029",
      component: <Svg029 state={state} />,
      category: ["scribbles"],
    },
    {
      title: "030",
      filename: "svg-hub-030",
      component: <Svg030 state={state} />,
      category: ["arrows"],
    },
    {
      title: "031",
      filename: "svg-hub-031",
      component: <Svg031 state={state} />,
      category: ["shapes"],
    },
    {
      title: "032",
      filename: "svg-hub-032",
      component: <Svg032 state={state} />,
      category: ["shapes"],
    },
    {
      title: "033",
      filename: "svg-hub-033",
      component: <Svg033 state={state} />,
      category: ["shapes"],
    },
    {
      title: "034",
      filename: "svg-hub-034",
      component: <Svg034 state={state} />,
      category: ["shapes"],
    },
    {
      title: "035",
      filename: "svg-hub-035",
      component: <Svg035 state={state} />,
      category: ["shapes"],
    },
    {
      title: "036",
      filename: "svg-hub-036",
      component: <Svg036 state={state} />,
      category: ["shapes"],
    },
    {
      title: "037",
      filename: "svg-hub-037",
      component: <Svg037 state={state} />,
      category: ["shapes"],
    },
    {
      title: "038",
      filename: "svg-hub-038",
      component: <Svg038 state={state} />,
      category: ["borders", "scribbles"],
    },
    {
      title: "039",
      filename: "svg-hub-039",
      component: <Svg039 state={state} />,
      category: ["shapes"],
    },

    {
      title: "040",
      filename: "svg-hub-040",
      component: <Svg040 state={state} />,
      category: ["shapes"],
    },
    {
      title: "041",
      filename: "svg-hub-041",
      component: <Svg041 state={state} />,
      category: ["shapes"],
    },
    {
      title: "042",
      filename: "svg-hub-042",
      component: <Svg042 state={state} />,
      category: ["shapes"],
    },
    {
      title: "043",
      filename: "svg-hub-043",
      component: <Svg043 state={state} />,
      category: ["shapes"],
    },
    {
      title: "044",
      filename: "svg-hub-044",
      component: <Svg044 state={state} />,
    },
    {
      title: "045",
      filename: "svg-hub-045",
      component: <Svg045 state={state} />,
      category: ["shapes"],
    },
    {
      title: "046",
      filename: "svg-hub-046",
      component: <Svg046 state={state} />,
      category: ["lines"],
    },
    {
      title: "047",
      filename: "svg-hub-047",
      component: <Svg047 state={state} />,
      category: ["lines"],
    },
    {
      title: "048",
      filename: "svg-hub-048",
      component: <Svg048 state={state} />,
      category: ["lines"],
    },
    {
      title: "049",
      filename: "svg-hub-049",
      component: <Svg049 state={state} />,
      category: ["shapes"],
    },
    {
      title: "050",
      filename: "svg-hub-050",
      component: <Svg050 state={state} />,
      category: ["landscapes"],
    },
    {
      title: "051",
      filename: "svg-hub-051",
      component: <Svg051 state={state} />,
      category: ["landscapes"],
    },
    {
      title: "052",
      filename: "svg-hub-052",
      component: <Svg052 state={state} />,
      category: ["shapes"],
    },
    {
      title: "053",
      filename: "svg-hub-053",
      component: <Svg053 state={state} />,
      category: ["shapes"],
    },
    {
      title: "054",
      filename: "svg-hub-054",
      component: <Svg054 state={state} />,
      category: ["borders"],
    },
    {
      title: "055",
      filename: "svg-hub-055",
      component: <Svg055 state={state} />,
      category: ["borders"],
    },
    {
      title: "056",
      filename: "svg-hub-056",
      component: <Svg056 state={state} />,
      category: ["borders", "lines"],
    },
    {
      title: "057",
      filename: "svg-hub-057",
      component: <Svg057 state={state} />,
      category: ["scribbles"],
    },
    {
      title: "058",
      filename: "svg-hub-058",
      component: <Svg058 state={state} />,
      category: ["scribbles"],
    },
    {
      title: "059",
      filename: "svg-hub-059",
      component: <Svg059 state={state} />,
      category: ["shapes"],
    },

    {
      title: "060",
      filename: "svg-hub-060",
      component: <Svg060 state={state} />,
      category: ["shapes"],
    },
    {
      title: "061",
      filename: "svg-hub-061",
      component: <Svg061 state={state} />,
      category: ["scribbles", "lines"],
    },
    {
      title: "062",
      filename: "svg-hub-062",
      component: <Svg062 state={state} />,
      category: ["scribbles", "lines"],
    },
    {
      title: "063",
      filename: "svg-hub-063",
      component: <Svg063 state={state} />,
      category: ["scribbles"],
    },
    {
      title: "064",
      filename: "svg-hub-064",
      component: <Svg064 state={state} />,
      category: ["scribbles"],
    },
    {
      title: "065",
      filename: "svg-hub-065",
      component: <Svg065 state={state} />,
      category: ["shapes"],
    },
    {
      title: "066",
      filename: "svg-hub-066",
      component: <Svg066 state={state} />,
      category: ["arrows"],
    },
    {
      title: "067",
      filename: "svg-hub-067",
      component: <Svg067 state={state} />,
      category: ["arrows"],
    },
    {
      title: "068",
      filename: "svg-hub-068",
      component: <Svg068 state={state} />,
      category: ["arrows"],
    },
    {
      title: "069",
      filename: "svg-hub-069",
      component: <Svg069 state={state} />,
      category: ["arrows"],
    },
    {
      title: "070",
      filename: "svg-hub-070",
      component: <Svg070 state={state} />,
      category: ["arrows"],
    },
    {
      title: "071",
      filename: "svg-hub-071",
      component: <Svg071 state={state} />,
      category: ["arrows", "technology"],
    },
    {
      title: "072",
      filename: "svg-hub-072",
      component: <Svg072 state={state} />,
      category: ["arrows", "technology"],
    },
    {
      title: "073",
      filename: "svg-hub-073",
      component: <Svg073 state={state} />,
      category: ["arrows", "technology"],
    },
    {
      title: "074",
      filename: "svg-hub-074",
      component: <Svg074 state={state} />,
      category: ["technology"],
    },
    {
      title: "075",
      filename: "svg-hub-075",
      component: <Svg075 state={state} />,
      category: ["technology"],
    },
    {
      title: "076",
      filename: "svg-hub-076",
      component: <Svg076 state={state} />,
      category: ["arrows", "animated"],
    },
    {
      title: "077",
      filename: "svg-hub-077",
      component: <Svg077 state={state} />,
      category: ["loading", "animated"],
    },
    {
      title: "078",
      filename: "svg-hub-078",
      component: <Svg078 state={state} />,
      category: ["loading", "animated"],
    },
    {
      title: "079",
      filename: "svg-hub-079",
      component: <Svg079 state={state} />,
      category: ["symbols"],
    },
    {
      title: "080",
      filename: "svg-hub-080",
      component: <Svg080 state={state} />,
      category: ["symbols"],
    },
    {
      title: "081",
      filename: "svg-hub-081",
      component: <Svg081 state={state} />,
      category: ["symbols"],
    },
    {
      title: "082",
      filename: "svg-hub-082",
      component: <Svg082 state={state} />,
      category: ["objects"],
    },
    {
      title: "083",
      filename: "svg-hub-083",
      component: <Svg083 state={state} />,
      category: ["objects"],
    },
    {
      title: "084",
      filename: "svg-hub-084",
      component: <Svg084 state={state} />,
      category: ["objects"],
    },
    {
      title: "085",
      filename: "svg-hub-085",
      component: <Svg085 state={state} />,
      category: ["objects"],
    },
    {
      title: "086",
      filename: "svg-hub-086",
      component: <Svg086 state={state} />,
      category: ["people"],
    },
    {
      title: "087",
      filename: "svg-hub-087",
      component: <Svg087 state={state} />,
      category: ["symbols", "maths"],
    },
    {
      title: "088",
      filename: "svg-hub-088",
      component: <Svg088 state={state} />,
      category: ["objects", "weather"],
    },
    {
      title: "089",
      filename: "svg-hub-089",
      component: <Svg089 state={state} />,
      category: ["objects", "weather"],
    },
    {
      title: "090",
      filename: "svg-hub-090",
      component: <Svg090 state={state} />,
      category: ["objects", "weather"],
    },
    {
      title: "091",
      filename: "svg-hub-091",
      component: <Svg091 state={state} />,
      category: ["objects", "weather"],
    },
    {
      title: "092",
      filename: "svg-hub-092",
      component: <Svg092 state={state} />,
      category: ["arrows"],
    },
    {
      title: "093",
      filename: "svg-hub-093",
      component: <Svg093 state={state} />,
      category: ["lines"],
    },
    {
      title: "094",
      filename: "svg-hub-094",
      component: <Svg094 state={state} />,
      category: ["arrows"],
    },
    {
      title: "095",
      filename: "svg-hub-095",
      component: <Svg095 state={state} />,
      category: ["arrows"],
    },
    {
      title: "096",
      filename: "svg-hub-096",
      component: <Svg096 state={state} />,
      category: ["objects"],
    },
    {
      title: "097",
      filename: "svg-hub-097",
      component: <Svg097 state={state} />,
      category: ["objects", "gaming"],
    },
    {
      title: "098",
      filename: "svg-hub-098",
      component: <Svg098 state={state} />,
      category: ["smybols"],
    },
    {
      title: "099",
      filename: "svg-hub-099",
      component: <Svg099 state={state} />,
      category: ["objects"],
    },
    {
      title: "100",
      filename: "svg-hub-100",
      component: <Svg100 state={state} />,
      category: ["technology"],
    },
    {
      title: "101",
      filename: "svg-hub-101",
      component: <Svg101 state={state} />,
      category: ["technology"],
    },
    {
      title: "102",
      filename: "svg-hub-102",
      component: <Svg102 state={state} />,
      category: ["technology"],
    },
    {
      title: "103",
      filename: "svg-hub-103",
      component: <Svg103 state={state} />,
      category: ["technology"],
    },
    {
      title: "104",
      filename: "svg-hub-104",
      component: <Svg104 state={state} />,
      category: ["scribbles", "lines"],
    },
    {
      title: "105",
      filename: "svg-hub-105",
      component: <Svg105 state={state} />,
      category: ["scribbles", "lines"],
    },
    {
      title: "106",
      filename: "svg-hub-106",
      component: <Svg106 state={state} />,
      category: ["objects"],
    },
    {
      title: "107",
      filename: "svg-hub-107",
      component: <Svg107 state={state} />,
      category: ["objects"],
    },
    {
      title: "108",
      filename: "svg-hub-108",
      component: <Svg108 state={state} />,
      category: ["objects", "weather"],
    },
    {
      title: "109",
      filename: "svg-hub-109",
      component: <Svg109 state={state} />,
      category: ["scribbles", "lines"],
    },
    {
      title: "110",
      filename: "svg-hub-110",
      component: <Svg110 state={state} />,
      category: ["lines", "scribbles"],
    },
    {
      title: "111",
      filename: "svg-hub-111",
      component: <Svg111 state={state} />,
      category: ["lines", "scribbles"],
    },
  ];

  const [showingDropdown, setShowingDropdown] = useState("");
  const [showDownloadModal, setShowDownloadModal] = useState("");
  const [showCopyModal, setShowCopyModal] = useState("");
  const [loadingCopy, setLoadingCopy] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(["all"]);
  const [allPalettes, setAllPalettes] = useState(null);
  const { data: paletteData, error } = useSWR("/api/get-all-palettes", fetcher);

  const handleFilterClick = (category) => {
    // Toggle the "all" filter when clicked
    if (category === "all") {
      setSelectedFilters(["all"]);
    } else {
      // Check if the category is already selected
      if (selectedFilters.includes(category)) {
        // Remove the category if already selected
        setSelectedFilters([category]);
      } else {
        // Add the category if not selected
        setSelectedFilters([category]);
      }
    }
  };

  function generateCategories(data) {
    const categories = [];

    data.forEach((icon) => {
      if (icon.category && Array.isArray(icon.category)) {
        icon.category.forEach((category) => {
          if (!categories.includes(category)) {
            categories.push(category);
          }
        });
      }
    });

    return categories;
  }

  const iconCategories = generateCategories(SVG_DATA);

  const colorBlockNode = useRef();
  const colorSelectorNode = useRef();

  useEffect(() => {
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
      setShowingDropdown(false);

      if (typeof window !== "undefined") {
        //  Update localStorage with state, but with isEditing turned to false
        let str = JSON.stringify(state);
        let newStr = str.replace(/true/g, "false");
        let newObj = JSON.parse(newStr);
        localStorage.setItem("svgHubState", JSON.stringify(newObj));
      } else return;
    };

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

  const SvgComponent = ({ svgContent }) => {
    useEffect(() => {
      // Initialize clipboard.js for the button inside this SVG component
      const clipboard = new ClipboardJS(".copy-button");

      // Destroy the clipboard instance when the component unmounts
      return () => {
        clipboard.destroy();
      };
    }, []);

    const handleHoveredCopyClick = (event) => {
      setLoadingCopy(true);
      const svgContent =
        event.target.parentElement.parentElement.parentElement.querySelector(
          "svg"
        ).outerHTML;
      // Copy the SVG content to the clipboard
      navigator.clipboard.writeText(svgContent);
      setLoadingCopy(false);
      setShowCopyModal(true);
    };

    return (
      <>
        {svgContent}
        <button
          onClick={handleHoveredCopyClick}
          className="hidden group-hover:flex absolute h-full w-full bg-darkest/20 items-center justify-center rounded-lg cursor-pointer top-0 left-0"
        >
          <div className="flex bg-white rounded-lg text-sm uppercase font-medium text-mid px-1.5 py-1 shadow-lg shadow-[#000000/7]">
            {loadingCopy ? (
              "Loading"
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-dark icon icon-tabler icon-tabler-copy pointer-events-none"
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
            )}
          </div>
        </button>
      </>
    );
  };

  const LandingSvgRotator = () => {
    const [currentSvgIndex, setCurrentSvgIndex] = useState(null);

    useEffect(() => {
      let timer;
      let currentIndex = 0;

      const rotateSvg = () => {
        setCurrentSvgIndex(currentIndex);
        currentIndex = getRandomIndex(currentIndex); // Get a random index different from the current index
      };

      // Rotate through SVGs every 2 seconds
      timer = setInterval(rotateSvg, 1500);

      // After displaying first 3 SVGs, pause for 2 seconds
      setTimeout(() => {
        clearInterval(timer);
        timer = setInterval(rotateSvg, 1000);
      }, 2500); // Wait 3 seconds (2 seconds pause + 1 second display)

      return () => {
        clearInterval(timer);
      };
    }, []);

    const getRandomIndex = (currentIndex) => {
      const svgCount = SVG_DATA.length;
      let randomIndex = Math.floor(Math.random() * svgCount);

      // Keep generating a new random index until it's different from the current index
      while (randomIndex === currentIndex || randomIndex === 53) {
        randomIndex = Math.floor(Math.random() * svgCount);
      }

      return randomIndex;
    };

    const renderLandingSvgRotator = () => {
      if (currentSvgIndex !== null) {
        return (
          <>
            {SVG_DATA.map((item, index) => {
              if (index !== 53) {
                return (
                  <div
                    key={index}
                    className={`svg-item w-[100%] mx-auto my-auto aspect-square ${
                      currentSvgIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {item.component}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </>
        );
      } else {
        return null; // Add a loading state or fallback content if needed
      }
    };

    return renderLandingSvgRotator();
  };

  const SvgContainer = () => {
    const handleCopyClick = (event) => {
      setLoadingCopy(true);
      const svgContent = event.target
        .closest(".svg-item-box")
        .querySelector("svg").outerHTML;
      // Copy the SVG content to the clipboard
      navigator.clipboard.writeText(svgContent);
      setLoadingCopy(false);
      setShowCopyModal(true);
    };

    return (
      <>
        {SVG_DATA.filter((item) => {
          return (
            selectedFilters.includes("all") ||
            (item.category &&
              selectedFilters.some((filter) => item.category.includes(filter)))
          );
        }).map((item, index) => (
          <div
            key={item + index}
            className="svg-item-box box relative gap-y-1 min-h-72"
          >
            <div className="aspect-square group relative max-w-[15rem]">
              <SvgComponent key={index} svgContent={item.component} />
            </div>

            <div
              style={{
                borderColor: currentTheme == "light" ? state.light : state.dark,
              }}
              className="flex mx-auto items-center pt-4 border-t mt-3 gap-x-2 w-full justify-center"
            >
              <button
                className="btn-xs bg-light text-dark hover:text-darkest group gap-x-1"
                onClick={(e) => {
                  handleCopyClick(e);
                  setShowCopyModal(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 icon icon-tabler icon-tabler-copy"
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
              <button
                className="btn-xs bg-light text-dark hover:text-darkest group gap-x-1"
                onClick={() => {
                  handleDownloadSVG(item.component, item.filename);
                  setShowDownloadModal(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 icon icon-tabler icon-tabler-download"
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
              </button>
            </div>
          </div>
        ))}
      </>
    );
  };

  function hexToRgb(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }

  function handleCloseCopyModal() {
    setShowCopyModal(false);
  }

  function handleCloseDownloadModal() {
    setShowDownloadModal(false);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !allPalettes) return;

  return (
    <div
      id="site-wrapper"
      style={{
        background:
          currentTheme == "light"
            ? `rgba(${hexToRgb(state.brand)}, 0.15)`
            : `rgba(${hexToRgb(state.darkest)}, 1)`,
      }}
    >
      <Head>
        <title>
          SVG Hub | Custom-color elements ready to paste into your project
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="SVG Hub | Custom-color elements ready to paste into your project"
        />
        <meta name="author" content="Dan Cranney" />
        <meta property="og:site_name" content="SVG Hub" />
        <meta property="og:site" content="http://www.svghub.vercel.app" />
        <meta property="og:title" content="SVG Hub" />
        <meta
          property="og:description"
          content="SVG Hub | Custom-color elements ready to paste into your project"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/danielcranney/repo-storage/main/svghub-social-image.png"
        />
        <meta property="og:url" content="http://www.svghub.vercel.app" />
        <meta property="twitter:title" content="SVG Hub" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/danielcranney/repo-storage/main/svghub-social-image.png"
        />
        <meta
          property="twitter:description"
          content="SVG Hub | Custom-color elements ready to paste into your project"
        />
        <meta property="twitter:creator" content="@danielcranney" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <div
        className="flex h-14 w-full"
        style={{ backgroundColor: state.brand }}
      >
        <div
          className="container mx-auto flex items-center text-sm font-medium"
          style={{ color: state.darkest }}
        >
          Find the perfect palette for your next project at&nbsp;
          <a
            href="http://www.colorhub.app"
            target="_blank"
            className="underline flex text-sm"
            style={{ color: state.darkest }}
            rel="noreferrer"
          >
            colorhub.app
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 icon icon-tabler icon-tabler-external-link"
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
              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
              <path d="M11 13l9 -9"></path>
              <path d="M15 4h5v5"></path>
            </svg>
          </a>
        </div>
      </div>

      <Header state={state} />

      <main className="mx-auto z-20 w-full">
        {/* ------ TOP SECTION ------ */}
        <div className="top-section-wrapper container mx-auto">
          <section id="landing-page">
            <section className="relative flex-col md:flex-row rounded-2xl flex lg:container gap-y-4 mx-auto h-auto md:h-[calc(100vh_-_8rem)] items-center justify-center text-center w-full">
              <article className="flex flex-col text-center md:text-left w-full md:w-[calc(100%-270px)] lg:w-[calc(100%-400px)] justify-center gap-y-4 h-[calc(50vh)] md:h-auto">
                <h1 className="leading-tight text-dark">
                  <span
                  // style={{
                  //   backgroundImage: "url(/svgs/squiggle.svg)",
                  // }}
                  >
                    Squiggles
                  </span>
                  , scribbles, shapes and... other stuff.
                </h1>
                <p className="text-xl text-darkest/60">
                  A library of over 70 custom-color elements ready to paste into
                  your project.
                </p>
              </article>

              <article className="flex aspect-square md:aspect-auto w-[300px] h-[300px] md:w-[270px] md:h-[270px] lg:w-[400px] lg:h-[400px] relative items-start">
                <div
                  className="flex w-[82%] h-[82%] mx-auto my-auto"
                  style={{ animation: "bobbleAndRotate 3s infinite" }}
                >
                  <LandingSvgRotator />
                </div>
                <div
                  className="absolute top-0 left-0 w-[100%] h-[100%] z-50 block items-center"
                  style={{ animation: "bobble 2.5s infinite" }}
                >
                  <Svg055 state={state} />
                </div>
              </article>
            </section>
          </section>
        </div>

        <section className="flex flex-col w-full pb-20 relative mt-16 lg:mt-0">
          <article
            className={`${showCopyModal ? "" : "hidden"}
          flex flex-col w-full h-full bg-darkest/80 fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-50 shadow-xl shadow-darkest/30 items-center justify-center`}
          >
            <div className="flex w-[calc(85%)] lg:w-3/5 mx-auto mb-2">
              <button
                onClick={handleCloseCopyModal}
                style={{ background: state.brand, color: state.darkest }}
                className="ml-auto w-10 h-10 flex items-center justify-center rounded-lg shadow-xl shadow-darkest/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 icon icon-tabler icon-tabler-x"
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
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div
              style={{
                background:
                  currentTheme == "light" ? state.lightest : state.darkest,
              }}
              className="rounded-xl p-8 w-[calc(85%)] lg:w-3/5 flex items-center justify-center gap-x-10"
            >
              <div className="flex w-full lg:w-1/2 flex-col gap-y-4 w-ful">
                <div
                  style={{ background: state.brand, color: state.darkest }}
                  className="flex w-16 h-16 rounded-full items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 icon icon-tabler icon-tabler-clipboard-check"
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
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                    <path d="M9 14l2 2l4 -4"></path>
                  </svg>
                </div>
                <h3>Copied to Clipboard</h3>
                <p>
                  Your SVG can be used freely on{" "}
                  <strong>personal or commercial projects</strong> under{" "}
                  <a
                    href="https://creativecommons.org/licenses/by-nc/4.0/deed.en"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: state.brand }}
                  >
                    Creative Commons (CC BY-NC 4.0)
                  </a>
                  .
                </p>
                <p>
                  Please note you are not permitted to use these icons in any
                  derivative work, personal or commercial.
                </p>
                <p>
                  <a href="https://github.com/sponsors/danielcranney">
                    Please consider sponsoring me
                  </a>{" "}
                  with $5 or more to support my work.
                </p>
                <a
                  href="http://www.twitter.com/danielcranney"
                  rel="noreferrer"
                  className="btn-md self-start shadow-lg shadow-dark/5 text-darkest/80 gap-x-1"
                  style={{ background: state.brand }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 icon icon-tabler icon-tabler-brand-github"
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
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                  Sponsor me
                </a>
              </div>
              <div
                style={{ background: state.dark }}
                className="hidden lg:flex w-full lg:w-1/2 h-96 overflow-hidden relative"
              >
                <div className="absolute -top-12 left-10 scale-[170%] rotate-6 w-full h-full overflow-hidden">
                  <Svg057 state={state} />
                </div>
              </div>
            </div>
          </article>

          <article
            className={`${showDownloadModal ? "" : "hidden"}
          flex flex-col w-full h-full bg-darkest/80 fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-50 shadow-xl shadow-darkest/30 items-center justify-center`}
          >
            <div className="flex w-[calc(85%)] lg:w-3/5 mx-auto mb-2">
              <button
                onClick={handleCloseDownloadModal}
                style={{ background: state.brand, color: state.darkest }}
                className="ml-auto w-10 h-10 flex items-center justify-center rounded-lg shadow-xl shadow-darkest/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 icon icon-tabler icon-tabler-x"
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
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div
              style={{
                backgroundColor:
                  currentTheme == "light" ? state.lightest : state.darkest,
              }}
              className="rounded-xl p-8 w-[calc(85%)] lg:w-3/5 flex items-center justify-center gap-x-10"
            >
              <div className="flex w-full lg:w-1/2 flex-col gap-y-4">
                <div
                  style={{ background: state.brand, color: state.darkest }}
                  className="flex w-16 h-16 rounded-full items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 icon icon-tabler icon-tabler-download"
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
                </div>
                <h3>Download Started...</h3>
                <p>
                  Your SVG can be used freely on{" "}
                  <strong>personal or commercial projects</strong> under{" "}
                  <a
                    href="https://creativecommons.org/licenses/by-nc/4.0/deed.en"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: state.brand }}
                  >
                    Creative Commons (CC BY-NC 4.0)
                  </a>
                  .
                </p>
                <p>
                  Please note you are not permitted to use these icons in any
                  derivative work, personal or commercial.
                </p>
                <p>
                  <a href="https://github.com/sponsors/danielcranney">
                    Please consider sponsoring me
                  </a>{" "}
                  with $5 or more to support my work.
                </p>
                <a
                  href="http://www.twitter.com/danielcranney"
                  rel="noreferrer"
                  className="btn-md self-start shadow-lg shadow-dark/5 text-darkest/80 gap-x-1"
                  style={{ background: state.brand }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 icon icon-tabler icon-tabler-brand-github"
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
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                  Sponsor me
                </a>
              </div>
              <div
                style={{ background: state.dark }}
                className="hidden lg:w-1/2 h-96 lg:flex overflow-hidden relative"
              >
                <div className="absolute -top-12 left-10 scale-[170%] rotate-6 w-full h-full overflow-hidden">
                  <Svg048 state={state} />
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="sidebar-and-icons flex w-full gap-0 container mx-auto">
          <div className="flex w-full bg-white dark:bg-white/[4%] overflow-hidden rounded-xl">
            <div
              className="hidden lg:flex lg:w-1/4 sticky top-0 bottom-6 h-full flex-col shadow-lg shadow-[#000000/5] self-start lg:border-r"
              style={{
                borderColor: currentTheme == "light" ? state.light : state.dark,
              }}
            >
              <div
                className="flex items-center h-[4.5rem] w-full border-b"
                style={{
                  borderColor:
                    currentTheme == "light" ? state.light : state.dark,
                }}
              >
                <h3 className="flex font-bold tracking-wide uppercase text-sm px-4">
                  Categories
                </h3>
              </div>
              <ul className="mt-1.5 flex flex-col mb-2">
                {["all", ...iconCategories].map((category) => (
                  <li
                    key={category}
                    style={{
                      color:
                        selectedFilters.includes(category) &&
                        currentTheme == "light"
                          ? state.darkest
                          : selectedFilters.includes(category) &&
                            currentTheme == "dark"
                          ? state.lightest
                          : !selectedFilters.includes(category) &&
                            currentTheme == "light"
                          ? state.dark
                          : !selectedFilters.includes(category) &&
                            currentTheme == "dark"
                          ? state.light
                          : state.dark,
                    }}
                    className={`flex items-center gap-x-1.5 text-sm py-2 cursor-pointer transition-all duration-150 ease-in-out ${
                      selectedFilters.includes(category)
                        ? "px-4"
                        : "opacity-70 hover:opacity-100 px-4"
                    }`}
                    onClick={() => handleFilterClick(category)}
                  >
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{
                        borderColor: selectedFilters.includes(category)
                          ? state.brand
                          : !selectedFilters.includes(category) &&
                            currentTheme == "light"
                          ? state.darkest
                          : state.light,
                        backgroundColor: selectedFilters.includes(category)
                          ? state.brand
                          : "",
                      }}
                    ></div>
                    {category === "all"
                      ? "All"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </li>
                ))}
              </ul>
            </div>

            <article className="w-full lg:w-3/4 flex flex-col">
              {/* ----- CUSTOMISER ----- */}
              <aside
                className="sticky top-0 items-center flex h-auto lg:h-[4.5rem] w-full mx-auto z-40 border-b px-4 py-4 lg:py-0"
                style={{
                  borderColor:
                    currentTheme == "light" ? state.light : state.dark,
                }}
              >
                <div
                  style={{
                    background:
                      currentTheme == "light" ? state.lightest : state.darkest,
                  }}
                  className="flex w-full shadow-lg shadow-[#000000/7]"
                >
                  <article
                    style={{
                      background: currentTheme == "light" ? state.lightest : ``,
                      borderColor:
                        currentTheme == "light" ? state.light : state.dark,
                    }}
                    className="w-full h-full flex flex-col lg:flex-row gap-4 bg-white dark:bg-white/[4%] items-center justify-center gap-x-6"
                  >
                    <article className="w-full lg:w-1/2 flex flex-row items-center gap-3 h-full justify-start">
                      <p className="flex font-semibold opacity-80 uppercase tracking-wider text-xs">
                        Preset
                      </p>

                      <CustomDropdown
                        state={state}
                        setState={setState}
                        options={allPalettes.map((item) => ({
                          label: item.paletteName,
                          value: JSON.stringify(item),
                        }))}
                      />
                    </article>

                    <article className="w-full lg:w-1/2 buttons-wrapper flex gap-x-3 items-center justify-start lg:justify-end">
                      <p className="flex font-semibold text-dark dark:text-lightest opacity-80 uppercase tracking-wider text-xs">
                        Edit Palette
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
                          <div
                            style={{
                              background:
                                currentTheme == "light"
                                  ? state.lightest
                                  : state.darkest,
                            }}
                            className="absolute top-[4.5rem] left-0 w-56 rounded-lg shadow-lg shadow-[#000000/7]"
                          >
                            <div
                              style={{
                                background:
                                  currentTheme == "light"
                                    ? `rgba(${hexToRgb(state.light)}, 0.10)`
                                    : `rgba(${hexToRgb(state.dark)}, 0.20)`,
                              }}
                              className="flex w-full h-full"
                            >
                              <ColorSelector
                                colorCategory={"brand"}
                                state={state}
                                setState={setState}
                                key={"brand"}
                                ref={colorSelectorNode}
                              />
                            </div>
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
                            <div
                              style={{
                                background:
                                  currentTheme == "light"
                                    ? state.lightest
                                    : state.darkest,
                              }}
                              className="absolute top-[4.5rem] left-0 w-56 rounded-lg shadow-lg shadow-[#000000/7]"
                            >
                              <div
                                style={{
                                  background:
                                    currentTheme == "light"
                                      ? `rgba(${hexToRgb(state.light)}, 0.10)`
                                      : `rgba(${hexToRgb(state.dark)}, 0.20)`,
                                }}
                                className="p-3 flex w-full h-full"
                              >
                                <ColorSelector
                                  colorCategory={"darkest"}
                                  state={state}
                                  setState={setState}
                                  key={"darkest"}
                                  ref={colorSelectorNode}
                                />
                              </div>
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
                            <div
                              style={{
                                background:
                                  currentTheme == "light"
                                    ? state.lightest
                                    : state.darkest,
                              }}
                              className="absolute top-[4.5rem] left-0 w-56 rounded-lg shadow-lg shadow-[#000000/7]"
                            >
                              <div
                                style={{
                                  background:
                                    currentTheme == "light"
                                      ? `rgba(${hexToRgb(state.light)}, 0.10)`
                                      : `rgba(${hexToRgb(state.dark)}, 0.20)`,
                                }}
                                className="p-3 flex w-full h-full"
                              >
                                <ColorSelector
                                  colorCategory={"dark"}
                                  state={state}
                                  setState={setState}
                                  key={"dark"}
                                  ref={colorSelectorNode}
                                />
                              </div>
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
                            <div
                              style={{
                                background:
                                  currentTheme == "light"
                                    ? state.lightest
                                    : state.darkest,
                              }}
                              className="absolute top-[4.5rem] left-0 w-56 rounded-lg shadow-lg shadow-[#000000/7]"
                            >
                              <div
                                style={{
                                  background:
                                    currentTheme == "light"
                                      ? `rgba(${hexToRgb(state.light)}, 0.10)`
                                      : `rgba(${hexToRgb(state.dark)}, 0.20)`,
                                }}
                                className="p-3 flex w-full h-full"
                              >
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
                            <div
                              style={{
                                background:
                                  currentTheme == "light"
                                    ? state.lightest
                                    : state.darkest,
                              }}
                              className="absolute top-[4.5rem] left-0 w-56 rounded-lg shadow-lg shadow-[#000000/7]"
                            >
                              <div
                                style={{
                                  background:
                                    currentTheme == "light"
                                      ? `rgba(${hexToRgb(state.light)}, 0.10)`
                                      : `rgba(${hexToRgb(state.dark)}, 0.20)`,
                                }}
                                className="p-3 flex w-full h-full"
                              >
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
                            <div
                              style={{
                                background:
                                  currentTheme == "light"
                                    ? state.lightest
                                    : state.darkest,
                              }}
                              className="absolute top-[4.5rem] left-0 w-56 rounded-lg shadow-lg shadow-[#000000/7]"
                            >
                              <div
                                style={{
                                  background:
                                    currentTheme == "light"
                                      ? `rgba(${hexToRgb(state.light)}, 0.10)`
                                      : `rgba(${hexToRgb(state.dark)}, 0.20)`,
                                }}
                                className="p-3 flex w-full h-full"
                              >
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
                            </div>
                          ) : null}
                        </article>
                      </div>
                    </article>
                  </article>
                </div>
              </aside>

              {/* ----- MAIN SECTION ----- */}
              <div className="content w-[calc(94%)] lg:w-full mx-auto">
                <div className="flex flex-col">
                  {/* Container Display */}
                  <div
                    className="grid grid-cols-2 lg:grid-cols-5 gap-px"
                    style={{
                      backgroundColor:
                        currentTheme == "light" ? state.light : state.darkest,
                    }}
                  >
                    {SvgContainer()}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="ads-section container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-4 mt-6">
          <a
            href="http://www.colorhub.app"
            target="_blank"
            rel="noreferrer"
            className="relative w-full h-full rounded-xl flex flex-col justify-center p-5 text-lightest gap-y-3 items-start cursor-pointer"
            style={{
              background: `linear-gradient(to bottom, ${state.dark}, ${state.darkest}`,
            }}
          >
            <div className="absolute right-3 top-3 px-1.5 py-1 text-xs font-medium">
              Ad
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 71.81 70.04"
              className="w-7 h-7"
            >
              <g style={{ fill: state.brand }}>
                <circle cx="34.5" cy="33.88" r="23"></circle>
                <path
                  fillRule="evenodd"
                  d="M21.13 28.4c.35.15.18.19.68.36l-.05.1c-.27-.08-.37-.31-.52-.25-.24-.11-.11-.15-.11-.22zm-.96-1.02c.18.1.07.13.31.23.15.16-.34-.08-.4-.08-.17 0 .16.35-.47.04 0-.2.26-.22.56-.19zm1.32 1.16c.03-.06.05-.12.09-.18.53.23.64.51-.09.18zm-1.28-3.36c.18.24.3.28.03.29-.03.08.54.36.61.46l-.27.36c-.22.04-.18-.19-.09-.2-.4-.21-.41-.05-.92-.35-.03.09.55.34.62.45 0 .3-.72-.04-1.23-.17.16.24.07.37-.37.26-.26-.38.6-.33.89-.41-.19-.07-.23 0-.56-.19.14-.13.23-.32.88.04.54 0-.29-.67-.1-.84 0 0 .54.3.38.12-.46-.3-.41-.06-1.04-.53.44.08-.03-.28.04-.39.05-.08.41.08.33-.15.15.11.09.13.1.19.33.42 1.47 1.1 1.4 1.35-.13-.21-.84-.63-1.03-.87-.19-.12-.19-.01-.25.02.37.27.44.35 1.08.79.02.13-.28-.07-.54-.23zm1.51 2.59c.61.27.55.41.25.33-.38-.18-.32-.26-.25-.33zm.45-.74l-.05.06c.07.18-.33-.04-.44-.01-.3.25-.04-.08-.28-.29.28.1.3-.03.77.24zm.03.68c.03.11-.17.03-.25.05-.29-.2-.01-.24-.78-.57.12-.04.92.44 1.03.52zm-1.98-.41c-.14.07-.55-.25-.3-.24-.45-.17-.11.3-.54.16-.32-.26.16-.11 0-.36.42.18.4.01.94.29.13.15-.6-.12-.09.15zm-.07.96c-.79-.25-.61-.64.12-.27-.23.03-.26.09-.12.27zm10.76 26.16c-.17.62.13.33.22.44-.1.34-.38.51-.29-.06-.11 0-.15.63-.26.73-.08-.37-.34-.05-.44-.29-.02-.04.12-.49.12-.56-.01-.13-.43.02-.15-.44.26-.12.19.36.22.66.15.01.3-.05.42-.3.07-.81-.19-.04-.35-.07 0-.93-1.02-.33-1.25-.99.43 0 .88.12 1.33.26.45.11.9.27 1.28.43-.22.53-.63-.32-.85.21zm2.06-2.13c.13-.83.3-.23.45-.53.09-.19.06-.13.2.02.02 1.39-.61.49-.65.5zm-.4-.63c-.05.15-.14.5-.06.57.09.13.16-.34.09-.37.15-.56.22.25.4.05l-.03.38c-.4.13-.85.65-1.18.56-.17-.06-.11-.62-.39-.28-.02-.26.03-.3.1-.57.04-.53-.17-.49-.29-.65.09-.75.36.3.36-.31.19-.58.05.59.07.8.17-.27.07.37.09.41.04.09.17-.08.2.05.02.06-.07.57.05.4.06-.03.05-.22.05-.38 0-.48-.11-.05-.2-.44 0-.03.12-.32.11-.37-.06-.19-.33.26-.18-.43.38.13.55.4.82.58zm-.17.55c-.09-.1-.02-.57-.2-.44-.14.55.11.87.2.44zm-13.07-24.9c-.08.17-.8-.14-.72.15-.52-.36-.43-.47.17-.34-.39-.27-.62-.63.05-.45.45.08-.21.04-.12.21 0 .11.42.29.63.43zm14.71 23.96c.19-.11.43.94.12.98.19-.63-.17-.32-.12-.98zm-.46 1.29l.26.03c.06.6-.38.55-.26-.03zM21.17 28.81l.05-.11.72.28-.05.1c-.33-.19-.23-.08-.72-.28zm10.01 21.998.13-.49.29-.35.41-.89.3.14.72-.02.91.41-.34.42-.59-.21-.89-.01-.16.11-.28.5-.43.5zm-7.55-11.27c.93-.36.64-.02.72.22-.56.29-.18-.09-.29-.14-.11-.06-.43.03-.43-.08zm-2.31-14.18c-.09.17.73.39.57.52.18.08.22.03.53.25.1.15-.18.04-.28.06-.1.02.07.32-.45-.03 0-.11.12-.12.29-.07.07-.06-.55-.35-.49-.31-.3-.23.1-.17-.57-.52.51.09-.2-.43.23-.33.11.11.23.21.45.36-.12 0 .06.31-.28.07zm9.19 24.43c.2-.5.27-.27.26.09.04 0 .09-.22.13-.36.01.42.24-.1.34-.08.05.02.24-.17.09.42-.13-.29-.4.44-.52.43-.15-.01-.1-.53-.3-.51zm23.42-4.72c.72.31.78 1.14-.12.51.07-.1.49.21.47-.01.04-.15-.49-.21-.57-.19-.21.19.82.68.56.88-.53-.39-1-.94-.86-1.12.09-.12.42.08.51-.06zm-3.72 3.57c-.04.16.07.61-.53-.02.14-.02.47.31.49.06-.44-.48-.35 0-.82-.54.18-.04.95.12.33-.32-.32-.41.28-.17.63.18 0 .1-.19.06-.17.17.01.06.24.29.24.3 0 .1-.15.09-.17.17zm2.53 1.01c.19.44-.45.54-.58.84-.17-.29-.34-.57-.88-1.02 0-.29.51.34.79.56.26 0-.23-.32-.33-.48-.06-.11-.05-.25.09-.09-.19-.22-.38-.37-.61-.47-.11-.05.07.17.1.17-.12-.02-.82-.41-.69-.13-.29-.37-.14-.56.27-.26.27-.21-.22-.6.3-.56.37.33.14.4.02.52l.43.38c.16-.2-.31-.61.22-.49.03-.07-.23-.27-.39-.42.01-.21.38.16.47.07.14-.12-.42-.51-.06-.53.49.4.45.6.35.78.15.42.42.61.84 1.05.03.37-.66-.55-.63-.19-.02.09.24.3.29.25zm-1.06-5.03c-.22-.23.2 0 .29-.09.08-.08-.11-.26-.03-.29.19-.07.63.09.73-.04.82.66-.65.09-.2.63-.32-.13-.58-.21-.78-.22zm.02.98c-.32-.19-.36-.56 0-.34-.12-.25-.47-.56-.22-.69.09.39.64.53.88.42.72.76-.57.23-.31.79-.18-.13-.29-.18-.35-.17zm-2.99 4.35l.14-.11c.28.37.62.77.44.87-.4-.38-.26-.43-.58-.76zm1.7 1.83c.15-.02.46.33.52.07-.03-.14-.24-.37-.1-.41.18.2.36.41.44.38.02.27-.18.7-.86-.04zm.78-.14c-.47-.61.29-.16.34-.53-.68-.51.43-.22.21-.74.64.54.11.6.03.78-.13.26-.17.68-.58.48zm-.76-.62c-.13-.14-.04-.16-.03-.22-.22-.24-.38-.33-.49-.34-.18-.18.11-.41-.29-.5-.45-.52.28-.02.32-.02.11 0 .08-.18.19-.16.05 0 .27.23.32.23.17.04.08-.23.41.14.11-.05.09-.36.46.09-.31-.07-.4.16-.7.12-.18-.02-.99-.71-.56-.04.34.19.42-.16.96.45-.15.32-.71-.28-.59.24zm2-6.81c-.17-.06-.34-.12-.33-.19 0-.27.53-.6.62-1.02-.02-.24.4-.03.17.09-.03.43 0 .95-.46 1.13zm-3.42 4.76c-.11-.27-.68-.8-.44-.87.06.3.82.62.58.76.3.26.27-.15.72.4-.57-.25-.39.33-.92.25-.22-.47-.18-.05-.56-.53.04-.34.54.24.62-.01zm-1.24-1.45c-.46-.22.37-.16.01-.51.32.11 0-.31.4-.12-.04.23.21.87-.01.81-.14-.39-.26-.32-.4-.17zm5.11-.95c.17-.04-.22-.32-.2-.36.06-.15.46.22.62.12.43.47.85.54.81.86-.51-.29-.4-.41-.91-.7-.17.08.33.67.67.7.17.13.04.11-.04.05l-.08.1c-.51-.3-.19-.35-.7-.65-.03.32.23.57-.21.55-.45-.34-.48-.53-.62-.75.12-.16.48.14.67.1zm1.65-7.11c-.4 0 .03-.47 0-.66.81.3-.11.38 0 .66zm2.72 3.54c.35.02.56-.09.57-.37.56.24.38.67-.01.52.4.19.13.36.39.55.65.02.16-.69.13-.8 0 .02.35.12.36.14-.07-.19-.37-.37-.61-.53.04-.11.21-.12.44-.06-.02-.2-.14-.46.01-.52-.16-.34.82.26.66-.08-.03-.11-.32-.11-.39-.05-.38-.18.08-.39 0-.59.24.16.2.35.44.51.16.04.21-.01.39.05-.03-.18-.32-.35-.44-.52.6.25.63-.4.77-.54.16.19.38.38.42.58.26.05.21-.14.27-.24.48.38.44 1.32.2 1.75-.06.12-.14.11-.42.02.05.1.29.16.3.27.02.18-.41-.02-.42.01-.03.09.27.23.27.35 0 .18-.51.24-.6.43-.15.31 0 .71-.23.99-.2.25-.71.33-.95.57-.09.1.08.26.07.28-.22.46-1.05.57-.7 1.26-.19-.04-.33-.03-.46 0-.34-.26.29-.37-.47-.68.13.31.24.62.51.97-.76-.04-.64.78-1.16 1.03-.19.09-.41-.08-.64-.08-.32 0-.32.31-.78.07-.69-.55.09-.42.18-.56.13-.17.21-.43.35-.52.07-.04-.08-.22-.08-.22.05-.03.43.04.44.03.06-.06-.04-.31.03-.39.17-.19.37-.16.15-.56.5.26.46.59.83.47-.01-.13-.23-.1-.5-.28-.1-.23.02-.43-.45-.73.54-.32.52-.74 1.15-.9-.02-.31-.25-.63-.78-.97.23-.08.41-.22.45-.47l.71.3c.12-.15.05-.3-.42-.47zm-.63 2.45c.2.09.3.07.41.06-.8-.41-.42 0-.54.19.33.1.85.44 1.08.42-.31-.34-.79-.32-.95-.67zm.58-.26c-.19.15.37.4.34.58-.17-.09-.27 0-.07.13-.05-.33.69.23.69-.06-.68-.26-.4-.41-.96-.65zm.58-.27c-.51-.21-.63 0-.89.04.46.29.49.13.89.37.15-.12-.24-.29 0-.4zm2.39-2.46c.06-.04.19-.03.39.05-.03-.21 0-.42-.58-.59-.12.19-.1.37.19.54zm-1.42 1.86c.08.3-.77.45-.28.52.2 0 .71-.53.28-.52zm-1.14-.73c-1.04-.39-.4.59.16.93.38-.28-.63-.65-.16-.93zm-23.24 8.17c.17.17.07-.77.25-.56-.01.58-.2.48-.15 1.34-.09-.06-.11-.34-.1-.78zM57.53 33.9c.81.09-.05.32.13.58-.37.15-.08-.43-.13-.58zm-3.39 11.12c-.11-.33.53.16.52-.07.47.37-.41.13-.05.42-.3.08.05-.18-.46-.34zm1.76.46c.39.17.17.24.43.39-.28.07-.34.14-.27.41-.72-.54-.11-.42-.15-.8zm-2.93-3.04l.11-.2c.13.09.25.18.5.29l.06-.1c0-.08-.32-.21-.35-.16-.5-.3.23-.14.32-.18-.31-.14-.4-.1-.73-.26.68.15.59-.08.6-.36.41.19 0 .29.62.51.02.05-.42.01-.42.01 0 .04.32.2.32.2-.05.12-.29.15-.26.47-.35-.16-.3.04-.75-.22zm-30.71-17.4c.47.33.45.51.17.38-.34-.25-.26-.32-.17-.38zm32.06 18.51c.12-.22.93-.06.1-.57-.08-.29.52.04.53-.17.26-.15-.5-.56.04-.52.32.19.37.44.31.68-.07.32-.14.93-.98.58zm.11.19c1.34.73-.16.53.28 1.08-.72-.48-.19-.15-.57-.17-.73-.64.76-.29.29-.91zm1.8.3c.07-.1-.13-.22-.04-.32.74.22-.08.28.39.48-.31.21-.69.35-.83.72-.53-.15.38-.72.48-.88zM43.27 33.99c.81.08 1.94.13 2.45.29.08.03.03.11.16.17.14.05.7.22.34.32.1.08.39.14.55.22-.25.47.19.85-.27 1.11a1.26 1.26 0 01-.35-.17c-.6-.08-.27.04-.23.13-.6-.09-1.03-.02-.82.09.6.04 1.16.05 1.21-.05.44.22-.2.21.07.43-.62-.19-.67-.05-.72-.23-.27-.01-.46.05-.26.13.59.13.56 0 1.35.21l-.06.16c-.17-.27-1.23-.25-.79-.06.28.08.09-.05.22-.05.37 0 0 .19.28.35-.2-.03-.22.02-.58-.09.42.22-.39.15-.67.17-.23-.24-.26-.44-1.36-.75.06-.01.37.08.39.05-.09-.11-.41-.08-.74-.2.18-.05-.18-.17-.11-.24.57.11.31.13.33.19.85.24.49-.08.08-.2-.06-.1.6.07.44-.07-.18-.06-.36-.13-.54-.19-.42-.08-.03.08-.02.07-.06.02-.38-.04-.41-.01-.03.03.27.18-.08.18-.08-.13-.11-.25-.16-.37l-.18-.36c.78.16 1.32.25 1.9.31.16-.06-.31-.13-.15-.2-.15-.1-.37.02-.96-.11l.04-.12c-.87-.11-.75-.03-.62.09-.72-.17-.38-.3-.64-.44.15.03.3.06.56.09.05-.05-.27-.1-.34-.15-.17 0-.34-.01-.39 0-.58-.15-.5-.3-.7-.44.27.04.46.05.58.01.15-.04-.69-.12-.76-.08-.42-.02-.06-.08-.16-.12.6-.03 1.61-.02 2.14-.08zm1.63 2.14c-.6-.13-.91 0-.28.18.31-.01-.02-.13.28-.18zm-.05-.55c-.53 0-.53.03-1.54-.18-.24.09 1.12.24 1.11.28-.48-.04-.61.14.32.33.24-.05-.28-.13-.35-.19.23-.07 1.14-.02.45-.24zm-.97-.72c-.37.07.02.13.13.2.07.05-.27.14.34.18.4.05.09-.11.42-.09-.91-.15-.4-.18-.89-.3zm1.13.18c.5.06.52 0 .6-.06-.64-.09-.62-.02-.6.06zm-1.49-.35c-.04.06.28.11.56.16.06-.03.28-.03.2-.09l-.77-.07zm-.56-.12c.14.03 1.31.18 1.15.07 0-.04-1.41-.16-1.15-.07zm-.71-.37s-.24-.03-.2.01c.63.03.93.01.98-.05-.61-.04-.28.07-.78.04zm-4.13 17.39c-.17-.21-.38.12-.51-.54.19-.15.34.31.53.14.03.21-.07.15-.02.4zm-.3-.74c-.24-.4.05-.84.21-.41.03.42-.29-.26-.21.41zm1.47-.64c.1.39-.06 1.41-.47.47-.05.16-.1.34-.2.43-.05-.16-.02-.18 0-.2-.03-.16-.06-.17-.09-.18-.07-.86.85.71.47-.67.09-.18.19.24.29.14zm-1.8 1.05c-.26-.15-.17.56-.44.42-.11-.81.24-.48.25-.98.1.15.42.72.34 1.12.11.59.1-.6.2-.02.13.74-.14.57-.3.41-.14-.6-.02-.59-.05-.95zm1.6.93c-.37-.12-.47.1-.87-.03-.13-.86 0-1.15.25-1.22.25.72-.19.11-.07.6.3.61.36-.3.68.65zm9.78-5.56c-.25-.21-.31-.39-.43-.38-.38-.44.27-.07.59.23l-.16.15zM36.74 52.1c.12-.16.3.31.51-.05.05.45-.23.13-.1.78-.15-.18-.35-.03-.41-.73zM34.71 50c.04-.43.44-.62.59.01.08.72-.08.02-.14 0-.13-.05-.34.23-.45 0zm4.89 1.91c.32-.1-.3-1.19.03-1.17.13.51.04.67.23 1.31-.21.03-.33.57-.62-.27.19.11.27-.65.36.13zm-4.1-2.27c.08-.44.39-.05.56-.17-.16.38-.37.44-.56.17zm.65 1.74c.16.35.14-.09.32.18.03.39-.17.2-.14.59-.08-.13-.13-.41-.17-.77zm-1.27.55c0-.5-.08-.63-.21-.58.1-.87.39.1.57-.38.06.26.08.71.18.77.14-.12-.07-.41-.04-.77.05.15.12.21.2.2.07.36-.11.64.05.77 0 .27-.23.65-.3.19-.1 0-.04.52-.19.38-.04-.41.06-.36.14-.38 0-.31-.06-.33-.07-.58-.17.31-.21 1.13-.48 1.15.12-.88-.08-.36-.21-.19 0-.34.06-.4.05-.77.15-.14.15.33.3.19zm1.57-2.87c.15.39.27.01.43-.03.07-.02.12.18.2.18.08 0 .06-.21.14-.2.35.07.79-.02 1.19-.18.26 1.03-.21.4-.3.44-.12.06-.09.55-.26.24-.05.06.03.38.08.38.05.48-.23-.11-.29-.53-.34.26-.66-.04-.87.44-.11-.2-.24-.25-.32-.74zm12.47-2.99c-.47-.23-.3-.65 0-.55.42.37-.39.19 0 .55zm4.18 2.52c-.13.06-.56-.12-.55.06-.62-.46.44-.21.4-.18.04-.03.06-.36.19-.52.12-.15.41-.14.34-.4.28.19.43.17.48.02.32.48-.46.27-.66.5-.13.15-.01.44-.19.53zm-3.18-1.89c.49.35.04.29.65.7-.07.08-.22.01-.42-.13-.06-.18-.54-.56-.23-.57zm.23.57c-.15.09 1 .77.6.75-.41-.26-.48-.64-.72-.63-.32-.31-.23-.4.12-.12zm2.51 1.82c.1-.17.65.2.41-.18.3-.05.35 1.02-.41.18zm-12.44-2.3c.13-.11.25.17.26-.1.46.98-.31-.11.21.95-.05.23-.3-.52-.47-.85zm3.62-2.37c-.25-.58.45-.24.58-.43.1-.15-.31-.69.02-.54.4.37.1.31.11.43 0 .11.14.34.11.4-.02.06-.18-.1-.2-.09-.05.02.18.42-.29-.02.06.36.06.36-.32.24zm8.55 3.21c.19.22.09.33.1.48-.55-.38-.4-.6-.1-.48zm-1.76-2.07c.28.1.47.07.69.08 1.07.97.11.97-.1 1.31-.02.07.24.26.41.4-.67-.32-.19.26-.21.54-.07.2-.51-.22-.66-.16-.23-.45.48-.15.29-.61-.17-.27-.67-.67-.56-.82.25.18.23.25.42.4-.03-.45.98-.22-.28-1.15zm-3.94-1.88c-.62-.55-.5-.66-.2-.65-.27-.27-.37-.71.38-.14-.14.2.06.78-.18.79zm-5.58-25.05c-.33.2-.58-.12-.9 0 .38-.36.74-.28.9 0zM29.03 63.51c.17-.61.36-.21.53-.09-.16.62-.36.21-.53.09zm.74-.83l-.72-.14c.08-.5.87-.53.72.14zm-.41 1.88c-.16.58-.27.2-.46.1.1-.48.4-.38.46-.1zM25 61.07c-.18.39-.4-.08-.59-.04.33-.65.35 0 .59.04zm4.25 5.23c.68-.16.94.28 1.45.27-.22.7.4.11.18.81-.28-.29-.58-.15-.81-.34-.02-.01.06-.34.05-.38-.05-.17-.38.05-.45-.08-.16.14-.02.29-.21.74-.13-.66-.49-.09-.77-.54-.11.01-.09.18-.03.19-.2.56-.21-.26-.33-.26.04-.42.63-.36.42-.7.25-.42.4.39.13.81.12-.18.35 0 .37-.52zm2.25-3.67c-.13.68-.62.15-.93.22.28-.79.55.19.93-.22zm-8.7.44c.2-.44.1-.61.05-.81-.13.1-.26.27-.38.46-.17-.13-.17-.42-.47-.44.38-.34.28-.54.62-.76.18.42-.1.2-.31.7.31.05.61-.69.93-.22-.43.97-.05.56.26.73-.3.77-.65.77-1.01.62.1-.31.2-.31.31-.29zm8.12 2.38c.14-.36.45.31.79.1-.08.6-.59.07-.79-.1zm-1.27 2.5c-.05.42-.35.02-.5.1.16-.73.4-.45.5-.1zm-8.52-5.25c-.24.15-.49.48-.73.27.26-.52.49-.28.73-.27zm-2.07-1.37c0 .13.02.25.13.31-.25.13-.52.44-.74.21.22-.32.39-.19.61-.52zm12.76 1.35c1.09.19 1.39.14 2.49.42.25.3-.3.15-.49.15-.6 0-1.54-.17-2.2-.21 0-.33.1-.35.2-.37zm-16.05-2.95c-.34-.19.02-.6.37-.94.25.11-.23.62-.37.94zm-4.57-.99c-.21-.14-.24-.34.13-.68.21.13.24.33-.13.68zm2.87 2.33c-.64-.08-1.12-.66-1.32-1.37-.15-.27-.54.3-.66-.1.12-.1.19-.08.32-.22-.23-.51-.66-.31-1-.44.73-.61.46-.84.46-1.16.78-.5.59.58.46.99.53-.49 1.31-.76 1.29-.35-.32.43-.36-.1-.64.18-.33.5.28.15.39.11-.06.2.47.11.4.37 0 .03-.25.29-.25.29.08.09.36-.11.53-.06.15.04-.02.22.02.27.08.1.46-.2.35.29-.02.09.05.18.02.27-.06.27-.77.66-.37.94zm.06-.69c-.43-.14.08-1.26-.82-.18.25.13.44.63.82.18zm8.51-.13c.31-.58.46-.09.58.09-.2.38-.38-.11-.58-.09zm-.55.79c.34-.33.63.27.97.28-.34.35-.65-.25-.97-.28zm-8.14-7.5c-.56.32-.3-.17-.55-.36.12-.39.4.26.55.36zm1.88 1.94c-.43.06-.62-.35-.92-.64-.28-.24-1.09-1.24-.54-.81.43.31 1 1.1 1.46 1.46zm-2.14-22.79c.88-.1-.04.44.31.65-.43-.13-.74-.37-.14-.47.03-.08.05-.16-.17-.19zm.67-.81c-.15.19-.31.39-.26.66-.44-.18-.55-.72.26-.66zm1.61-.2c.06-.12.65.07.76.1 0 .12-.34.12-.44.2-.5-.1.48-.18-.32-.3zm19 31.61c.23-.35.97-.28 1.23 0-.37.49-.98 0-1.23 0zm-22.76-6.01c-1.18 1.18-1.76.61-1.62-.32-.13-.05-.25.23-.22.33-.61.21-.2-.65-.26-.9-.08-.09-.2.13-.14.13-.31 0-.7-.49-.51-.91-.31.08-.38-.37-.89.13.19-.64-.27-.8-.63-1.18.06-.33.65-.76.45-1.03-.44.05-.03.66-.82.84-.16-.12-.14-.27.15-.46-.44-.47-.66-1.33-1.24-1.53-.13-.16-.02-.34.34-.55-.65.26-.93-.2-.87-.77-.48.17-.56-.26-.86-.37.34-.24.38-.06.47.06.38-.49-.52-.38-.23-.83-.08-.08-.19.05-.17.09-.69.26.05-.2.04-.34 0 0-.18-.37-.19-.42-.04-.15-.17-.26-.19-.43-.01-.12.23-.42.23-.42-.05-.09-.54 0-.67-.09-.14-.1.12-.24.06-.34-.04-.07-.23 0-.25-.09-.08-.37.18-.74-.15-.85-.04-.01-.16.22-.11.3-.43-.27-.16-.87-.23-1.26-.03-.15-.29-.21-.33-.37-.01-.05.16-.28.06-.42-.08-.11-.28.08-.39.04-.25-.09 0-.51-.2-.62.33-.08.46.01.48.23.16-.44.71-.11 1.06-.46-.06-.06-.21-.02-.24-.11-.2-.22-.36.21-.73.24-.32.03 0-.21-.11-.35-.02-.03-.44-.13-.45-.15-.02-.04.45-.58-.29-.3-.15-.17.32-.23.3-.38.03-.17-.18-.13-.41-.08.28-.5.37-.82-.25-1.1.16-.28.42-.54.4-.86-.32.04-.34.15-.34.27-.32-.09 0-.34-.32-.6-.06-.16-.65.08-.79-.03.21-.35-.53-.31-.66-.46-.07-.08.04-.33-.06-.48-.42-.63-.34-2.02-.31-3.07 0-.21-.52-.51.18-.68.1-.22-.37-.11-.39-.27.12-1.11-.25-1.92.41-2.69.5.35-.3.75.15 1.14.69.12.4-.34.38-.56 0-.11.21-.29.21-.28-.04-.22-.44-.33-.35-.48.47-.49.62-1.08-.07-1.42.33-.81-.18-1.55.64-2.01-.61-.63.12-1.59.42-2.2-.77-.37.05-.95.23-1.58.13-.48-.09-1.05.04-1.46.16-.58.42-1.13.58-1.6.17-.49.84-.79.36-1.38.67 0 .19-.41.29-.7.05-.15.24-.07.3-.18.27-.45.23-1.18.49-1.76.14-.31.51-.46.62-.75.07-.18-.12-.49-.05-.68.07-.21.43-.26.53-.46.13-.29-.09-.81.36-.9.05-.08-.16-.19-.27-.28.23-.13.47-.22.59-.53.53 0 1.17.24 1.4-.3.58.19.52.82 1.4 1.31.49.22.28-.36.38-.48-.05-.2-.25-.15-.57-.52.09-.35.71.28.9.11.37-.13-.22-.48.03-.64.26.22.39.17.66.4.31-.14-.01-.43.23-.59.26.18.2.27.39.43.1-.32.1-.68.65-.45.06-.08-.15-.18-.15-.12 0-.33.42-.71.85-.6 0-.21-.38-.43.04-.31.07-.25 0-.54-.2-.89.22.05.55.37.73.35-.02-.12-.05-.24.04-.32-.32-.32-.51-.29-.88-.75.15-.17.18.02.33.21.32-.03-.06-.38.18-.44.26-.05 1.43.85.73-.12-.18-.16-.37-.01-.2.17-.24-.05-.64-.53-.93-.71.08-.22.12-.47.42-.61.27.34-.4.3.05.71.56.11.77-.64.5-1.18.36-.04.55-.68 1.12.07.38-.05-.11-.53.16-.63.22.01.09.19-.01.26.41.44.93.26 1.17 1.02.26.14.56-.06.48-.34-.23-.18-.4-.06-.59-.06-.06-.3-.8-.78-.5-1.05.35-.22.09.27.48.6.22-.19-.08-.73.43-.3.14-.25-.32-.28-.47-.61.34.18.56-.22.84-.35.31.14.35.74.7.68.13-.07.1-.24 0-.46-.17-.22-.25.09-.44-.17-.45-.47.05-.4.14-.56-.48-.55-.38.09-.62.19-.46-.9.37-.54.67-.92.11.23.04.34.17.58.28-.62.79.18 1.2.39.04-.06-.03-.2.05-.25-.44-.45-.85-.63-1.32-1.23.26.03.52.14.83.63.29-.06.19-.38.08-.71.17.05.36.27.56.57.19-.23-.13-.43.36-.42.16 0 .36-.08.5.16.21-.28-.32-.48-.32-.92l-.24.13c-.1-.36.51-.43.75.25.27-.32.58-.03.87-.23-.38-.27-1.03.07-1.18-.7.21-.15.46.4.67.3.05-.06 0-.21.07-.24-.15-.31-.29-.31-.44-.64-.21 0-.16.22-.24.33-.39-.37.34-.58.66-.31.17.3.08.41.27.72.16-.44.74-.65 1.14-.08 0-.39-.35-.56-.58-.79.23-.7 1.3.6 1.56-.25.2-.24.35.56.56.2.33.07-.01-.52.13-.65.55.23.68-.19 1.13.23.04-.15-.06-.44.13-.44.05-.21-.1-.65 0-.81-.17-.19-.2-.35-.03-.39.2.54.13 1.18.51 1.25.2-.11-.22-.28-.24-.73.37 0 .42-.54.67-.61.34-.08.75.5 1.13.33.23.03-.28-.83.12-.62.26-.14.1.22.19.35.1.16.3.01.41.5.3-.3-.05-.66 0-1.18.33.19.77.1.99-.21.27.35.11.61.11.96.23.37.53-.13.85-.33.04.67.21.83-.05 1.16.08.25.24.13.38.15.18-.05-.11-.81-.11-1.14.27-.02.1-.71.44-.63.1-.04.02-.35 0-.58.63.19 1.15-.13 1.67 0 .09-.01.05-.24.05-.39.39.04.66-.15.92-.04.02 0 .01.35.03.38.09.16.35-.13.46 0 .1-.05.04-.38.16-.39.08-.62-.31-.14-.23-.76.4-.55.29 1.12.77.37.04.31-.08.33-.07.58.29.25.49-.57.64 0 .11-.03.07-.35.08-.58.56.31.89.04 1.4-.15-.03.27-.28.05-.29.36.1.63 1.04-.69.38-.55.05-.43.47-.04.67-.14-.06.4.04.51.06.77.11-.03.06-.19 0-.19.26-.66.85.71 1.05-.29.3-.06.16.61.52.44.08-.4-.1-.38-.24-.41.13-.41.54.08.63.26.17-.04-.05-.69.34-.53.21-.05.15.3.12.6.29.19.64-.36 1.01-.4.06 0 .09.2.16.23.12.05.19-.16.22-.16.23.05.62.21 1.02.2.18 0 .48.09.65.13.23.08.56-.37.64.18.02.12.15.38.32.29.02-.01.18-.35.18-.35.04 0 .41 1.05.78.03.37.06.6.04 1.16.15.11.02.45-.05.42-.06.11.08.02.42.15.47.28.12.45-.51.44.18.15-.14.3-.29.46-.43.69.22 1.37.42 2.05.58.67.19 1.33.35 2 .43.02.17-.02.38-.09.61.63-.21 1.16-.18 1.64-.05.47.14.9.37 1.38.51.19.19.46-.59.64-.27-.36.48-.31.73-.26.98.38-.46-.03-.46.35-.92.23.11.43.24.21.6.18-.03.38-.24.59-.53.68.26.78.55 1.4 1.03-.73.54-.8.66-1.47 1.52.11.2.3-.11.49-.35.15.25-.22.77-.38 1.17.59 0 .47.83 1.12.42.23.05-.12.37-.02.48.11.03.29-.26.39-.18.35.09.1.45.38.59-.21.34-.37.65-.04.76.58-.33-.41-.7.24-.57.17.04.24.25.27.26.24.08.45-.07.53-.02.14.09.01.29.14.41.54.5 1.48.88 1.6 1.37.1.06.31-.18.48-.32.06.59.76 1.04 1.57.96.2.1.06.37.17.5.12.14.44-.06.48-.02.09.08-.18.33-.17.39 0 .06.41.26.44.28.14.12.39.09.49.37.19-.18-.02-.3-.08-.44.14-.42.49.46.67.62-.52.1-.32.6-.83.49-.37.38.51-.15.43.29.43-.14.44-.63.62-.45.25.31-.26.15-.36.5.04.2.45-.17.58-.17.14 0 .1.57.54.11.4.4.43.86.58 1.31-.53.28-.53.59-.97.61-.06.49.4 1.32.86 1.53.09.04.2-.02.38-.1.65.58.3 1.77 1.11 1.86.03.46-.04 1.19.79.84-.08.33.36.41.49.66.09.17-.06.5.03.64.06.09.39.09.45.14.35.3.39.81.59 1.18.17.31.26.94.64 1.39.23.29.65.43.76.74.14.36.06.76.44 1.06-.59.06-.66.26-1.1.36.06-.4-.76-.04-.85-.3-.49.21.33.24.13.58-.64-.1-1.73.09-2.04.57-.04.06.39.12.43.19.1.18.04.65.19 1 .14.31.65.4.29.8.69.1.62 1.1.96 1.68.11.18.47.23.62.42.39.52-.09 1.14-.15 1.65-.74-.01-.79.28-1.34.34-.27.52-1.52.6-1.91 1.03-.7-.16-.76.02-.96.26-.94-.3-1.34.22-2.11.24.06-.13-.18-.13-.19-.23-.26.02-.16.19-.19.31-.48-.19-.61-.04-.96-.23-.33-.03-.36.06-.38.15-.12-.1-.52-.05-.77-.14-.05-.02.06-.13 0-.14-.3-.07-.88.04-.96-.06-.04-.05.27-.08.19-.14-.17-.13-.38-.18-.96-.25.15-.24-.28-.25-.19-.46-.03-.08-.35-.04-.57-.04.73-.35.58-.97 1.52-1.32l-.06-.55c-1.15.12-1.54.4-2.45.55-.19-.39-1.17.18-1.73.08l-.02-.23c-.45.06-.55.17-1.14.2.11-.31.07-.36.14-.62.39-.09.64-.21.74-.35-.07-.19-.51.09-.58-.01l-.02-.22.75-.14c-.22-.18.51-.51-.25-.41-.29.06.43.26-.51.39l-.32-1.69c-.08-.05-.34 0-.4-.05-.43.13-.53.25-1.09.38-.23-.19-.7 0-.5-.38-.56.13-.29.21-.31.31-.11.2-.27 0-.23-.08.1-.4-.73-.69.25-1.19-.34.03-.77.14-.64-.17.26-.1.1.12.4 0 .14-.07.16-.12.34-.19-.14-.07-.32-.12-.79.06-.29-.24.22-.78-.33-.82.61-.01.33-.4-.09-.23-.11-.29-.16-.67-.39-.85-.3-.24-.37-.67-.5-1.06-.16-.36-.39-.66-.89-.61.06-.16.27-.22.46-.35-.06-.03-.01-.1.1-.2-.09-.11-.35.12-.44.02-.06-.06.2-.43.14-.5-.07-.08-.44.19-.45.04-.1-.06.02-.23.34-.49-.24.06-.7.44-.66.1.16-.13.16 0 .35-.17.21-.27-.15-.16-.08-.41 0-.03.22-.33.22-.34-.11-.43-.74-.41-.82-.67-.13.07-.3.19-.47.34.34-.65-.28-.53-.57-.59l.38-.43c-.18.03-.27-.12-.59.21.01-.26.37-.35.54-.55-.11-.15-.41.1-.63.18-.05-.29-.36-.42-.79-.16 0-.13.07-.31.08-.44-1.05.17-1.88.05-2.34-.8-.18.08-.38.19-.57.33-.11-.21-.11-.54-.34-.63l.34-.69c-.31.19-.91.8-.74.01.26-.44.23.14.31.18.18-.09.46-.71.6-.54.08-.25.06-.38-.02-.45.29-.2.59-1.03.81-1.3.55-.64.59-.01 1.08-.28.06.13.19.19-.07.62.12-.04.26-.16.38-.2.16-.3.13-.44-.01-.47.33-.3.56.2.6.42-.36.48-.28.42-.44.86.14.04.54-.5.39.04.11-.19.19-.28.25-.29.3-.51-.56-.02-.05-.73.22.15.49.26.5.58.27 0 .37-.56.63-.74-.15-.14-.54.18-.42-.29.2-.3.37-.52.51-.58.12-.25.16-.45.14-.6-.38.16-.18.52-.45.85-.07-.15-.25.16-.41.42-.23 0-.09-.3-.21-.38.15-.21.21-.05.31-.02.36-.79-.34-.1-.56.08-.2-.12-.02-.59 0-.92-.17.03-.48.84-.59.54 0-.21.16-.6.28-.94-.17.12-.38.53-.53.59-.59-.15-1.17-.8-1.93-1-.11-.11-.27.49-.39.46-.06.26 0 .38.09.45-.38.51-.39 1.14-.55 1.65l-.1-.04-.1-.04c.29-.51.46-1.01.26-1.14-.25.53.1.3-.24.94 0-.59-.27-.38-.59-.05-.04.41.21.05.31.14.18.16.1.66.17.91-.17.2-.55.87-.44 1.07-.25.18-.51.39-.76.71-.17.08.05-.4-.04-.44-.07-.22-.28.04-.42.02-.08-.01-.01-.23-.07-.24-.16-.05-.35.13-.47.02-.24-.25-.87-.29-1.17-.39-.08-.03-.13-.59-.32.09-.16.1-.02-.4-.12-.42-.07-.09-.12.13-.17.36-.19.13.05-.64-.09-.61-.16-.18-.35.41-.4-.09-.06.02-.1.34-.14.56-.09-.41-.3-.54-.58-.53-.06.13-.12.33-.16.55-.26-.08-.73-.14-1.25-.19-.52-.08-1.09-.02-1.54.13-.14.04-.23.31-.37.37-.3.14-.64-.22-.84.21.26.14.22.51-.02.58.15-.03-.96-.04-1.33.11-.07.03-.12-.18-.18-.16-.08.02-.15.26-.28.25-.11-.01-.23-.16-.27-.15-.1.04-.04.57-.31.44-.06-.03-.25-.34-.24-.35-.07.03 0 .51-.07.59-.02.02-.14-.18-.19-.15-.11.06-.11.42-.23.47-.1.04-.63.03-.74.21-.03.05.14.48.01.39-.13-.29-.08-.32-.17-.55-.09 0 0 .24-.1.23.08.21.14.31.19.34.18.5-.13.04-.23-.33 0 .27-.06.28-.18.27-.04 0-.07.44-.13.47-.08.03-.25-.13-.33-.08-.22.16-.45.43-.69.48-.12.02-.03.43-.12.5-.06.04-.14-.09-.21-.11-.17-.03-.11.31-.21.32-.09 0-.32-.21-.4-.23-.11-.02-.3-.08-.35-.04-.03.03.1.37.1.38-.05.06-.16-.1-.22-.09-.08.02.03.21-.04.25-.08.05-.28-.08-.33-.01-.09.11.1.89-.49.53.19.3.05.63-.12.8-.04.04-.26-.06-.3-.01-.29.38-.29 1.03-.76 1.13-.1.02-.54-.28-.33.05.17.15.18.06.23.04.18.3-.04.61-.63.07.35.34.08.21.1.43 0 .1.37.54.04.52-.33-.24-.25-.27-.22-.34-.16-.09-.62-.37-.42-.4-.46-.34.08.19-.11.13-.11-.13-.31-.31-.57-.52-.21 0 .13.26 0 .29-.57-.52-.84-.47-.61-.17.56.35.74.25 1.39.73.18.23.15.35.47.63-.22-.1-.62-.4-.85-.49-.06.12.66.62.64.43.44.51-.51-.04-.97-.35.28.31.15.43.95.94-.05.03-.11.07.07.2-.37-.16-.39.06-.98-.31.02-.12.07-.21.57.18l.14-.15c-.58-.45-.32.02-.91-.42-.08-.22 0-.14.31-.05-.54-.36-.59-.17-1.1-.49-.12.1.44.55-.03.37-.74-.49-.99-1.08-1.43-1.31-.22-.3.32-.12.15-.46.25.29.2.14.62.45.21-.13-.99-.84-.69-.96.08-.11.16.04.34.19.16-.02-.24-.28-.2-.35-.03-.33.55.17.57-.08-.11-.31-.44-.21-.78-.56.28.18.15-.21.47.04.04-.13-.44-.29-.52-.28-.17-.32.41-.17.09-.65-.57-.35.11.35-.1.36-.36-.27-.56-.14-.81-.53-.35.06.26.51 0 .59-.17.12-.4-.26-.34.1.03.17.16.34.12.45-.29-.08-.52-.07-.73-.03.04.27.15-.09.51.29.36.52-.73.36-.17.84-.26-.06-.53-.12-.55.12-.81-.64.53-.04.1-.48-.73-.25-1.31-.28-2.02-.44.42.52.96.4 1.15.36.57.39-.22.4.78.9-.05.08-.21.05-.43-.06.37.34.12.51-.03.71-.34-.21.1-.23-.37-.47-.27 0-.5.03-.74.06-.06.14.51.41.95.65-.17.06.02.47-.39.31-.81-.4.34-.11-.17-.48-.85-.26.02.39-.43.37.3.16.4.12.71.3l-.25.45c-.47-.03.3-.31-.35-.55-.47-.07.04.49-.14.64.72 0 .12.4.1.61-.37.02 0-.32.02-.43-.79-.26-.41.32-.27.51-.53-.06-1 .24-.48.62.44.08.23-.34.41-.46.39.15 0 .22.06.33-.08.19-.28.38.15.6-.64.11-.44.43-.74.77.03.07.35.15.33.22.01.16-.31.1-.79-.06.48.54-.57.51-.3.95-.42.02-.36-.11-.73-.24.02.11-.21.06-.24.13.02.08.53.21.56.13.69.33.19.47.37.75.27.06.53.12.58.06.34.2-.23.27.08.53-.38-.19-1.02-.21-1.16-.09-.56-.14.21-.09.05-.23-.41-.09-.61-.06-.6.07.11.29.99.14 1.3.35-.42.19-.39.22-.51.56l-.57-.08c-.06.3.6.46.42.77-.48-.14-.46.05-.59.06-.24.02-.79-.12-.78.05.44.24.59-.17 1.35.01.1.24-.74.1-.62.36.06.09.34.03.39-.03.5.17-.21.24-.24.4-.02.15.31.35.33.49.02.15-.32.28-.05.41-.31 0-.32-.06-.57-.07-.07.18.59.24.15.36-.44.01-.19-.18-.56-.19-.23.23.45.18.35.37.51-.04.5-.25 1.17-.23-.1.04.1.2-.02.23-.07.02-.28-.09-.38-.06-.46.14-.79.28-.96.61.17.16.43-.19.77-.02-.1.17-.29.32-.39.49l-.57.03c-.26.15.07.14 0 .25-.13.22-.68.28.19.36.19-.14.66-.44.77-.12.44-.13.07-.46.2-.66.66-.05.36.24.38.39.03.18-.03.39 0 .52l-.96.08c-.03.26.38.29.95.15l.03.34c-.25 0-.31-.07-.58-.05.14.26-.3.41-.13.68-.16 0-.2-.03-.39 0-.18.5.1.72-.08 1.2.67-.07.93.05.84.39.74-.18-.29-.28.3-.54.43.02.15.42.3.59-.31.09-.36.03-.4-.03-.15.25-.7.14-.91.33-.11.32.47-.19.59 0 .27.21-.8.33-.48.56.04.11.68-.27.94-.18-.44.26.46.4-.3.45.41.19.45.47.37.77.9-.2.38-.38.45-.57.73-.16.15.22.28.34.11.11.52.04.46.21-.59.26-.62.12-.61-.04-.4.14-.35.27-.28.4-.47.13-.66.14-.89.37.11.05.76-.34.94-.2.48-.1.56-.46.89-.37.05.14-.11.11-.35.18.27.22.17.34.2.67-.9.35.18-.38-.62-.08-.46.31-.07.21-.25.48.04.13.59-.23.54-.21.63-.19-.07.25.76-.11-.05.25.55.16.17.49.62-.13.48.49.76.84.15.19.34.12 0 .51.06.04.35-.14.38-.07.17.73.95.75.8 1.54.07.03.34-.17.37-.11.13.07-.24.31-.02.35-.56.45-.58.25-.88.39.24-.29.61-.79.08-.67-.46.33.04.22-.16.51-.05.07-.43.32-.45.37-.1.19.05.25.02.42.56-.29.02-.24.57-.53.28-.07.78 0 .89-.4.24-.13.65.15.09.48.71-.17.54.47.8.87.31.41.91.74 1.26.97.19.02-.21.35-.14.44.21-.04.15.22.18.22.12 0 .53-.41.47-.07-.37.53-.33.2-.52.29-.09.04-.42.31-.49.33-.13.02.19-.64-.33-.09-.23.25.15-.03.11.14 0 .04-.66.71-.25.58.34-.31-.27-.12.28-.53.36.03.13.77.36.91.47-.51-.17-.39.06-.76.49-.61.51-.35.88-.75.62.15.64.79.76 1.33.63-.24.98-.1 1.05.39.46-.55.51-.79.41-.91.29-.35.29 0 .54-.29.43-.59-.1-.11-.16-.14-.15-.09-.13-.41-.31-.52-.07 0-.27.27-.32.23-.22-.03-.05-.34-.02-.54-.15 0-.15.27-.41.4 0-.54-.73-.33-.63-.93.55-.38.14-.56.59-1.04-.05-.14-.73.8-.65.44-.15.16-.05.18-.03.25 0 .23-.24.11-.24.03.07-.23.32-.56.19-.68-.45.36-.18.33-.15.43-.47.44-.21-.01-.3-.07-.18-.12-.59-.2-.66-.52.29-.29.32-.18.39-.13.63-.67-.21-.19-.51-.03-.23-.36.44-.94.13-1.15-.6.41-.06.35-.11.54-.95.25-.45-.79-.81-.91-.04-.01-.37.13-.37.13-.06-.06.32-.21.32-.22-.05-.09-.44.04-.49-.04-.1-.18.42-.58.3-.68-.05-.04-.32.15-.51.26-.03-.54-.9-.55-.41-1.19-.03-.05-.22.09-.17.09-.37 0-.49-.49-.12-.8-.19-.02-.35-.08-.63-.04-.04-.21-.02-.49.04-.79.08-.3.22-.63.37-.93.81-.38 1.03-.6 1.75-.84-.31-.29-.17-.53-.24-.89-.14 0-.35.03-.57.07-.08-.09 0-.18.15-.28-.07-.09-.49.19-.54.25-.19.28.8.03.26.36-.4.03-.59-.07-.63-.25-.16.07-.32.13-.35.2-.34.07-.07-.06-.02-.1.08-.06.19-.18.72-.3.02-.07-.06-.11-.03-.18.03-.07.35-.23.35-.23-.02-.08-.61.06-.41-.13.69-.18.41-.36 1.07-.52-.25-.08-.7.22-.95.16-.12-.12.19-.26.54-.25-.61.01.44-.42-.6-.2-.66.17.58.1.02.23-.64.18-.32-.14-.4-.2-.04-.03-.37-.05-.39-.07-.19-.22-.24-.62.32-.81-.29-.09.1-.35-.05-.51-.09-.1-.39-.18-.57-.23-.56.27.26.36.02.58-.67 0-.59-.23-.6-.38-.01-.16.4-.39.21-.61.62-.08.39.1.76.1-.18-.13-.59-.2-.76-.34.57-.13.15-.22.39-.45-.51 0 .18.27-.58.21-.06-.15.22-.39-.38-.39.29-.13.4-.3.98-.34-.16-.07-.13-.19-.75-.16-.21-.14.62-.2-.17-.2.02-.19.7-.17 1-.26-.16-.14-.37.11-.96 0 .67-.31-.04-.64.3-.93-.12-.06-.43-.09-.37-.19.8.22.35-.08.99-.04-.34-.09-.5-.46-.88-.4-.62-.13.23-.07.22-.12-.15-.16-.52 0-.75-.16.25-.47.09-.95.12-1.36 0-.08.23-.04.24-.11 0-.13-.37-.34-.24-.49.04-.04.08-.14.44-.1-.04-.2.03-.43 0-.64-.05-.61.3-.99 1.76-.72.71.29 1.32.49 1.49.42.31.13.38.22.29.29.4.06 1.34.59 1.49.43.07.17.87.45 1.18.63.14.08-.19.08.31.22-.64.14-.59.58-.97.85-.06.04-.38.02-.43.08-.07.08.18.23.08.32-.06.05-.23.03-.24.1-.01.13.57.31-.06.29.04.05.37.09.36.14-.1.08.06.21-.07.28-.06.03-.41.05-.41.05-.02.04.3.11.35.16.11.1-.28.14-.26.22.02.07.28.12.34.18.14.13.01.23-.23.34-.08.06.14.08.37.1-.35.19-.14.5-.13.81-.3.07-.8-.07-.97.07.23.11.73-.05.96.04-.07.28-.13.38-.02.64-.24 0-.39-.03-.38-.09-.73.16.49.16.57.15.16.16-.49-.02-.58.11-.09.09.27.05.57.04l-.02.25c-.38.09-.24.02-.77.07v.11c.11.07.8-.21.76 0 .07.14-.27.02-.76.11.03.1-.31.11.01.15.03.08.81-.08 1.15-.1l.02.24c-.17 0-.43.02-.76.07.27 0 .02.19.77.03.18.16-.16.31-.74.48-.06.08.95 0 0 .18.17.07.76-.23.57 0 .17-.05.34-.1.38-.14.03.02.63.18-.35.32 0 .11.69-.07.6.08l-.56.13c.32-.05.33.03.58 0 0 .1-.41.23-.72.36.84-.21.5.13.6.16.01 0 .3-.16.17-.15.59.02-.13.47.12.63-.62.27-1.08.46-1.57.81-.1.16.52-.11.41.05.64-.35.82-.19 1.07-.43.39-.1-.02.27.94-.18.52.18.22.84.54 1.07-.64.31-.36-.03-.45-.14-.08-.1-.04-.25-.29-.23-.22.17-.22.28-.63.51-.07.19.76-.26.76-.14l-.35.17c.13.12-.12.34-.4.59.05.02.35-.15.36-.11.02.08.06.15.1.22-.19.2-.33.21-.47.34.04.14.25-.15.53-.22.05.08-.06.29.57-.13-.25.39.2.47.12.72-.42.14-.21-.31-.39-.4-.26.11-.45.15-.87.39 0 .12.13.11.56-.16-.27.33.24.13.18.39-.23.1-.26.15-.48.31.31.18.58.36.84.67-.16.24-.49.29-.59.5.09.14.76-.66.7-.31-.32.35-.82.58-.98.58-.54.46-.09.41.55-.19-.03.12.17.04.19-.05.27.26.51.65.75 1.05.28.37.62.68 1 .79.05 0 .14-.13.12-.15.14-.03.2.13.42.13-.37.5-.27.12-.51.57-.19.41.05.2.03.28-.06.24-.12-.08-.39.17-.03.28-.15.65-.12.91.57-.68.91-.9 1.27-1.17 0 .15.05.27-.3.76.49-.39.34.24.75.32-.06.16-.19.4-.37.68.03.13.21-.19.37-.44.05.27.32.25.52.39.32.16.42.76.64 1.03.11.13.41-.2.25.38.08-.04.19-.28.27-.3.09.06 0 .38-.02.62.57-.56.71.35 1.3.37-.03.47-.17.32-.32.9.22.03.5-1.09.69-.78-.13.32-.25.43-.4 1.08.13.18.38-.71.36-.08-.13.37-.24.05-.37.48 0 .46.41-.56.55-.22-.11.5-.22.59-.32.5-.07.66.24-.26.32-.09-.08.39.19.12.14.45.2-.28.55-1.11.61-.81-.1.24-.18.68-.28.92-.09 0-.05-.26-.15-.25-.22.89.16.6.3.47-.09.55-.23.55-.32 1.11.12-.19.23-.51.35-.71.19-.06.09.51.12.81-.25.03-1 .59-.98-.46-.14.07 0 .31-.18.54-.2-.15-.58 0-.61-.4-.05-.01-.1.21-.15.35-.32-.05-.33-.72-.78-.06.04-.6-.58-.46-.92-.2.1-.49-.13-.53-.24-.73-.28.68-.03.67-.05 1.02-.34.69-.09-.1-.26-.11-.1-.08-.28.62-.41.87.28.3.62-.25.93-.64.3.22.56.31.8.4.24.08.46.15.67.37-.2.18-.39.96-.6 1.02-.1.42.3.1.24.48.12-.36.15-.58.04-.59.18-.57.37-.22.55-.23-.07.3-.21.7-.13.76.17.25.25-.9.43-.47-.25.58-.22.42-.17.95.13-.09.14-.42.03-.39.08-.26.19-.01.26-.32.06.35.16.59-.08 1.18.23.16.37-.54.62-.23.25 0 .03.85.29.85.22-.23.45-.4.44-1.08.33.09.54-.22.61-.85.18-.12.11.3.26.25-.02.41-.13.34-.23.34-.07.56.04.74.12 1 .28-.27.22-.28.43.09.01.63-.22.11-.21.74-.05.45.18-.04.17-.36.21.01.35-.29.59-.13.06-.44.05-.74.02-.96-.1.26-.28.16-.44.15.13-.94-.25-.68-.13-1.58.64.26 1.8-.02 2.39.46 0 .88-.14.2-.23.18-.49-.09-1.25-.06-1.74-.19.13.39.44.33.46 1.01.2.17.13-.77.34-.54.14-.09.07.38.16.4.13.33.18-.35.2-.36.03-.02.07.19.11.2.08.03.11-.18.13-.18.26.05.48.49.77.05.1-.07.11.15.12.39.18-.13-.06-.41-.01-.77.15-.03.15.43.25.58.13.03 0-.68.03-.96.45-.13.85-.38 1.24-.37.06 0 .12.37.15.38.07.03.23-.19.32-.22.11-.04.31.14.32-.22.07.16.17.1.22.36.2-.6.97.03 1.31-.52.18.59-.07.42-.02.79-.27-.16-.39-.15-.59.05-.1.09.08.74-.15.59.3.62.3-.41.48-.43.14.43.4-.04.51.71.05-.3-.22-.8-.11-1.15.13-.19.21.23.33.13-.07-.58-.2-.31-.31-.33-.02-.48.27-.59.44-.67.15-.08.3-.12.45-.09.08.02.27.34.27.34.07-.02-.02-.35.01-.39.09-.14.34.38.28-.25.07-.08.15.12.22.35.18 0 .04-.46.21-.46.09.33.04.45-.1.43.15.35.3.37.45.66.11-.1.23-.2-.02-.8.08.13.49.37.21-.26-.21-.43-.12.31-.38.12-.04-.29.09-.32.15-.45-.22-.54-.41-.27-.62-.82-.14.33-.25.14-.52-.25-.1-.41.44.64.19-.25-.09-.23-.15-.16-.1.03-.29-.39-.16-1.26-.48-1.07-.24-.85.5.3.24-.66-.23-.13-.45-.52-.66-.42-.09.18.2.45.27.92-.16-.13-.34-.74-.5-1.08-.09.07-.08.39-.26.04-.1-.99.41-.23.57-.69.07.29-.08.2.15.76.22.11-.18-.82.08-.62-.06-.21-.12-.32-.16-.35.01-.41.1-.68-.19-1.54.06-.19.22.25.32.31.22.1.14-.3.31-.28.16.39.2.57.1.56.47.84.39-.18.88.93.07-.29-.45-1.01-.6-1.21-.17-.38.1-.13.11-.25.13.59.39.74.62 1.2.07-.38-.24-1.22.06-1.25.04-.16.25.33.37.47.02-.05-.05-.19 0-.2-.02-.23-.34-.41-.31-.7.04-.11.2.22.34.48 0-.26-.08-.62.09-.67.13.02.4.49.44.21-.12-.19-.15-.11-.2-.11-.19-.55.55-.18.51-.68.17.12.57.81.68.73 0-.1-.15-.2-.32-.48.21-.1.42-.22.43-.5.33.44.58.71.63.51-.14-.14-.2-.11-.42-.42-.07-.23.27.25.3.26.15.05-.17-.53.25-.15.29.6-.14.27-.2.57-.05.1.32.58.15.58-.31-.67-.36.04-.65-.26.07.18.13.35.2.54-.19-.08-.53-.61-.78-.89.19.52-.37-.32-.39-.02.54 1 .65.55 1.02 1.41-.28-.23-.56-.49-1-1.21-.24-.06.1.53.32.69.14.29-.03.15-.17-.13-.08.17-.29-.1-.45-.2-.11-.03.37.79.32.48.24.54-.34-.23-.13.29.14.28.2.27.32.48-.06-.26.29-.07-.05-.62.06-.24.41.44.47.19.24.36.06.27.21.54.23.36-.03-.2-.02-.21.05-.02.28.32.32.27.05-.07-.11-.41 0-.43.02-.08-.22-.42-.37-.67.12-.14.47.35.7.51.18.01-.16-.46-.27-.73.23.16.57.58.84.83-.37-.69-.14-.82-.07-1.1.38.58.31.12.46.16.05-.16-.56-.85-.21-.76.09.16.11.27.13.37.29.34.24-.02.19-.12-.13-.12-.3-.28-.44-.4-.46-.39-.3-.05-.59-.53l-.31.19c-.34-.57.17-.19.26-.38.07-.14.21-.35.51-.39.37.46.5.5.8.84.35.05.2-.27.55-.18.28.32.41.55.38.67.52.35-.3-.62-.28-.75.05-.17.57.42.61.24.05-.07-.58-.57-.51-.32-.6-.73.32.11.47.09-.03-.29-.43-.5-.73-.9.18-.06.56.61.79.57-.32-.34.04-.28-.57-.78.34.14.11-.39.47.08 0-.16.44-.08.14-.39.16.04.27.22.44.37.24.01-.43-.45-.49-.58.61.42-.17-.29.23-.25.29.27.42.46.66.7-.78.43-.35 1.28-.88 1.87 0 .09.23.25.3.25-.04.2.02.53-.12.58-.04.01-.32-.23-.37-.2-.03.02.02.2.05.2-.12-.02-.31-.45-.4-.17-.72-.95.06-.41-.02-.72-.63-.4-1.06-.48-1.38-.38-.08-.13-.17-.27-.34-.47 0 .24.52.78.95 1.21.28.03-.3-.59-.13-.63.56.67.99 1.47 1.33 1.39-.25.29-.21 1.26-1.04.96.21.54-.22.56-.44.75-.04.12.38.64.14.58-.38-.36-.59-.69-.87-1.06-.11.25-.13.12-.33.38.19.35.29.42.44.63-.14-.38.07-.41-.1-.81.93.89.71 1.5.31 1.35 0 0-.14-.35-.15-.35-.03 0-.26.15-.03.45-.15.04-.34.17-.53.35-.2.16-.41.36-.56.57-.22.29-.67.13-.87.36-.09.12-.09.56-.24.68-.17.14-.4.13-.32.69.26.61.46.31.73.98.12-.42.57-.42.95.3-.22-.67-.17-1.01-.03-1.23-.18-.51-.28-.42-.45-.85.21-.33.61.9.74 1.36.1.09.27-.13.52 0 .1-.06-.39-.61-.36-.89-.17-.31.03.69-.37.15-.06-.25-.02-.4-.17-.76.47.06.78-.39 1.35-.6.34.25-.33.11.04.63.24.43.35.24.49.17.16-.02-.33-.67-.09-.6.17.56.44.6.44.42 0-.24-.45-.74 0-.22.36.42.63.52.56.14-.26-.3-.39-.14-.71-.71.11-.16.4.37.56.36.02-.05-.05-.19 0-.21-.25-.45-.3-.26-.46-.41-.27-.34.04-.23.04-.24.03-.18-.07-.34-.02-.42.14-.22.52-.24.72-.47.19.5-.08.24-.25.39.28.4.37.21.5.13.33.45.52.51.75.65-.04-.37-.42-.32-.73-.9.18-.3.87.8 1.25 1.01.18-.13.43-.05.69 0 .08-.08-.38-.53-.38-.66.14-.3.74.51.83.07.54.69.71.47 1.28 1.19-.51-.25-.21.45-.08.81.18.19.23.02.33-.02.07.16.22.38.44.63-.09.12-.27.02-.53-.31-.14-.02.35.68-.04.27-.3-.21-.32-.3-.14-.38-.31-.18-.69-.74-.68-.93-.42-.38.05.4-.19.38-.3-.34-.53-.51-.89-1.01-.16.1.55.79.39.89.29.41.3-.02.63.5-.14-.03-.14.36-.39.03.07.27.28.63.02.68-.29-.57-.64-.99-.78-.63-.4-.27-.17-.51-.56-.78.07.22.23.51-.03.48-.17-.28-.25-.27-.32-.25-.22-.38-.57-1.01-.88-1.26.02.2.38.68.09.63-.49-.59-.07-.43-.55-1.01-.32-.08.18.51.25.76-.14 0-.49-.73-.52-.37.08.19.38.61.37.88.29.36-.16-.51.2-.32.21.47.31.24.47.38.09.09.23.37.32.48.14.17.23.07.43.41.03.17 0 .31-.16.33-.12-.22-.07-.31-.21-.54-.14.06-.17.2-.06.47.53.77.7.46.8.18.38.44.07.36 0 .46.37.34.67.64.75 1.12.13.16.19.03.33.24.12-.14-.22-.72.24-.39.45.72-.25.76-.57 1.03-.18.16-.19.5-.46.47-.08-.12.03-.37.15-.3-.41-.24-.12.26-.27.37-.09.06-.38-.23-.38-.23-.09.09.06.53-.02.67-.07.11-.24-.09-.35-.03-.2.12-.25.68-.64.31-.39-.89-.33-1.31.17-1.15-.34-.56-.52-.31-.76-.26-.1.22.06.28.29.71-.16 0-.18.12-.02.42-.1.09-.41-.04-.09.45.17.33.11-.37.41.03-.08.58-.69.28-.97.62-.06.08-.02.39-.11.46-.26.21-.65.43-.95.56-.5.25-1.05.52-1.47.46-.01 0-.1-.34-.12-.36-.12-.15-.08.4-.22.27-.24-1.26-.03.4-.49.13-.07.05.04.35.09.57-.31.02-.65.33-.89-.2-.25-.04-.02.61-.34.46-.21-.63-.17-.9.1-.8-.14-.58-.35-.51-.55-.47.08.58.23.67.33 1.11-.8.4-1.67.6-2.54.77-.87.2-1.75.2-2.63.2-.88.03-1.75-.09-2.61-.21-.43-.06-.86-.1-1.28-.18-.42-.09-.84-.18-1.25-.27-.56-.13-1.04-.08-1.56-.36-.11-.05-.17.17-.25.12-.23-.12-.65-.39-1.07-.53-.23-.08-.53.13-.75-.03-.29-.24-1.21-.73-1.82-.76-.35 0-1 .36-1.11-.53-.43.05-.77.07-.83-.45-.05.2.06.26-.13.58-.35-.53-.92-.33-1.41-.82.15-.2.26-.19.41-.42-.14-.35-.48.47-.69.46-.12-.14.39-.75.49-.83-.22-.03-.49.23-.72.21-.03-.39-.3-.22-.55-.37-.11-.07-.09-.32-.2-.37-.17-.06-.73.22-.91-.22-.05-.11.07-.42.06-.45-.07-.11-.54.41-.28-.23-.26-.06-1.06 0-1.38-.15-.13-.06-.08-.32-.1-.35-.09-.1-.25.05-.34-.06-.09-.12.12-.37.09-.44-.01-.04-.23.06-.28-.01-.2-.26-.34-.82-.65-.92-.13-.04-.39.09-.53.01.09-.17.11-.3.12-.43-.36.15-.43-.2-.56-.37-.09-.13-.48-.03-.61-.14-.1-.09.06-.26-.04-.36-.38-.33-.97-.7-1.33-1.11-.08-.09.09-.23.03-.3-.35-.37-.91-.51-1.02-.83-.05-.16.15-.24.19-.4-.31-.27-.69-.43-.91-.83.14-.14.09-.25.42-.43-.07-.06-.33.13-.53.23-.14-.47-1.17-.31-.57-1.05-.25-.17-.13-.24-.42-.46.17-.18.23-.35.8-.57-.14-.29-.43.11-.77.14-.29-.24.29-.54.09-.78-.08-.11-.61.23-.76.18.17-.49-.52-.76-.51-1.34 0-.17.23-.46.2-.64-.09-.44-1.08-1-.28-1.54-.15-.03-.36 0-.58.02.37-.62-.64-.65-.28-1.32-.83.08-.43-.2-.68-.46-.21.02-.53.25-.53.28-.02.09.38.06.42.14.05.11-.21.2-.14.27.09.09.4.12.44.21.07.16-.11.32-.09.5.02.19.29.37.16.76-.03.11-.3.32-.3.34 0 .09.33.26.34.46.02.26.12.27.19.6.05.27.13.66.33 1.04-.28.14-.33.05-.56.14.08.23.28.45-.37.67.07.08.35-.07.56-.15.39-.15-.03-.29.04-.44.71-.04.75.52.62 1.02-.15.29.78-.1.3.21-.3.32-.35.13-.58.1-.15-.02-.37.2-.41.01-.01-.07.16-.16.11-.23.21-.08.2.07.27.14.37-.45-.33-.43-.13-.81-1.02.31.21.59-.87.91.44.31 1.31.04 1.15.72.78-.27.06-.45.74-.71.2.31.26.62 0 .96-.29 0-.49-.41-.98.14.13.11.69-.28.64.03-1.01.44-.4.83.11.67.26-.23.24-.42.12-.61.69-.28.32.28.46.47-.74.2-.6.5-.85.85.69-.29.46-.59.96-.64 0 .25-.6.57-.43.81.2.15.18-.26.25-.34.73.48 1.2 1.5 1.85 2.32.05.07-.15.66.47.34 0 .27.14.59.31.86.18.26.4.48.54.59-.57.33-.62-.19-.85-.44-.32-.38-.47-.82-.89-.95-.53.42-.25.47-.88.75.31.15-.02.58.34.49.01-.15.06-.27.07-.58.89-.43.18.49.47.68.38-.26-.3-.25.31-.56.49.81 1.25 1.66 1.98 2.56.79.84 1.63 1.66 2.42 2.29.11.08.08.34.2.41.16.1.39.03.5.16.18.22-.07 1.12.53.68-.23.37.11.42 0 .73.11.03.29-.26.22-.31.86.05 1.47.49 2.04.97.28.24.56.48.85.65.3.15.62.24.97.19.07.13-.08.15-.18.34.36-.07.71-.09 1.05.13-.22.44-.41.1-.63.54.23.14.86-.35.83.22-.35.76-.23-.36-.62.33-.28-.04-.12-.45-.45-.45-.08 0-.16.13-.24.09-.22.38-.3.66-.19.77-.35.07-.77.8-.92 1.03-.2.73.49.23.49.69-.21.57-.34 0-.41 0-.1-.01-.21.3-.25.3-.3-.01-.58-.25-1.01-.32.02-.38.55-1.32.8-1.31.26-.34.08-.85-.14-.51-.09-.41.45-.45.61-.76-.15-.12-.32 0-.51.38-.29-.05.11-.62-.26-.61.5-.59.37.5.87-.15.26.13.19 1.06.75.62.47-.68-.6-.33.05-.85-.53.25-.53-.25-1.02.1-.1-.15-.28-.26 0-.68-.57.29-1.01-.41-1.4-.93-.5.21-1.01.14-1.05-.25-.32.05-.66.19-.94-.01.19-.29.32-.26.52-.57-.14-.16-.41.22-.61.25-.26-.14-.45-.55-.78-.39-.12.24-.08.4.03.52-.34.16-.54-.21-.9 0-.29-.28.02-.84-.18-1.16-.15-.03-.13.21-.37.44-.3-.23-.01-.71-.38-.9-.15.03-.36.26-.45.1-.24.22-.2.32-.13.41-.46.07-.44-.28-.38-.64-.22-.06-.13.29-.46.35-.12-.31.79-1 .23-1.13-.1.18 0 .29-.28.54.03-.46-.56.1-.51-.24 0 .04.43-.29.41-.4-.02-.1-.47.13-.34.21-.36.4-.21-.47-.57-.07-.31.46.73.45-.06 1.08.13.05.39-.29.61-.48l.32.32zm7.02 6.79c.26-.55.47-1.05.21-1.2l-.54 1.02.33.18zm1.07-2.26l-.23-.13c-.19.55-.54 1.23-.06 1.28.54-.73-.26-.42.29-1.15zm-5.16-4.11c.14.22-.65.91-.08.93.45-.41.19-.45.35-.71.24-.2-.11-.5-.26-.22zm33-5.74c-.04-.3.24-.36-.27-.97-.27-.02.2.47.15.59-.28-.38-.56-.75-.68-.7l.81 1.07zm-2.75 1.17l-.16.09c.32.49.28.64.5 1.04.24-.06-.17-.7-.34-1.13zm.97 1.44c.16.57.39.83.36 1.34.21-.15.12-1.14-.36-1.34zm.54-1.38c.31.49.34 1.07.68.94-.45-.57-.21-.59-.35-.9-.09.09-.24-.11-.33-.04zm-.68-.94c-.13-.24-.09-.32-.2-.54-.1-.01-.25-.18-.31-.05.22.38.4.6.52.59zm.84 1.94c.12.23.11.36.34.69.1-.07.21-.06.35.03-.28-.47-.55-.89-.69-.72zm-2.31-1.59c.41.35.23-.36.58-.31.15.23.25.23.4.44.13.22 0 .2.09.39.22.07.56.66.73.48.09-.11-.05-.41-.08-.61-.53-.8-.98-1.3-1.28-1.27.16.35.2.18.3.27.16.14.59.62.55.79-.22-.07-.47-.26-.81-.87-.27.13-.46.33-.49.7zm-1.84-3.15c.14-.03.2-.16.07-.47.01.38-.15.04-.35-.03l.27.51zm-1.94-1.7c.1.14.55.35.2-.28-.2-.33-.41-.15-.2.28zm.45 2.1c.17-.2.72.55.67-.06-.4-.95-.54-.66-.43-.24-.14.15-.39-.28-.24.3zm-.65.21c.39.53.13-.66.51-.15-.47-.9-.47-.17-.51.15zm-.93-1.92c.18-.05.74.72.54-.14-.11.31-.6-.39-.54.14zm5.32 7.02c.05.11.09.21.02.2.2.46.37.53.51.41-.21-.46-.4-.73-.53-.61zm-1.6-3.07c.3.69.4.08.6.17.2.6.36.65.58.58-.55-1.11-1.08-.94-1.18-.75zm.6 1.2c.1-.22.31.19.49.42.1-.07.13-.19.05-.44-.26.03-.4-.2-.47-.63-.15.03-.19.6-.07.65zm1.21 2.61c-.28-.13-.63-1.02-.85-.68.11.41.28.31.45.64.04.08-.06.26.12.57.09.16.23.42.42.24-.53-.94-.07-.39-.14-.77zm-1.9-.46c-.51-1.04.62.08-.08-1 .26.06.16-.3.19-.49.35.27.71.55 1.05.6l-.34-.69c-.23.17-.43.1-.62-.58-.26.18-.31.62-.55.85.41.77-.31.8.34 1.31zm.26 2.73c.23-.21.3-.59.4-.93.37.23.72.14 1.08-.02-.16-.41-.32-.67-.46-.85-.02.26-.36.19-.29.54.3.23.14-.3.4.04.01.51-.44.16-.67-.14.21-.42-.2-.75-.14-1.19.1-.09.22.14.32.07-.21-.5-.37-.33-.57-.8-.02-.1.17-.38-.04-.4-.11.26.24 1.05-.09 1.08.5.72.27.88.18.95.13-.02.24.71.16.75-.34-.91-.63-.27-.95-.91l.34.9c.18-.05.36-.22.54.23-.16.11-.6-.09-.21.67zm-1.52-3.14c-.12.2-.25-.21-.36-.09.17.85.55.55.36.09zm.26 1.93c.31 0-.09-.51 0-.6.17-.05.41-.02.25-.48-.3-.09-.3.42-.5.15.23.5.07.5.25.93zm-.1 1.03c.1-.09.51.41.41-.13-.07-.02-.13-.13-.19-.34-.17.02-.33.07-.22.47zm-.59-.23c-.15.27-.23-.58-.38-.31-.08.1.11.59-.17.43.08.62.26.09.35.71-.2.09-.54-.66-.42.09.19-.09.33.37.53.28.18-.36.18-.93.49-1.11-.06-.22-.18-.52-.11-.57.24-.34-.24-.13-.14.24-.08.06-.43-.69-.32-.11.09.03.25.27.18.35zm-1.17-1.13c.13.2.29.16.44.11-.09-.61-.25-.1-.34-.71.16-.17.28.14.43.11 0-.39-.08-.23-.22-.74-.13.22-.49.1-.41.67.3-.04.05.35.08.57zm.02 1.17c-.16-.39-.56-1.7-.61-1.05.12.02.23.29.31.72-.11.07-.38-.12-.18.43.21-.13.4 0 .59.08.1 0 .5-.08.22-.24l-.34.07zm-.43-2.46c-.12-.13-.7-.38-.47-.1.09.35.52.56.47.1zm-.67-.65c.25.19-.1-.61.14-.42.1 0 .17.47.27.34l-.19-.74c-.18.19-.33-.17-.5-.1.11.59.32.46.28.92zm-.06 1.97c.05.63.71.57.47.3-.2.29-.27-.59-.47-.3zm-.6-1.64c.2.13.37.56.6.47-.13-.67-.57-.94-.6-.47zm-.56.64c.17.1.64.7.56-.05-.18-.1-.64-.55-.56.05zm.06 1.92c.15-.1.46.83.47.34-.15-.3-.52-1.12-.47-.34zm.27 1.71c.23.35.6.06.9.1-.07-.76-.42-.03-.5-.72.09-.03-.01-.49-.14-.37 0 .28.26.97.09.95-.15-.43-.34-.42-.36.04zm-2.66-.02c-.17 0-.22-.33-.43-.19-.08.61.45.48.43.19zm1.84-3.94s-.12.02-.09.2c.27.16.11-.57.09-.97l-.23.02c.03.52.17.37.23.75zm.33 3.63c.05.48.19.58.33.74-.01-.26.05-.37-.04-.77l-.28.03zm-1.36-3.53c.34.2.35-.35.55-.44.07.51-.1.5-.15.79.25.48.28-.42.32-.8-.35-.23-.49.2-.77-.5.11.53-.03.5.04.96zm.5 2.84c-.67.26.34.51.25-.22-.13.01-.13.17-.25.22zm-.9-.15l.07.96c.01.27-.5.12-.26.38.27-.04.53 0 .73.19.03-.94-.39-.28-.38-1.15.13.04.13-.22.26-.19.04 1.02.85 1.65.82.51-.29 0-.55-.08-.65-.13-.22-.93.18-.53.09-1.17-.3.04-.3.75-.69.6zm-1.11-2.69c.16-.14.14.38.26.39.12-.28-.1-.47.03-.58.04.33.08-.04.18 0 .07.61-.08.59.05.96.09-.03.24.07.24-.19-.03 0-.08-.16-.01-.19.29-.27.31.59.5.77-.09-.76.02-1.06-.11-1.91-.23.22-.29-.02-.54-.2 0 .23.01.45-.09.38-.18.02-.2-.6-.43-.39 0 .37-.15.35-.08.96zm.1 1.15c.26.47.15.69.33.19-.03.72.19.55.19 1.15.15.17.21-.63.1-.58.01.19-.1.24-.13 0l-.02-.38c.13-.11.44.24.44-.19-.15-.38-.31-.09-.45 0-.21-.72-.4-.37-.66-.58-.03.51.12.23.2.38zm-.69 1.53c.12.11.28.1.35.38h-.48c-.06.22-.09.51-.07.96.43.25.43-.61.77-.58.03-.39-.13-.37-.15-.58 0 .03.13-.27.13-.38 0 .09-.13-.17-.14-.19-.03-.18.13-.44-.07-.39.15.96-.3.28-.32.77zm-.58-1.57c.11.36.42.18.63.23-.06-1.13-.44-.62-.63-.23zm-.23.86s-.06-.06-.11-.13c-.07-.1-.03-.38-.18-.4-.05 0-.24-.11-.28.36.11.12.39-.19.38.23-.3-.2-.2.45-.29.55-.07-.23-.22-.24-.39-.23-.01.84.51.46.71.84 0 .19-.06.22-.08.38.21.16.13.15.35.03.12-.72-.31-.07-.19-.79l.34.03c.08-.79-.3-.11-.32-.61 0-.21.03-.26.06-.26.07.07.04 0 0 0zm-.98-.8c.33.23.17-.31.28-.36.26-.11.53.5.74.27-.09-.04-.04-.47-.04-.77-.3.52-.5.08-.93.09l-.05.77zm-1.64-.65c-.04.26-.03.42-.02.58.15.06.24-.25.33-.52-.05-.26-.19-.29-.31-.07zm-.98 1.56c.13-.09.35.31.42-.11-.04-.28-.33-.41-.42.11zm-1.75.93c.06.35.09 0 .27.08.22-.7-.15-.82-.27-.08zm.4-1.88c.1.19.29.89.58.38-.13-.16-.4-.7-.58-.38zm-.45-2.76c.06.11-.13.59.11.44l.16-.55c-.09 0-.18-.13-.27.11zm-.67.57c.08.4.38.33.62-.58-.02-.07-.07-.52-.22-.08.03.03.05.05 0 .21-.12-.23-.26.21-.39.45zm-.5-1.05c-.34.84.21.13.32.14.14.02.2.66.49 0-.27-.03-.51-.44-.8-.14zM26.1 55.1c-.02.28.23.46.42-.03-.14.06-.25-.36-.42.03zm4.28-3.09c.16.06.07.61.32.5.19-.93-.1-.77-.32-.5zm-.49-.37c.22-.18.08.82.3.3-.15-.27 0-.46.18-.75-.16.02-.31.01-.47.45zm-.09-1.85c-.08.45-.33 1.17-.14 1.17.22-.69.14-.87.14-1.17zm-.41.88c.19.32-.52 1.04-.19 1.15.25-.57.41-1.47.19-1.15zm-1.49.19c-.04-.05.06-.3.17-.56-.07-.05-.16-.02-.25.1-.21.43-.1.84.09.46zm.59-2.47c-.1.27-.29.65-.25.73.14-.37.11.09.05.23-.12.28-.17.09-.3.5.18.14.59-.15.72.11.07.14-.08.74.01.85-.15-.03-.61.38-.65.76.31-.55.62-.37.85-.88-.03.06-.1-.18.03-.41.04.15.36-.45.22.1-.06 0-.11-.09-.19.12 0 .25.11.31.05.65-.13.24-.19.42-.13.57.14-.58.24-.17.38-.89-.12-.01-.26.3-.13-.25l.65-1.6c-.06-.01-.11-.04-.16-.07-.2.43-.02.65-.19.75-.04-.01-.19-.07-.11-.26-.02.03.15-.07.14-.14-.04-.28-.23-.13-.37-.17-.09-.03-.05-.59-.31.07.2.07.04.71.17.92-.33.51-.12-.5-.15-.7-.11.04-.48.3-.38-.17.19-.51.19.34.41-.44-.31.22-.21-.22-.37-.38zm-2.64 3.57c-.22.51-.5 1.54-.06 1.06-.04-.07.01-.24.06-.41.18-.2.3-.05.43.02-.3.52-.11.47-.21.76.12.25.32-.17.45 0 .19-.56.1-.36.37-.89-.37-.14-.69-.37-1.04-.55zm-1.72-.14c.14.17.33.19.52.13-.2.4-.24.09-.42.4.02.06.09.07 0 .23.03.02.06.05.1.06.15-.25.32-.63.42-.65-.33.78.25.16.4.22l-.26.51c.48-.43.25.9.65.14-.29.03-.18-.61.17-1-.2-.09-.42-.08-.71.27-.36.01-.13-1.4-.87-.33zm2.08-5.33c.26-.17 0 .27.38-.2.06-.26-.08-.02-.06-.28l-.32.48zm-2.27 2.85c-.08.23.02.29.15.34.4-.47.01-.57-.15-.34zm-1.02 1.39c.34.18-.41.5-.46.87.16.24.42.17.64.21.26-.13.23-.55.46-.61-.09.4-.23.84-.12 1.08.21-.15.46-.45.74-.89-.16-.13-.34-.31-.39.2-.11-.2.02-.61-.11-.78-.58.65-.33-.42-.76-.08zm-.59.75c-.03-.08.1-.2.22-.31-.12-.1.25-.58.11-.66-.25.15-.76 1.34-.33.97zm-.42-21.17s.06-.09-.15-.16c-.16.1-.9-.38-.76-.15.16.09.34.11.91.31zm-5.29 1.05c.09-.21.37-.29-.08-.53-.12.03-.19.38.08.53zm4.63 2.44c-.12-.12.22-.13.23-.22-.56-.02-.83.2-.23.22zm.16.55c-.45-.09.35-.21-.19-.29-.17.03-.54.34.19.29zm.23 3.55c-.25.04-.68.17-.93.2 0 .05.01.11.03.16.46-.14.89-.27.9-.36zm-3.19 3.32c-.16-.14.78-.45.4-.54-.56.21-.4.36-.86.42.02.15.14.22.46.12zm4.57-1.44c-.23 0 .24-.22.3-.31-.51.24-.57.36-.82.53-.34.17-.25.01-.71.27 0 .26.47-.14 1.24-.5zm.45 2.19c-.03-.12-.14-.14-.44.03.18.05-.31.51.44-.03zm-2.4 3.32l-.15-.19c-.63.45-.4.73.15.19zm2.4-1.6c-.07-.09-.07-.26-.44.05.14 0-.05.44.44-.05zm-.01.93c0-.2-.53 0-.72.32.18-.15-.06.54.72-.32zm-1.27 2.86c.36-.45.44-.71.28-.82-.77.69-.39.67-.28.82zm3.12-2.28c.24-.49-.21-.17.09-.73-.35.37-.11.22-.17.38-.11.27-.45.92.08.35zm-2.84 4.89c-.26-.06-.66.22-1.1.58.16.05-.01.71.41.35-.05-.15.58-.84.69-.92zm-1.55-.35c-.52.54.08.41.09.62.1 0 .26-.14.3 0-.34.37-.42.55-.22.57.4-.43.11-.39.51-.83.07.28.39-.09.62-.23-.39-.05-1.27.33-1.3-.13zm-1.9-2.42c0 .06-.08.16-.25.3.21.05.17 0 .18.23.46-.34.14-.63.07-.52zm-.94-.64c.03.14.16.16.43-.04 0-.1.16-.26.03-.31l-.46.35zm-.07-.45c-.39.38-.93.81-.72.99.59-.37.26-.29.54-.57-.03.03.27-.1.31-.23l-.13-.19zm-2.83-2.87c.03.18.16.26.48.16-.11-.14.32-.36.21-.5l-.69.33zm4.4-19.61c.33.21.35.38.48.63.06-.08.47.24.44.07-.19-.16-.83-.89-.91-.69zm.43-1.08c-.06 0-.17-.05-.34-.2-.22.05.2.37.29.55-.03-.14.38-.08.05-.35zm23.94-7.02c-.19.05.18-.87-.22-.34 0 .15-.11.79.22.34zm.05 1.63c-.09-.03 0-.24.2-.56-.1-.18-.33.19-.41-.06-.17.29-.19.89-.11.86.03-.01.23-.42.23-.3-.15.26-.2.63.09.06zm1.38-.44c.29-.39.16-.82-.08-.52 0 .19 0 .39.08.52zm9.75 13.45c-.13.25.93.08.76-.13l-.76.13zm-.62-1.48c-.58.14-.52.31-.49.47.68-.12.53-.3.49-.47zm13.91-4.64c-.28.21-1.18.29-1.05.59.23.02.53 0 .95-.15-.08-.17.16-.27.1-.44zm-.37-2.61c-.37.1-.32.26-.48.38-.46.09-.99.14-.85.5.25-.08.39-.18.51-.28.03.21.24.25.64.09-.25-.28.07-.47.18-.7zm-16.82 5.95c.2.08-.24.58.49.31.52-.23-.44.07-.24-.13.22-.09.42-.17.33-.23-.62.31-.16-.13-.58.05zm15.1-6.26c.13.2.58.44 1.05.12-.19-.34-1.3-.1-.85-.72-.54.12-.29.45-.2.6zm-1.28-.71c.44-.03.6.26 1.25 0 .03-.5-1.11-.5-1.25 0zm-15.37 3.33c0-.14.52-.46.35-.55-.44.26-.7.72-.35.55zm1.4-6.82l.54-.54-.14-.15c-.36.35-.56.61-.4.69zm-7.09-4.23c.15.13.63.14.62-.1-.18.08-.63-.2-.62.1zm-.24-1.63c.11.17-.15.73.14.7.18-.41.15-1.1-.14-.7zm-1.54 2.26c.3-.73-.29-.27-.4-.17.1.14.15.48.4.17zm-1.62-2.67c.21-.07.02.42.04.61.23.14.46.15.68-.19-.06.26.07.25.07.43.52-.48.92.01 1.21.31.07-.36.39.04.26-.31-.1-.09-.21.14-.31.07.14-.44 0-.74-.11-.88-.09-.12-.22.12-.38.05-.15-.06-.24-.52-.39-.57-.08-.03-.16.2-.25.12-.15-.13-.59-.43-.81.35zm-8.02-.38c.16.08.34.53.49.58.17.05.18-.33.31-.38.06-.03.06.18.07.19.06.03.05-.19.06-.19.33-.07.51-.19.58-.77-.25-.19-.63.31-.99.38-.19.04-.51-.63-.52.19zm-5.48 9.07c.13.01.34.27.25-.1-.26-.64-.48-.28-.25.1zm.22-1.53c-.33-.28.18.87.3.91-.27-.53.06-.28-.3-.91zm-.63-.78c.14 0 .36.57.47.43.05-.56-.77-1.33-.47-.43zm5.82-6c-.03-.56-.19-.59-.22-1.15.05-.04.13 0 .12-.19-.37.07-.29 1.31.1 1.34zM26.76 2.8c.25.31.55-.06.66-.34-.33.14-.64-.32-.66.34zm-2.25.93c.2-.49.38.13.71.19-.13-.46 0-.61-.27-.92-.06.33-.67.08-.43.73zM20 6.04c.22.19.52.09.32-.35-.22-.19-.53-.09-.32.35zm4.91 8.95c.36.25.2-.18.36-.35.27.71.28.08.3.08.13 0 .37.44.51.41-.38-.76.15-.45-.05-1.02.12 0 .22-.27.37.28-.14.14-.41-.34-.21.27.16.13.28.2.35.08.06-.11-.02-1.41.37-.51-.03 0 0 .16.07.18-.12-.54.61.69.33-.3-.12-.24-.23.04-.36-.29.26-.15.64.32.57-.37.05 0 .26.49.29.51.07.06.34-.19.39-.12.01.02.1.36.11.37.12.02.12-.41.29-.25.07.22.14.53.21.54.01-.41-.17-.6-.32-.91.19-.23-.15-.75.1-1 .12-.02.21.49.34.33-.04-.32.08-.36.15-.42.31-.27.75-.44 1.22-.21 0-.28-.02-.61.15-.59.64-.25.95-.39 1.66-.55-.08-1.37-.52-.33-.75-.31-.4.03-.81-.24-1.17-.27.06.32.03.49-.03.58-.63-.3-.82.3-1.26.6-.14-.4.04-.63-.2-.55 0 .36-.14.45-.13.81-.5-.04-.81.47-1.18.06-.13.43-.39.47-.68.21.38.86-.16.5-.16.85-.12-.37.03-.4-.08-.78-.09.39-.3.07-.56.17.18.73.29-.02.45.46.21.66-.31.04-.47.34.08.22.15.43.03.39-.12-.61-.08-.13-.25-.11-.27.02-.48.05-.36.56-.14-.3-.23-.55-.26-.72-.3-.09-.02.45-.05.64-.43.02-.75.2-1.06-.18-.1-.21-.09-.43-.26-.51.02.24.24.68.27.92-.16.06-.65-.58-.33.17.36.1.36-.35.68.1 0 .21-.14.32-.21.51-.12.32-.12-.04-.36-.03.18.62.53.69.8.55.28-.11.49-.43.37-.66zm-1.97 2.06c-.34-.57-.56-.46-.46-.16.35.57.56.46.46.16zm1.09 4.09c.13-.05.2-.24.43-.04-.23-.25-.88-.85-.67-.48.03 0 .07 0 .16.12-.06.07-.06.18.08.4zm-1.5-1.28c.28.2.31-.03.13-.34-.28-.22-.33.03-.13.34zm-.74-.63c.5.59.44.3.46.13-.37-.53-.32-.12-.46-.13zm-7.27-8.19c.51.23.08-.53.09-.82-.27.16-.32.43-.09.82zm-.88-.76c-.36-.48-.55-.34-.72-.15.37.47.55.34.72.15zm-.16 1.64c.18-.12.34-.24.07-.56-.3-.14-.57.11-.07.56zm5.95 7.27c.36.04-.3-.46-.05-.47.21.04 1.07.27.52-.41-.28.02-.14.51-.55.2.08.06.04-.23-.09-.18.22.38-.55.22.17.86zm-6.77-6.53c.06-.28.34.03.44-.16-.23-.24-.43-.41-.6-.49-.18.13.01.4.16.65zm5.9 8.19c-.14-.5.71 0 .27-.53-.26 0-.83-.49-1.02-.34.17.23.32.36.58.5-.08.06 0 .2.17.37zm-1.43-.39c.15-.09-.08-.32-.48-.62-.1.14.15.51.48.62zm-2.21 2.62c.06-.02.18.02.37.14.27-.04-.03-.51.25-.36.33.22-.11.25.36.49.44.01.06-.22.08-.44-.55-.23-.63-.41-1.02-.55.12.35 0 .54-.03.72zm-.28 3.87c0-.12.25-.04.27-.15-.53-.14-.43-.25-.87-.39-.06.17.32.36.6.54zm-.33.76c.19-.08.72 0 .5-.2a2.33 2.33 0 00-.57-.13c-.48-.38.55-.19.19-.44-.56-.13-.44.25-.76.31.27.1.68.2.71.29-.34-.1-.2.15-.45.1.41.53.11.18.38.06zM.96 36.05c-.04-.39.32-.53-.2-.74-.04.11-.21.07-.38.01.32.31-.62.67.59.73zm.39.16c.19-.01.24-.18 0-.19-.18.2-.75.24-.76.52.62.04.39-.27.76-.33zm-.33 1.34c.24-.15.15-.58-.42-.53.32.23-.28.47.42.53zm6.83.75c-.17-.17-.24-.4-.63-.45-.21.36.03.4.63.45zm-6.39 1.47c.05-.37.19-.46-.45-.5-.38.26 0 .53.45.5zm6.71 4.28c-.04-.2-.09-.37-.32-.39-.33.13-.59.27-.67.42.74-.38.64 0 1-.03zm-.21.59c.08-.09.65-.51.08-.38-.75.51-.17-.15-.46-.17-1.06.43-.04.63.38.55zm-1.39 4.57c.16-.22.06-.73-.44-.48.48.02-.07.56.44.48zm1.85 2.84c-.22.11-.39.13-.47 0-.52.3-.59.53-.64.77.28-.2.42-.18.47.01.52-.31.58-.54.64-.77zm-.33 1.22c.36-.32.54-.6.78-.89-.41.32-1.23.72-.78.89zm3.11-2.25c-.42-.08-.45-.77-1.18-.38-.15.27.15.02.3.1.24.14.22.79.88.28zm.49 3.23c.26-.02.45.12.84-.19-.27-.08.06-.35-.12-.45l-.72.63zm-1.15.42c-.08-.2-.24-.24-.43-.22-.38.22-.92.9-.48.63.03-.3.69-.35.9-.41zm.49 1.48c-.27-.07-.23-.84-.75-.3.26.07.24.86.75.3zm.14-.13c.58-.58-.35-.69-.41-1.08-.28.23-.29-.14-.61.17.44.43.85.22 1.01.91zM28.2 13.6c-.12-.51-.05-.75.14-.81.04.23.03.39-.07.4.04.16.07.17.11.17.05.25-.1.18-.18.23zm16.41 36.89c.3.56-.04.33-.19.32-.22-.49.07-.31.19-.32zM14.8 28.77c.31.23.42.72-.06.8-.79-.17.03-.08.05-.16-.39-.25-.07-.49 0-.64zm-.93 8.04c.23.15.16.39.26.73-.28-.16-.48-.5-.26-.73zm29.41 25.66c.18 1.03-.61.63-.97.61-.24-.01-.53.48-.75-.23.67.26 1.33-.15 1.72-.37zm5.39-9.27c-.11.05.02.27-.11.31-.32-.33-.64-.71-.99-1.18.3.08.64.28 1.11.88zm-3.59 9.32c-.05.48-.71.3-1 .52.09-.55.7-.39 1-.52zm-7.5.68l1.4-.15c-.66.96-1.48.06-2.54.36-.18-.32.8-.19 1.14-.21zm12-9.45l-.58.39c.04-.18.05-1.04.58-.39zm1.19-1.6c.24.42.04.41-.19.41-.23-.42-.04-.41.19-.41zm-.62.98c.03.46-.33.29-.69.24-.11-.33 0-.5.22-.61.2.26.35.36.47.37zm-7.44-.74c-.3-.11-.04.46-.22.5-.57-1.04-.31.21-.57-.03-.03-.15-.06-.31-.15-.55.15.07.26-.32.45.07.06-.19.09-.93.49.01zm-5.28-34.44c-.33.17-.6 0-.93-.22.28-.25.59-.26.91-.18.09-.05.06.17.02.4zM5.68 14.8c.12-.19.26-.37.4-.54.24.2.21 1-.4.54zm51.03-7.94c.22-.24.67-.16.8-.03.11.11.3.49-.02.77-.13-.49-.43-.34-.78-.74zM8.56 11.04c.39.07.58-.38.88-.63.3-.25.41-.87.95-.41-.65.25-.82 1.71-1.83 1.03zM29.52.75c-.41-.62.68-.29.77-.66.04.22.19.14.3.16-.04.82-.99.16-1.08.5zM14.2 8.58c.2-.12.4-.24.72.2-.19.18-.38.3-.72-.2zm-4.8 4.08c-.43-.32.46-.26.03-.59.41.26.34-.67.88-.08-.28.27-.69.24-.91.66zm-1.88 2.26c.17-.4.7-.12.98-.3 0 .03-.34.89-.98.3zm2.65-1.96c.21-.21.38-.51.86-.06-.34-.11-.36.54-.86.06zm1.23-.44c-.43-.5-.43.09-.89-.46.21-.22.67.21.86-.05.23.25.21.41.03.52zm28.31 5.59c-.29.59-.43.19-.58.18-.42-.08-.73-.21-1.08-.37-.18-.09-.56.58-.45-.33.28.47.77.05 1.15.17.28.11.58.32.96.35zm-3.97-.51c-.09.04-.35.2-.46-.06.14-.54.33-.22.46.06zm-2.69-.38c-.05.28-.18.29-.29.38-.11-.73.2-.25.29-.38zm2.15.12c-.02.75-.51.3-.61.11.12-.42.42-.01.61-.11zm7.84 1.93c-.37.34-.33.05-.48-.11.27-.34.3.13.48.11zm3.5 1.77c-.47.42-.23-.01-.34-.07-.38-.21-.91-.48-1.26-.69.71-.8.46-.08.57-.02.31.18.63.37 1.02.78zm-6.27-2.69c-.28.59-.66.23-.46-.21.04.28.29 0 .46.21zm2.31.58c-.26.46-.41.3-.34.03.2-.37.21.03.34-.03zM2.06 22.78c-.34-.33.23-.77.25-1.14.34.34-.24.77-.25 1.14zM22.74 63.8c-.23.25-.48.12-.72.32-.03.17-.06.35.02.42-.41.59.04-.46-.27-.32.31-.29.89-.75.97-.42zm1.89 1.18c-.38.9-.52.15-.74-.09.21-.38.5.12.74.09zm-3.71.97c-.26-.14-.54-.25-.28-.79-.12.43.66.14.28.79zm2.27.32c-.32.44-.55-.2-.56-.43-.23-.07-.41.22-.44-.18.49-.4.79.36 1 .62zm-1.57-1.69c-.25.37-.29-.09-.5-.03-.07.02-.22.31-.24.31-.17.02-.05-.29-.17-.3-.09 0-.57.6-.75.26.17-.57.33-.21.5-.17.21-.57.53-.61.32-.91.39-.56.09.25.17.3.11.07.16-.28.24-.31.18-.06.15.58.49.47-.1.2-.12.32-.07.39zM17 62.17c-.35-.31-.82.23-1.14-.3.27-.32.09-.37-.01-.48.66-.55 1.09-.26 1.03.47.25-.41.18-.59.52-.81-.41-.09-1.27-.69-.69-1.67.27.25.1.76.38 1 .06.11.56-.29.39-.43.79-.21 1.15 1.04 1.77.94-.48.54-.8.16-1.05.23-.28.33-.13.86.1.53.04.6-.5.16-.65.03.04-.38.33-.45.58-.77-.37-.08-.32-.43-.56-.6-.47.58 0 .52-.02.68 0 .06-.28.18-.28.27 0 .13.31.15-.08.64-.08-.05-.18.16-.28.27zm3.48 5.06c-.41-.08-.97.32-1.4.37-.32.04.01-.36-.37-.19-.75.32-1.67.04-2.75-.42.04-.28-.18-.41-.07-.72.41-.77.76-.13.94-.99.45-.07.32.34.78.25.38-.71-.27-.75-.56-1.02.16-.3.3-.29.47-.61.05.91.92.68 1.5 1.08-.15.39-.29.26-.43.2-.26.02-.53.37-.8.66.06.67.35.02.62-.1.67.41 1.06 1.27 1.87.97-.05.26.05.43.21.53zm-1.89-.53c.1-.25-.1-.3-.1-.49-.41.65.1.67.38.85.64.27.03-.33-.28-.36zm-1.09-3.73c.13-.17.22 0 .35-.23.21-.37-.29-.29-.37-.47-.1.16.02.19.06.27-.27.54-.66.59-.24.76-.44.32-.4.11-.58-.15-.05-.07.3-.1.26-.06.12-.14-.49-.24-.56-.37.18-.37.31-.23.44-.17.62-.49 1.17-.64 1.68-.28-.12.11-.24.22-.36.45.28-.11.6-.72.84-.37-.27.43-.37.74-.13.81-.63.96-.84.31-1.27.34.26-.46.32-.25.39-.66-.16 0-.37.48-.51.13zm7.79.84c-.1.26-.27-.02-.37.28-.21-.1-.49-.17-.66-.27-.27-.16-.64-.24-.45-.81.22 0 .05.4.34.35l.2-.54c0-.69-.43-.26-.8-.54.18-.71.35-.18.53-.19.14-.01.39-.21.52-.2.44.02.8.37 1.14.25.06.5-.23.3-.37.89.16-.77-.45-.89-.82-.74-.12.54-.07.91.16 1.1.21-.45.19-.67-.05-.64.47-.38.35.87.64 1.08zm-9.67-2.1c-.78.46-.16-.61-.7-.8.17.45-.24.66-.6.5.59-.7-.12-.45.14-1.12.14-.07.67-.24.35-.46.52-.54.45.16.68.3-.31.32-.46-.18-.86.54.07.05.2-.14.3-.25l.5.4c.14.06.42-.83.66-.45-.19.59-1.11.92-.48 1.33zm11.81 4.54c.3.15.11.59.5.33-.1.75-.66.12-.5-.33zm29.82-29.86c-.39-.19 0-.57-.09-.84.42.19.02.58.09.84zM27.6 65.9c-.23.21-.5.26-.66.81-.31-.13-.72-.14-.58-.77.09.42.56.32.8.23.04-.18-.08-.18-.13-.24.16-.34.5-.4.58-.04zm39.34-29.83c.34.05.42.19.35.39.52.05.4-.12.76.07.3.38.2.76.24 1.16.08.63.28 1.3.22 1.97-.01.15-.24.23-.25.25-.16.95.14 2.01.01 2.99-.02.17-.34.33-.35.51-.01.11.28.37.25.49-.04.15-.3.26-.33.41-.18.65-.23 1.54-.66 2.16-.47-.27-.52-.06-.93-.26.08.45.38.12.89.36-.11.74-.43.98-.03 1.49.31.38-.3.17-.36.28-.11.18.37.63-.32.62 1.17.43.17.41.46.78.26-.1.69.03 1.05.06-.2-.28-.67-.27-.94-.68.06-.32.48-.17.5-.55l.7.32c.22-.28-.9-.47-.82-.93.32.13.31.27.66.4.32-.3-.44-.76.16-.82-.28-.43-.6-.84-.29-1.31.23.24.33.5.31.77.28 0 .46-.11.69-.17.07-.21-.42-.05-.4-.04-.26-.16.03-.18-.07-.35-.12-.21-.86-.49-.17-.6.52.08.13.28.25.41.12.14.67.22.64.46.86-.1.46-.5.75-.84-.85-.3-.29.34-.73.29-.81-.16-.36-.49-.75-.7.29-.26.36.07.94.22.4-.06.94.02.99-.44.65.21 1.03.76.36.68.06.33.44-.15.95.21.36.37-.19.48-.28.72-.04.1.11.29.02.48-.23.46-.77.87-.98 1.38-.09.2.07.35 0 .48-.39.69-1.06 1.44-1.32 2.15-.11.31-.39.43-.58.67-.61.72-1.2 1.42-1.81 2.13-.31.35-.62.69-.95 1-.35.3-.71.59-1.09.84-.15.1-.41.03-.57.09-.38.15-.45.55-.72.88-.21.25-.54.15-.54.63-.15.3-.58-.14-.79 0-.07.62-.92.61-.99 1.3-.09.17-.54-.51-.28-.54-.74-.2-.44.83-.16.98-.39.14-.74.46-1.33-.06.25.95-1.39.37-1.03 1.38-.03.25-.42-.12-.48-.1-.07.03.03.28-.1.34-.42.18-1.29.29-1.77.62-.11.08-.36.33-.17.59-.11.04-.28-.23-.42-.41-.32.46-.66.72-1.12.77-.07.06.07.24.13.37-.49-.08-.39.42-.88.09-.24.02.08.38-.05.47-.31-.08-.76.02-1.14.2-.22.11-.56.48-.67.59-.15.15-.19.49-.33.62-.58.45-1.3.65-1.89.85-.55.18-.81 1.13-1.45.6-.13.11-.07.41-.23.49-.14.07-.25-.15-.35-.08-.19.12-.39.52-.62.61-.53.21-1.15.04-1.67.33-.13.08-.12.22-.23.26-.16.06-.38-.12-.54-.07-.12.04-.18.4-.29.46-.05.03-.23-.14-.34-.12-.18.03-.16.23-.34.27-.77.14-1.61.16-2.25.43-.15.07-.21-.19-.33-.15-.34.12-.7.88-1.35.35-.31.61-.96.16-1.66.34-.02-.36.32-.14.25-.58-.25-.03-.28.3-.35.59-.21-.33-.66-.12-1-.17-.23-.06-.08.56-.27.58-1.02.18-1.94-.19-2.8-.05-.23.04-.4.32-.62.34-.64.06-1.26-.3-1.89-.37-.19-.02-.44.17-.62.1-.18-.06-.26-.36-.45-.47-.17-.09-.33.14-.52.1-.73-.16-1.55-.51-2.28-.85.06-.58.39.02.72-.04.2-.03.78-.76.68.13.33.17.35-.62.67-.46-.06.32 0 .5.1.6.02-.43.45-.78.61-.08.2-.69-.32-.37-.15-1 .65-.02.91.11 1.44.04.16-.73-.37-.36-.16-1.18.6.49 1.12-.62 1.54.34.2-.09.21-.28.13-.57.22-.25.32.52.36.03.21.07-.13.5-.13.76.67-.4 1.07-.58 1.76-.27 0-.19-.11-.15-.18-.19.33 0 1.15-.46 1.65 0 .33.1.19-.68.52-.58.13.27.34.36.57.37.16.07.16-.15.15-.39.21.08.53.42.52-.22-.11-.42-.51-.04-.73-.16-.01-.5-.1-.82-.32-.76-.07.04-.07.19-.16.19.07.19.22.19.22.57-1.12-.2-1.9-.14-2.67-.11-.77 0-1.54-.01-2.55-.3-.08-.26 0-.3.05-.57-.55-.01-1.03.04-1.45-.23-.1.03-.11.37-.23.35-.22-.15-.45-.29-.28-1.03-.26.18-.29.11-.29.72-.07-.14-.01-.45-.19-.43.15-.67.48-.65.69-1.04.25.41.26.3.71.33.04.7-.3.06-.33.52.11.49.66.17.49-.49.3.25.52-.33.66.11 0 .41-.16.36-.29.35.06.53.53.16.54-.32.4.23.89.31 1.41.13.23.12.34.5.57.63.09-.04.07-.38.18-.37.79.2 1.78-.23 2.45.22.12.64-.25.3-.41.39.34.67.62-.26.73-.58 1.1.46 1.89.19 2.9-.05.12.35.28.1.18.56.31.18.16-.32.28-.42.73.21 1.51.07 2.08-.19.3-.14.67-.33.97-.41.26-.07.51.11.73.01.13-.05.22-.28.36-.31.13-.04.31.29.45.26.12-.02.73-.45.87-.68.06-.09-.07-.36.03-.41.3.19.36.14.64-.01.26-.13.51.27.41-.36.24-.13.47.36.71.12-.1-.2-.21-.09-.32-.07-.22-.73.22-.3.4-.38.49-.22.93-.48 1.41-.73.47-.25.96-.54 1.61-.74.39-.13 1.04-.51 1.49-.87.12-.09.27.08.4-.04.26-.24.3-.9.91-.38-.2-.41.31-1.02.63-.9.07.03.01.34-.1.3.19.28.61-.01.17-.35.32.18.6.16.79-.13-.12-.14-.18-.05-.26-.04-.02-.56.78-.73 1.08-1.15.58.16 1.16.23 1.53-.31-.31-.23-.37.26-.8-.31.51-.2.05-.77.53-1.05.28-.17.76-.2 1.01-.48.16.16 0 .22-.04.32.51.21.41-.42-.19-.63.1-.18.26-.2.53 0-.05-.72.81-1.09 1-1.75.28.59.86.18.64-.18-.6-.38.14.65-.53.04.24-.34.54-.69.83-1.01.27-.34.5-.66.62-.93.25.19.33.11.54.24l-.34-.52c.21-.31.49-.6.62-.94.24-.58.8-1.05 1.16-1.66.08-.14 0-.4.07-.55.34-.65 1.02-1.78 1.22-2.71.06-.28-.11-.59-.07-.85.08-.56.39-1.03.5-1.57.12-.68.08-1.38.16-2 .02-.15.24-.14.26-.3.02-.17-.15-.27-.12-.37.06-.22.54-.39-.06-.71.26-1.02.18-1.17.34-2.2.34.02.39.14.76.15l-.07.7c-.06.19.67.11.94.19.12-.19-.34-.17-.35-.31-.02-.23.31-.05.4-.14.14-.14-.17-.26-.16-.29.04-.22.78-.2.43-.42zM35.89 64.79c-.17.05-.37-.85-.52-.19.17-.04.37.86.52.19zm-3.84 2.68c-.16-.23-.42-.29-.62-.45-.13.69.39 1.19.47 1.01-.26-.13.17-.28.14-.57zm.82 2.19c.03-.52-.61-.8-.77-.45.2.24.37.53.77.45zm3.37-.47c-.23-.12-.83-.49-.88.2.33-.33.61.3.88-.2zm2-4.31c-.16-.4-.76.28-.57.44.03-.41.57.02.57-.44zm6.85 2.08c-.3-.1-.53-.06-.6.36.24.06.75.29.6-.36zm2.64-1.27c-.2-.41-.17.28-.13.45.28-.09.56-.19.82-.31-.19-.68-.45-.09-.69-.14zm8.93-7.21c-.28.12-.13.42.02.73.17-.17.35-.34-.02-.73zm-.81-1.57c-.12.37-1.31.07-.75.88.41-.04.16-.02.08-.31-.19-.63 1.5.4.67-.56zm1.16-1.57c-.36-.12-.41.34.04.78.36-.12.04-.5-.04-.78zm.4.14c.14-.22.51.11.65-.11-.4-.52-.89-.23-.65.11zm6.07-.16l-.25.31c.6.67.86 0 .25-.31zm.78-1.3c-.12.56-.96-.29-1.12.18.51.36.71.09 1.09.16.59.26-.08.34.5.6.23-.27-.23-.63-.47-.95zm3.44-1.75c.07-.12.16-.24.22-.36-.6-.42-.9.07-.22.36zm-1.36-1.47c-.17.24-.21.47.03.71.1-.08.27-.03.44.01.12-.24-.05-.48-.47-.73zm3.72-4.22c.44-.07 1.03.04 1.32-.21-.58-.39-.67.09-.88.15-.06.02-.29-.13-.36-.13.03 0-.29.14-.26.13-.19.08-.17.23-.34.32.5.3.41-.1.52-.26zm.26.9l-.2.5c.48.38.82-.44.2-.5zm-1.61.37c.93.29.33-.45.99-.39-.42-.13-.08-.36-.42-.5-.39.27-.14.57-.58.89zm1.23 1.46c.34-.15-.13-.4-.12-.64 0-.12.83-.28.03-.57-.34.08-.6.92.09 1.21zm-1.13 1.37c.02-.28.11-.56-.44-.81-.02.27-.1.55.44.81zm-2.17-11.36c-.37-.03-.82-.11-.81.13.37.23.52.31 1.12.3.19-.22-.34-.25-.31-.43zm-.9-1.41c-.06.09-.24.11-.41.12.03-.09-.05-.23-.17-.11.39.25-.21.27-.11.6.81.16.58-.24.48-.46.3.07.54-.05.22-.15zM26.68 64.02c-.41-.09-.58.28-1.05.48-.15-.36-.2-.82-.25-1.28.38-.61.81-.66 1.22-.83-.24.33-.48.65-.78.56-.17.48-.07.64.16.65.35-.9 1.55-1.72 1.3-.21-.2-.08-.16-.42-.41-.12.12.96 1.07-.08 1.14.74l.17-.75c-.27-.23-.44.12-.69 0 .1-1.12.97-.73.9-.14.27-.16.47-.13.65.14-.14.32-.36.25-.48.69-.15-.05.07-.63-.13-.62-.13 0-.15.55-.29.52-.03.26.17.22.29.27-.26.79-.66.78-.97.73-.29-.05-.48-.77-.79-.83zm-.56 2.44l-.27-.08c.34-.37-.04-.38.17-.95.28.06.17.57.11 1.03zm1.79-.68c.32.2.32.07.5.3-.06.29-.76.28-.5-.3z"
                ></path>
              </g>
              <path
                style={{
                  fill: state.lightest,
                }}
                d="M49.24 37.78c-1.22 5.67-5.75 9.7-14.35 9.7-9.93 0-14.92-6.36-14.92-14s4.91-13.97 15.26-13.97c9.1 0 13.36 4.72 14.04 9.55h-8.75c-.38-1.45-1.48-3.65-5.33-3.65-4.07 0-6.05 3.2-6.05 7.88 0 4.26 1.6 8.22 6.09 8.22 3.23 0 4.57-1.45 5.33-3.73h8.68z"
              ></path>
            </svg>
            <h3 className="text-2xl text-lightest">
              Color<span style={{ color: state.brand }}>Hub</span>
            </h3>
            <p className="text-sm text-lightest">
              Find the perfect palette for your next projects
            </p>
            <p className="text-sm text-light">
              View over 170 palettes on live websites
            </p>
            <div
              className="flex items-center py-1 px-2 font-medium text-sm bg-white rounded-lg"
              style={{ color: state.dark }}
            >
              Visit
            </div>
          </a>

          <a
            href="http://www.profileme.dev"
            target="_blank"
            rel="noreferrer"
            className="relative w-full h-full rounded-xl flex flex-col justify-center p-5 text-lightest gap-y-3 items-start cursor-pointer"
            style={{
              background: `linear-gradient(to bottom, ${state.dark}, ${state.darkest}`,
            }}
          >
            <div className="absolute right-3 top-3 px-1.5 py-1 text-xs font-medium">
              Ad
            </div>

            <h3 className="text-xl text-lightest">
              ProfileMe<span style={{ color: state.brand }}>.dev</span>
            </h3>
            <p className="text-sm text-lightest">
              Create an amazing GitHub profile in minutes
            </p>

            <div
              className="flex items-center py-1 px-2 font-medium text-sm bg-white rounded-lg"
              style={{ color: state.dark }}
            >
              Visit
            </div>
          </a>
        </section>
      </main>

      <Footer state={state} />
    </div>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <LandingLayout>{page}</LandingLayout>;
// };
