import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Undraw1 } from "../components/illustrations/Undraw1";
import { Undraw2 } from "../components/illustrations/Undraw2";
import { Undraw3 } from "../components/illustrations/Undraw3";
import { ThemeSwatch } from "../components/ThemeSwatch";
import { CurrentThemeSwatch } from "../components/CurrentThemeSwatch";
import { AsideLayout } from "../components/layouts/AsideLayout";
import { Header } from "../components/structure/Header";

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

export default function Illustrations() {
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
    <div className="flex w-full flex-col relative bg-white">
      <div className="background bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 fixed h-full w-full z-0"></div>
      <Head>
        <title>
          SVGHub | Find the perfect illustration for your next project
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className="aside-layout">
        <aside>
          <div className="box">
            <p className="header-sm">Current Theme</p>
            <CurrentThemeSwatch
              brand={state.brand}
              darkest={state.darkest}
              dark={state.dark}
              mid={state.mid}
              light={state.light}
              lightest={state.lightest}
              handlePaletteSwitch={handlePaletteSwitch}
            />
          </div>

          <div className="box mt-6">
            <p className="header-sm">Custom Themes</p>
            {data.map((palette, index) => {
              return (
                <div key={index}>
                  <ThemeSwatch
                    brand={palette.brand}
                    darkest={palette.darkest}
                    dark={palette.dark}
                    mid={palette.mid}
                    light={palette.light}
                    lightest={palette.lightest}
                    handlePaletteSwitch={handlePaletteSwitch}
                  />
                </div>
              );
            })}
          </div>
        </aside>

        <div className="content">
          <article className="grid grid-cols-3 gap-5">
            <div className="box justify-center">
              <div className="flex items-center w-full h-52">
                <Undraw1 state={state} />
              </div>
              <div>
                <p className="font-bold">Sat on Car</p>
              </div>
              <div className="flex items-center gap-x-2 brd">
                <div className="w-8 h-8 block overflow-hidden rounded-full">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    }
                    width={580}
                    height={580}
                    className="scale-150"
                    alt="Testimonial Image 1"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">
                    by <a className="text-sm">@idonthaveaname</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="box justify-center">
              <div className="flex items-center w-full h-52">
                <Undraw2 state={state} />
              </div>
              <div>
                <p className="font-bold">Woman in Nature</p>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="w-6 h-6 block overflow-hidden rounded-full">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    }
                    width={580}
                    height={580}
                    className="scale-150"
                    alt="Testimonial Image 1"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Dan Cranney</p>
                  <a className="text-sm">@idonthaveaname</a>
                </div>
              </div>
            </div>

            <div className="box justify-center">
              <div className="flex items-center w-full h-52">
                <Undraw3 state={state} />
              </div>
              <div>
                <p className="font-bold">Drinking</p>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="w-6 h-6 block overflow-hidden rounded-full">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    }
                    width={580}
                    height={580}
                    className="scale-150"
                    alt="Testimonial Image 1"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Dan Cranney</p>
                  <a className="text-sm">@idonthaveaname</a>
                </div>
              </div>
            </div>
          </article>

          {/* Animation Collection */}
          <div className="flex flex-col mt-8">
            <div className="flex">
              {/* Title */}
              <div className="flex flex-col mb-4">
                <p className="header-sm">Collection</p>
                <h3>Anime</h3>
                <p>
                  Add some anime to your project with <a>@idonthaveaname</a>
                  &apos;s beautiful anime collection.
                </p>
              </div>
              {/* Pagination */}
              <div className="ml-auto mt-auto mb-2 w-6 h-10 flex items-center justify-center text-brand z-10">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  ></path>
                </svg>
              </div>
              <div className="mt-auto mb-2 w-6 h-10 flex items-center justify-center text-brand z-10">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
            {/* Scollbar */}
            <div className="relative">
              <div className="scrollable-container">
                <div className="flex flex-nowrap gap-x-5">
                  <div className="inline-block">
                    <div className="w-40 h-40 max-w-xs overflow-hidden rounded-lg box hover:shadow-xl shadow-dark/10 transition-shadow duration-300 ease-in-out">
                      <Undraw1 state={state} />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-40 h-40 max-w-xs overflow-hidden rounded-lg box hover:shadow-xl shadow-dark/10 transition-shadow duration-300 ease-in-out">
                      <Undraw2 state={state} />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-40 h-40 max-w-xs overflow-hidden rounded-lg box hover:shadow-xl shadow-dark/10 transition-shadow duration-300 ease-in-out">
                      <Undraw3 state={state} />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-40 h-40 max-w-xs overflow-hidden rounded-lg box hover:shadow-xl shadow-dark/10 transition-shadow duration-300 ease-in-out">
                      <Undraw1 state={state} />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-40 h-40 max-w-xs overflow-hidden rounded-lg box hover:shadow-xl shadow-dark/10 transition-shadow duration-300 ease-in-out">
                      <Undraw2 state={state} />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-40 h-40 max-w-xs overflow-hidden rounded-lg box hover:shadow-xl shadow-dark/10 transition-shadow duration-300 ease-in-out">
                      <Undraw3 state={state} />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-40 h-40 max-w-xs overflow-hidden rounded-lg box hover:shadow-xl shadow-dark/10 transition-shadow duration-300 ease-in-out">
                      <Undraw1 state={state} />
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="w-40 h-40 max-w-xs overflow-hidden rounded-lg box hover:shadow-xl shadow-dark/10 transition-shadow duration-300 ease-in-out">
                      <Undraw2 state={state} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nature */}
          <div className="flex flex-col mt-8">
            <div className="flex flex-col mb-4">
              <p className="header-sm">Collection</p>
              <h3>Nature</h3>
              <p>
                This incredible collection by <a>@idonthaveaname</a> pays
                tribute to the world around us.
              </p>
            </div>
            <article className="grid grid-cols-5 gap-5">
              <div className="box justify-center">
                <div className="flex items-center w-full h-32">
                  <Undraw1 state={state} />
                </div>
              </div>

              <div className="box justify-center">
                <div className="flex items-center w-full h-32">
                  <Undraw2 state={state} />
                </div>
              </div>

              <div className="box justify-center">
                <div className="flex items-center w-full h-32">
                  <Undraw3 state={state} />
                </div>
              </div>

              <div className="box justify-center">
                <div className="flex items-center w-full h-32">
                  <Undraw2 state={state} />
                </div>
              </div>

              <div className="box justify-center">
                <div className="flex items-center w-full h-32">
                  <Undraw1 state={state} />
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

Illustrations.getLayout = function getLayout(page) {
  return <AsideLayout>{page}</AsideLayout>;
};
