import React from "react";
import Link from "next/link";
import { SiteLogo } from "../site-logo/SiteLogo";

export const Header = () => {
  return (
    <header>
      <div className="inner-container">
        <SiteLogo />

        <nav>
          <Link href="/">Home</Link>
          <Link href="/illustrations">Illustrations</Link>
          <a>Icons</a>
        </nav>

        <div className="button-container">
          <button className="btn-md btn-brand">Become a Creator</button>
          <button className="btn-md btn-white w-12">D</button>
        </div>
      </div>
    </header>
  );
};
