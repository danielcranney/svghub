import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Undraw1 } from "../components/illustrations/Undraw1";
import { Undraw2 } from "../components/illustrations/Undraw2";
import { Undraw3 } from "../components/illustrations/Undraw3";
import { Header } from "../components/structure/Header";
import { ThemeSwatch } from "../components/ThemeSwatch";
import { CurrentThemeSwatch } from "../components/CurrentThemeSwatch";
import { LandingLayout } from "../components/layouts/LandingLayout";
import { SiteLogo } from "../components/site-logo/SiteLogo";
import { Footer } from "../components/structure/Footer";

const data = [
  {
    brand: "#8ec1d6",
    darkest: "#263141",
    dark: "#3d4b5f",
    mid: "#8799af",
    light: "#CBD5E1",
    lightest: "#ffffff",
  },
  {
    brand: "#f62f63",
    darkest: "#070616",
    dark: "#171435",
    mid: "#8f8ac0",
    light: "#d6d4e8",
    lightest: "#ffffff",
  },
  {
    brand: "#b38c91",
    darkest: "#6e6e58",
    dark: "#8f8f73",
    mid: "#7da3b0",
    light: "#cdd2e0",
    lightest: "#e9ecf4",
  },
  {
    brand: "#f6dc3b",
    darkest: "#060620",
    dark: "#10113c",
    mid: "#747898",
    light: "#c3c6d9",
    lightest: "#FFFFFF",
  },
  {
    brand: "#8599b6",
    darkest: "#141d2c",
    dark: "#1E293B",
    mid: "#94A3B8",
    light: "#dbe2eb",
    lightest: "#FFFFFF",
  },
];

export default function Home() {
  const [state, setState] = useState({
    brand: "#833ab4",
    darkest: "#242424",
    dark: "#363636",
    mid: "#646464",
    light: "#e3e9f1",
    lightest: "#FFFFFF",
  });
  function handlePaletteSwitch(brand, darkest, dark, mid, light, lightest) {
    setState({
      brand,
      darkest,
      dark,
      mid,
      light,
      lightest,
    });
  }
  return (
    <div id="site-wrapper">
      <div id="gradient-bg"></div>
      <Head>
        <title>svghub</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main id="landing-page">
        <section className="hero">
          <h1>Find unique artwork that brings your project to life</h1>
          <p className="text-xl">
            We sell high-quality illustrations and icons made by some of the
            world&apos;s best artists.
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
            <button className="btn-lg btn-white">
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
            </button>
          </div>
        </section>
      </main>

     <Footer />
    </div>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <LandingLayout>{page}</LandingLayout>;
// };
