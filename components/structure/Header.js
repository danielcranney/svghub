import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SiteLogo } from "../site-logo/SiteLogo";
import { useTheme } from "next-themes";

export const Header = ({ state }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    if (currentTheme === "dark") {
      return (
        <button
          aria-label="Dark mode toggle"
          style={{
            background: state.dark,
          }}
          className="btn-md text-darkest dark:text-lightest w-12 group p-0"
          onClick={() => {
            setTheme(currentTheme == "dark" ? "light" : "dark");
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          aria-label="Dark mode toggle"
          style={{
            background: state.lightest,
          }}
          className="btn-md text-darkest dark:text-lightest w-12 group p-0"
          onClick={() => {
            setTheme(currentTheme == "dark" ? "light" : "dark");
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      );
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <header>
      <div className="inner-container">
        <SiteLogo state={state} />

        {/* <nav>
          <Link href="/">Home</Link>
          <Link href="/illustrations">Browse</Link>
          <Link href="/icons">Icons</Link>
          <Link href="/artists">Artists</Link>
        </nav> */}

        <div className="button-container">
          <a
            href="http://www.twitter.com/danielcranney"
            rel="noreferrer"
            className="btn-md shadow-lg shadow-dark/5 text-darkest/80 gap-x-1"
            style={{ background: state.brand }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 icon icon-tabler icon-tabler-brand-twitter"
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
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
            <span className="hidden md:flex">Follow</span>
          </a>

          {renderThemeChanger()}
        </div>
      </div>
    </header>
  );
};
