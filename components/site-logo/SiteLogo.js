import React from "react";
import Link from "next/link";
import { Emblem } from "./Emblem";

export const SiteLogo = () => {
  return (
    <div className="logo-container">
      <Link href="/">
        <Emblem />
        <p>
          svg<span className="font-normal">hub</span>
        </p>
      </Link>
    </div>
  );
};
