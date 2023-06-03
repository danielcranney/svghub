import React from "react";
import { SiteLogo } from "../site-logo/SiteLogo";

export const Footer = ({ state }) => {
  return (
    <footer className="w-full flex py-6 items-center z-10">
      <div className="inner-container">
        <div className="flex flex-col items-center w-full justify-center">
          <p className="text-dark dark:text-lightest">
            &copy; {new Date().getFullYear()} SVG Hub
          </p>

          <a
            href="http://www.danielcranney.com"
            class="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 text-dark dark:text-lightest"
          >
            Built by Daniel Cranney
          </a>
        </div>
      </div>
    </footer>
  );
};
