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
import { ArtistCard } from "../components/ArtistCard";

const artists = [
  {
    fullName: "Sneha Kadaba",
    role: "Illustrator",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequuntur voluptatibus officiis placeat.",
    profilePic: "/artists/sneha-kadaba.png",
    portfolioLink: "http://www.snehakadaba.com",
    twitterLink: "http://www.twitter.com/sneha",
    behanceLink: "",
    instagramLink: "",
  },
  {
    fullName: "Daniel Sulzberg",
    role: "Illustrator",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequuntur voluptatibus officiis placeat.",
    profilePic: "/artists/daniel-sulzberg.png",
    portfolioLink: "http://www.danielsulzberg.com",
    twitterLink: "https://twitter.com/Danvillageart",
    behanceLink: "",
    instagramLink: "",
  },
  {
    fullName: "Kamo Frank",
    role: "Illustrator",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequuntur voluptatibus officiis placeat.",
    profilePic: "/artists/kamo-frank.png",
    portfolioLink: "http://www.kamofrank.com",
    twitterLink: "https://twitter.com/Danvillageart",
    behanceLink: "",
    instagramLink: "",
  },
  {
    fullName: "Alissa Thaler",
    role: "Illustrator",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequuntur voluptatibus officiis placeat.",
    profilePic: "/artists/alissa-thaler.png",
    portfolioLink: "http://www.alissathaler.com",
    twitterLink: "https://twitter.com/Danvillageart",
    behanceLink: "",
    instagramLink: "",
  },
];

export default function Artists() {
  return (
    <div id="site-wrapper">
      <div id="gradient-bg"></div>
      <Head>
        <title>SVGHub</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main id="artists-page">
        <div className="inner-container">
          {/* <section className="filter-bar flex bg-brand rounded-2xl p-6">
            <input type="text" className="" placeholder="Search artists" />
          </section> */}

          <p className="header-sm">Our Collaborators</p>
          <h1>Artists</h1>

          <section className="grid grid-cols-4 gap-5 mt-10">
            {artists.map((artist) => {
              return (
                <>
                  <ArtistCard
                    fullName={artist.fullName}
                    role={artist.role}
                    description={artist.description}
                    profilePic={artist.profilePic}
                    portfolioLink={artist.portfolioLink}
                  />
                </>
              );
            })}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
