import React from "react";
import { SiteLogo } from "../site-logo/SiteLogo";

export const Footer = ({ state }) => {
  return (
    <footer className="w-full flex py-6 items-center z-10">
      <div className="inner-container">
        <div className="flex flex-col items-center w-full justify-center">
          <p>&copy; {new Date().getFullYear()} SVG Hub</p>
          <a href="http://www.danielcranney.com">Built by Daniel Cranney</a>
        </div>
      </div>
    </footer>
  );
};
