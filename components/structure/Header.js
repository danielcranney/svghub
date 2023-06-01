import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SiteLogo } from "../site-logo/SiteLogo";
import { useTheme } from "next-themes";

export const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    if (currentTheme === "dark") {
      return (
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
      );
    } else {
      return (
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
        <SiteLogo />

        <nav>
          <Link href="/">Home</Link>
          <Link href="/illustrations">Browse</Link>
          {/* <Link href="/icons">Icons</Link>
          <Link href="/artists">Artists</Link> */}
        </nav>

        <div className="button-container">
          <button className="btn-md btn-brand">Become an Artist</button>
          <button
            aria-label="Dark mode toggle"
            className="btn-md btn-white w-12 group p-0"
            onClick={() => {
              setTheme(currentTheme == "dark" ? "light" : "dark");
            }}
          >
            {renderThemeChanger()}
          </button>
        </div>
      </div>
    </header>
  );
};
