import React from "react";
import { SiteLogo } from "../site-logo/SiteLogo";

export const Footer = () => {
  return (
    <footer className="w-full flex py-8 items-center bg-white z-10">
      <div className="inner-container">
        <SiteLogo />
        <p className="ml-auto">&copy; 2022 SVGHub.app</p>
      </div>
    </footer>
  );
};
